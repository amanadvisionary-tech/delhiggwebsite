'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBuilding, FaPlane, FaUserTie, FaShieldAlt, FaClock, FaStar, FaConciergeBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (27).webp', label: 'Ishita • 25', tag: 'Pocket C Regular' },
  { image: '/Webpimages/download (28).webp', label: 'Meher • 24', tag: 'Mall-District Evenings' },
  { image: '/Webpimages/download (29).webp', label: 'Naina • 26', tag: 'Sector B Bookings' },
  { image: '/Webpimages/download (30).webp', label: 'Ruhi • 23', tag: 'Airport-Side Visits' },
  { image: '/Webpimages/download (31).webp', label: 'Diya • 25', tag: 'Corporate Evenings' },
];

const stays = [
  { name: 'Pocket C Residential Stay', note: 'Quiet, gated, closest to the mall district', amenities: ['Free WiFi', 'Late Checkout'] },
  { name: 'Airport-Side Business Stay', note: 'Preferred by travellers landing at IGI Airport', amenities: ['Business Lounge', '24/7 Desk'] },
  { name: 'Sector D Boutique Stay', note: 'Close to Vasant Vihar, quiet and easy access', amenities: ['Room Service', 'Metro-Bound Cab Access'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
  { name: 'Saket', href: '/call-girls-in-saket' },
  { name: 'Paharganj', href: '/call-girls-in-paharganj' },
  { name: 'Hauz Khas', href: '/call-girls-in-hauz-khas' },
];

const pockets = [
  { name: 'Pocket A, B & C', note: 'Residential heart of Vasant Kunj, quiet gated access' },
  { name: 'Sector B, C & D', note: 'Close to Ambience Mall and DLF Promenade' },
  { name: 'Near Ambience Mall & DLF Emporio', note: 'Our most requested evening zone' },
  { name: 'Vasant Vihar border', note: 'Diplomatic-enclave adjacent, extra discretion expected' },
  { name: 'Airport-side (NH-48)', note: '15–20 minutes from IGI Airport, popular with transit guests' },
];

const steps = [
  {
    n: '01',
    title: 'Tell us your pocket or sector',
    body: 'Vasant Kunj is spread across several pockets and sectors — share yours so we match you with someone already close by, not crossing the whole colony.',
  },
  {
    n: '02',
    title: 'Pick your companion',
    body: 'We share verified profiles based in or near Vasant Kunj. No pressure, no obligation until you’re ready to confirm.',
  },
  {
    n: '03',
    title: 'Confirm and relax',
    body: 'Once confirmed, arrival is typically 20–35 minutes depending on your exact pocket — payment only after you meet.',
  },
];

const faqs = [
  {
    q: 'Do you cover every pocket of Vasant Kunj, or just the area near the malls?',
    a: 'We actively cover Pockets A, B and C, Sectors B, C and D, and the airport-side belt along NH-48. If your pocket isn’t on that list, message us anyway — most requests outside these are still handled, just with a slightly longer arrival window.',
  },
  {
    q: 'Is it discreet to book call girls in Vasant Kunj near a residential society?',
    a: 'Yes. Vasant Kunj is mostly gated residential blocks, so our companions are used to quiet, low-profile visits and don’t draw attention at the gate or lobby.',
  },
  {
    q: 'Can I book call girls near Ambience Mall or DLF Promenade for an evening out?',
    a: 'Yes, this is one of our most frequently booked requests given the mall and dining cluster there. Let us know your plan when you message and we’ll match a companion comfortable with that setting.',
  },
  {
    q: 'I’m landing at IGI Airport — is Vasant Kunj a convenient stop?',
    a: 'Very much so. Vasant Kunj sits close to NH-48 and is roughly 15–20 minutes from the airport, similar to how our Mahipalpur and Aerocity clients use those areas for transit stays.',
  },
  {
    q: 'Do I need to pay in advance for Vasant Kunj bookings?',
    a: 'No. Pay later is standard across every pocket we serve — you confirm the booking on WhatsApp and pay only once your companion has arrived.',
  },
  {
    q: 'Do you offer independent call girls in Vasant Kunj?',
    a: 'Yes. If you specifically want independent call girls in Vasant Kunj rather than an agency-managed profile, tell us upfront and we’ll match accordingly — verification standards are the same either way.',
  },
  {
    q: 'What are the rates for call girls in Vasant Kunj?',
    a: 'Rates depend on duration and the companion you choose. We share exact pricing on WhatsApp once you tell us what you’re looking for, with no hidden add-ons at the door.',
  },
  {
    q: 'Can I book someone in Vasant Kunj tonight?',
    a: 'Yes, same-night booking is common here, including for airport-side transit stays. Message us now with your pocket or sector and we’ll confirm availability.',
  },
  {
    q: 'Can I book a full night with call girls in Vasant Kunj, not just a short visit?',
    a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want when you message and we’ll match a companion and quote a rate for exactly that.',
  },
  {
    q: 'Do call girls in Vasant Kunj visit hotels, homes, or both?',
    a: 'Both. Whether you’re staying near the mall district or want a home visit in a residential pocket, let us know when you message and we’ll plan the arrival accordingly.',
  },
  {
    q: 'How do I know the profile is real before I book?',
    a: 'Every companion listed for Vasant Kunj has been through our verification process — a photo check and a short confirmation call before she’s added. We don’t list unverified or recycled profiles.',
  },
  {
    q: 'Is cash accepted, or do I need to pay digitally?',
    a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp when you confirm the booking.',
  },
  {
    q: 'What language do Vasant Kunj companions speak?',
    a: 'Hindi and English both, comfortably. Given the diplomatic-enclave and airport-side crowd nearby, most companions here are used to speaking with both local and international clients.',
  },
  {
    q: 'Do you cover the Vasant Vihar side too, or only Vasant Kunj proper?',
    a: 'Vasant Vihar sits right on the border, so yes — message us and we’ll match a companion who can reach either side without much delay.',
  },
];

export default function VasantKunj() {
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
              { '@type': 'ListItem', position: 3, name: 'Vasant Kunj', item: `${SITE_URL}/call-girls-in-vasant-kunj` },
            ],
          }),
        }}
      />

      {/* FAQPage structured data — static, matches the visible FAQ items exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full mb-4">
              <FaPlane className="w-3.5 h-3.5" /> 15–20 min from IGI Airport
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Call Girls in Vasant Kunj, Matched to Your Pocket
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Vasant Kunj spreads across several residential pockets and sectors around the mall
              district, so we don&apos;t give every client the same answer. Tell us roughly where you
              are and we&apos;ll match you with a companion who&apos;s actually nearby.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Share Your Pocket on WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
            <Image
              src="/Webpimages/banner-2.webp"
              alt="Call girls in Vasant Kunj, Delhi"
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
            Vasant Kunj is one of South Delhi&apos;s largest planned colonies, built around a cluster of
            malls — Ambience Mall, DLF Promenade and DLF Emporio — and bordered by Vasant Vihar and the
            airport-facing NH-48 stretch. A generic{' '}
            <strong className="font-semibold text-gray-900">call girls in Vasant Kunj</strong> service
            rarely works well here for the same reason Dwarka doesn&apos;t: a companion based in Pocket A
            isn&apos;t much use to someone staying near the airport side. We start with your pocket first.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            The area draws a genuinely mixed crowd — residents in the gated pockets, shoppers and
            diners around the mall belt in the evening, and travellers using Vasant Kunj as a quiet,
            close-to-airport base. Whatever brings you here, our Vasant Kunj escorts are chosen and
            verified with the same standard, and every booking is handled with the discretion this
            mostly-residential colony expects.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Connectivity is part of why call girls in Vasant Kunj book up quickly on weekend evenings.
            NH-48 runs right along the colony&apos;s edge, which means a companion based here can reach
            the airport side in under twenty minutes, Vasant Vihar in ten, and Gurgaon&apos;s border in
            under half an hour. Very few South Delhi localities offer that combination of quiet
            residential streets and fast highway access.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every companion listed for Vasant Kunj goes through the same verification we use across
            Delhi NCR — a genuine photo check and a short confirmation call before she&apos;s added to our
            roster. We don&apos;t run recycled photos or dead numbers, which is the single biggest
            complaint clients have about other Vasant Kunj call girl listings online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Escorts in Vasant Kunj, Pocket by Pocket
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Search call girls near Ambience Mall Vasant Kunj or call girls near DLF Promenade and
            you&apos;ll almost always land a match from right around the mall district — it&apos;s our most
            regularly booked zone given the restaurants and evening footfall there. If you&apos;re after{' '}
            <strong className="font-semibold text-gray-900">VIP call girls in Vasant Kunj Sector B or C</strong>,
            we typically have someone available with little notice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For travellers on the airport side along NH-48, a Vasant Kunj booking is often combined
            with a short stay before or after a flight, similar to how our{' '}
            <Link href="/call-girls-in-mahipalpur" className="text-purple-700 font-medium hover:underline">
              Mahipalpur
            </Link>{' '}
            and{' '}
            <Link href="/aerocity-escorts" className="text-purple-700 font-medium hover:underline">
              Aerocity
            </Link>{' '}
            clients operate. Clients near the Vasant Vihar border tend to expect an extra layer of
            discretion given the diplomatic-enclave neighbourhood next door, and we plan pickups
            accordingly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wherever you fall inside Vasant Kunj, tell us your pocket or sector honestly rather than
            just &quot;near the mall&quot; — it&apos;s the single biggest factor in how fast we can get
            someone to you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Looking specifically for escort service in Vasant Kunj or independent call girls in
            Vasant Kunj? Both are available — mention your preference when you message. High profile
            escorts in Vasant Kunj can also be arranged with a little more notice. Pricing is quoted
            directly on WhatsApp once we know what you need, whether that&apos;s a same-night booking or
            something planned a few days out.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Call Girls in Vasant Kunj Through Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            A colony this spread out lives or dies on how well the coordination is handled — this is
            what we get right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaBuilding className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pocket-Level Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t send whoever&apos;s free — we send whoever is actually close to your pocket
                or sector, which is the whole point in a colony this large.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gated-Community Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vasant Kunj is mostly gated residential blocks, so quiet arrival and a low profile at
                the gate are standard, not a special request.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Every Pocket</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment anywhere in Vasant Kunj. Confirm on WhatsApp, and settle payment
                once your companion has actually arrived.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaStar className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real, Recent Profiles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No recycled photos or dead numbers. Every Vasant Kunj profile is checked before it
                goes live and refreshed regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Companions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Types of Call Girls Available in Vasant Kunj
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Not every client wants the same thing. Here&apos;s how clients usually narrow it down when
            they message us about Vasant Kunj.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/independent-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Independent Call Girls</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For clients who specifically want independent escorts in Vasant Kunj rather than an
                agency roster — direct, verified profiles, booked the same way.
              </p>
            </Link>
            <Link href="/high-profile-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">High Profile Escorts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Polished, premium companions for a refined evening around the mall district or a
                quiet residential visit.
              </p>
            </Link>
            <Link href="/collage-call-girls-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">College Call Girls</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Younger, easygoing companions for clients who prefer a relaxed, low-formality evening
                in Vasant Kunj.
              </p>
            </Link>
            <Link href="/air-hostess-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Air Hostess-Style Escorts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Groomed, well-travelled companions suited to guests using Vasant Kunj as an
                airport-side base.
              </p>
            </Link>
            <Link href="/russian-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Russian &amp; Foreign Escorts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For clients specifically searching Russian call girls in Vasant Kunj — verified
                foreign profiles available with advance notice.
              </p>
            </Link>
            <Link href="/housewife-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Housewife Companions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mature, experienced companions for clients who prefer a calmer, more confident evening
                over a younger profile.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Vasant Kunj</h2>
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
                    alt={`Call girl profile in Vasant Kunj, Delhi`}
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
            Where Clients Usually Stay in Vasant Kunj
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

      {/* Pocket grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Areas We Cover Inside Vasant Kunj
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A rough guide — if your pocket isn&apos;t listed, message us anyway, we likely still cover it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pockets.map((s, i) => (
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

      {/* What to expect */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            What to Expect When You Book Call Girls in Vasant Kunj
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weekday evenings in Vasant Kunj tend to skew toward residents and airport-side travellers
            passing through, while weekends shift toward the Ambience Mall and DLF Promenade dining
            crowd. Neither pattern is fixed, but mentioning your day and rough timing when you message
            helps us suggest someone realistically free and close by.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Communication stays simple throughout. You&apos;ll get a WhatsApp reply with a profile,
            approximate arrival time, and the rate for the duration you asked for — no back-and-forth
            negotiation, no pressure to upgrade once you&apos;re already talking. If plans change on your
            side, just say so; we&apos;d rather reschedule than have anyone rush.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hygiene and comfort are treated as basics, not selling points — clean, well-presented
            companions, straightforward conversation, and no awkward surprises at the door. Clients
            who&apos;ve dealt with unreliable Vasant Kunj call girl numbers before usually mention this
            as the biggest difference: what&apos;s promised on WhatsApp is what actually shows up.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Safety runs both directions. We don&apos;t share client details beyond what&apos;s needed to
            complete a booking, and companions are briefed the same way about discretion on their
            side, which matters even more in a gated-community colony like this one.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaUserTie className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Booking Works in Vasant Kunj</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Popular with residents, mall-district evenings and airport-side travellers — discretion
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

      {/* Booking Tips */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            First Time Booking Call Girls in Vasant Kunj? Read This
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A few honest tips from clients who&apos;ve booked here before.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">1.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Share your pocket or sector, not just &quot;Vasant Kunj&quot;.</strong>{' '}
                Pocket A and the airport-side belt along NH-48 are technically the same colony but
                far apart in practice. A specific pocket gets you a faster match.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">2.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Confirm on WhatsApp, not a phone call.</strong>{' '}
                Text keeps a clear record of timing, location and rate, so there&apos;s no confusion for
                either side at the door.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">3.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Pay only after you meet.</strong>{' '}
                We never ask for advance payment or a booking fee. If anyone claiming to be from
                Delhi Girl asks for money upfront, it isn&apos;t us.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">4.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Tell us hotel or home visit upfront.</strong>{' '}
                Vasant Kunj mixes gated residential blocks with the mall district — knowing which one
                you need helps us set the right arrival time.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">5.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Mention if you&apos;re transiting through the airport.</strong>{' '}
                Vasant Kunj is a popular short-stay base for flights — say so and we&apos;ll plan around
                your landing or departure time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Vasant Kunj Booking Questions
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
          In Vasant Kunj Right Now?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your pocket on WhatsApp and we&apos;ll tell you exactly who&apos;s available near you
          tonight. Whether you want to book call girls in Vasant Kunj for a quiet residential visit or
          need someone near the mall district for the evening, there&apos;s no advance payment — just
          confirm and pay later once you&apos;ve met.
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
