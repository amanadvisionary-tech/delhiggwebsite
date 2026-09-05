'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBuilding, FaSubway, FaShieldAlt, FaClock, FaStar, FaConciergeBell, FaFilm } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (9).webp', label: 'Kavya • 24', tag: 'Sector 18 Regular' },
  { image: '/Webpimages/download (12).webp', label: 'Diya • 25', tag: 'Corporate Evenings' },
  { image: '/Webpimages/download (19).webp', label: 'Naina • 23', tag: 'Film City Bookings' },
  { image: '/Webpimages/download (27).webp', label: 'Aarohi • 26', tag: 'Sector 62 Regular' },
  { image: '/Webpimages/download (28).webp', label: 'Tara • 24', tag: 'Greater Noida' },
];

const stays = [
  { name: 'Radisson Blu, Noida', note: 'Sector 18, closest to the nightlife and shopping strip', amenities: ['Free WiFi', '24/7 Desk'] },
  { name: 'Crowne Plaza, Greater Noida', note: 'Preferred by corporate clients off the Expressway', amenities: ['Business Lounge', 'Late Checkout'] },
  { name: 'Jaypee Greens Resort', note: 'Quiet, resort-style stays away from the main city noise', amenities: ['Golf View', 'Room Service'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Saket', href: '/call-girls-in-saket' },
  { name: 'Paharganj', href: '/call-girls-in-paharganj' },
  { name: 'Hauz Khas', href: '/call-girls-in-hauz-khas' },
];

const microAreas = [
  { name: 'Sector 18', note: 'The shopping and nightlife hub, our busiest Noida zone' },
  { name: 'Sector 62', note: 'Corporate offices, mostly after-work and business-travel bookings' },
  { name: 'Film City / Sector 16', note: 'Media and production crowd, used to flexible late hours' },
  { name: 'Sector 15 & Botanical Garden', note: 'Metro-adjacent, easy pickup coordination via the Blue Line' },
  { name: 'Greater Noida Expressway', note: 'Residential and resort belt, slightly longer arrival window' },
  { name: 'Noida Extension', note: 'Just outside the core sectors — message us, we usually still cover it' },
];

const faqs = [
  {
    q: 'Do you cover both Noida and Greater Noida?',
    a: 'Yes. Sectors 18 and 62 get the fastest response since companions are based nearby, and Greater Noida along the Expressway is covered too, just with a slightly longer arrival window.',
  },
  {
    q: 'Can I book call girls in Noida Sector 18 for the same evening?',
    a: 'Yes, Sector 18 is our most-booked zone in Noida given the restaurants and nightlife there — most requests confirm within minutes and arrive inside 20-30 minutes.',
  },
  {
    q: 'Do you serve clients working in Film City or the Sector 62 corporate belt?',
    a: 'Yes, this is a steady part of our Noida bookings — after-work visits and business-travel stays near the offices are common, and companions here are used to that setting.',
  },
  {
    q: 'Is it discreet to book a Noida escort at a residential address?',
    a: 'Yes. Our Noida companions are used to quiet, low-profile visits to residential towers as well as hotels, and don’t draw attention on arrival.',
  },
  {
    q: 'Do I need to pay in advance for a Noida booking?',
    a: 'No. Pay after you meet is standard across every sector we cover — confirm on WhatsApp, and settle payment once your companion has arrived.',
  },
];

export default function Noida() {
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
              { '@type': 'ListItem', position: 3, name: 'Noida', item: `${SITE_URL}/call-girls-in-noida` },
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
                name: 'Do you cover both Noida and Greater Noida?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Sectors 18 and 62 get the fastest response since companions are based nearby, and Greater Noida along the Expressway is covered too, just with a slightly longer arrival window.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I book call girls in Noida Sector 18 for the same evening?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Sector 18 is our most-booked zone in Noida given the restaurants and nightlife there — most requests confirm within minutes and arrive inside 20-30 minutes.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you serve clients working in Film City or the Sector 62 corporate belt?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, this is a steady part of our Noida bookings — after-work visits and business-travel stays near the offices are common, and companions here are used to that setting.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it discreet to book a Noida escort at a residential address?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Our Noida companions are used to quiet, low-profile visits to residential towers as well as hotels, and don’t draw attention on arrival.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to pay in advance for a Noida booking?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Pay after you meet is standard across every sector we cover — confirm on WhatsApp, and settle payment once your companion has arrived.',
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
              <FaSubway className="w-3.5 h-3.5" /> Blue Line &amp; Aqua Line coverage
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Call Girls in Noida for Verified, Discreet Escort Service
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              From Sector 18&apos;s nightlife strip to the Sector 62 corporate belt and Film City, we
              match you with a companion who&apos;s actually close by — verified, discreet, and ready
              on short notice.
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
              src="/Webpimages/hotel3.webp"
              alt="Call girls in Noida, Delhi NCR"
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
            Noida has grown into one of Delhi NCR&apos;s biggest hubs in its own right, which is why{' '}
            <strong className="font-semibold text-gray-900">call girls in Noida</strong> is one of our
            most consistently booked services outside Delhi proper. Between the Sector 18 nightlife
            strip, the Sector 62 corporate offices, and the Film City media crowd, no two clients here
            are looking for quite the same thing — so we don&apos;t treat it as a one-size booking.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Whether you&apos;re a resident, a corporate traveller staying near the Expressway, or
            visiting for a shoot in Film City, our{' '}
            <strong className="font-semibold text-gray-900">escort service in Noida</strong> is built
            around matching you with someone already based close to you, so response times here stay
            faster than most of the NCR.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Noida Escorts, Sector by Sector
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sector 18 sees the most call girls in Noida Sector 18 requests we get, mostly evening
            bookings that start with dinner or drinks nearby before heading back to a hotel. If
            you&apos;re after Noida escorts for a more low-key visit, our companions based near the
            residential sectors are just as easy to reach.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For the corporate side of Noida — Sector 62 and the offices along the Expressway — we see a
            steady stream of after-work and business-travel bookings, similar in rhythm to how our{' '}
            <Link href="/call-girls-in-gurgaon" className="text-purple-700 font-medium hover:underline">
              Gurgaon clients
            </Link>{' '}
            book. Film City and Sector 16 bring a different crowd entirely, often working odd hours
            around a shoot schedule, and we keep companions comfortable with that flexibility on hand.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Call Girls in Noida Through Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Noida is spread out — this is what makes sure your booking still moves fast.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaBuilding className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sector-Level Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We send whoever is actually close to your sector, not whoever&apos;s free across the city.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaSubway className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Metro-Connected</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Companions based near the Blue Line and Aqua Line corridors reach you without depending
                on Noida&apos;s wider road network.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaFilm className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comfortable with Odd Hours</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From late shoots in Film City to red-eye corporate schedules, our Noida companions are
                used to flexible timing.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Residential-Grade Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quiet arrival and a low profile at the gate are standard for our residential-sector
                bookings, not a special request.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaStar className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, Not Just Listed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every profile goes through the same identity and safety checks across every sector we cover.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay After You Meet</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment anywhere in Noida — confirm on WhatsApp, and settle payment once your
                companion has arrived.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Noida</h2>
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
                    alt={`Call girl profile in Noida, Delhi NCR`}
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
            Where Clients Usually Stay in Noida
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

      {/* Sector grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Areas We Cover Inside Noida
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A rough guide — if your sector isn&apos;t listed, message us anyway, we likely still cover it.
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
            Noida Booking Questions
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
          In Noida Right Now?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your sector or hotel on WhatsApp and we&apos;ll tell you exactly who&apos;s available
          near you tonight. Whether you want to book call girls in Noida for a quiet evening or need
          someone near Sector 18 for a night out, there&apos;s no advance payment — just confirm and
          pay later once you&apos;ve met.
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
