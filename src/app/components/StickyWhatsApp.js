'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';

export default function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 text-white pl-3.5 pr-5 py-3.5 rounded-full shadow-2xl hover:bg-green-600 hover:scale-105 transition-all"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
      </span>
      <FaWhatsapp className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">Chat Now</span>
    </a>
  );
}
