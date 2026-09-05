'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBuilding, FaSubway, FaUserTie, FaShieldAlt, FaClock, FaStar, FaConciergeBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (15).webp', label: 'Simran • 24', tag: 'Ajmal Khan Road Regular' },
  { image: '/Webpimages/download (16).webp', label: 'Riya • 25', tag: 'Rajendra Place Evenings' },
  { image: '/Webpimages/download (17).webp', label: 'Anjali • 23', tag: 'Metro-Side Bookings' },
  { image: '/Webpimages/download (18).webp', label: 'Kavita • 26', tag: 'Market Area Visits' },
  { image: '/Webpimages/download (19).webp', label: 'Pooja • 24', tag: 'Corporate Evenings' },
];

const stays = [
  { name: 'Karol Bagh Metro-Side Stay', note: 'Steps from the Blue Line, fastest pickup coordination', amenities: ['Metro Access', 'Late Checkout'] },
  { name: 'Ajmal Khan Road Boutique Stay', note: 'In the middle of the market strip, easy evening bookings', amenities: ['Free WiFi', 'Room Service'] },
  { name: 'Rajendra Place Business Stay', note: 'Preferred by corporate clients working out of the offices nearby', amenities: ['Business Lounge', '24/7 Desk'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Saket', href: '/call-girls-in-saket' },
  { name: 'Paharganj', href: '/call-girls-in-paharganj' },
  { name: 'Hauz Khas', href: '/call-girls-in-hauz-khas' },
];

const localities = [
  { name: 'Ajmal Khan Road', note: 'The main market strip — our most frequently booked evening zone' },
  { name: 'Karol Bagh Metro Station', note: 'Blue Line access, fastest turnaround from nearby companions' },
  { name: 'Gaffar Market & Bank Street', note: 'Busy shopping crowd, quiet and discreet pickup points nearby' },
  { name: 'Rajendra Place', note: 'Office hub — after-work and business-travel bookings' },
  { name: 'Dev Nagar & Padam Singh Road', note: 'Residential belt, low-key arrivals' },
  { name: 'Ridge Road', note: 'Close to Pusa Road, popular with corporate stays' },
];

const steps = [
  {
    n: '01',
    title: 'Tell us your street or landmark',
    body: 'Karol Bagh is compact but crowded — share your nearest landmark (Ajmal Khan Road, the metro gate, Rajendra Place) so we match you with someone already close by.',
  },
  {
    n: '02',
    title: 'Pick your companion',
    body: 'We share verified profiles based in or near Karol Bagh. No pressure, no obligation until you’re ready to confirm.',
  },
  {
    n: '03',
    title: 'Confirm and relax',
    body: 'Once confirmed, arrival is typically 15–30 minutes given how central Karol Bagh is — payment only after you meet.',
  },
];

const faqs = [
  {
    q: 'Do you cover both the Ajmal Khan Road market side and Rajendra Place?',
    a: 'Yes. We actively cover the full Karol Bagh belt — the Ajmal Khan Road/Gaffar Market side, the Rajendra Place office side, and the Dev Nagar/Padam Singh Road residential lanes in between. Tell us your nearest landmark and we’ll match accordingly.',
  },
  {
    q: 'Is it discreet to book call girls in Karol Bagh given how busy the market area gets?',
    a: 'Yes. Our Karol Bagh escorts are used to the crowd and know how to arrive without drawing attention — quiet lobby entries and low-key pickup points are standard here, not a special request.',
  },
  {
    q: 'Can I book a call girl near Karol Bagh Metro Station for a same-day visit?',
    a: 'Yes, this is one of our most common requests. Being close to the Blue Line means we usually have someone available with very little notice for metro-side bookings.',
  },
  {
    q: 'Do I need to pay in advance for Karol Bagh bookings?',
    a: 'No. Pay later is standard — you confirm the booking on WhatsApp and settle payment only once your companion has actually arrived.',
  },
  {
    q: 'Do you have independent call girls in Karol Bagh, or only agency-managed profiles?',
    a: 'Both. If you specifically want independent call girls in Karol Bagh, tell us upfront and we’ll match you with a companion who works independently rather than through a larger roster — same verification standard either way.',
  },
  {
    q: 'What’s the going rate for call girls in Karol Bagh?',
    a: 'Rates depend on duration and the companion you choose, and we share exact pricing on WhatsApp once you tell us what you’re looking for — nothing hidden, no surprise add-ons at the door.',
  },
  {
    q: 'Can I book call girls in Karol Bagh tonight, or does it need advance notice?',
    a: 'Same-night booking is normal here given how central Karol Bagh is. Message us now with your landmark and we’ll tell you who’s available within the hour.',
  },
  {
    q: 'Can I book a full night with call girls in Karol Bagh, not just a short visit?',
    a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want when you message and we’ll match a companion and quote a rate for exactly that.',
  },
  {
    q: 'Do call girls in Karol Bagh visit hotels, homes, or both?',
    a: 'Both. Whether you’re staying at a hotel near Ajmal Khan Road or want a home visit in a quieter lane, let us know when you message and we’ll plan the arrival accordingly.',
  },
  {
    q: 'How do I know the profile is real before I book?',
    a: 'Every companion listed for Karol Bagh has been through our verification process — a photo check and a short confirmation call before she’s added. We don’t list unverified or recycled profiles.',
  },
  {
    q: 'Is cash accepted, or do I need to pay digitally?',
    a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp when you confirm the booking.',
  },
  {
    q: 'What language do Karol Bagh companions speak?',
    a: 'Hindi and English both, comfortably. Given how central and commercial the area is, most companions here are used to speaking with both local and out-of-town clients.',
  },
];

export default function KarolBagh() {
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
              { '@type': 'ListItem', position: 3, name: 'Karol Bagh', item: `${SITE_URL}/call-girls-in-karol-bagh` },
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
              <FaSubway className="w-3.5 h-3.5" /> Karol Bagh Metro • Blue Line
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Call Girls in Karol Bagh, Central Delhi
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Karol Bagh is one of Delhi&apos;s busiest central markets, and that works in your favour —
              companions based here rarely have far to travel. Tell us your nearest landmark and
              we&apos;ll match you with someone genuinely close by, not someone crossing the city in traffic.
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
              src="/Webpimages/bannermodel.webp"
              alt="Call girls in Karol Bagh, Central Delhi"
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
            Karol Bagh sits right in the middle of Delhi — walking distance from Paharganj and the New
            Delhi Railway Station, a short ride from Connaught Place, and dense with shoppers, traders
            and office-goers all day long. That density is exactly why{' '}
            <strong className="font-semibold text-gray-900">call girls in Karol Bagh</strong> works so
            well for fast bookings: companions based in the area are almost always genuinely nearby,
            not commuting in from across town.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            The area draws a mixed crowd — shoppers and traders working the Ajmal Khan Road and Gaffar
            Market strip, corporate clients from the Rajendra Place office belt, and residents in the
            quieter Dev Nagar and Padam Singh Road lanes. Whatever brings you to Karol Bagh, our
            escorts are chosen and verified to the same standard, and every visit is handled with the
            discretion this busy, always-watching market area expects.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Connectivity is a big part of why call girls in Karol Bagh get booked so often. The Blue
            Line metro puts almost every companion within a short ride of your hotel or home, and the
            area&apos;s central position means someone based here can just as easily reach Paharganj,
            Pusa Road or even parts of Connaught Place within twenty minutes. That short travel window
            is exactly why arrival times in Karol Bagh tend to run faster than in more spread-out parts
            of Delhi.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every profile listed for Karol Bagh escorts goes through the same verification process we
            use across Delhi NCR — a real photo check, a basic background screen, and a short call
            before the first booking to confirm availability and expectations. We don&apos;t list
            unverified numbers or recycled photos, which is a common complaint clients have about
            other Karol Bagh call girl listings online. If a profile is on our page, it&apos;s active and
            checked, not a placeholder.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Escorts in Karol Bagh, Street by Street
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Search call girls near Karol Bagh Metro and you&apos;ll almost always land a match from right
            around the Blue Line gate — it&apos;s our fastest turnaround zone given how many companions
            are based within a few minutes&apos; walk. If you&apos;re after{' '}
            <strong className="font-semibold text-gray-900">call girls in Karol Bagh near
            Ajmal Khan Road</strong>, that&apos;s our single most requested area, and we typically have
            someone available with very little notice through the evening.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For the office side of Karol Bagh — Rajendra Place, closer to Ring Road — clients looking
            for call girls near Rajendra Place are usually after-work or business bookings, similar in
            spirit to how our{' '}
            <Link href="/call-girls-in-connaught-place" className="text-purple-700 font-medium hover:underline">
              Connaught Place clients
            </Link>{' '}
            operate, just a shorter ride away. Residential lanes such as Dev Nagar and Padam Singh Road
            call for a different kind of care — quieter arrivals and companions used to that setting.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wherever you fall in the area, send us your nearest landmark rather than just &quot;Karol
            Bagh&quot; — the market is large and dense, and a specific landmark is the single biggest
            factor in how fast we can get someone to you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If your search is closer to escort service in Karol Bagh or independent call girls in
            Karol Bagh specifically, both are available — just tell us which you prefer when you
            message. High profile escorts in Karol Bagh are also bookable with a little more notice.
            For pricing, we quote directly on WhatsApp once we know your preferences, and our WhatsApp
            number stays the same whether you&apos;re booking tonight or planning a few days ahead.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Call Girls in Karol Bagh Through Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Central Delhi bookings live or die on how fast and discreet the coordination is — this is
            what we get right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaBuilding className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Landmark-Level Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t send whoever&apos;s free — we send whoever is actually close to your street,
                which matters most in a market this dense.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Crowd-Ready Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Karol Bagh never really quiets down, so a low profile at the gate and quiet lobby
                entries are standard, not a special request.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Every Street</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment anywhere in Karol Bagh. Confirm on WhatsApp, and settle payment
                once your companion has actually arrived.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaStar className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real, Recent Profiles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No recycled photos or inactive numbers. Every Karol Bagh profile is checked before it
                goes live and refreshed regularly so who you see is who actually arrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Companions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Types of Call Girls Available in Karol Bagh
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Not every client wants the same thing. Here&apos;s how clients usually narrow it down when
            they message us about Karol Bagh.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/independent-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Independent Call Girls</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For clients who specifically want independent escorts in Karol Bagh rather than an
                agency roster — direct, verified profiles, booked the same way.
              </p>
            </Link>
            <Link href="/high-profile-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">High Profile Escorts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Polished, premium companions for clients who want an elevated evening near the market
                district or a quiet corporate stay.
              </p>
            </Link>
            <Link href="/collage-call-girls-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">College Call Girls</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Younger, easygoing companions for clients who prefer a relaxed, low-formality evening
                in Karol Bagh.
              </p>
            </Link>
            <Link href="/air-hostess-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Air Hostess-Style Escorts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Groomed, well-travelled companions suited to business travellers staying near
                Rajendra Place or the metro corridor.
              </p>
            </Link>
            <Link href="/russian-escorts-in-delhi" className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
              <h3 className="font-semibold text-gray-900 mb-2">Russian &amp; Foreign Escorts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For clients specifically searching Russian call girls in Karol Bagh — verified foreign
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Karol Bagh</h2>
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
                    alt={`Call girl profile in Karol Bagh, Delhi`}
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
            Where Clients Usually Stay in Karol Bagh
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
            Areas We Cover Inside Karol Bagh
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A rough guide — if your street isn&apos;t listed, message us anyway, we likely still cover it.
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
            What to Expect When You Book Call Girls in Karol Bagh
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weekday evenings in Karol Bagh tend to be busier with corporate and after-work bookings —
            clients from the Rajendra Place office belt looking to unwind before heading home.
            Weekends shift toward the Ajmal Khan Road side, where the market crowd and restaurant
            footfall make evening bookings the norm. Neither pattern is fixed, but it&apos;s worth
            mentioning your day and rough timing when you message, since it helps us suggest a
            companion who&apos;s realistically free and nearby.
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
            who&apos;ve dealt with unreliable Karol Bagh call girl numbers before usually mention this as
            the biggest difference: what&apos;s promised on WhatsApp is what actually shows up.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Booking Works in Karol Bagh</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Popular with shoppers, traders and the office crowd from Rajendra Place — speed matters
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
            First Time Booking Call Girls in Karol Bagh? Read This
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A few honest tips from clients who&apos;ve booked here before.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">1.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Send a landmark, not just &quot;Karol Bagh&quot;.</strong>{' '}
                Ajmal Khan Road, the metro gate and Rajendra Place are all technically Karol Bagh but
                minutes apart in traffic. A landmark gets you a faster, closer match.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">2.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Confirm on WhatsApp, not a phone call.</strong>{' '}
                Text keeps a record of what was agreed — timing, location, and rate — which avoids
                confusion for both sides at the door.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">3.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Pay only after you meet.</strong>{' '}
                We never ask for advance payment or a booking fee. If anyone claiming to be from Delhi
                Girl asks for money upfront, it isn&apos;t us.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">4.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Tell us hotel or home visit upfront.</strong>{' '}
                Karol Bagh has both busy commercial buildings and quiet residential lanes — knowing
                which one you need helps us match the right companion and set the right arrival time.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-bold text-purple-600">5.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Be upfront about duration.</strong>{' '}
                Short visit, a few hours, or full night — say so when you message. It changes both the
                companion we suggest and the rate we quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Karol Bagh Booking Questions
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
          In Karol Bagh Right Now?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your nearest landmark on WhatsApp and we&apos;ll tell you exactly who&apos;s available near
          you tonight. Whether you want to book call girls in Karol Bagh near Ajmal Khan Road or
          somewhere quieter on the Rajendra Place side, there&apos;s no advance payment — just confirm
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
