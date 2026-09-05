'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBuilding, FaTrain, FaUserTie, FaShieldAlt, FaClock, FaStar, FaConciergeBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download (1).webp', label: 'Meher • 24', tag: 'Main Bazaar Regular' },
  { image: '/Webpimages/download (2).webp', label: 'Zoya • 23', tag: 'Railway-Side Bookings' },
  { image: '/Webpimages/download (3).webp', label: 'Kiran • 25', tag: 'Guesthouse Visits' },
  { image: '/Webpimages/download (4).webp', label: 'Ritu • 24', tag: 'Evening Bookings' },
  { image: '/Webpimages/download (5).webp', label: 'Simran • 26', tag: 'Same-Night Requests' },
];

const stays = [
  { name: 'Main Bazaar Guesthouse Stay', note: 'Closest to the backpacker strip, easiest pickup', amenities: ['Free WiFi', 'Late Checkout'] },
  { name: 'Railway-Side Budget Stay', note: 'Steps from New Delhi Railway Station, fast turnaround', amenities: ['24/7 Desk', 'Quick Access'] },
  { name: 'Chandiwalan Quiet Stay', note: 'A calmer lane just off the main strip', amenities: ['Room Service', 'Low-Key Entry'] },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const otherAreas = [
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Hauz Khas', href: '/call-girls-in-hauz-khas' },
];

const localities = [
  { name: 'Main Bazaar', note: 'The backpacker and budget-hotel strip — our most requested zone' },
  { name: 'New Delhi Railway Station side', note: 'Both the Ajmeri Gate and Paharganj-side exits' },
  { name: 'Chandiwalan', note: 'Quieter lanes just off the main strip' },
  { name: 'Tooti Chowk', note: 'Central to the guesthouse cluster' },
  { name: 'Ramdwara Road', note: 'Close to Karol Bagh border, easy overlap coverage' },
];

const companionTypes = [
  { name: 'Independent Call Girls', href: '/independent-escorts-in-delhi', body: 'For clients who specifically want independent escorts in Paharganj rather than an agency roster — direct, verified profiles, booked the same way.' },
  { name: 'High Profile Escorts', href: '/high-profile-escorts-in-delhi', body: 'Polished, premium companions for clients passing through who want an elevated evening despite Paharganj’s budget reputation.' },
  { name: 'College Call Girls', href: '/collage-call-girls-in-delhi', body: 'Younger, easygoing companions for a relaxed, low-formality evening near the Main Bazaar strip.' },
  { name: 'Air Hostess-Style Escorts', href: '/air-hostess-escorts-in-delhi', body: 'Groomed, well-travelled companions suited to guests transiting through the railway station.' },
  { name: 'Russian & Foreign Escorts', href: '/russian-escorts-in-delhi', body: 'For clients specifically searching Russian call girls in Paharganj — verified foreign profiles with advance notice.' },
  { name: 'Housewife Companions', href: '/housewife-escorts-in-delhi', body: 'Mature, experienced companions for clients who prefer a calmer, more confident evening over a younger profile.' },
];

const steps = [
  { n: '01', title: 'Tell us your lane or guesthouse', body: 'Paharganj is dense and maze-like — share your lane, nearest guesthouse, or which railway exit you’re near so we match someone genuinely close by.' },
  { n: '02', title: 'Pick your companion', body: 'We share verified profiles based in or near Paharganj. No pressure, no obligation until you’re ready to confirm.' },
  { n: '03', title: 'Confirm and relax', body: 'Once confirmed, arrival is typically 15–25 minutes given how compact the area is — payment only after you meet.' },
];

const tips = [
  { t: 'Share your lane, not just "Paharganj".', b: 'Main Bazaar alone has dozens of narrow lanes and guesthouses — a specific name or landmark gets you a faster match.' },
  { t: 'Confirm on WhatsApp, not a phone call.', b: 'Text keeps a clear record of timing, location and rate, avoiding confusion for either side at the door.' },
  { t: 'Pay only after you meet.', b: 'We never ask for advance payment or a booking fee. If anyone claiming to be from Delhi Girl asks for money upfront, it isn’t us.' },
  { t: 'Mention if you’re catching a train.', b: 'Many Paharganj bookings are timed around a train — tell us your departure window and we’ll plan the visit around it.' },
  { t: 'Tell us guesthouse or home visit upfront.', b: 'Some guesthouses are stricter about visitors than others — knowing in advance helps us pick a companion used to that specific property.' },
];

const faqs = [
  { q: 'Do you actually cover Paharganj, given how budget the area is?', a: 'Yes. Paharganj is one of our most consistently booked areas precisely because of the railway station traffic and backpacker crowd — it is not an afterthought for us.' },
  { q: 'Is it discreet to book call girls in Paharganj near a guesthouse?', a: 'Yes. Our companions are used to guesthouse-style visits and know how to arrive quietly without drawing attention from staff or other guests.' },
  { q: 'Can I book a call girl near New Delhi Railway Station for a same-day visit?', a: 'Yes, this is one of our most common requests. Being this central means we usually have someone available with very little notice.' },
  { q: 'Do I need to pay in advance for Paharganj bookings?', a: 'No. Pay later is standard — you confirm the booking on WhatsApp and settle payment only once your companion has actually arrived.' },
  { q: 'Do you have independent call girls in Paharganj, or only agency-managed profiles?', a: 'Both. Tell us if you specifically want independent call girls in Paharganj and we’ll match you accordingly — the verification standard is the same either way.' },
  { q: 'What’s the going rate for call girls in Paharganj?', a: 'Rates depend on duration and the companion you choose, and we share exact pricing on WhatsApp once you tell us what you’re looking for — no hidden add-ons at the door.' },
  { q: 'Can I book call girls in Paharganj tonight?', a: 'Yes, same-night booking is normal here. Message us now with your lane or guesthouse and we’ll tell you who’s available within the hour.' },
  { q: 'Can I book a full night, not just a short visit?', a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want and we’ll quote a rate for exactly that.' },
  { q: 'Do call girls in Paharganj visit guesthouses, homes, or both?', a: 'Both. Let us know which one you need when you message and we’ll plan the arrival accordingly.' },
  { q: 'How do I know the profile is real before I book?', a: 'Every companion listed for Paharganj has been through our verification process — a photo check and a short confirmation call before she’s added. We don’t list unverified or recycled profiles.' },
  { q: 'Is it safe to book a call girl in Paharganj late at night?', a: 'Yes. Late-night bookings are common here given the round-the-clock railway traffic, and our companions are used to arriving discreetly at any hour.' },
  { q: 'Do you cover areas just outside Paharganj, like the Connaught Place border?', a: 'Yes, the border areas are easily covered given how close they are — message us and we’ll confirm a companion who can reach either side quickly.' },
  { q: 'Can international travellers book through WhatsApp easily?', a: 'Yes. WhatsApp works internationally, so travellers arriving from outside India can message us the same way as local clients — no separate process needed.' },
  { q: 'What languages do Paharganj companions speak?', a: 'Hindi and English both, comfortably. Given how many international backpackers pass through the area, most companions here are used to speaking with travellers from outside India too.' },
];

export default function Paharganj() {
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
              { '@type': 'ListItem', position: 3, name: 'Paharganj', item: `${SITE_URL}/call-girls-in-paharganj` },
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
              <FaTrain className="w-3.5 h-3.5" /> Next to New Delhi Railway Station
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Call Girls in Paharganj, Central Delhi
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Paharganj sits right beside New Delhi Railway Station, dense with budget hotels and
              guesthouses along Main Bazaar. Tell us your lane and we&apos;ll match you with a
              companion who&apos;s genuinely close by.
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
              src="/Webpimages/banner-1.webp"
              alt="Call girls in Paharganj, Central Delhi"
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
            Paharganj is one of Delhi&apos;s busiest transit neighbourhoods — a dense grid of budget
            hotels and guesthouses wrapped around Main Bazaar, sitting directly beside New Delhi
            Railway Station. That location is exactly why{' '}
            <strong className="font-semibold text-gray-900">call girls in Paharganj</strong> is one
            of our steadiest request areas: travellers passing through, arriving late, or catching an
            early train need someone who can reach a guesthouse fast, not a companion crossing the
            city in traffic.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            The area draws a genuinely international, transit-heavy crowd — backpackers, domestic
            travellers between trains, and short-stay guests who picked Paharganj for the price and
            the location. Whatever brings you here, our escorts are chosen and verified to the same
            standard we use across Delhi NCR, and every visit is handled with the discretion a
            guesthouse-dense area like this expects.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Connectivity is part of the appeal. Being adjacent to the railway station means a
            companion based in Paharganj can also reach Connaught Place in minutes and Karol Bagh
            just as quickly, so even if your exact guesthouse sits at the edge of the area, we can
            usually still get someone to you fast.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every profile listed for Paharganj goes through the same verification we use everywhere
            else — a genuine photo check and a short confirmation call before she&apos;s added to our
            roster. We don&apos;t run recycled photos or dead numbers, which is the most common
            complaint travellers have about other Paharganj call girl listings online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Escorts in Paharganj, Lane by Lane
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Search call girls near New Delhi Railway Station or call girls in Main Bazaar Paharganj
            and you&apos;ll almost always land a match from right around the guesthouse cluster — it&apos;s
            our fastest turnaround zone given how many companions are based within a few minutes&apos;
            walk of the station.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;re after escort service in Paharganj or independent call girls in Paharganj
            specifically, both are available — just say so when you message. High profile escorts in
            Paharganj can also be arranged with a little more notice, for clients who want a more
            polished evening despite the area&apos;s budget reputation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Quieter lanes such as Chandiwalan call for a different kind of care — lower-key arrivals
            and companions used to that setting. Wherever you fall inside Paharganj, send us your
            lane or guesthouse name rather than just &quot;Paharganj&quot; — the area is dense and
            maze-like, and a specific landmark is the single biggest factor in how fast we can get
            someone to you.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Call Girls in Paharganj Through Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Transit-area bookings live or die on speed and discretion — this is what we get right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaBuilding className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lane-Level Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We send whoever is actually close to your lane or guesthouse, not whoever&apos;s simply
                free — vital in a maze like Paharganj.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guesthouse-Ready Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our companions know how to enter guesthouses quietly, without drawing attention from
                staff or other travellers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Every Lane</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment anywhere in Paharganj. Confirm on WhatsApp, and settle payment once
                your companion has arrived.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaStar className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real, Recent Profiles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No recycled photos or dead numbers. Every Paharganj profile is checked before it goes
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
            Types of Call Girls Available in Paharganj
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Not every traveller wants the same thing. Here&apos;s how clients usually narrow it down.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions in Paharganj</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-3 shadow-md border border-gray-100">
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={p.image} alt="Call girl profile in Paharganj, Delhi" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
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
            Where Clients Usually Stay in Paharganj
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
            Areas We Cover Inside Paharganj
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A rough guide — if your lane isn&apos;t listed, message us anyway, we likely still cover it.
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
            First Time Booking Call Girls in Paharganj? Read This
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A few honest tips from travellers who&apos;ve booked here before.
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
            What to Expect When You Book Call Girls in Paharganj
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evenings around the railway station tend to be the busiest, with travellers arriving on
            trains or catching one the next morning. Daytime requests are usually shorter visits timed
            around a connecting train, while evening bookings run longer. Neither pattern is fixed,
            but mentioning your train timing when you message helps us suggest someone realistically
            free and nearby.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Communication stays simple throughout. You&apos;ll get a WhatsApp reply with a profile,
            approximate arrival time, and the rate for the duration you asked for — no back-and-forth
            negotiation, no pressure once you&apos;re already talking. If your train timing shifts, just
            say so; we&apos;d rather reschedule than have anyone rush.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hygiene and comfort are treated as basics, not selling points — clean, well-presented
            companions, straightforward conversation, and no awkward surprises at the guesthouse
            door. Travellers who&apos;ve dealt with unreliable Paharganj call girl numbers before usually
            mention this as the biggest difference: what&apos;s promised on WhatsApp is what actually
            shows up.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Booking Works in Paharganj</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Popular with transit travellers and backpackers — speed matters here more than most
            places, so the process is kept simple.
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
            Paharganj Booking Questions
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
          In Paharganj Right Now?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your lane or guesthouse on WhatsApp and we&apos;ll tell you exactly who&apos;s available
          near you tonight. No advance payment — just confirm and pay later once you&apos;ve met.
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
