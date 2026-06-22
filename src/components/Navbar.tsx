/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm py-2 sm:py-2.5'
          : 'bg-white/70 backdrop-blur-md border-b border-gray-100/40 py-3 sm:py-4'
      }`}
      id="main-app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14" id="header-main-row">
          
          {/* Logo Section & Inline Clickable Navigation Links immediately next to it */}
          <div className="flex items-center flex-grow overflow-hidden" id="header-left-group">
            {/* Logo container */}
            <div
              className="flex items-center cursor-pointer shrink-0 mr-3 xs:mr-4 sm:mr-6"
              onClick={() => handleNavClick('home')}
              id="nav-logo-container"
            >
              <img
                src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
                alt="Siltawi Logo"
                className="h-8 sm:h-10 w-auto object-contain hover:opacity-90 transition-opacity"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/siltawi_logo.svg';
                }}
              />
            </div>

            {/* Always visible inline navigation next to the logo */}
            <nav 
              className="flex items-center space-x-1 overflow-x-auto whitespace-nowrap scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1 pr-2" 
              id="header-inline-navigation"
            >
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    id={`nav-item-${item.id}`}
                    className={`px-2.5 py-1.5 rounded-full font-sans font-bold text-[10px] xs:text-xs tracking-tight transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive 
                        ? 'bg-brand-primary text-white shadow-sm font-extrabold' 
                        : 'text-brand-neutral hover:text-brand-primary hover:bg-brand-primary-light/40'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center shrink-0 ml-2" id="header-cta-container">
            <button
              onClick={() => handleNavClick('contact')}
              id="header-cta-button"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-sans font-bold text-[10px] sm:text-xs bg-brand-primary text-white hover:bg-brand-secondary transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              Get Started
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};


