/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { ContactFormInput } from '../types';
import { companyDetails } from '../data';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    // Full name validation
    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is strictly required.';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters long.';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      tempErrors.email = 'Please provide a valid email format.';
      isValid = false;
    }

    // Phone validation (Flexible, checking numbers or standard length)
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
      isValid = false;
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      tempErrors.phone = 'Please key in a valid phone number length.';
      isValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject selection or input is required.';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = 'Detail message is required.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message description must be at least 10 characters long.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Live clearing of active error blocks on typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate real API submission latency (1300ms)
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset inputs on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 1300);
    }
  };

  return (
    <div id="contact-view" className="space-y-16 py-12 pb-16">
      {/* 1. Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pt-10" id="contact-header">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
          Contact Us
        </h1>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        <p className="font-sans text-brand-neutral text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Reach out to our specialists in Addis Ababa. We will respond with standard operational guidelines within 24 business hours.
        </p>
      </section>

      {/* 2. Structured Contact Core columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-columns-arena">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A: Contact coordinates + hours (lg:5) */}
          <div className="lg:col-span-5 space-y-8 text-left" id="contact-coordinates-block">
            <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight">
              Get in Touch
            </h2>
            <p className="font-sans text-sm text-brand-neutral leading-relaxed">
              Have specific questions about scale, targeting parameters, or custom web portals? Let us map out an objective digital strategy program.
            </p>

            {/* Core entries lists */}
            <div className="space-y-6 pt-4 font-sans text-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display font-medium text-brand-dark text-base">Office Coordinate</h4>
                  <p className="text-brand-neutral text-xs mt-1 leading-relaxed">
                    {companyDetails.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary-light flex items-center justify-center text-brand-secondary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display font-medium text-brand-dark text-base">Direct Line</h4>
                  <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="text-brand-neutral hover:text-brand-secondary text-xs mt-1 block transition-colors duration-200">
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center text-brand-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-display font-medium text-brand-dark text-base">Email Inboxes</h4>
                  <a href={`mailto:${companyDetails.email}`} className="text-brand-neutral hover:text-brand-primary text-xs mt-1 block transition-colors duration-200">
                    {companyDetails.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours Segment */}
            <div className="border-t border-gray-150 pt-8" id="contact-hours-area">
              <h3 className="font-display font-extrabold text-base text-brand-dark flex items-center space-x-2">
                <Clock className="text-brand-secondary" size={20} />
                <span>Operational Trading Hours</span>
              </h3>
              <div className="bg-[#FAFDFD] rounded-2xl border border-gray-100 p-6 space-y-3 mt-4 text-sm font-sans text-brand-dark">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-semibold">Monday – Friday:</span>
                  <span className="text-brand-neutral text-xs">8:30 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-semibold">Saturday:</span>
                  <span className="text-brand-neutral text-xs">9:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-brand-secondary font-medium">
                  <span>Sunday:</span>
                  <span className="font-extrabold text-xs">CLOSED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Validated Contact Form (lg:7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm" id="contact-form-block">
            <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight text-left mb-6">
              Send us a Message
            </h2>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-4"
                  id="contact-success-panel"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={26} />
                  </div>
                  <div className="space-y-1.5 text-left text-green-950">
                    <h3 className="font-display font-bold text-lg text-center">Inquiry Sent Successfully!</h3>
                    <p className="font-sans text-xs text-center leading-relaxed text-green-800">
                      Thank you for contacting Siltawi. Our strategic growth consultants have logged your request. We will review your website details and reply via email within 24 hours.
                    </p>
                  </div>
                  <div className="pt-2 flex justify-center">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-sans font-bold text-xs rounded-full cursor-pointer shadow-sm transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left" id="contact-actual-form">
                  {/* Name field */}
                  <div className="space-y-1.5" id="form-group-name">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="e.g. Abreham Alula"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-sm outline-none transition-all duration-200 ${
                        errors.name
                          ? 'border-brand-secondary bg-red-50/20 focus:ring-1 focus:ring-brand-secondary'
                          : 'border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary'
                      }`}
                    />
                    {errors.name && (
                      <div className="text-xs text-brand-secondary flex items-center space-x-1 pl-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Dual row: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email field */}
                    <div className="space-y-1.5" id="form-group-email">
                      <label className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="e.g. abreham@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm outline-none transition-all duration-200 ${
                          errors.email
                            ? 'border-brand-secondary bg-red-50/20 focus:ring-1 focus:ring-brand-secondary'
                            : 'border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary'
                        }`}
                      />
                      {errors.email && (
                        <div className="text-xs text-brand-secondary flex items-center space-x-1 pl-1">
                          <AlertCircle size={12} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Phone field */}
                    <div className="space-y-1.5" id="form-group-phone">
                      <label className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="text"
                        placeholder="e.g. +251 900 000 000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm outline-none transition-all duration-200 ${
                          errors.phone
                            ? 'border-brand-secondary bg-red-50/20 focus:ring-1 focus:ring-brand-secondary'
                            : 'border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary'
                        }`}
                      />
                      {errors.phone && (
                        <div className="text-xs text-brand-secondary flex items-center space-x-1 pl-1">
                          <AlertCircle size={12} />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1.5" id="form-group-subject">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm outline-none bg-white appearance-none cursor-pointer ${
                          errors.subject
                            ? 'border-brand-secondary focus:ring-1 focus:ring-brand-secondary'
                            : 'border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary'
                        }`}
                      >
                        <option value="">-- Choose target concern --</option>
                        <option value="digital-marketing">Digital Performance Marketing Auditing</option>
                        <option value="web-dev">Company Frontpages & E-Commerce Builds</option>
                        <option value="branding-materials">Brand Typographic Designs</option>
                        <option value="content-creation">Video Shoot & Social Calendars</option>
                        <option value="seo-auditing">Local SEO Search Index Optimization</option>
                        <option value="other">General B2B Strategic Consultation</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-neutral pointer-events-none text-xs">
                        ▼
                      </div>
                    </div>
                    {errors.subject && (
                      <div className="text-xs text-brand-secondary flex items-center space-x-1 pl-1">
                        <AlertCircle size={12} />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5" id="form-group-message">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Briefly state your target goals, active platforms, or business needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-sm outline-none transition-all duration-200 resize-none ${
                        errors.message
                          ? 'border-brand-secondary bg-red-50/20 focus:ring-1 focus:ring-brand-secondary'
                          : 'border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary'
                      }`}
                    />
                    {errors.message && (
                      <div className="text-xs text-brand-secondary flex items-center space-x-1 pl-1">
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-sans font-extrabold text-sm text-white bg-brand-primary hover:bg-brand-secondary transition-all duration-300 shadow flex items-center justify-center space-x-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <span className="animate-spin border-2 border-white border-t-transparent w-4 h-4 rounded-full" />
                      ) : (
                        <>
                          <span>Submit Message Strategy Request</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. Secure Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="google-maps-embed-section">
        <div className="relative rounded-3xl overflow-hidden border border-gray-150 shadow-sm aspect-[16/6] min-h-[320px] w-full bg-gray-50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.672459039396!2d38.784400!3d9.011800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d4a!2sBole%20Road%20Friendship%20Building%2C%20Addis%20Ababa%2c%20Ethiopia!5e0!3m2!1sen!2set!4v1700670000000!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Siltawi Digital Marketing - Bole Road, Addis Ababa Coordinate"
            className="absolute inset-0 w-full h-full"
            id="google-maps-iframe"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow border border-gray-150 px-4 py-2.5 rounded-2xl flex items-center space-x-2 text-xs font-sans font-bold text-brand-dark">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping" />
            <span>HQ Location - Bole Road, Addis Ababa</span>
          </div>
        </div>
      </section>
    </div>
  );
};
