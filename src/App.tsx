/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { PortfolioView } from './views/PortfolioView';
import { TeamView } from './views/TeamView';
import { TestimonialsView } from './views/TestimonialsView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView />;
      case 'portfolio':
        return <PortfolioView />;
      case 'team':
        return <TeamView />;
      case 'testimonials':
        return <TestimonialsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-dark overflow-x-hidden selection:bg-brand-primary/10 selection:text-brand-primary" id="app-root-container">
      {/* Sticky Navigation Bar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Dynamic Workspace with page transition effects */}
      <main className="flex-grow pt-28 md:pt-24" id="primary-main-workspace">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate footer structure */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
