/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-gray-100 py-2 md:py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-100/50 py-3 md:py-4'
        }`}
        id="main-app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16" id="header-main-row">
            
            {/* Left side: Hamburger button + Logo */}
            <div className="flex items-center space-x-3" id="header-left-group">
              {/* "Three-line" Hamburger Menu Button - Always visible to collect pages on side */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="flex p-2 -ml-2 rounded-xl text-brand-neutral hover:text-brand-primary hover:bg-brand-primary-light/50 transition-colors duration-200 cursor-pointer"
                aria-label="Open navigation menu"
                id="sidebar-hamburger-toggle"
              >
                <Menu size={24} className="stroke-[2.5]" />
              </button>

              {/* Logo Section */}
              <div
                className="flex items-center cursor-pointer space-x-2 sm:space-x-3 shrink-0"
                onClick={() => handleNavClick('home')}
                id="nav-logo-container"
              >
                <img
                  src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
                  alt="Siltawi Digital Marketing Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/siltawi_logo.svg';
                  }}
                />
                <span className="hidden xs:block font-display font-bold text-base sm:text-lg tracking-tight text-brand-dark">
                  Siltawi<span className="text-brand-secondary">.</span>
                </span>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="flex items-center" id="header-cta-container">
              <button
                onClick={() => handleNavClick('contact')}
                id="header-cta-button"
                className="px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full font-sans font-bold text-xs sm:text-sm bg-brand-primary text-white hover:bg-brand-secondary transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap animate-pulse-subtle"
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Left Navigation Drawer for Mobile/Phone */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop Dim overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-brand-dark/40 backdrop-blur-sm"
              id="drawer-backdrop-overlay"
            />

            {/* Slide-out left panel content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 left-0 w-[280px] sm:w-[320px] max-w-[85vw] z-50 bg-white shadow-2xl flex flex-col border-r border-gray-100"
              id="drawer-sliding-panel"
            >
              {/* Drawer Header with Logo & Close Trigger button */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50" id="drawer-header-pane">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
                    alt="Siltawi Digital Marketing Logo"
                    className="h-8 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-display font-black text-base tracking-tight text-brand-dark">
                    Siltawi<span className="text-brand-secondary">.</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 rounded-xl text-brand-neutral hover:text-brand-primary hover:bg-brand-primary-light/50 transition-colors cursor-pointer"
                  aria-label="Close menu"
                  id="drawer-close-btn"
                >
                  <X size={20} className="stroke-[2.5]" />
                </button>
              </div>

              {/* Stacked Navigation Pages */}
              <div className="flex-grow overflow-y-auto px-3 py-6 space-y-1.5" id="drawer-nav-stack">
                <div className="px-3 mb-2">
                  <p className="text-[10px] uppercase tracking-wider font-mono font-bold text-brand-neutral/65">
                    Siltawi Framework Pages
                  </p>
                </div>
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      id={`drawer-item-${item.id}`}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-sans text-sm font-bold transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-brand-primary text-white shadow-md'
                          : 'text-brand-neutral hover:bg-brand-primary-light/40 hover:text-brand-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      ) : (
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 translate-x-1 transition-all" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Drawer Footer with action buttons or details */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-4" id="drawer-footer-pane">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-medium text-brand-neutral">CALL US TODAY</div>
                  <div className="text-xs font-bold text-brand-dark">+251 900 123 456</div>
                </div>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 px-4 rounded-xl font-sans font-bold text-xs bg-brand-primary text-white hover:bg-brand-secondary transition-all text-center flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                  id="drawer-cta-action"
                >
                  <span>Request Proposal</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};


