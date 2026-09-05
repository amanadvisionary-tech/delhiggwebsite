'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBuilding, FaMoon, FaUserTie, FaShieldAlt, FaClock, FaStar, FaConciergeBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (6).webp', label: 'Naina • 25', tag: 'Village Evenings' },
  { image: '/Webpimages/download (7).webp', label: 'Ira • 24', tag: 'Deer Park Side' },
  { image: '/Webpimages/download (8).webp', label: 'Sanya • 26', tag: 'Aurobindo Place Regular' },
  { image: '/Webpimages/download (9).webp', label: 'Myra • 23', tag: 'Late-Night Requests' },
  { image: '/Webpimages/download4.webp', label: 'Diya • 25', tag: 'Corporate Evenings' },
];

const stays = [
  { name: 'Hauz Khas Village Boutique Stay', note: 'In the middle of the bar-and-lounge strip', amenities: ['Free WiFi', 'Late Checkout'] },
  { name: 'Aurobindo Place Business Stay', note: 'Close to the market and nearby offices', amenities: ['Business Lounge', '24/7 Desk'] },
  { name: 'Green Park Border Stay', note: 'Quiet, residential, easy late-night access', amenities: ['Room Service', 'Cab Access'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Saket', href: '/call-girls-in-saket' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
];

const localities = [
  { name: 'Hauz Khas Village', note: 'The bar, lounge and nightlife strip — our most requested zone' },
  { name: 'Hauz Khas Metro Station', note: 'Yellow Line access, fastest turnaround from nearby companions' },
  { name: 'Aurobindo Place Market', note: 'Commercial belt, popular with after-work bookings' },
  { name: 'Deer Park side', note: 'Quiet, scenic, low-key arrivals' },
  { name: 'Green Park border', note: 'Residential, easy late-night access' },
];

const companionTypes = [
  { name: 'High Profile Escorts', href: '/high-profile-escorts-in-delhi', body: 'Polished, premium companions suited to an evening around the Hauz Khas Village bar-and-lounge scene.' },
  { name: 'Independent Call Girls', href: '/independent-escorts-in-delhi', body: 'For clients who specifically want independent escorts in Hauz Khas rather than an agency roster.' },
  { name: 'Model Call Girls', href: '/model-call-girls-in-delhi', body: 'Stylish, presentable companions that fit naturally into the Village&apos;s upscale evening crowd.' },
  { name: 'Russian & Foreign Escorts', href: '/russian-escorts-in-delhi', body: 'For clients specifically searching Russian call girls in Hauz Khas — verified foreign profiles with advance notice.' },
  { name: 'College Call Girls', href: '/collage-call-girls-in-delhi', body: 'Younger, easygoing companions for a relaxed, low-formality evening near Aurobindo Place.' },
  { name: 'Housewife Companions', href: '/housewife-escorts-in-delhi', body: 'Mature, experienced companions for clients who prefer a calmer, more confident evening.' },
];

const steps = [
  { n: '01', title: 'Tell us your block or nearest landmark', body: 'Hauz Khas spans the Village, the market, and quieter residential blocks — share yours so we match you with someone genuinely close by.' },
  { n: '02', title: 'Pick your companion', body: 'We share verified profiles based in or near Hauz Khas. No pressure, no obligation until you’re ready to confirm.' },
  { n: '03', title: 'Confirm and relax', body: 'Once confirmed, arrival is typically 20–30 minutes depending on your exact block — payment only after you meet.' },
];

const tips = [
  { t: 'Share your block, not just "Hauz Khas".', b: 'The Village, Aurobindo Place, and the Green Park border are all technically Hauz Khas but a fair distance apart.' },
  { t: 'Confirm on WhatsApp, not a phone call.', b: 'Text keeps a clear record of timing, location and rate, so there’s no confusion for either side at the door.' },
  { t: 'Pay only after you meet.', b: 'We never ask for advance payment or a booking fee. If anyone claiming to be from Delhi Girl asks for money upfront, it isn’t us.' },
  { t: 'Mention if you’re coming from the Village bars.', b: 'Late-evening bookings from the Hauz Khas Village strip are common — let us know your timing and we’ll plan around it.' },
  { t: 'Tell us hotel or home visit upfront.', b: 'Hauz Khas mixes boutique stays with quiet residential blocks — knowing which one you need helps us set the right arrival time.' },
];

const faqs = [
  { q: 'Do you cover Hauz Khas Village as well as the quieter residential parts?', a: 'Yes. We actively cover the Village bar-and-lounge strip, Aurobindo Place Market, and the Green Park border. If your block isn’t listed, message us anyway.' },
  { q: 'Is it discreet to book call girls in Hauz Khas near the Village nightlife strip?', a: 'Yes. Our companions are used to the Village crowd and know how to arrive without drawing attention — quiet, low-key entries are standard here.' },
  { q: 'Can I book call girls near Hauz Khas Metro Station for a same-day visit?', a: 'Yes, this is one of our more frequent requests. Being on the Yellow Line means we usually have someone available with little notice.' },
  { q: 'Do I need to pay in advance for Hauz Khas bookings?', a: 'No. Pay later is standard — you confirm the booking on WhatsApp and settle payment only once your companion has actually arrived.' },
  { q: 'Do you have independent call girls in Hauz Khas, or only agency-managed profiles?', a: 'Both. Tell us if you specifically want independent call girls in Hauz Khas and we’ll match accordingly — the verification standard is the same either way.' },
  { q: 'What’s the going rate for call girls in Hauz Khas?', a: 'Rates depend on duration and the companion you choose, and we share exact pricing on WhatsApp once you tell us what you’re looking for.' },
  { q: 'Can I book call girls in Hauz Khas tonight, straight from the Village?', a: 'Yes, same-night booking is common here, including late-evening requests. Message us now with your block and we’ll confirm availability.' },
  { q: 'Can I book a full night, not just a short visit?', a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want and we’ll quote a rate for exactly that.' },
  { q: 'Do call girls in Hauz Khas visit hotels, homes, or both?', a: 'Both. Let us know which one you need when you message and we’ll plan the arrival accordingly.' },
  { q: 'How do I know the profile is real before I book?', a: 'Every companion listed for Hauz Khas has been through our verification process — a photo check and a short confirmation call before she’s added.' },
  { q: 'Do you cover the area near IIT Delhi, or just the Village and market?', a: 'We cover the wider Hauz Khas belt, including the stretch near IIT Delhi. Message us your nearest landmark and we’ll confirm coverage.' },
  { q: 'Is there a difference in rate between Village bookings and residential blocks?', a: 'Rates are based on duration and companion choice, not the specific block. We quote exact pricing on WhatsApp once we know what you’re looking for.' },
  { q: 'Can I book someone for a late-night visit after the Village bars close?', a: 'Yes, this is a common request. Late-night bookings are handled the same way as any other — message us your timing and we’ll confirm availability.' },
  { q: 'What languages do Hauz Khas companions speak?', a: 'Hindi and English both, comfortably. Given the mixed local and expat crowd around the Village, most companions here are used to conversing in both.' },
  { q: 'Is cash accepted, or do I need to pay digitally?', a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp when you confirm the booking.' },
];

export default function HauzKhas() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/escort-service-in-delhi` },
              { '@type': 'ListItem', position: 3, name: 'Hauz Khas', item: `${SITE_URL}/call-girls-in-hauz-khas` },
            ],
          }),
        }}
      />
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
              <FaMoon className="w-3.5 h-3.5" /> Hauz Khas Village nightlife strip
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Call Girls in Hauz Khas, South Delhi
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Hauz Khas runs from the bar-and-lounge energy of the Village to quiet residential
              blocks near Green Park. Tell us roughly where you are and we&apos;ll match you with a
              companion who&apos;s actually nearby.
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
              src="/Webpimages/young-woman.webp"
              alt="Call girls in Hauz Khas, South Delhi"
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
            Hauz Khas is one of South Delhi&apos;s most distinctive neighbourhoods — built around the
            Hauz Khas Village bar-and-lounge strip, bordered by Deer Park and the Hauz Khas Fort, and
            connected by the Yellow Line metro. A generic{' '}
            <strong className="font-semibold text-gray-900">call girls in Hauz Khas</strong> service
            rarely gets this right, since a companion based near the Village isn&apos;t much use if
            you&apos;re staying closer to Green Park. We start with your block first.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            The area draws a genuinely varied crowd — the evening bar-and-lounge crowd around the
            Village, shoppers and office-goers around Aurobindo Place Market, and residents in the
            quieter blocks nearby. Whatever brings you to Hauz Khas, our escorts are chosen and
            verified to the same standard, and every visit is handled with the discretion this
            well-known neighbourhood expects.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Connectivity works in your favour here. The Yellow Line puts most companions within a
            short ride of the Village, and the area&apos;s position means someone based in Hauz Khas can
            also reach Saket or Green Park within fifteen minutes — useful if your exact plan changes
            through the evening.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every profile listed for Hauz Khas goes through the same verification we use across Delhi
            NCR — a genuine photo check and a short confirmation call before she&apos;s added to our
            roster. We don&apos;t run recycled photos or dead numbers, which is the most common
            complaint clients have about other Hauz Khas call girl listings online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Escorts in Hauz Khas, Block by Block
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Search call girls near Hauz Khas Village or call girls near Hauz Khas Metro and you&apos;ll
            almost always land a match from right around that strip — it&apos;s our most regularly
            booked zone given the bar and lounge crowd there. If you&apos;re after{' '}
            <strong className="font-semibold text-gray-900">high profile escorts in Hauz Khas</strong>,
            we typically have someone available with little notice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For the market side of Hauz Khas — Aurobindo Place, closer to the commercial belt —
            clients are usually after-work or business bookings, similar in spirit to how our{' '}
            <Link href="/call-girls-in-saket" className="text-purple-700 font-medium hover:underline">
              Saket
            </Link>{' '}
            clients operate. The Green Park border calls for a different kind of care — quieter
            arrivals and companions used to a residential setting.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wherever you fall in Hauz Khas, send us your nearest landmark rather than just &quot;Hauz
            Khas&quot; — the area covers a fair stretch, and a specific landmark is the single biggest
            factor in how fast we can get someone to you.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Call Girls in Hauz Khas Through Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            South Delhi bookings live or die on how well the coordination is handled — this is what
            we get right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaBuilding className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Block-Level Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We send whoever is actually close to your block, whether that&apos;s the Village or the
                Green Park side.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Village-Ready Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hauz Khas Village stays busy late into the evening, so a low profile and quiet entries
                are standard, not a special request.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Every Block</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment anywhere in Hauz Khas. Confirm on WhatsApp, and settle payment once
                your companion has arrived.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaStar className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real, Recent Profiles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No recycled photos or dead numbers. Every Hauz Khas profile is checked before it goes
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
            Types of Call Girls Available in Hauz Khas
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Not every client wants the same thing. Here&apos;s how clients usually narrow it down.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companionTypes.map((c) => (
              <Link key={c.href} href={c.href} className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition">
                <h3 className="font-semibold text-gray-900 mb-2">{c.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Hauz Khas</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-3 shadow-md border border-gray-100">
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={p.image} alt="Call girl profile in Hauz Khas, Delhi" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm text-gray-900">{p.label}</div>
                  <div className="text-xs text-gray-500">{p.tag}</div>
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium">
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
            Where Clients Usually Stay in Hauz Khas
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
            Areas We Cover Inside Hauz Khas
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A rough guide — if your block isn&apos;t listed, message us anyway, we likely still cover it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {localities.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white">
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

      {/* Booking Tips */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            First Time Booking Call Girls in Hauz Khas? Read This
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A few honest tips from clients who&apos;ve booked here before.
          </p>
          <div className="space-y-5">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
                <span className="font-bold text-purple-600">{i + 1}.</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="font-semibold text-gray-900">{tip.t}</strong> {tip.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            What to Expect When You Book Call Girls in Hauz Khas
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weekend nights around Hauz Khas Village tend to be the busiest, once the bars and lounges
            fill up. Weekday requests shift toward Aurobindo Place and the quieter residential blocks.
            Neither pattern is fixed, but mentioning your day and rough timing when you message helps
            us suggest someone realistically free and close by.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Communication stays simple throughout. You&apos;ll get a WhatsApp reply with a profile,
            approximate arrival time, and the rate for the duration you asked for — no back-and-forth
            negotiation, no pressure once you&apos;re already talking. If plans change on your side, just
            say so; we&apos;d rather reschedule than have anyone rush.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hygiene and comfort are treated as basics, not selling points — clean, well-presented
            companions, straightforward conversation, and no awkward surprises at the door. Clients
            who&apos;ve dealt with unreliable Hauz Khas call girl numbers before usually mention this as
            the biggest difference: what&apos;s promised on WhatsApp is what actually shows up.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Safety runs both directions. We don&apos;t share client details beyond what&apos;s needed to
            complete a booking, and companions are briefed the same way about discretion on their
            side, especially given how visible the Village strip can get on a busy night.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaUserTie className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Booking Works in Hauz Khas</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Popular with the Village evening crowd and South Delhi residents alike — the process is
            kept simple either way.
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
            Hauz Khas Booking Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left px-6 py-4">
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <FiChevronDown className={`flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-purple-600' : 'text-gray-400'}`} />
                </button>
                <div className={`px-6 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
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
              <Link key={area.href} href={area.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-purple-400 hover:text-purple-700 transition">
                Call Girls in {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          In Hauz Khas Right Now?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your block on WhatsApp and we&apos;ll tell you exactly who&apos;s available near you
          tonight. No advance payment — just confirm and pay later once you&apos;ve met.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
            <FaWhatsapp /> Message on WhatsApp
          </a>
          <Link href="/escort-service-in-delhi" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
            View All Delhi Locations
          </Link>
        </div>
      </section>
    </main>
  );
}
