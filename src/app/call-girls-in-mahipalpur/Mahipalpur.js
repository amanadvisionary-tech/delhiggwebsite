'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlane, FaClock, FaShieldAlt, FaWhatsapp, FaMapMarkerAlt, FaUserCheck, FaStar, FaSwimmingPool, FaConciergeBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (15).webp', label: 'Riya • 24', tag: 'Airport Specialist' },
  { image: '/Webpimages/download (16).webp', label: 'Simran • 26', tag: 'Transit Stays' },
  { image: '/Webpimages/download (17).webp', label: 'Anaya • 23', tag: 'Overnight Stays' },
  { image: '/Webpimages/download (18).webp', label: 'Meher • 25', tag: 'Business Travellers' },
  { image: '/Webpimages/download (20).webp', label: 'Kavya • 24', tag: 'Airport Specialist' },
];

const stays = [
  { name: 'NH-8 Business Hotel', note: 'Closest to Terminal 3, fastest check-ins', amenities: ['24/7 Front Desk', 'Airport Shuttle'] },
  { name: 'Mahipalpur Inn & Suites', note: 'Popular for overnight and transit stays', amenities: ['Free WiFi', 'Room Service'] },
  { name: 'Airport Transit Suites', note: 'Preferred for short layover bookings', amenities: ['Quick Check-in', 'Late Checkout'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Noida', href: '/call-girls-in-noida' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Saket', href: '/call-girls-in-saket' },
  { name: 'Paharganj', href: '/call-girls-in-paharganj' },
  { name: 'Hauz Khas', href: '/call-girls-in-hauz-khas' },
];

const nearbyAreas = [
  'NH-8 hotel stretch',
  'IGI Airport Terminal 3',
  'Aerocity border',
  'Rangpuri',
  'Bijwasan Road',
  'Vasant Kunj approach',
];

const faqs = [
  {
    q: 'Is Mahipalpur good for a late-night airport arrival?',
    a: 'Yes — that’s exactly why most of our Mahipalpur bookings happen. The area sits minutes from IGI Airport, so a late landing or an early morning flight out doesn’t mean losing the evening. We coordinate hotel check-in timing around your actual arrival, not a fixed slot.',
  },
  {
    q: 'Which hotels do you cover in Mahipalpur?',
    a: 'We work with budget-to-mid-range hotels along the NH-8 stretch and the lanes behind the airport, plus a few 3-star properties that are used to quiet, no-questions check-ins. If you already have a room booked, just share the hotel name and we’ll confirm the same day.',
  },
  {
    q: 'How fast can someone reach my hotel in Mahipalpur?',
    a: 'Because most of our Mahipalpur companions are already based nearby, arrival is usually inside 20–30 minutes of confirming — faster than areas further from the airport corridor.',
  },
  {
    q: 'Do you charge extra for a transit-stay or short stopover booking?',
    a: 'No. Whether you’re staying the night or have a few hours between flights, the rate is the same as any other Mahipalpur booking — pay after you meet, no advance.',
  },
  {
    q: 'How do I book call girls in Mahipalpur if I only just landed?',
    a: 'Message us on WhatsApp with your terminal, expected exit time, and hotel name (or ask us for a nearby suggestion). We’ll have a verified profile ready to confirm before you’ve even collected your baggage.',
  },
];

export default function Mahipalpur() {
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
              { '@type': 'ListItem', position: 3, name: 'Mahipalpur', item: `${SITE_URL}/call-girls-in-mahipalpur` },
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
                name: 'Is Mahipalpur good for a late-night airport arrival?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — that’s exactly why most of our Mahipalpur bookings happen. The area sits minutes from IGI Airport, so a late landing or an early morning flight out doesn’t mean losing the evening. We coordinate hotel check-in timing around your actual arrival, not a fixed slot.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which hotels do you cover in Mahipalpur?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We work with budget-to-mid-range hotels along the NH-8 stretch and the lanes behind the airport, plus a few 3-star properties that are used to quiet, no-questions check-ins. If you already have a room booked, just share the hotel name and we’ll confirm the same day.',
                },
              },
              {
                '@type': 'Question',
                name: 'How fast can someone reach my hotel in Mahipalpur?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Because most of our Mahipalpur companions are already based nearby, arrival is usually inside 20–30 minutes of confirming — faster than areas further from the airport corridor.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you charge extra for a transit-stay or short stopover booking?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Whether you’re staying the night or have a few hours between flights, the rate is the same as any other Mahipalpur booking — pay after you meet, no advance.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I book call girls in Mahipalpur if I only just landed?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Message us on WhatsApp with your terminal, expected exit time, and hotel name (or ask us for a nearby suggestion). We’ll have a verified profile ready to confirm before you’ve even collected your baggage.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Webpimages/paschimvihar.webp"
            alt="Call girls in Mahipalpur near IGI Airport"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-white">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
            <FaPlane className="w-3.5 h-3.5" /> 10 minutes from IGI Airport
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Call Girls in Mahipalpur for Airport-Fast, Same-Day Booking
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl">
            Landed late, flying out early, or just staying nearby? Mahipalpur is the fastest corridor
            in Delhi to get a verified companion to your hotel — most bookings confirm in minutes and
            arrive inside half an hour.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Book on WhatsApp
            </a>
            <Link
              href="/aerocity-escorts"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition"
            >
              See Aerocity Options
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Mahipalpur has grown into one of Delhi&apos;s most searched neighbourhoods for a very simple
            reason — it sits closer to IGI Airport than almost anywhere else in the city. For anyone
            landing after midnight, catching a 6 a.m. flight, or stuck on a long layover, booking
            <strong className="font-semibold text-gray-900"> call girls in Mahipalpur</strong> means the
            distance between the airport and your hotel is never the reason the night doesn&apos;t happen.
            Our Mahipalpur call girl service was built specifically around this — a companion who&apos;s
            already based in the area, ready to arrive as soon as you&apos;ve checked in.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Unlike bookings that route someone across the city, our Mahipalpur escorts are positioned
            along the NH-8 corridor itself, which is why response times here consistently beat every
            other part of Delhi we cover. Whether you&apos;re a business traveller with a few free hours
            before a connecting flight or you&apos;re staying the full night at a hotel near the airport,
            the same standard of verification, discretion, and{' '}
            <strong className="font-semibold text-gray-900">premium escorts in Mahipalpur</strong> applies —
            no exceptions for how long you&apos;re in town.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Escorts in Mahipalpur, Built Around Your Schedule
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every traveller passing through Mahipalpur has a different kind of night in mind, so our
            call girls near IGI Airport aren&apos;t offered as a one-size booking. Some clients want a
            relaxed evening in after a long-haul flight; others are here for a short window between
            connections and want things moving the moment they land. Either way, our coordinators match
            you with a companion whose availability actually fits your timeline — not the other way around.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Because Mahipalpur sees constant traffic from call girls near Delhi Airport searches, we
            keep a wider bench of verified profiles active here than in most locations — including
            companions comfortable with odd-hour check-ins, which is common given how many guests arrive
            on red-eye flights. If you&apos;re specifically searching for airport transit escorts, let us
            know your layover window when you message — we&apos;ll only suggest someone who can
            realistically make it there and back inside your available time.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Clients staying closer to the terminal sometimes prefer our{' '}
            <Link href="/aerocity-escorts" className="text-purple-700 font-medium hover:underline">
              call girls near Aerocity
            </Link>{' '}
            instead, since a handful of hotels sit right on the border between the two areas — if
            you&apos;re not sure which zone your hotel falls in, send us the name and we&apos;ll route
            you to whichever companion is genuinely closest.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Clients Book Mahipalpur Specifically
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            It isn&apos;t the flashiest part of Delhi — but for anyone whose schedule is built around a flight,
            it&apos;s the most practical one, and the reason people come back to book call girls in Mahipalpur instead of anywhere else nearby.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <FaPlane className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Built Around Flight Times</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We&apos;re used to coordinating around delayed flights, red-eye arrivals, and short layovers —
                not fixed appointment slots that don&apos;t survive a gate change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fastest Response in Delhi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Because our companions are already positioned near the airport corridor, Mahipalpur
                typically gets the quickest arrival time of any location we cover.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discreet at Transit Hotels</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The 3-star hotels along this stretch see a lot of transit traffic, so a quiet, quick
                check-in draws no more attention than any other guest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <FaUserCheck className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, Not Just Listed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every profile offered as a premium escort in Mahipalpur goes through the same
                identity and safety checks as our city-centre locations — proximity to the airport
                doesn&apos;t mean a lower standard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <FaMapMarkerAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Genuinely Local Coverage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t stretch one companion across half of Delhi. Mahipalpur bookings are handled
                by profiles who actually live or stay in this corridor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <FaWhatsapp className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay After You Meet</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment, no deposit to hold your slot — you confirm by chatting on
                WhatsApp, and payment happens once your companion has arrived.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Mahipalpur</h2>
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
                    alt={`Call girl profile in Mahipalpur near IGI Airport`}
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
            Where Clients Usually Stay in Mahipalpur
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

      {/* Areas We Cover */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Landmarks &amp; Micro-Areas We Cover Around Mahipalpur
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            &ldquo;Mahipalpur&rdquo; on a map search actually spans a fairly wide stretch, so if your hotel
            sits just outside the core area, there&apos;s still a good chance we cover it. Areas we route
            bookings to routinely include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {nearbyAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-4 py-3 text-sm text-gray-700"
              >
                <FaMapMarkerAlt className="text-purple-500 w-3.5 h-3.5 flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Mahipalpur Booking Questions
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
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Landing Soon? Book Before You Touch Down</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-7">
          Send your hotel name and expected arrival time on WhatsApp and we&apos;ll have everything ready
          by the time you check in. Whether you&apos;re looking to book call girls in Mahipalpur for a
          full night or need airport transit escorts for a short layover, confirmation usually takes
          minutes — and you only pay after you meet. No advance, no deposit, no waiting around.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:shadow-xl transition"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </section>
    </main>
  );
}
