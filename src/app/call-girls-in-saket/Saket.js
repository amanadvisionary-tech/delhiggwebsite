'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBuilding, FaShoppingBag, FaUserTie, FaShieldAlt, FaClock, FaStar, FaConciergeBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (32).webp', label: 'Aarohi • 24', tag: 'Press Enclave Regular' },
  { image: '/Webpimages/download (33).webp', label: 'Zoya • 25', tag: 'Mall-District Evenings' },
  { image: '/Webpimages/download (34).webp', label: 'Kiara • 23', tag: 'Metro-Side Bookings' },
  { image: '/Webpimages/download (35).webp', label: 'Tara • 26', tag: 'Malviya Nagar Border' },
  { image: '/Webpimages/download (36).webp', label: 'Aisha • 24', tag: 'Corporate Evenings' },
];

const stays = [
  { name: 'Press Enclave Mall-District Stay', note: 'Closest to Select Citywalk and DLF Place', amenities: ['Free WiFi', 'Late Checkout'] },
  { name: 'Saket Metro-Side Stay', note: 'Steps from the Yellow Line, fastest pickup coordination', amenities: ['Metro Access', 'Room Service'] },
  { name: 'Malviya Nagar Border Stay', note: 'Quiet, residential, easy late-night access', amenities: ['24/7 Desk', 'Cab Access'] },
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
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
];

const localities = [
  { name: 'Select Citywalk & DLF Place', note: 'Our most requested evening zone, mall and dining crowd' },
  { name: 'Saket Metro Station', note: 'Yellow Line access, fastest turnaround from nearby companions' },
  { name: 'Press Enclave Road', note: 'The main commercial stretch through Saket' },
  { name: 'Malviya Nagar border', note: 'Residential, quiet late-night access' },
  { name: 'Khirki Extension & Saidulajab', note: 'Low-key residential lanes, discreet arrivals' },
];

const steps = [
  {
    n: '01',
    title: 'Tell us your block or nearest mall',
    body: 'Saket is spread around a few distinct pockets — share your block or nearest landmark (Select Citywalk, the metro gate, Malviya Nagar border) so we match you with someone genuinely close by.',
  },
  {
    n: '02',
    title: 'Pick your companion',
    body: 'We share verified profiles based in or near Saket. No pressure, no obligation until you’re ready to confirm.',
  },
  {
    n: '03',
    title: 'Confirm and relax',
    body: 'Once confirmed, arrival is typically 20–30 minutes depending on your exact block — payment only after you meet.',
  },
];

const faqs = [
  {
    q: 'Do you cover the whole of Saket, or just the mall district?',
    a: 'We actively cover the Select Citywalk/DLF Place mall belt, Press Enclave Road, the Malviya Nagar border, and the Khirki Extension/Saidulajab lanes. If your block isn’t on that list, message us anyway — most requests outside these are still handled.',
  },
  {
    q: 'Is it discreet to book call girls in Saket given the mall crowd?',
    a: 'Yes. Our Saket escorts are used to the footfall around Select Citywalk and DLF Place and know how to arrive without drawing attention — quiet lobby entries are standard here.',
  },
  {
    q: 'Can I book a call girl near Saket Metro Station for a same-day visit?',
    a: 'Yes, this is one of our more common requests. Being on the Yellow Line means we usually have someone available with little notice for metro-side bookings.',
  },
  {
    q: 'Do I need to pay in advance for Saket bookings?',
    a: 'No. Pay later is standard — you confirm the booking on WhatsApp and settle payment only once your companion has actually arrived.',
  },
  {
    q: 'Do you have independent call girls in Saket, or only agency-managed profiles?',
    a: 'Both. Tell us if you specifically want independent call girls in Saket and we’ll match you accordingly — the verification standard is the same either way.',
  },
  {
    q: 'What’s the going rate for call girls in Saket?',
    a: 'Rates depend on duration and the companion you choose, and we share exact pricing on WhatsApp once you tell us what you’re looking for — no hidden add-ons at the door.',
  },
  {
    q: 'Can I book call girls in Saket tonight?',
    a: 'Yes, same-night booking is normal here. Message us now with your nearest landmark and we’ll tell you who’s available within the hour.',
  },
  {
    q: 'Can I book a full night with call girls in Saket, not just a short visit?',
    a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want when you message and we’ll match a companion and quote a rate for exactly that.',
  },
  {
    q: 'Do call girls in Saket visit hotels, homes, or both?',
    a: 'Both. Whether you’re staying near the mall district or want a home visit on the Malviya Nagar side, let us know when you message and we’ll plan the arrival accordingly.',
  },
  {
    q: 'How do I know the profile is real before I book?',
    a: 'Every companion listed for Saket has been through our verification process — a photo check and a short confirmation call before she’s added. We don’t list unverified or recycled profiles.',
  },
  {
    q: 'Is cash accepted, or do I need to pay digitally?',
    a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp when you confirm the booking.',
  },
  {
    q: 'What language do Saket companions speak?',
    a: 'Hindi and English both, comfortably. Given the mall crowd and corporate visitors passing through, most companions here are used to speaking with both local and out-of-town clients.',
  },
  {
    q: 'Do you also cover Hauz Khas and Panchsheel Park nearby?',
    a: 'Yes, both sit close enough to Saket that we can usually match a companion for either — mention it when you message and we’ll confirm.',
  },
];

export default function Saket() {
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
              { '@type': 'ListItem', position: 3, name: 'Saket', item: `${SITE_URL}/call-girls-in-saket` },
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
              <FaShoppingBag className="w-3.5 h-3.5" /> Select Citywalk & DLF Place district
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Call Girls in Saket, South Delhi
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Saket runs from the Select Citywalk mall belt down to quieter residential blocks near
              Malviya Nagar. Tell us roughly where you are and we&apos;ll match you with a companion
              who&apos;s actually nearby, not one commuting across South Delhi.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Message Us on WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
            <Image
              src="/Webpimages/Model21.webp"
              alt="Call girls in Saket, South Delhi"
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
            Saket is one of South Delhi&apos;s best-known commercial pockets, built around the Select
            Citywalk and DLF Place mall cluster on Press Enclave Road, with quieter residential blocks
            fanning out toward Malviya Nagar. A generic{' '}
            <strong className="font-semibold text-gray-900">call girls in Saket</strong> service rarely
            gets this right — someone based near the mall isn&apos;t much use if you&apos;re staying on the
            Malviya Nagar side. We start with your block first.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            The area draws a mixed crowd — shoppers and diners around the mall in the evening,
            residents in the surrounding blocks, and corporate visitors passing through South Delhi.
            Whatever brings you to Saket, our escorts are chosen and verified to the same standard, and
            every visit is handled with the discretion this busy commercial hub expects.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Connectivity is a big reason call girls in Saket book up fast on weekend evenings. The
            Yellow Line metro puts most companions within a short ride of Select Citywalk, and the
            area&apos;s position means someone based here can reach Hauz Khas, Panchsheel Park or
            Greater Kailash within fifteen to twenty minutes. That short travel window is why arrival
            times in Saket tend to run quicker than in more spread-out parts of South Delhi.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every profile listed for Saket escorts goes through the same verification we use across
            Delhi NCR — a genuine photo check and a short confirmation call before she&apos;s added to
            our roster. We don&apos;t run recycled photos or dead numbers, which is the most common
            complaint clients have about other Saket call girl listings online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Escorts in Saket, Block by Block
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Search call girls near Select Citywalk or call girls near DLF Place Saket and you&apos;ll
            almost always land a match from right around the mall belt — it&apos;s our most regularly
            booked zone given the restaurants and evening footfall there. If you&apos;re after{' '}
            <strong className="font-semibold text-gray-900">call girls near Saket Metro Station</strong>,
            we typically have someone available with little notice on the Yellow Line side.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For the quieter side of Saket — the Malviya Nagar border and the Khirki Extension/Saidulajab
            lanes — clients are usually after a lower-key, residential-style visit, similar in spirit to
            how our{' '}
            <Link href="/call-girls-in-lajpat-nagar" className="text-purple-700 font-medium hover:underline">
              Lajpat Nagar
            </Link>{' '}
            clients operate. Press Enclave Road itself sits right in the middle and works well for both
            crowds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wherever you fall in Saket, send us your nearest landmark rather than just &quot;Saket&quot;
            — the area covers a fair stretch, and a specific landmark is the single biggest factor in
            how fast we can get someone to you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;re after escort service in Saket or independent call girls in Saket specifically,
            both are available — just say so when you message. High profile escorts in Saket can also
            be arranged with a little more notice. Pricing is quoted directly on WhatsApp once we know
            your preferences, whether you&apos;re booking tonight or a few days ahead.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Call Girls in Saket Through Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            South Delhi bookings live or die on how well the coordination is handled — this is what we
            get right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaBuilding className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Block-Level Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t send whoever&apos;s free — we send whoever is actually close to your block,
                whether that&apos;s the mall district or the Malviya Nagar side.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mall-Crowd Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Saket stays busy around Select Citywalk well into the evening, so a low profile at the
                gate and quiet lobby entries are standard, not a special request.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Every Block</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment anywhere in Saket. Confirm on WhatsApp, and settle payment once
                your companion has actually arrived.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaStar className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real, Recent Profiles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No recycled photos or dead numbers. Every Saket profile is checked before it goes
                live and refreshed regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Companions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Types of Call Girls Available in Saket
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Not every client wants the same thing. Here&apos;s how clients usually narrow it down when
            they message us about Saket.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/independent-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Independent Call Girls</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For clients who specifically want independent escorts in Saket rather than an agency
                roster — direct, verified profiles, booked the same way.
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
                in Saket.
              </p>
            </Link>
            <Link href="/air-hostess-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Air Hostess-Style Escorts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Groomed, well-travelled companions suited to corporate visitors passing through South
                Delhi.
              </p>
            </Link>
            <Link href="/russian-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Russian &amp; Foreign Escorts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For clients specifically searching Russian call girls in Saket — verified foreign
                profiles available with advance notice.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Saket</h2>
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
                    alt={`Call girl profile in Saket, Delhi`}
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
            Where Clients Usually Stay in Saket
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

      {/* Locality grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Areas We Cover Inside Saket
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A rough guide — if your block isn&apos;t listed, message us anyway, we likely still cover it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {localities.map((s, i) => (
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
            What to Expect When You Book Call Girls in Saket
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weekend evenings in Saket tend to be busiest around Select Citywalk and DLF Place, when
            the mall and dining crowd peaks. Weekdays shift toward residents and corporate visitors on
            the Malviya Nagar side. Neither pattern is fixed, but mentioning your day and rough timing
            when you message helps us suggest someone realistically free and close by.
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
            who&apos;ve dealt with unreliable Saket call girl numbers before usually mention this as the
            biggest difference: what&apos;s promised on WhatsApp is what actually shows up.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Safety runs both directions. We don&apos;t share client details beyond what&apos;s needed to
            complete a booking, and companions are briefed the same way about discretion on their
            side. If something about a booking feels off before your companion arrives, message us
            immediately — we&apos;d rather sort it out than have you wait it out.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaUserTie className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Booking Works in Saket</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Popular with the mall-district evening crowd and South Delhi residents — speed matters
            here more than most places, so the process is kept simple.
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
            First Time Booking Call Girls in Saket? Read This
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A few honest tips from clients who&apos;ve booked here before.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">1.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Share your block, not just &quot;Saket&quot;.</strong>{' '}
                Select Citywalk and the Malviya Nagar border are technically both Saket but a fair
                distance apart. A specific block gets you a faster match.
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
                Saket mixes a busy mall district with quiet residential blocks — knowing which one you
                need helps us set the right arrival time.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">5.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Be upfront about duration.</strong>{' '}
                Short visit, a few hours, or full night — say so when you message. It changes both
                the companion we suggest and the rate we quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Saket Booking Questions
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
          In Saket Right Now?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your block on WhatsApp and we&apos;ll tell you exactly who&apos;s available near you
          tonight. Whether you want to book call girls in Saket near Select Citywalk or somewhere
          quieter on the Malviya Nagar side, there&apos;s no advance payment — just confirm and pay later
          once you&apos;ve met.
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
