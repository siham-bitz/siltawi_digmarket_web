/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, Users, Award, HelpCircle } from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data';

export const PortfolioView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Website Development',
    'Branding Projects',
    'Social Media Campaigns',
    'Marketing Campaigns',
    'UI/UX Projects',
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div id="portfolio-view" className="space-y-16 py-12 pb-16">
      {/* 1. Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pt-10" id="portfolio-header">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
          Our Portfolio
        </h1>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        <p className="font-sans text-brand-neutral text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Explore the projects we have mapped, deployed, and scaled. We back up our layout choices with verifiable customer conversions.
        </p>
      </section>

      {/* 2. Interactive Navigation Tabs (Filtering) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio-filter-section">
        <div className="flex flex-wrap justify-center gap-2 border-b border-gray-150 pb-4">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                id={`cat-tab-${category.replace(/\s+/g, '-')}`}
                className={`relative px-4 py-2.5 rounded-full font-sans font-medium text-xs sm:text-sm cursor-pointer transition-colors duration-200 outline-none ${
                  isActive
                    ? 'text-white bg-brand-primary'
                    : 'text-brand-neutral hover:bg-gray-50 hover:text-brand-primary'
                }`}
              >
                <span>{category}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Portfolio Grid Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio-grid-area">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid-container"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                id={`project-card-${project.id}`}
              >
                <div className="relative aspect-[4/3] w-full bg-gray-50 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category label */}
                  <div className="absolute top-4 left-4 bg-white shadow-sm border border-gray-50 text-brand-dark text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {project.category}
                  </div>

                  {/* Dynamic Metrics Hover Badging */}
                  {project.metrics && (
                    <div className="absolute bottom-4 right-4 bg-brand-primary text-white font-semibold font-mono text-[10px] py-1 px-2.5 rounded-lg">
                      {project.metrics}
                    </div>
                  )}

                  {/* Hover Overlay Visual Details */}
                  <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-white text-xs font-sans font-bold text-brand-primary shadow-md flex items-center space-x-1.5 hover:scale-105 transition-transform duration-200">
                      <span>View Case Details</span>
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>

                {/* Grid text */}
                <div className="p-6 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brand-neutral mb-1.5">
                      Client: {project.client}
                    </div>
                    <h3 className="font-display font-medium text-lg text-brand-dark mb-2.5 line-clamp-1 group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-neutral leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-gray-100">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-55 text-brand-neutral text-[9px] px-2 py-0.5 rounded font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. Focus Detail Modal Overlay (Bespoke Portal) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8"
            id="portfolio-case-modal"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col"
              id="portfolio-modal-box"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full bg-gray-50">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Close Button Top Right of Banner */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-brand-dark/70 hover:bg-brand-dark rounded-full text-white cursor-pointer hover:scale-105 transition-all duration-200"
                  aria-label="Close modal dialog"
                  id="project-modal-close-btn"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {selectedProject.category}
                </div>
              </div>

              {/* Text Narrative */}
              <div className="p-6 sm:p-8 space-y-6 text-left overflow-y-auto">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-brand-neutral font-medium">
                    <span className="flex items-center space-x-1">
                      <Users size={14} className="text-brand-primary" />
                      <span>{selectedProject.client}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={14} className="text-brand-secondary" />
                      <span>Year {selectedProject.year}</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wide mb-2 font-display">
                    Project Summary
                  </h4>
                  <p className="font-sans text-sm text-brand-neutral leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.metrics && (
                  <div className="p-4 bg-brand-secondary-light rounded-2xl border border-brand-secondary/5 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-secondary text-white flex items-center justify-center shrink-0">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-brand-secondary uppercase">Impact Metric Metric</div>
                      <div className="text-sm font-bold text-brand-dark">{selectedProject.metrics}</div>
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-100 pt-4 space-y-2.5">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wide font-display">
                    Technologies / Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-brand-primary-light text-brand-primary font-mono text-xs px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-full font-sans font-bold text-xs bg-white border border-gray-200 text-brand-neutral hover:text-brand-dark hover:border-brand-dark cursor-pointer transition-colors duration-200"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
