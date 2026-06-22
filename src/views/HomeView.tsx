/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { PageId } from '../types';
import { companyDetails, statsData, whyChooseSiltawi, servicesData, projectsData, testimonialsData } from '../data';
import { StatCounter } from '../components/StatCounter';
import { LucideIcon } from '../components/LucideIcon';
import { CampaignPipeline } from '../components/CampaignPipeline';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  // Take first 3 services and 3 projects for preview
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = projectsData.slice(0, 3);
  const latestTestimonial = testimonialsData[1]; // Saron Abera

  return (
    <div id="home-view" className="space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24" id="hero-section">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#872675_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-primary-light rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand-secondary-light rounded-full blur-3xl opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6 text-left"
              id="hero-text-block"
            >
              <div className="inline-flex items-center space-x-2 bg-brand-primary-light px-3 py-1.5 rounded-full border border-brand-primary/10">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-xs font-sans font-bold text-brand-primary uppercase tracking-wider">
                  Established in Addis Ababa, 2023
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] tracking-tight">
                Empower Your Brand with <span className="text-brand-primary">Strategic</span> Digital Growth.
              </h1>

              <p className="font-sans text-brand-neutral text-base sm:text-lg leading-relaxed max-w-xl">
                We are <span className="font-semibold text-brand-dark">Siltawi Digital Marketing</span>—Ethiopia's premier creative and digital performance agency. We engineer custom client-centric solutions that scale user engagement and double conversion metrics.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 rounded-full font-sans font-bold text-center text-white bg-brand-primary hover:bg-brand-secondary transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer group"
                  id="hero-primary-cta"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="px-8 py-4 rounded-full font-sans font-bold text-center text-brand-dark bg-white border-2 border-gray-100 hover:border-brand-primary hover:text-brand-primary transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  id="hero-secondary-cta"
                >
                  <span>View Portfolio</span>
                </button>
              </div>
            </motion.div>

            {/* Illustration / Image side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative flex justify-center lg:justify-end"
              id="hero-graphics"
            >
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm z-10 px-4 py-2 rounded-xl shadow-md border border-gray-100 flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-brand-secondary" />
                  <span className="text-xs font-mono font-bold text-brand-dark">Creative Marketing</span>
                </div>
                
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Marketing Agency Ethiopia Workspace"
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating statistics mockup widget */}
                <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center space-x-3 hidden sm:flex">
                  <div className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center text-brand-primary">
                    <LucideIcon name="TrendingUp" size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-brand-neutral">ROI Increase</div>
                    <div className="text-lg font-bold text-brand-dark">+200% average</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Statistics Section (with animated counters) */}
      <section className="bg-brand-primary-light/50 border-y border-brand-primary/5 py-12" id="statistics-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {statsData.map((stat, idx) => (
              <div key={idx} className="space-y-2 p-4" id={`stat-box-${idx}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-primary">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-brand-neutral uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Siltawi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="why-choose-us-section">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold leading-normal text-brand-secondary uppercase tracking-widest font-sans">
            Guaranteed Performance
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Why Successful Brands Partner with Siltawi
          </h3>
          <p className="font-sans text-brand-neutral text-base">
            We bridge deep analytical research with beautiful visual execution. We launch campaigns that actually drive phone calls, cart transactions, and bottom-line growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseSiltawi.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-primary/20 transition-all duration-300 flex flex-col text-left cursor-pointer group"
              id={`why-card-${idx}`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary-light flex items-center justify-center text-brand-primary mb-6 shrink-0 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <LucideIcon name={feature.icon} size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-dark mb-3 group-hover:text-brand-primary transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="font-sans text-sm text-brand-neutral leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Services Preview */}
      <section className="bg-brand-primary-light/20 py-20" id="services-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
            <div className="text-left max-w-2xl space-y-3">
              <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest font-sans">
                Our Capabilities
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                Digital Services Crafted to Scale Your Operations
              </h3>
            </div>
            <div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center space-x-2 text-brand-primary font-sans font-bold hover:text-brand-secondary transition-colors duration-200 cursor-pointer"
                id="services-all-btn"
              >
                <span>View All Custom Services</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                id={`service-preview-card-${cat.id}`}
                onClick={() => onNavigate('services')}
              >
                <div className="text-left space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary-light text-brand-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <LucideIcon name={cat.icon} size={26} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-display font-black text-xl text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                    {cat.title}
                  </h4>
                  <p className="font-sans text-sm text-brand-neutral leading-relaxed">
                    {cat.description}
                  </p>
                  <ul className="space-y-2.5 pt-4">
                    {cat.items.slice(0, 3).map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-2 text-xs font-sans text-brand-neutral group-hover:translate-x-1.5 transition-transform duration-300">
                        <Check size={14} className="text-brand-secondary shrink-0 mt-0.5" />
                        <span className="font-medium text-brand-dark">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 text-left">
                  <span
                    className="text-brand-primary font-sans font-bold text-xs inline-flex items-center space-x-1.5 group-hover:text-brand-secondary transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Interactive Campaign Pipeline with lines to left side */}
      <CampaignPipeline />

      {/* 5. Portfolio Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="portfolio-preview-section">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <div className="text-left max-w-2xl space-y-3">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest font-sans">
              Case Studies
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Our Latest Digital Marketing Success Stories
            </h3>
          </div>
          <div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center space-x-2 text-brand-primary font-sans font-bold hover:text-brand-secondary transition-colors duration-200 cursor-pointer"
              id="portfolio-all-btn"
            >
              <span>Explore Gallery Portfolio</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 30px -10px rgb(0 0 0 / 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-sm group transition-all duration-300 flex flex-col justify-between cursor-pointer"
              id={`portfolio-preview-card-${project.id}`}
              onClick={() => onNavigate('portfolio')}
            >
              <div className="relative aspect-[4/3] w-full bg-gray-50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm group-hover:bg-brand-secondary transition-colors duration-300">
                  {project.category}
                </div>
                {project.metrics && (
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm shadow border border-gray-100 text-brand-secondary font-bold text-xs py-1.5 px-3 rounded-xl font-mono group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                    {project.metrics}
                  </div>
                )}
              </div>
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-medium text-brand-neutral mb-1.5">{project.client}</div>
                  <h4 className="font-display font-bold text-lg text-brand-dark mb-3 line-clamp-1 group-hover:text-brand-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-neutral leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 mt-4">
                  {project.tags.slice(0, 3).map((tag, tagIdx) => (
                    <span key={tagIdx} className="bg-gray-55 text-brand-neutral px-2 py-1 rounded-md text-[10px] font-mono leading-none group-hover:bg-brand-primary-light group-hover:text-brand-primary transition-colors duration-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials Preview (Featuring Startup Founder Quote Card) */}
      <section className="bg-[#FAFDFD] py-16 border-y border-gray-50" id="testimonials-preview-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
          <div className="text-6xl text-brand-primary opacity-20 absolute -top-4 left-4 sm:left-12 font-serif select-none">
            “
          </div>
          <div className="space-y-6 pt-6 z-15 relative">
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <LucideIcon key={i} name="Star" className="text-brand-accent fill-current shrink-0" size={16} />
              ))}
            </div>
            <blockquote className="font-display font-medium text-lg sm:text-xl text-brand-dark leading-relaxed italic">
              "{latestTestimonial.quote}"
            </blockquote>
             <div className="flex items-center justify-center space-x-3 pt-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 flex items-center justify-center border border-gray-100 shrink-0 font-display font-black text-brand-primary text-sm select-none uppercase shadow-inner">
                {latestTestimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-left">
                <div className="font-sans font-bold text-sm text-brand-dark">{latestTestimonial.author}</div>
                <div className="font-sans text-xs text-brand-neutral">
                  {latestTestimonial.role}, <span className="text-brand-secondary font-semibold">{latestTestimonial.company}</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('testimonials')}
                className="text-brand-primary text-xs font-sans font-bold hover:text-brand-secondary cursor-pointer"
              >
                Read All Local Customer Endorsements &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="cta-section">
        <div className="bg-brand-dark rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center text-white shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(#F05253_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(#872675_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Digital Visibility?
            </h3>
            <p className="font-sans text-gray-200 text-sm sm:text-base leading-relaxed">
              We offer a free, no-obligation performance audit and initial consultation. Let our Addis Ababa specialists review your target metrics, organic search ranks, and layout opportunities today.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full font-sans font-extrabold text-sm text-brand-dark bg-white hover:bg-brand-accent transition-all duration-300 shadow-md hover:scale-105 flex items-center space-x-2 cursor-pointer"
                id="cta-bottom"
              >
                <span>Book Your Free Digital Audit &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
