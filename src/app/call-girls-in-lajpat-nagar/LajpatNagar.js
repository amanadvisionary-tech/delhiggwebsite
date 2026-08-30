'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaStore, FaMapMarkedAlt, FaQuoteLeft, FaSubway, FaShieldAlt, FaStar, FaConciergeBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/Model2.webp', label: 'Divya • 25', tag: 'Central Market Regular' },
  { image: '/Webpimages/Model21.webp', label: 'Kritika • 24', tag: 'Evening Dates' },
  { image: '/Webpimages/download (5).webp', label: 'Sonia • 26', tag: 'High Profile' },
  { image: '/Webpimages/download (6).webp', label: 'Pooja • 23', tag: 'South Delhi' },
  { image: '/Webpimages/download (8).webp', label: 'Ritu • 25', tag: 'Evening Dates' },
];

const stays = [
  { name: 'Central Market Suites', note: 'Walking distance from the market itself', amenities: ['Free WiFi', 'Room Service'] },
  { name: 'South Delhi Boutique Hotel', note: 'Popular for dinner-date style bookings', amenities: ['Restaurant On-site', 'Late Checkout'] },
  { name: 'Ring Road Residency', note: 'Easy access from South Extension & GK', amenities: ['24/7 Desk', 'Parking'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Noida', href: '/call-girls-in-noida' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
];

const highlights = [
  { title: 'Central Market Access', body: 'Minutes from the Central Market and Ring Road — one of the easiest parts of Delhi to reach from almost anywhere in the city.' },
  { title: 'South Delhi Convenience', body: 'A natural stop for clients coming from South Extension, Greater Kailash, or Defence Colony without crossing the whole city.' },
  { title: 'Established Local Presence', body: 'One of our longest-running coverage areas — we know the hotels, the timing, and the neighbourhood well.' },
  { title: 'Flexible Timing', body: 'From a quick midday visit near Central Market to a full evening booking, Lajpat Nagar rarely has the scheduling limits that busier commercial areas do.' },
];

const nearbyLandmarks = [
  'Lajpat Nagar Metro Station',
  'Central Market',
  'Ring Road',
  'South Extension',
  'Defence Colony',
  'Amar Colony',
];

const faqs = [
  {
    q: 'How close is your service to Lajpat Nagar Metro?',
    a: 'Very close — most of our Lajpat Nagar escorts are based within a short ride of the metro station itself, which is part of why response times here are consistently fast.',
  },
  {
    q: 'Do you offer high profile escorts in Lajpat Nagar, or only standard bookings?',
    a: 'Both. We keep a mix of standard and high profile call girls in Lajpat Nagar available, so if you specifically want a premium companion for a dinner date near Central Market or a full evening in, just say so when you message.',
  },
  {
    q: 'Is it safe to book call girls near Central Market during the day?',
    a: 'Yes. Daytime bookings around Central Market are common — the area is busy enough that a companion arriving to meet you draws no attention at all.',
  },
  {
    q: 'What’s the process to book call girls in Lajpat Nagar?',
    a: 'Message us on WhatsApp with your hotel or address and preferred time. We confirm a verified profile, and payment happens after you meet — pay after meeting is standard for every Lajpat Nagar booking, no advance required.',
  },
];

export default function LajpatNagar() {
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
              { '@type': 'ListItem', position: 3, name: 'Lajpat Nagar', item: `${SITE_URL}/call-girls-in-lajpat-nagar` },
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
                name: 'How close is your service to Lajpat Nagar Metro?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Very close — most of our Lajpat Nagar escorts are based within a short ride of the metro station itself, which is part of why response times here are consistently fast.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer high profile escorts in Lajpat Nagar, or only standard bookings?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Both. We keep a mix of standard and high profile call girls in Lajpat Nagar available, so if you specifically want a premium companion for a dinner date near Central Market or a full evening in, just say so when you message.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it safe to book call girls near Central Market during the day?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Daytime bookings around Central Market are common — the area is busy enough that a companion arriving to meet you draws no attention at all.',
                },
              },
              {
                '@type': 'Question',
                name: 'What’s the process to book call girls in Lajpat Nagar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Message us on WhatsApp with your hotel or address and preferred time. We confirm a verified profile, and payment happens after you meet — pay after meeting is standard for every Lajpat Nagar booking, no advance required.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative w-full">
        <div className="relative h-[55vh] min-h-[420px] w-full">
          <Image
            src="/Webpimages/tajmahalhotel_lajpatnagar.webp"
            alt="Call girls in Lajpat Nagar, South Delhi"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto px-6 pb-14 w-full text-white">
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                <FaStore className="w-3.5 h-3.5" /> Central Market, South Delhi
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
                Call Girls in Lajpat Nagar, South Delhi&apos;s Easiest Meeting Point
              </h1>
              <p className="mt-4 text-white/90 max-w-xl text-base sm:text-lg">
                Central, well-connected, and one of the neighbourhoods we&apos;ve served longest — booking
                here tends to be the smoothest experience we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Of every neighbourhood we cover in Delhi,{' '}
            <strong className="font-semibold text-gray-900">call girls in Lajpat Nagar</strong> has been
            one of our most consistently booked services — and the reason isn&apos;t complicated. The
            area sits almost exactly at the centre of South Delhi, a short ride from Central Market,
            Ring Road, and the metro station itself, which means Lajpat Nagar escorts can reach clients
            staying anywhere from South Extension to Defence Colony without the long crosstown waits
            that slow down bookings elsewhere.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our Lajpat Nagar call girl service has been running here long enough to know the hotels,
            the quiet entrances, and the timing that works for this particular neighbourhood — which is
            a big part of why so many of our repeat South Delhi escorts clients started their bookings
            right here.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What to Expect Booking Here
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clients searching for call girls near Lajpat Nagar Metro are usually looking for exactly
            what the area is known for — fast, straightforward access without needing a car or a long
            taxi ride across the city. Our companions based near the station can be at your hotel or
            address quickly, which makes this one of our more reliable areas for same-evening bookings.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For anyone wanting more than a standard visit, we also keep{' '}
            <strong className="font-semibold text-gray-900">premium call girls in Lajpat Nagar</strong> and
            high profile escorts in Lajpat Nagar available for a proper evening out — dinner near
            Central Market, a slower-paced date, or simply a companion who fits a more polished setting
            than a quick hotel visit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clients staying slightly outside the core neighbourhood — closer to South Extension or
            along Ring Road — are still well covered here; the whole point of choosing escorts in South
            Delhi through Lajpat Nagar specifically is that almost nowhere in this part of the city is
            genuinely far from it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Booking is straightforward whether you&apos;re a first-time client or one of the many who
            come back specifically for this area. Message your hotel, home address, or nearest landmark,
            and we&apos;ll confirm a companion already familiar with the Central Market side of the
            neighbourhood rather than someone unfamiliar with the local lanes.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkedAlt className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Lajpat Nagar Works So Well</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mb-14">
            It&apos;s not the newest part of Delhi to open up, but that&apos;s exactly the advantage —
            the routes, hotels, and timing here are all well understood, and it&apos;s why we recommend
            it to first-time clients unsure where to book call girls in Lajpat Nagar from.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-l-2 border-purple-500 pl-5"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Lajpat Nagar</h2>
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
                    alt={`Call girl profile in Lajpat Nagar, South Delhi`}
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
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Where Clients Usually Stay in Lajpat Nagar
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

      {/* Areas / landmarks */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FaSubway className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Landmarks We Serve Around</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            If any of these are near your hotel or home, you&apos;re well within our fastest response range:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {nearbyLandmarks.map((l) => (
              <div
                key={l}
                className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-4 py-3 text-sm text-gray-700"
              >
                <FaShieldAlt className="text-purple-500 w-3.5 h-3.5 flex-shrink-0" />
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust block */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FaQuoteLeft className="text-purple-300 w-8 h-8 mx-auto mb-6" />
          <p className="text-xl sm:text-2xl font-medium text-gray-800 leading-relaxed">
            &ldquo;Lajpat Nagar is where we started building trust in South Delhi — most of our repeat
            clients from this side of the city first booked here.&rdquo;
          </p>
          <p className="mt-5 text-sm text-gray-500">— Delhi Girl, on why this area gets extra care</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Lajpat Nagar Booking Questions
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
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                )}
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
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Book in Lajpat Nagar Tonight</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-7">
          Pay only after you meet — send your hotel or area on WhatsApp and we&apos;ll confirm within
          minutes. Whether you&apos;re after a quick visit near the metro or want to book call girls in
          Lajpat Nagar for a full evening around Central Market, no advance payment is ever required.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:shadow-xl transition"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
          <Link
            href="/cheap-call-girls-in-delhi"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/50 text-white font-medium hover:bg-white/10 transition"
          >
            See Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
