/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Eye, Award, TrendingUp, BookOpen } from 'lucide-react';
import { companyDetails, coreValues } from '../data';
import { LucideIcon } from '../components/LucideIcon';

export const AboutView: React.FC = () => {
  // Map icons manually to preserve absolute type-safety if we want to ensure zero layout errors
  return (
    <div id="about-view" className="space-y-24 py-12 pb-16">
      {/* 1. Page Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pt-10" id="about-header">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
          Who We Are
        </h1>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        <p className="font-sans text-brand-neutral text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          We are builders, digital architects, performance buyers, and storytellers assembled to deliver measurable, creative expansion for brands in East Africa.
        </p>
      </section>

      {/* 2. Company Story & Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-story">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Creative Imagery Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            id="story-image-block"
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Siltawi Digital Marketing team building"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
            </div>
            {/* Overlay detail accent */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 shadow-md p-6 rounded-2xl hidden sm:block text-left">
              <div className="text-xs font-mono text-brand-secondary font-bold">FOUNDED IN</div>
              <div className="text-2xl font-black font-display text-brand-dark">{companyDetails.yearFounded}</div>
              <div className="text-[10px] font-mono text-brand-neutral">Addis Ababa, Ethiopia</div>
            </div>
          </motion.div>

          {/* Narrative Right */}
          <div className="space-y-6 text-left" id="story-narrative-block">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-secondary font-sans">
              Our Journey Since 2023
            </h3>
            <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">
              Crafting Strategic Media Realities
            </h2>
            <p className="font-sans text-brand-neutral text-sm sm:text-base leading-relaxed">
              {companyDetails.history}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-brand-primary-light/40 p-4 rounded-xl border border-brand-primary/5">
                <div className="text-brand-primary font-display font-black text-2xl">Bespoke</div>
                <div className="text-brand-neutral font-sans text-xs">Visual Brand Identity</div>
              </div>
              <div className="bg-brand-secondary-light/40 p-4 rounded-xl border border-brand-secondary/5">
                <div className="text-brand-secondary font-display font-black text-2xl">Agile</div>
                <div className="text-brand-neutral font-sans text-xs">Development Framework</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Dual Cards */}
      <section className="bg-brand-primary-light/10 py-16 border-y border-brand-primary/5" id="mission-vision-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-left relative overflow-hidden"
              id="mission-card-block"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-primary/5 rounded-full" />
              <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white mb-6">
                <LucideIcon name="Sparkles" size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-dark mb-4">
                Our Mission
              </h3>
              <p className="font-sans text-sm text-brand-neutral leading-relaxed">
                {companyDetails.mission}
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-left relative overflow-hidden"
              id="vision-card-block"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-secondary/5 rounded-full" />
              <div className="w-12 h-12 rounded-xl bg-brand-secondary flex items-center justify-center text-white mb-6">
                <LucideIcon name="Eye" size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-dark mb-4">
                Our Vision
              </h3>
              <p className="font-sans text-sm text-brand-neutral leading-relaxed">
                {companyDetails.vision}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="core-values-section">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-secondary font-sans">
            Our Foundations
          </h3>
          <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">
            Six Guiding Principles We Live By
          </h2>
          <p className="font-sans text-sm text-brand-neutral">
            These values represent the standard of craftsmanship we deploy on every single campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group"
              id={`core-value-box-${idx}`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-350 shrink-0">
                <LucideIcon name={val.icon} size={22} />
              </div>
              <h4 className="font-display font-black text-lg text-brand-dark mb-3">
                {val.title}
              </h4>
              <p className="font-sans text-sm text-brand-neutral leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
