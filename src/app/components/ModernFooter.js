'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaTelegram, FaWhatsapp,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane
} from 'react-icons/fa';
import Link from 'next/link';

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const text = `Please add me to the Delhi Girl updates list.\nEmail: ${newsletterEmail}`;
    window.open(
      `https://api.whatsapp.com/send?phone=918826482370&text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setNewsletterEmail('');
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white border-t border-amber-500/20">
      {/* Decorative glow circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-10 left-10 w-64 h-64 bg-amber-400/10 rounded-full mix-blend-soft-light blur-3xl"></div>
        <div className="absolute -bottom-10 right-10 w-80 h-80 bg-orange-500/10 rounded-full mix-blend-soft-light blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description + Join Our Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <FaPaperPlane className="text-white text-xl" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Delhi Girl
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Verified companions across Delhi NCR — fast booking, complete discretion, pay after you meet.
            </p>

            {/* <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
              Join Our Community
            </h3> */}

            {/* Telegram Link */}
            {/* <div>
              <a
                href="https://t.me/Tanuspa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all shadow-lg"
              >
                <FaTelegram className="text-xl mr-3" />
                Join Telegram Channel
              </a>
              <p className="text-gray-400 text-sm mt-3">
                Get exclusive updates, offers, and VIP announcements
              </p>
            </div> */}

            {/* Newsletter */}
            {/* <div className="mt-8">
              <h4 className="font-medium mb-4">Subscribe to Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-white rounded-l-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button type="submit" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-5 rounded-r-lg font-medium transition-all">
                  Join
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div> */}
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
              Categories
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Russian Escorts", link: "/russian-escorts-in-delhi" },
                { name: "Air Hostess", link: "/air-hostess-escorts-in-delhi" },
                { name: "Independent Profile", link: "/independent-escorts-in-delhi" },
                { name: "High Profile", link: "/high-profile-escorts-in-delhi" },
                { name: "College Girl", link: "/collage-call-girls-in-delhi" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.link} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
              Locations
            </h3>
            <ul className="space-y-3">
              {[
                // { name: "Noida", link: "/call-girls-in-noida" },
                // { name: "Gurgaon", link: "/call-girls-in-gurgaon" },
                { name: "Aerocity", link: "/aerocity-escorts" },
                { name: "Connaught Place", link: "/call-girls-in-connaught-place" },
                { name: "Mahipalpur", link: "/call-girls-in-mahipalpur" },
                { name: "Dwarka", link: "/call-girls-in-dwarka" },
                { name: "Lajpat Nagar", link: "/call-girls-in-lajpat-nagar" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.link} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <FaWhatsapp className="text-amber-500" />,
                  text: <a href="https://wa.me/918826482370" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Chat on WhatsApp</a>,
                },
                {
                  icon: <FaPhone className="text-amber-500" />,
                  text: <a href="https://wa.me/918826482370" className="hover:text-amber-400 transition-colors">+91 88264 82370</a>,
                },
                {
                  icon: <FaEnvelope className="text-amber-500" />,
                  text: "info@delhigirl.in",
                },
                // {
                //   icon: <FaMapMarkerAlt className="text-amber-500" />,
                //   text: "Delhi, Gurgaon & Noida",
                // },
              ].map((item, i) => (
                <li key={i} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* <div className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <h4 className="font-medium mb-2">Operating Hours</h4>
              <p className="text-sm text-gray-400">
                24/7 Service Availability<br />
                Concierge Support: 9AM - 11PM Daily
              </p>
            </div> */}
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>
        
        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-sm"
          >
            &copy; {currentYear} Delhi Girl. All rights reserved.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 md:justify-end text-sm"
          >
            <Link href="/privacy-policy" className="text-gray-500 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/discretion-policy" className="text-gray-500 hover:text-amber-400 transition-colors">
              Discretion Policy
            </Link>
            <Link href="/blogs#faq" className="text-gray-500 hover:text-amber-400 transition-colors">
              FAQ
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;