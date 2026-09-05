'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBuilding, FaSubway, FaShieldAlt, FaClock, FaStar, FaConciergeBell, FaShoppingBag } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (1).webp', label: 'Ananya • 24', tag: 'Inner Circle Regular' },
  { image: '/Webpimages/download (2).webp', label: 'Ishita • 23', tag: 'College Crowd' },
  { image: '/Webpimages/download (3).webp', label: 'Meher • 26', tag: 'Air Hostess Specialist' },
  { image: '/Webpimages/download (4).webp', label: 'Ritika • 25', tag: 'Business Evenings' },
  { image: '/Webpimages/download (7).webp', label: 'Sanya • 24', tag: 'Outer Circle Bookings' },
];

const stays = [
  { name: 'The Lalit New Delhi', note: 'Barakhamba Road, right on the edge of CP', amenities: ['Rooftop Bar', 'Business Lounge'] },
  { name: 'Hotel Royal Plaza', note: 'Ashoka Road, quick and discreet check-ins', amenities: ['Metro-Adjacent', 'Quick Check-in'] },
  { name: 'Shangri-La Eros New Delhi', note: 'Premium option for a fuller evening', amenities: ['Skyline Views', 'Late Checkout'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Noida', href: '/call-girls-in-noida' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Saket', href: '/call-girls-in-saket' },
];

const microAreas = [
  { name: 'Inner Circle', note: 'The core shopping and dining ring, always the fastest response' },
  { name: 'Outer Circle', note: 'A short ride from the centre, still well within our regular coverage' },
  { name: 'Barakhamba Road', note: 'Corporate offices and 5-star hotels, popular after-work bookings' },
  { name: 'Janpath', note: 'Tourist-heavy stretch, discreet daytime and evening visits' },
  { name: 'Parliament Street', note: 'Government-adjacent, quiet and low-profile arrivals' },
  { name: 'Karol Bagh border', note: 'Just outside CP proper — message us, we usually still cover it' },
];

const faqs = [
  {
    q: 'How fast can someone reach my hotel in Connaught Place?',
    a: 'CP is one of the most central parts of Delhi, so it is also one of our fastest — most bookings near the Inner or Outer Circle confirm within minutes and arrive inside 15-20 minutes.',
  },
  {
    q: 'Do you cover Radisson, The Lalit, and Royal Plaza directly?',
    a: 'Yes, these are among our most regularly booked hotels for Connaught Place escorts. Share your room details on WhatsApp and we will confirm a companion already familiar with that property.',
  },
  {
    q: 'Can I book college call girls or air hostess escorts in Connaught Place specifically?',
    a: 'Yes, both are available in this area. Let us know your preference when you message on WhatsApp and we will match accordingly — no extra wait for a specific profile type.',
  },
  {
    q: 'Is it discreet to book in a busy commercial area like CP?',
    a: 'Yes. CP sees constant footfall from tourists, shoppers, and business travellers all day, so a companion arriving to meet you at your hotel draws no attention at all.',
  },
  {
    q: 'Do I need to pay in advance for a Connaught Place booking?',
    a: 'No. Pay after you meet is standard for every CP booking — confirm on WhatsApp and settle payment once your companion has arrived.',
  },
];

export default function Connaught() {
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
              { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/escort-service-in-delhi` },
              { '@type': 'ListItem', position: 3, name: 'Connaught Place', item: `${SITE_URL}/call-girls-in-connaught-place` },
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
                name: 'How fast can someone reach my hotel in Connaught Place?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CP is one of the most central parts of Delhi, so it is also one of our fastest — most bookings near the Inner or Outer Circle confirm within minutes and arrive inside 15-20 minutes.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you cover Radisson, The Lalit, and Royal Plaza directly?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, these are among our most regularly booked hotels for Connaught Place escorts. Share your room details on WhatsApp and we will confirm a companion already familiar with that property.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I book college call girls or air hostess escorts in Connaught Place specifically?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, both are available in this area. Let us know your preference when you message on WhatsApp and we will match accordingly — no extra wait for a specific profile type.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it discreet to book in a busy commercial area like CP?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. CP sees constant footfall from tourists, shoppers, and business travellers all day, so a companion arriving to meet you at your hotel draws no attention at all.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to pay in advance for a Connaught Place booking?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Pay after you meet is standard for every CP booking — confirm on WhatsApp and settle payment once your companion has arrived.',
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
              <FaShoppingBag className="w-3.5 h-3.5" /> Delhi&apos;s most central hub
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Call Girls in Connaught Place for 15-Minute Hotel Delivery
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Nothing in Delhi is far from CP, which is exactly why it&apos;s one of our fastest-response
              areas. Tell us your hotel and we&apos;ll have a verified companion at your door in minutes,
              not hours.
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
              src="/Webpimages/connaught-place-delhi.webp"
              alt="Call girls in Connaught Place, Delhi"
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
            Connaught Place sits at the exact centre of Delhi, which is exactly why{' '}
            <strong className="font-semibold text-gray-900">call girls in Connaught Place</strong> is
            one of our most searched and most booked services. Hotels like The Lalit, Royal Plaza, and
            Shangri-La Eros are minutes from almost anywhere in the city, and our companions are
            positioned to reach any of them quickly — no crosstown traffic to plan around.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The area draws a genuinely mixed crowd — business travellers staying near Barakhamba Road,
            tourists exploring the Inner and Outer Circle, and locals meeting up after a day of
            shopping. Whatever brings you here, our{' '}
            <strong className="font-semibold text-gray-900">escort service in Connaught Place</strong>{' '}
            is built around the same standard of verification and discretion, whether it&apos;s a quick
            visit or a full evening in.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Connaught Place Escorts, Matched to Your Evening
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clients looking for college call girls in Connaught Place usually want someone easygoing
            for a relaxed evening after exploring the Circle, while requests for air hostess escorts in
            Connaught Place tend to come from business travellers who want polish and easy
            conversation. Both are available here, and letting us know your preference when you message
            speeds up the match.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For clients after something more upscale, high profile escorts in Connaught Place are also
            part of our regular roster in this area — ask us when you book call girls in Connaught Place
            on WhatsApp and we&apos;ll suggest someone suited to the setting, whether that&apos;s a quiet
            hotel evening or dinner near the Circle first.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Call Girls in Connaught Place Through Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Central Delhi bookings live or die on speed and discretion — this is what we get right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaBuilding className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Central Location, Fastest Response</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Almost nowhere in Delhi is genuinely far from CP, so our companions here typically reach
                clients faster than in any other part of the city.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaSubway className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Metro-Connected Coverage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With CP&apos;s metro station at the centre of it all, our companions can reach the Inner
                Circle, Outer Circle, and nearby Barakhamba Road without depending on traffic.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discreet in a Busy Hub</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CP is always full of people — tourists, shoppers, office crowds — so a quiet arrival at
                your hotel blends right in.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaStar className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, Not Just Listed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every profile goes through the same identity and safety checks as our other locations —
                being central doesn&apos;t mean a lower standard.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaConciergeBell className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hotel-Familiar Companions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From The Lalit to Royal Plaza, our companions already know the check-in flow at CP&apos;s
                most-booked hotels.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay After You Meet</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment — confirm on WhatsApp, and settle payment once your companion has
                actually arrived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Connaught Place</h2>
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
                    alt={`Call girl profile in Connaught Place, Delhi`}
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

      {/* Where clients stay */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Where Clients Usually Stay Near CP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stays.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  <FaStar className="w-3.5 h-3.5" /><FaStar className="w-3.5 h-3.5" /><FaStar className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{s.note}</p>
                <div className="flex flex-wrap gap-2">
                  {s.amenities.map((a) => (
                    <span key={a} className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full flex items-center gap-1">
                      <FaConciergeBell className="w-3 h-3" /> {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro-area grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Areas We Cover Around Connaught Place
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A rough guide — if you&apos;re just outside this list, message us anyway, we likely still cover it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {microAreas.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white"
              >
                <FaBuilding className="text-purple-600 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">{s.name}</div>
                  <div className="text-sm text-gray-600 mt-0.5">{s.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Connaught Place Booking Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-4"
                >
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <FiChevronDown
                    className={`flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-purple-600' : 'text-gray-400'}`}
                  />
                </button>
                <div
                  className={`px-6 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas We Serve */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Other Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherAreas.map((area) => (
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
          Near CP Right Now?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your hotel on WhatsApp and we&apos;ll tell you exactly who&apos;s available near you
          tonight. Whether you want to book call girls in Connaught Place for a quick visit or a full
          evening, there&apos;s no advance payment — just confirm and pay later once you&apos;ve met.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            <FaWhatsapp /> Message on WhatsApp
          </a>
          <Link
            href="/escort-service-in-delhi"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            View All Delhi Locations
          </Link>
        </div>
      </section>
    </main>
  );
}
