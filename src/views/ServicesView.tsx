/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { servicesData } from '../data';
import { LucideIcon } from '../components/LucideIcon';

export const ServicesView: React.FC = () => {
  return (
    <div id="services-view" className="space-y-24 py-12 pb-16">
      {/* 1. View Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pt-10" id="services-header-block">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
          Our Services
        </h1>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        <p className="font-sans text-brand-neutral text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          We construct tailored digital execution frameworks designed to conquer regional markets and elevate target operational efficiency.
        </p>
      </section>

      {/* 2. Structured Services Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20" id="services-directory">
        {servicesData.map((category, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-gray-100 pb-16 last:border-0 last:pb-0`}
              id={`service-block-${category.id}`}
            >
              {/* Pillar Pitch details */}
              <div
                className={`lg:col-span-5 space-y-6 text-left ${
                  !isEven ? 'lg:order-last' : ''
                }`}
                id={`service-pitch-${category.id}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center shadow-md">
                  <LucideIcon name={category.icon} size={26} />
                </div>
                <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">
                  {category.title}
                </h2>
                <p className="font-sans text-sm sm:text-base text-brand-neutral leading-relaxed">
                  {category.description}
                </p>
                
                {/* Decorative sidebar visual */}
                <div className="p-4 bg-brand-primary-light/30 rounded-xl border border-brand-primary/5 text-xs text-brand-primary leading-tight font-sans font-medium flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand-secondary animate-ping" />
                  <span>Custom quotes available for specific Addis-based projects.</span>
                </div>
              </div>

              {/* Sub-services Grid detailing each item */}
              <div
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
                id={`service-items-grid-${category.id}`}
              >
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    whileHover={{ scale: 1.015, translateY: -2 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-brand-secondary-light text-brand-secondary flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <h4 className="font-display font-bold text-sm text-brand-dark">
                          {item.name}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. Pre-sales FAQ / Strategic engagement */}
      <section className="bg-[#FAFDFD] py-16 border-t border-b border-gray-100" id="services-pro-audit">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-dark">
            Need a Fully Customized Service Package?
          </h3>
          <p className="font-sans text-brand-neutral text-sm max-w-2xl mx-auto leading-relaxed">
            Our teams operate in integrated squads. Many clients combine a **Website Development** build with comprehensive **Content Creation** and **Facebook & Instagram Ads** management to secure synchronized market entry. Let's design your blueprint together.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                // trigger button click via navigation or standard scrolling
                const contactTab = document.getElementById('nav-item-contact');
                if (contactTab) contactTab.click();
              }}
              className="px-6 py-3 rounded-full font-sans font-bold text-xs text-white bg-brand-primary hover:bg-brand-secondary transition-colors duration-200"
            >
              Discuss Custom Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
