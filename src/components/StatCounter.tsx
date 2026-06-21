/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number; // duration in ms
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Setting up intersection observer to only trigger when the counter enters viewport!
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = value;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalFrames = Math.min(Math.ceil(duration / 16), 120); // roughly 60fps
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      // easeOutExpo progress curve for more natural slowdown towards target
      const progress = 1 - Math.pow(2, -10 * (currentFrame / totalFrames));
      const nextCount = Math.round(start + (end - start) * progress);

      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(nextCount);
      }
    }, duration / totalFrames);

    return () => clearInterval(counter);
  }, [value, duration, hasAnimated]);

  return (
    <span ref={counterRef} className="font-display font-bold tracking-tight">
      {count}
      {suffix}
    </span>
  );
};
