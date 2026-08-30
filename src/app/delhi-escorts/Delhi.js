'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaGlassCheers, FaBriefcase, FaPlaneDeparture, FaShieldAlt, FaStar, FaConciergeBell, FaComments } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (29).webp', label: 'Vanya • 25', tag: 'Dinner Dates' },
  { image: '/Webpimages/download (30).webp', label: 'Riya • 24', tag: 'Travel Companion' },
  { image: '/Webpimages/download (31).webp', label: 'Simran • 26', tag: 'Corporate Events' },
  { image: '/Webpimages/download (32).webp', label: 'Anushka • 23', tag: 'Private Parties' },
  { image: '/Webpimages/download (33).webp', label: 'Meher • 25', tag: 'Weekend Getaways' },
];

const occasions = [
  { icon: <FaGlassCheers className="w-6 h-6" />, title: 'Dinner Dates', body: 'A polished companion for a proper evening out — conversation, presence, and comfort in any restaurant or lounge setting.' },
  { icon: <FaBriefcase className="w-6 h-6" />, title: 'Corporate Events & Conferences', body: 'Fluent-English companions comfortable at business dinners, product launches, and conference after-parties.' },
  { icon: <FaConciergeBell className="w-6 h-6" />, title: 'Private Parties', body: 'For a house party, birthday, or private gathering — someone who fits the room and the mood without effort.' },
  { icon: <FaPlaneDeparture className="w-6 h-6" />, title: 'Outstation Travel Companion', body: 'Multi-day travel bookings for clients heading outside Delhi — verified companions comfortable with flights and hotel stays.' },
  { icon: <FaStar className="w-6 h-6" />, title: 'Weekend Getaways', body: 'A relaxed weekend away from the city, with the same standard of verification and discretion as any in-city booking.' },
  { icon: <FaShieldAlt className="w-6 h-6" />, title: 'Hotel Overnight Stays', body: 'Full-night bookings across Delhi NCR hotels, with companions used to quiet, professional check-ins.' },
];

const steps = [
  { n: '01', title: 'Tell Us the Occasion', body: 'Dinner date, private party, corporate event, or a multi-day trip — the setting decides who we suggest.' },
  { n: '02', title: 'Pick Your Companion', body: 'We share verified profiles suited to your occasion. No pressure, no obligation until you’re ready.' },
  { n: '03', title: 'Confirm and Relax', body: 'Once confirmed, we handle timing and logistics — payment only happens after you’ve met.' },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const areas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Noida', href: '/call-girls-in-noida' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
];

const faqs = [
  {
    q: 'Is a Delhi escort available for outstation travel?',
    a: 'Yes, this is one of our regular requests — share your travel dates and destination on WhatsApp, and we’ll confirm a companion comfortable with multi-day trips.',
  },
  {
    q: 'Can I book a Delhi escort for a dinner date or private party, not just a hotel visit?',
    a: 'Yes. A large share of our Delhi escort bookings are for dinner dates, corporate events, and private parties — just tell us the occasion and setting when you message.',
  },
  {
    q: 'Do your companions speak fluent English for a business or social setting?',
    a: 'Yes, our Delhi escort profiles are chosen specifically for settings where conversation and presentation matter, not just hotel visits.',
  },
  {
    q: 'Is booking a Delhi escort discreet?',
    a: 'Yes. Every booking is handled over WhatsApp with minimal details required, and our companions are experienced with quiet, professional arrivals at hotels, offices, and private residences.',
  },
  {
    q: 'Do I need to pay in advance?',
    a: 'No. Pay after you meet is standard for every Delhi escort booking — confirm on WhatsApp and settle payment once your companion has arrived.',
  },
];

export default function Delhi() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white">
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Delhi Escorts', item: `${SITE_URL}/delhi-escorts` },
            ],
          }),
        }}
      />

      {/* FAQPage structured data — static, matches the 5 visible FAQ items exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is a Delhi escort available for outstation travel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, this is one of our regular requests — share your travel dates and destination on WhatsApp, and we’ll confirm a companion comfortable with multi-day trips.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I book a Delhi escort for a dinner date or private party, not just a hotel visit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A large share of our Delhi escort bookings are for dinner dates, corporate events, and private parties — just tell us the occasion and setting when you message.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do your companions speak fluent English for a business or social setting?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, our Delhi escort profiles are chosen specifically for settings where conversation and presentation matter, not just hotel visits.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is booking a Delhi escort discreet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Every booking is handled over WhatsApp with minimal details required, and our companions are experienced with quiet, professional arrivals at hotels, offices, and private residences.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to pay in advance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Pay after you meet is standard for every Delhi escort booking — confirm on WhatsApp and settle payment once your companion has arrived.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full mb-4">
              <FaComments className="w-3.5 h-3.5" /> Fluent English, presentable anywhere
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Delhi Escort — Elegant Companion for Travel &amp; Private Events
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Not every booking is a hotel visit. Our Delhi escort profiles are chosen for dinner
              dates, private parties, corporate events, and travel companionship — verified, discreet,
              and booked 24×7 on WhatsApp.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Book on WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
            <Image
              src="/Webpimages/RoseateHouse.webp"
              alt="Delhi escort for travel and private events"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            A{' '}
            <strong className="font-semibold text-gray-900">Delhi escort</strong> booking with us isn&apos;t
            always about a hotel room. Plenty of our clients want a companion for dinner, a private
            party, or a few days of travel — someone who can hold a conversation, dress for the
            occasion, and put people at ease in a public setting, not just a private one.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            That&apos;s the standard every{' '}
            <strong className="font-semibold text-gray-900">independent Delhi escort</strong> on our
            roster is chosen against — fluent English, genuine social ease, and a verified identity, so
            you&apos;re never guessing what you&apos;ll actually get when she arrives.
          </p>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Book a Delhi Escort for Any Occasion
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Tell us the setting when you message and we&apos;ll match a companion suited to it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((o) => (
              <div key={o.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="text-purple-600 mb-4">{o.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{o.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Delhi Escort Profiles</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl p-3 shadow-md border border-gray-100"
              >
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={p.image}
                    alt={`Delhi escort profile`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm text-gray-900">{p.label}</div>
                  <div className="text-xs text-gray-500">{p.tag}</div>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium"
                >
                  Request
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            How Booking a Delhi Escort Works
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            The process stays the same whether it&apos;s a quick visit or a multi-day travel booking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="text-5xl font-bold text-purple-100 mb-2">{s.n}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Your Delhi Escort Through Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaComments className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fluent, Socially Confident</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every profile is chosen to hold a real conversation and feel at ease outside a hotel
                room, not just inside one.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaPlaneDeparture className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel-Ready</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comfortable with outstation and multi-day bookings, not limited to same-city visits.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified &amp; Discreet</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every companion is identity-verified, and every booking is handled quietly over WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Delhi Escort Booking Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-4"
                >
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <FiChevronDown
                    className={`flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-purple-600' : 'text-gray-400'}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Areas We Cover Across Delhi NCR</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-purple-400 hover:text-purple-700 transition"
              >
                Call Girls in {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Planning an Evening or a Trip?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Tell us the occasion, the setting, and the dates on WhatsApp and we&apos;ll match you with a
          Delhi escort suited to it — no advance payment, just confirm and pay later once you&apos;ve met.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
        >
          <FaWhatsapp /> Message on WhatsApp
        </a>
      </section>
    </main>
  );
}
