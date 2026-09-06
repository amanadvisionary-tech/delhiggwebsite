'use client';

import { FaCheckCircle, FaClock, FaLock, FaHandshake } from 'react-icons/fa';

const badges = [
  { icon: FaCheckCircle, label: 'Verified Profiles' },
  { icon: FaHandshake, label: 'Pay After You Meet' },
  { icon: FaClock, label: '24x7 on WhatsApp' },
  { icon: FaLock, label: '100% Discreet' },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 justify-center text-center">
            <b.icon className="text-purple-600 w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
