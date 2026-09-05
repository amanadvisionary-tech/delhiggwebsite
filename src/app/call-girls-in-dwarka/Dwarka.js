'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBuilding, FaTrain, FaUserTie, FaShieldAlt, FaClock, FaStar, FaConciergeBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (21).webp', label: 'Tanya • 25', tag: 'Sector 10 Regular' },
  { image: '/Webpimages/download (10).webp', label: 'Isha • 24', tag: 'Corporate Evenings' },
  { image: '/Webpimages/download (11).webp', label: 'Priya • 26', tag: 'Residential Visits' },
  { image: '/Webpimages/download (13).webp', label: 'Neha • 23', tag: 'Sector 21 Bookings' },
  { image: '/Webpimages/download (14).webp', label: 'Aditi • 25', tag: 'Corporate Evenings' },
];

const stays = [
  { name: 'Sector 10 Boutique Stay', note: 'Closest to the dining and nightlife strip', amenities: ['Free WiFi', 'Late Checkout'] },
  { name: 'Expressway Business Hotel', note: 'Preferred by corporate clients from Sector 12/19', amenities: ['Business Lounge', '24/7 Desk'] },
  { name: 'Metro View Residency', note: 'Steps from the Blue Line, quiet and residential', amenities: ['Metro Access', 'Room Service'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Noida', href: '/call-girls-in-noida' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Saket', href: '/call-girls-in-saket' },
];

const sectors = [
  { name: 'Sector 6 & 7', note: 'Metro-adjacent, easiest pickup coordination' },
  { name: 'Sector 10', note: 'Close to the club/dining strip, popular evening bookings' },
  { name: 'Sector 12 & 19', note: 'Close to Dwarka Expressway offices' },
  { name: 'Sector 21', note: 'Airport-side, popular with transit guests' },
  { name: 'Dwarka Mor', note: 'Residential, quiet late-night access' },
];

const steps = [
  {
    n: '01',
    title: 'Tell us your sector',
    body: 'Dwarka is large — send your sector number or nearest metro station so we match you with someone already close by, not across the city.',
  },
  {
    n: '02',
    title: 'Pick your companion',
    body: 'We share verified profiles based in or near your sector. No pressure, no obligation until you’re ready.',
  },
  {
    n: '03',
    title: 'Confirm and relax',
    body: 'Once confirmed, arrival is typically 25–40 minutes depending on your exact sector — payment only after you meet.',
  },
];

const faqs = [
  {
    q: 'Do you cover every sector of Dwarka, or just a few?',
    a: 'We actively cover Sectors 6, 7, 10, 12, 19, 21, and the Dwarka Mor residential belt. If your sector isn’t on that list, message us anyway — most requests outside these are still handled, just with a slightly longer arrival window.',
  },
  {
    q: 'Is it discreet to book call girls in Dwarka if I live in a residential sector?',
    a: 'Yes, discretion is the main reason clients choose Dwarka over more visible parts of Delhi. Our Dwarka escorts are used to quiet, low-profile visits to residential buildings and don’t draw attention on arrival.',
  },
  {
    q: 'Can I book VIP call girls in Dwarka Sector 10 for an evening near the restaurants there?',
    a: 'Yes, Sector 10 is one of our more frequently booked areas given its dining and nightlife strip. Let us know your plan when you message and we’ll match a companion comfortable with that setting.',
  },
  {
    q: 'Do I need to pay in advance for Dwarka bookings?',
    a: 'No. Pay later is standard across every sector we serve — you confirm the booking on WhatsApp and pay only once your companion has arrived.',
  },
];

export default function Dwarka() {
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
              { '@type': 'ListItem', position: 3, name: 'Dwarka', item: `${SITE_URL}/call-girls-in-dwarka` },
            ],
          }),
        }}
      />

      {/* FAQPage structured data — static, matches the 4 visible FAQ items exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you cover every sector of Dwarka, or just a few?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We actively cover Sectors 6, 7, 10, 12, 19, 21, and the Dwarka Mor residential belt. If your sector isn’t on that list, message us anyway — most requests outside these are still handled, just with a slightly longer arrival window.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it discreet to book call girls in Dwarka if I live in a residential sector?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, discretion is the main reason clients choose Dwarka over more visible parts of Delhi. Our Dwarka escorts are used to quiet, low-profile visits to residential buildings and don’t draw attention on arrival.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I book VIP call girls in Dwarka Sector 10 for an evening near the restaurants there?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Sector 10 is one of our more frequently booked areas given its dining and nightlife strip. Let us know your plan when you message and we’ll match a companion comfortable with that setting.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to pay in advance for Dwarka bookings?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Pay later is standard across every sector we serve — you confirm the booking on WhatsApp and pay only once your companion has arrived.',
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
              <FaTrain className="w-3.5 h-3.5" /> Blue Line metro coverage
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Call Girls in Dwarka, Matched to Your Sector
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Dwarka spans over twenty sectors, so we don&apos;t give every client the same answer. Tell us
              roughly where you are and we&apos;ll match you with a companion who&apos;s actually nearby —
              not one commuting across sub-cities.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Share Your Sector on WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
            <Image
              src="/Webpimages/hotel2.webp"
              alt="Call girls in Dwarka sub-city, Delhi"
              fill
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
            Dwarka is one of the largest planned sub-cities in Asia, which is exactly why a generic
            Dwarka call girl service rarely works well here — a companion based near Sector 21
            isn&apos;t much use to someone staying in Sector 6. Our approach to{' '}
            <strong className="font-semibold text-gray-900">call girls in Dwarka</strong> starts with
            your sector first, so the person who arrives at your door is someone already close by, not
            someone crossing half the sub-city in traffic.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The area draws a genuinely mixed crowd — residents who live in Dwarka full-time, corporate
            travellers working out of the offices along Dwarka Expressway, and guests staying near the
            airport-adjacent sectors on the way through Delhi. Whatever brings you here, our Dwarka
            escorts are chosen and verified with the same standard, and every booking is handled with
            the discretion this mostly-residential sub-city expects.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Escorts in Dwarka, Sector by Sector
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Metro-adjacent sectors like 6 and 7 tend to get the fastest turnaround, since companions
            based near the Blue Line can reach you without depending on Dwarka&apos;s wider road network —
            search call girls in Dwarka Sector 6 or call girls near Dwarka Metro and you&apos;ll almost
            always land a match from this exact zone. If you&apos;re after{' '}
            <strong className="font-semibold text-gray-900">VIP call girls in Dwarka
            Sector 10</strong> for an evening near the restaurant and nightlife strip there, that&apos;s
            one of our more regularly booked requests, and we typically have someone available with
            little notice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For the corporate side of Dwarka — Sectors 12 and 19, closer to the Expressway offices —
            clients looking for escorts in Dwarka Sector 12 are usually after-work or business-travel
            bookings, where premium escorts in Dwarka are chosen more for a relaxed, unhurried evening
            than a quick visit. Clients based in
            Sector 21 near the airport side often combine a Dwarka booking with a short stay before or
            after a flight, similar to how our{' '}
            <Link href="/call-girls-in-mahipalpur" className="text-purple-700 font-medium hover:underline">
              Mahipalpur clients
            </Link>{' '}
            operate.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Residential belts such as Dwarka Mor call for a different kind of care — quieter arrivals,
            less visible pickup points, and companions who are simply used to that setting. Wherever you
            fall, tell us your sector honestly rather than the nearest landmark; it&apos;s the single
            biggest factor in how fast we can get someone to you.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Call Girls in Dwarka Through Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Sub-city bookings live or die on how well the coordination is handled — this is what we get right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaBuilding className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sector-Level Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t send whoever&apos;s free — we send whoever is actually close to your sector,
                which is the whole point in a sub-city this spread out.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Residential-Grade Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dwarka has more residential towers than hotels, so quiet arrival and a low profile at
                the gate are standard, not a special request.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Every Sector</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pay Later Dwarka is simple — no advance payment anywhere in the sub-city. Confirm on
                WhatsApp, and settle payment once your companion has actually arrived.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Dwarka</h2>
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
                    alt={`Call girl profile in Dwarka, Delhi`}
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
            Where Clients Usually Stay in Dwarka
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
            Areas We Cover Inside Dwarka
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A rough guide — if your sector isn&apos;t listed, message us anyway, we likely still cover it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {sectors.map((s, i) => (
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

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaUserTie className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Booking Works in Dwarka</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Popular with residents and the corporate crowd from the Dwarka Expressway offices — discretion
            matters here more than most places, so the process is kept simple.
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

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Dwarka Booking Questions
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
          In Dwarka Right Now?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your sector on WhatsApp and we&apos;ll tell you exactly who&apos;s available near you tonight.
          Whether you want to book call girls in Dwarka for a quiet residential visit or need someone
          near the Sector 10 restaurants for the evening, there&apos;s no advance payment — just confirm
          and pay later once you&apos;ve met.
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
