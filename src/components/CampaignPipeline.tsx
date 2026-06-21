/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Play, 
  CheckCircle2, 
  Layers, 
  Megaphone, 
  ArrowRight,
  Zap
} from 'lucide-react';

interface PipelineStep {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  metricsLabel?: string;
  metricsValue?: string;
  badge?: string;
}

interface CampaignTemplate {
  id: string;
  name: string;
  iconName: 'Ecom' | 'LeadGen' | 'LocalBrand';
  description: string;
  liveStats: {
    roasGoal: string;
    impressionsLive: string;
    activeChannels: string[];
    dailyClicks: string;
  };
  steps: PipelineStep[];
}

const templates: CampaignTemplate[] = [
  {
    id: 'ecom-growth',
    name: 'E-Commerce Scaling Pipeline',
    iconName: 'Ecom',
    description: 'Designed for retail & webstores aiming to scale direct purchases and boost average order value (AOV).',
    liveStats: {
      roasGoal: '4.5x target',
      impressionsLive: '124,500/day',
      activeChannels: ['Facebook Ads', 'Instagram Reels', 'Google Shopping'],
      dailyClicks: '3,840 clicks'
    },
    steps: [
      {
        phase: 'Phase 01',
        title: 'Pixel Audit & Conversion Funnel Mapping',
        description: 'Establish custom conversion tracking APIs, test standard checkout parameters, and map out cart abandonment recovery campaigns.',
        status: 'completed',
        metricsLabel: 'Pixel Events Verified',
        metricsValue: '18 active schemas',
        badge: 'Prerequisite Done'
      },
      {
        phase: 'Phase 02',
        title: 'High-Impact Multi-Format Creative Production',
        description: 'Design scrolling hooks, high-converting product showcase reels, and dynamic user-generated content (UGC) ad assets tailored for organic feeds.',
        status: 'completed',
        metricsLabel: 'Creative Variations Produced',
        metricsValue: '24 video & banner ads',
        badge: 'Creative Approved'
      },
      {
        phase: 'Phase 03',
        title: 'High-Scale Bid Setup & Audience Stacking (LIVE)',
        description: 'Launch campaigns under lifetime budgets with custom lookalikes based on purchase logs, targeting premium high-affinity buyers.',
        status: 'active',
        metricsLabel: 'Live Delivery Performance',
        metricsValue: '3.91x Average ROAS',
        badge: 'Scale Phase Active'
      },
      {
        phase: 'Phase 04',
        title: 'Systematic Budget Hydration & Ad Refresh',
        description: 'Daily budget scale rules based on performance windows. Implement weekly creative replacements to dodge audience ad fatigue.',
        status: 'upcoming',
        metricsLabel: 'Scale Potential Limit',
        metricsValue: 'Aiming for 12,000 orders',
        badge: 'Next Sprint'
      }
    ]
  },
  {
    id: 'b2b-lead',
    name: 'B2B Lead Acquisition Tunnel',
    iconName: 'LeadGen',
    description: 'High-intent LinkedIn & Google Search system constructed to book consistent qualified sales meetings with high LTV clients.',
    liveStats: {
      roasGoal: '5.2x baseline ROI',
      impressionsLive: '32,100/day',
      activeChannels: ['LinkedIn Campaign Manager', 'Google Search', 'Vimeo VSL'],
      dailyClicks: '620 clicks'
    },
    steps: [
      {
        phase: 'Phase 01',
        title: 'Ideal Client Persona (ICP) & Offer Refinement',
        description: 'Pinpoint precise company list targets in the Hub, model exact corporate buyer roles, and formulate high-leverage premium lead values.',
        status: 'completed',
        metricsLabel: 'Target Profiles Identified',
        metricsValue: '1,200 decision makers',
        badge: 'Setup Complete'
      },
      {
        phase: 'Phase 02',
        title: 'VSL & Dynamic Multi-Page Capture Funnels',
        description: 'Produce high-retention video sales letters (VSL), load optimized landing pages with 2.2-second load guarantees, and configure direct calendar schedulers.',
        status: 'completed',
        metricsLabel: 'Landing Page Load Speed',
        metricsValue: '96/100 Mobile Score',
        badge: 'Ready to Host'
      },
      {
        phase: 'Phase 03',
        title: 'Precision Targeting & Lead Sync Delivery (LIVE)',
        description: 'Targeted search phrases and professional job role filters. Direct real-time Webhook lead deliveries routed straight into client sales-CRM pipelines.',
        status: 'active',
        metricsLabel: 'Direct CRM Pipeline Delivery',
        metricsValue: '48 booked inquiries / week',
        badge: 'Running Live'
      },
      {
        phase: 'Phase 04',
        title: 'Conversion Audit & Lead Value Recalibration',
        description: 'Analyze inbound conversation quality metrics to continuously filter out low-intent segments and target only premium contracts.',
        status: 'upcoming',
        metricsLabel: 'Forecast Growth Multiplier',
        metricsValue: 'Aiming for 3.5x pipeline volume',
        badge: 'Future Optimization'
      }
    ]
  },
  {
    id: 'addis-market',
    name: 'Addis SME Omnichannel Awareness',
    iconName: 'LocalBrand',
    description: 'Optimized high-frequency visual campaigns engineered for local retail outlets, cafes, and service hubs across Addis Ababa.',
    liveStats: {
      roasGoal: '3.8x ROI average',
      impressionsLive: '185,000/day',
      activeChannels: ['Telegram Broadcast Ads', 'TikTok Videos', 'Google Pin Ads'],
      dailyClicks: '7,150 clicks'
    },
    steps: [
      {
        phase: 'Phase 01',
        title: 'Localized Amharic & English Video Storyboarding',
        description: 'Draft relatable local narrative outlines, plan fast-cut camera angles, and script clear call-to-actions pointing people to local stores.',
        status: 'completed',
        metricsLabel: 'Local Script Shells Approved',
        metricsValue: '5 story models ready',
        badge: 'Script Lock-in'
      },
      {
        phase: 'Phase 02',
        title: 'Micro-Creator Contracts & Video Production',
        description: 'Produce native vertical smartphone footage featuring friendly local food, fashion & service reviews capturing genuine local reactions.',
        status: 'completed',
        metricsLabel: 'Addis Creators Signed',
        metricsValue: '6 high-affinity creators',
        badge: 'Content Base Solid'
      },
      {
        phase: 'Phase 03',
        title: 'Geo-Targeted Content Spread (LIVE)',
        description: 'Deploy high-velocity local ads with a tight 5km radius around stores to maximize foot traffic and generate localized Google Maps pins.',
        status: 'active',
        metricsLabel: 'Addis Local Engagement Rate',
        metricsValue: '18.4% Like/Share metric',
        badge: 'Broadcasting Live'
      },
      {
        phase: 'Phase 04',
        title: 'Interactive Loyalty & Coupon Tracking Launch',
        description: 'Deploy unique localized digital codes to accurately attribute direct-from-social foot traffic, tracking direct-cash local purchases.',
        status: 'upcoming',
        metricsLabel: 'Projected Retail Footfall',
        metricsValue: '+150 store visits/day',
        badge: 'Next Week Launch'
      }
    ]
  }
];

export const CampaignPipeline: React.FC = () => {
  const [activeTemplateId, setActiveTemplateId] = useState<string>('ecom-growth');
  const activeTemplate = templates.find(t => t.id === activeTemplateId) || templates[0];

  // Simulated live counter to emphasize "Live" state for campaign monitoring
  const [secondsCounter, setSecondsCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsCounter(prev => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Extra helper to simulate fluctuating clicks/impressions live
  const getSimulatedCount = (baseVal: string) => {
    const numericStr = baseVal.replace(/[^0-9]/g, '');
    if (!numericStr) return baseVal;
    const num = parseInt(numericStr);
    const fluctuationPercent = (Math.sin(secondsCounter) * 0.02) + 1; // +/- 2%
    const currentNum = Math.round(num * fluctuationPercent);
    const unit = baseVal.replace(/[0-9,]/g, '');
    return `${currentNum.toLocaleString()}${unit}`;
  };

  const getTemplateIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ecom':
        return <Layers className="w-5 h-5 text-brand-primary" />;
      case 'LeadGen':
        return <Target className="w-5 h-5 text-brand-primary" />;
      case 'LocalBrand':
        return <Megaphone className="w-5 h-5 text-brand-primary" />;
      default:
        return <Activity className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <section 
      id="live-campaign-pipeline-container" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24 text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="pipeline-grid-layout">
        
        {/* Left Side: Layout Header & Template Nav Controls */}
        <div className="lg:col-span-5 space-y-6" id="pipeline-nav-controls">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-brand-primary-light/80 px-3/5 py-1.5 rounded-full border border-brand-primary/10">
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-ping" />
              <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest flex items-center space-x-1">
                <span>Real-Time Campaign Engine</span>
                <span className="opacity-60">|</span>
                <span className="text-brand-secondary">Pulse Live</span>
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Our Live <span className="text-brand-primary">Campaign</span> Execution Pipeline
            </h2>
            
            <p className="font-sans text-brand-neutral text-sm sm:text-base leading-relaxed">
              We do not guesswork. Click through our primary vertical strategies to monitor exactly how we structure step-by-step conversion tunnels, with execution lines clearly defined from day zero.
            </p>
          </div>

          {/* Interactive Template Selector Buttons (Top on Mobile / Stacked on Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 py-2" id="pipeline-selector-buttons">
            {templates.map((temp) => {
              const isSelected = activeTemplateId === temp.id;
              return (
                <button
                  key={temp.id}
                  onClick={() => setActiveTemplateId(temp.id)}
                  id={`pipeline-tab-btn-${temp.id}`}
                  className={`w-full p-4 rounded-2xl text-left border font-sans cursor-pointer transition-all duration-300 flex items-center space-x-4 ${
                    isSelected
                      ? 'bg-white border-brand-primary shadow-md ring-2 ring-brand-primary/5'
                      : 'bg-white border-gray-100 hover:border-brand-primary/30 hover:bg-gray-50/50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? 'bg-brand-primary-light text-brand-primary font-bold' : 'bg-gray-50 text-brand-neutral'
                  }`}>
                    {getTemplateIcon(temp.iconName)}
                  </div>
                  <div className="truncate">
                    <div className={`font-bold text-xs sm:text-sm ${isSelected ? 'text-brand-dark' : 'text-brand-neutral'}`}>
                      {temp.name}
                    </div>
                    <div className="text-[10px] text-brand-neutral uppercase font-mono tracking-widest mt-0.5">
                      {temp.steps.filter(s => s.status === 'completed').length} / {temp.steps.length} Steps Ready
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Real-Time Pulse Metric Widget */}
          <div className="bg-brand-dark text-white p-6 rounded-2xl shadow-xl space-y-4 relative overflow-hidden text-left" id="live-pulse-widget">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary rounded-full blur-2xl opacity-25" />
            <div className="flex justify-between items-center relative z-10">
              <span className="inline-flex items-center space-x-2 bg-brand-primary/20 text-brand-primary-light font-mono text-xs px-2.5 py-1 rounded-full border border-brand-primary/30">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                <span>Simulation Active</span>
              </span>
              <span className="text-[10px] font-mono text-gray-400">
                Updated {1 + (secondsCounter % 5)}s ago
              </span>
            </div>

            <h4 className="font-display font-semibold text-sm tracking-wide text-gray-200">
              Selected Campaign Stream Metrics:
            </h4>

            <div className="grid grid-cols-2 gap-4 relative z-10 pt-2 border-t border-white/10">
              <div>
                <div className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">Live Impressions</div>
                <div className="text-sm font-sans font-bold text-slate-100 mt-1">
                  {getSimulatedCount(activeTemplate.liveStats.impressionsLive)}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">Estimated Traffic</div>
                <div className="text-sm font-sans font-bold text-slate-100 mt-1">
                  {getSimulatedCount(activeTemplate.liveStats.dailyClicks)}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">Return Efficiency</div>
                <div className="text-sm font-sans font-bold text-brand-primary mt-1 flex items-center space-x-1">
                  <TrendingUp size={14} />
                  <span>{activeTemplate.liveStats.roasGoal}</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">Live Integrations</div>
                <div className="text-[11px] font-sans font-medium text-gray-300 mt-1 truncate">
                  {activeTemplate.liveStats.activeChannels[0]}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Step-by-step pipeline WITH LINES TO THE LEFT SIDE */}
        <div className="lg:col-span-7" id="pipeline-stepper-view">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTemplateId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-gray-50/50 p-4 sm:p-6 rounded-2xl border border-gray-100 text-left mb-6">
                <p className="font-sans text-xs sm:text-sm text-brand-neutral leading-relaxed">
                  <span className="font-bold text-brand-dark">Target Flow: </span>
                  {activeTemplate.description}
                </p>
              </div>

              {/* STICKY VERTICAL CONNECTOR TIMELINE - WITH LINES ALIGNED TO THE LEFT */}
              <div className="relative pl-6 sm:pl-10 text-left space-y-10" id="vertical-left-stepper-line">
                
                {/* Real vertical line stretching on the left edge */}
                <div className="absolute top-4 bottom-4 left-3.5 sm:left-[21px] w-0.5 bg-gradient-to-b from-brand-primary via-brand-primary-light/60 to-gray-200 pointer-events-none" />

                {activeTemplate.steps.map((step, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6 group"
                      id={`pipeline-step-${idx}`}
                    >
                      {/* Left Circular Indicator Node - strictly aligned over the line */}
                      <div className="absolute -left-6 sm:-left-10 top-1 z-10 flex items-center justify-center">
                        {step.status === 'completed' && (
                          <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-brand-primary border-4 border-white shadow-md flex items-center justify-center text-white scale-110">
                            <CheckCircle2 size={12} className="stroke-[3]" />
                          </div>
                        )}
                        {step.status === 'active' && (
                          <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-brand-secondary border-4 border-white shadow-md flex items-center justify-center text-white relative">
                            <span className="absolute inset-0 rounded-full bg-brand-secondary animate-ping opacity-75" />
                            <motion.div 
                              animate={{ scale: [1, 1.15, 1] }} 
                              transition={{ repeat: Infinity, duration: 1.8 }}
                              className="w-full h-full rounded-full bg-brand-secondary flex items-center justify-center text-[10px] font-bold"
                            >
                              <Play size={8} className="fill-current text-white stroke-[3] ml-0.5" />
                            </motion.div>
                          </div>
                        )}
                        {step.status === 'upcoming' && (
                          <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-gray-300 shadow-sm flex items-center justify-center text-gray-400">
                            <span className="w-2 h-2 rounded-full bg-gray-300" />
                          </div>
                        )}
                      </div>

                      {/* Right Side Content card containing structured layout */}
                      <div className={`w-full p-5 sm:p-6 rounded-2xl border transition-all duration-300 text-left ${
                        step.status === 'active'
                          ? 'bg-white border-brand-secondary shadow-md hover:shadow-lg'
                          : 'bg-white/80 border-gray-100 hover:border-gray-200 hover:bg-white'
                      }`}>
                        
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="font-mono font-bold text-xs uppercase tracking-widest text-brand-primary">
                            {step.phase}
                          </span>
                          
                          {step.badge && (
                            <span className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                              step.status === 'completed'
                                ? 'bg-brand-primary-light/70 text-brand-primary'
                                : step.status === 'active'
                                ? 'bg-brand-secondary-light/80 text-brand-secondary'
                                : 'bg-gray-100 text-brand-neutral'
                            }`}>
                              {step.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display font-extrabold text-sm sm:text-base text-brand-dark mb-2 tracking-tight group-hover:text-brand-primary transition-colors duration-200">
                          {step.title}
                        </h3>

                        <p className="font-sans text-xs sm:text-sm text-brand-neutral leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Performance Details Row */}
                        {step.metricsLabel && (
                          <div className="pt-3 border-t border-gray-100/80 flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-neutral">
                              {step.metricsLabel}
                            </span>
                            <span className={`font-mono text-xs font-bold leading-none px-2 py-1 rounded bg-gray-50 flex items-center space-x-1 ${
                              step.status === 'active' ? 'text-brand-secondary font-extrabold' : 'text-brand-dark'
                            }`}>
                              {step.status === 'active' && <Zap size={10} className="fill-brand-secondary stroke-none animate-bounce" />}
                              <span>{step.metricsValue}</span>
                            </span>
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
