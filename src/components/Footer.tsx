/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { PageId } from '../types';
import { companyDetails } from '../data';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleQuickLink = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFDFD] border-t border-gray-100 mt-20" id="app-footer">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6" id="footer-brand-section">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleQuickLink('home')}>
              <img
                src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
                alt="Siltawi Logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/siltawi_logo.svg';
                }}
              />
              <span className="font-display font-bold text-xl tracking-tight text-brand-dark">
                Siltawi<span className="text-brand-secondary">.</span>
              </span>
            </div>
            <p className="font-sans text-sm text-brand-neutral leading-relaxed">
              {companyDetails.description}
            </p>
            {/* Social Media Row */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-brand-neutral hover:text-brand-secondary hover:border-brand-secondary hover:-translate-y-1 transition-all duration-350 cursor-pointer"
                aria-label="Facebook Link"
                id="footer-social-facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-brand-neutral hover:text-brand-secondary hover:border-brand-secondary hover:-translate-y-1 transition-all duration-350 cursor-pointer"
                aria-label="Instagram Link"
                id="footer-social-instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-brand-neutral hover:text-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all duration-350 cursor-pointer"
                aria-label="LinkedIn Link"
                id="footer-social-linkedin"
              >
                <Linkedin size={18} />
              </a>
              {/* Custom TikTok path representation */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-brand-neutral hover:text-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all duration-350 cursor-pointer"
                aria-label="TikTok Link"
                id="footer-social-tiktok"
              >
                <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.05.99 2.47 1.53 3.93 1.54V9.6c-1.78-.05-3.51-.72-4.88-1.9-.12-.1-.23-.23-.34-.34v7.19c-.06 2.06-.92 4.05-2.42 5.42C12.87 21.32 10.5 22 8.35 21.6c-2.8-.46-5.18-2.65-5.91-5.41C1.63 13.06 2.5 9.77 4.7 7.58c1.78-1.72 4.39-2.46 6.84-1.92v4.09c-1.3-.43-2.77-.13-3.78.78-.9.76-1.28 1.95-1.07 3.09.2 1.15.99 2.09 2.08 2.45 1.59.55 3.41-.21 4.03-1.73.19-.48.25-.99.24-1.5V.02h-.53z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-brand-neutral hover:text-brand-secondary hover:border-brand-secondary hover:-translate-y-1 transition-all duration-350 cursor-pointer"
                aria-label="YouTube Link"
                id="footer-social-youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-6" id="footer-links-section">
            <h4 className="font-display font-semibold text-base text-brand-dark uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <button
                  onClick={() => handleQuickLink('home')}
                  className="text-brand-neutral hover:text-brand-primary hover:translate-x-1 transition-all duration-200 text-left w-full cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('about')}
                  className="text-brand-neutral hover:text-brand-primary hover:translate-x-1 transition-all duration-200 text-left w-full cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('services')}
                  className="text-brand-neutral hover:text-brand-primary hover:translate-x-1 transition-all duration-200 text-left w-full cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('portfolio')}
                  className="text-brand-neutral hover:text-brand-primary hover:translate-x-1 transition-all duration-200 text-left w-full cursor-pointer"
                >
                  Featured Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('team')}
                  className="text-brand-neutral hover:text-brand-primary hover:translate-x-1 transition-all duration-200 text-left w-full cursor-pointer"
                >
                  Meet The Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('testimonials')}
                  className="text-brand-neutral hover:text-brand-primary hover:translate-x-1 transition-all duration-200 text-left w-full cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('contact')}
                  className="text-brand-neutral hover:text-brand-primary hover:translate-x-1 transition-all duration-200 text-left w-full cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6" id="footer-contact-section">
            <h4 className="font-display font-semibold text-base text-brand-dark uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-primary shrink-0 mt-0.5" size={18} />
                <span className="text-brand-neutral">{companyDetails.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-secondary shrink-0" size={18} />
                <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="text-brand-neutral hover:text-brand-secondary transition-colors duration-200">
                  {companyDetails.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-primary shrink-0" size={18} />
                <a href={`mailto:${companyDetails.email}`} className="text-brand-neutral hover:text-brand-primary transition-colors duration-200">
                  {companyDetails.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <ExternalLink className="text-brand-neutral shrink-0" size={16} />
                <a
                  href={`http://${companyDetails.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-neutral hover:text-brand-primary transition-colors duration-200"
                >
                  {companyDetails.website}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter or Map Quicklink */}
          <div className="space-y-6" id="footer-business-hours-section">
            <h4 className="font-display font-semibold text-base text-brand-dark uppercase tracking-wider">
              Business Hours
            </h4>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="font-medium text-brand-dark font-sans">Mon - Fri:</span>
                <span className="text-brand-neutral font-mono">8:30 AM - 5:30 PM</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2">
                <span className="font-medium text-brand-dark font-sans">Saturday:</span>
                <span className="text-brand-neutral font-mono">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-xs text-brand-secondary">
                <span className="font-medium font-sans">Sunday:</span>
                <span className="font-semibold uppercase font-display">Closed</span>
              </div>
            </div>
            <p className="text-xs text-brand-neutral leading-relaxed pl-1">
              *Local Ethiopian Time (EAT - UTC+3) apply to all consultations.
            </p>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm font-sans text-brand-neutral">
          <p id="copyright-text">
            &copy; {new Date().getFullYear()} {companyDetails.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs">
            <button className="hover:text-brand-secondary transition-colors duration-200 cursor-pointer">Privacy Policy</button>
            <button className="hover:text-brand-primary transition-colors duration-200 cursor-pointer">Terms of Service</button>
            <button
              onClick={handleScrollTop}
              className="flex items-center space-x-1.5 p-2 rounded-lg bg-brand-primary-light text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 cursor-pointer"
              title="Scroll to top of page"
              id="footer-scroll-top-btn"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
