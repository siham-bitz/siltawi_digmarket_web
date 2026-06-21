/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { teamData } from '../data';

export const TeamView: React.FC = () => {
  return (
    <div id="team-view" className="space-y-16 py-12 pb-16">
      {/* 1. Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pt-10" id="team-header">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
          Meet Our Team
        </h1>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        <p className="font-sans text-brand-neutral text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          We are a cohesive team of performance buyer strategists, creative designers, and developers base in Addis Ababa, engineered to deploy results.
        </p>
      </section>

      {/* 2. Team Cards Responsive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="team-cards-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              id={`team-card-${member.id}`}
            >
              {/* Photo Area with expanding scale and hover overlay */}
              <div className="relative aspect-square w-full bg-gradient-to-br from-brand-primary-light to-brand-primary/10 flex items-center justify-center overflow-hidden">
                <div className="text-brand-primary/40 font-display font-black text-6xl sm:text-7xl select-none uppercase tracking-tighter">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                  {member.role}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-brand-secondary">
                    {member.position}
                  </div>
                  <h3 className="font-display font-medium text-xl text-brand-dark">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-neutral leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social links handles row */}
                <div className="flex items-center space-x-3 pt-3 border-t border-gray-50" id={`team-socials-${member.id}`}>
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-50 hover:bg-brand-primary hover:text-white flex items-center justify-center text-brand-neutral transition-all duration-200 cursor-pointer"
                      aria-label={`${member.name} LinkedIn Profile Link`}
                    >
                      <Linkedin size={14} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-50 hover:bg-brand-primary hover:text-white flex items-center justify-center text-brand-neutral transition-all duration-200 cursor-pointer"
                      aria-label={`${member.name} Twitter Profile Link`}
                    >
                      <Twitter size={14} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-50 hover:bg-brand-secondary hover:text-white flex items-center justify-center text-brand-neutral transition-all duration-200 cursor-pointer"
                      aria-label={`${member.name} Instagram Profile Link`}
                    >
                      <Instagram size={14} />
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-gray-50 hover:bg-brand-primary hover:text-white flex items-center justify-center text-brand-neutral transition-all duration-200 cursor-pointer"
                      aria-label={`${member.name} Facebook Profile Link`}
                    >
                      <Facebook size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Professional consult section */}
      <section className="bg-brand-primary-light/30 border-y border-brand-primary/5 py-12" id="team-pro-audit">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="font-display font-extrabold text-xl text-brand-dark">
            Do You Want to Collaborate with our Engineers?
          </h3>
          <p className="font-sans text-brand-neutral text-sm leading-relaxed max-w-xl mx-auto">
            Book an absolute free 30-minute workspace video conference. Get direct, non-technical feedback on your current digital assets from our lead developers.
          </p>
        </div>
      </section>
    </div>
  );
};
