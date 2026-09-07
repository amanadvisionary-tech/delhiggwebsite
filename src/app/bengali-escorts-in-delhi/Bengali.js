'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaLeaf, FaMusic, FaBookOpen, FaLock, FaClock, FaShieldAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import TrustBar from '../components/TrustBar';
import StickyWhatsApp from '../components/StickyWhatsApp';

const gallery = [
  { image: '/Webpimages/call-girl-12.webp', label: 'Ananya • 25', tag: 'Evening Visits' },
  { image: '/Webpimages/call-girl-3.webp', label: 'Payel • 24', tag: 'Hotel Stays' },
  { image: '/Webpimages/modelg.webp', label: 'Ruma • 26', tag: 'Weekend Bookings' },
  { image: '/Webpimages/downloadd6.webp', label: 'Sreya • 23', tag: 'Corporate Evenings' },
  { image: '/Webpimages/download28.webp', label: 'Trisha • 25', tag: 'Same-Night Requests' },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const quickFacts = [
  { label: 'Areas covered', value: '12 locations across Delhi NCR' },
  { label: 'Verification', value: 'Photo check + confirmation call' },
  { label: 'Payment', value: 'After you meet, cash or UPI' },
  { label: 'Booking', value: 'WhatsApp only, no forms' },
];

const areas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Noida', href: '/call-girls-in-noida' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Saket', href: '/call-girls-in-saket' },
];

const otherCategories = [
  { name: 'Punjabi Escorts', href: '/punjabi-escorts-in-delhi' },
  { name: 'Housewife', href: '/housewife-escorts-in-delhi' },
  { name: 'Independent Profile', href: '/independent-escorts-in-delhi' },
  { name: 'High Profile', href: '/high-profile-escorts-in-delhi' },
  { name: 'Model Call Girls', href: '/model-call-girls-in-delhi' },
];

const reasons = [
  { icon: FaLeaf, title: 'Soft-Spoken, Gentle Manner', body: 'A calmer, quieter energy than some other categories — good for clients who want an easy, unhurried evening rather than something loud.' },
  { icon: FaBookOpen, title: 'Genuinely Good Conversation', body: 'Many clients specifically mention the conversation as the reason they keep booking this category — thoughtful, easy to talk to.' },
  { icon: FaMusic, title: 'Cultured, Well-Read Company', body: 'A number of our Bengali companions have backgrounds in the arts or education, which shows in how they carry a conversation.' },
  { icon: FaClock, title: 'Available Across Every Area', body: 'Not limited to one part of Delhi — this category is bookable in all twelve locations we cover.' },
];

const tips = [
  { t: 'Say "Bengali" clearly when you message.', b: 'It speeds up matching and avoids any mix-up with other categories on a busy evening.' },
  { t: 'Mention your area upfront.', b: 'We cover all twelve locations, but telling us where you are gets you a closer, faster match.' },
  { t: 'Confirm on WhatsApp, not a phone call.', b: 'Text keeps a clear record of timing, location and rate for both sides.' },
  { t: 'Pay only after you meet.', b: 'No advance payment, no booking fee, ever — regardless of category.' },
];

const faqs = [
  { q: 'Are your Bengali escorts in Delhi genuinely verified?', a: 'Yes. Every profile in this category goes through the same photo check and confirmation call as every other listing on the site.' },
  { q: 'How is this different from your Punjabi escorts category?', a: 'Mostly personality and pace — Bengali companions tend toward a calmer, more conversational style, while the Punjabi category leans livelier and more upfront. Both get the same verification and booking process.' },
  { q: 'Which areas do you cover for Bengali escorts in Delhi?', a: 'All twelve locations across Delhi NCR — Aerocity, Connaught Place, Dwarka, Noida, Gurgaon, Karol Bagh, Vasant Kunj, Saket and more.' },
  { q: 'Do I need to pay in advance?', a: 'No. Pay later applies here too — confirm the booking on WhatsApp and settle payment only once your companion has arrived.' },
  { q: 'Do you have independent Bengali call girls, or only agency profiles?', a: 'Both. Tell us if you specifically want an independent Bengali escort and we’ll match accordingly.' },
  { q: 'What do Bengali escorts in Delhi typically cost?', a: 'Rates depend on duration and the companion you choose. We quote exact pricing on WhatsApp once we know your preferences.' },
  { q: 'Can I book the same night?', a: 'Yes, same-night booking is normal. Message us your area on WhatsApp and we’ll tell you who’s available within the hour.' },
  { q: 'Can I book a full night, not just a short visit?', a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want and we’ll quote a rate for exactly that.' },
  { q: 'Do Bengali escorts visit hotels, homes, or both?', a: 'Both. Let us know which one you need when you message, along with your area, and we’ll plan the arrival accordingly.' },
  { q: 'Is cash accepted, or do I need to pay digitally?', a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp.' },
  { q: 'Can I request the same companion again for a future booking?', a: 'Yes, and it’s common. Mention her name or profile on WhatsApp and we’ll check her availability first.' },
  { q: 'Can I book a full night, not just a short visit?', a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want and we’ll quote a rate for exactly that.' },
  { q: 'Do you cover serviced apartments and long-stay hotels too?', a: 'Yes, the same process applies — share the property name and area, and we’ll match a companion accordingly.' },
  { q: 'What languages do Bengali companions speak?', a: 'Bengali, Hindi and English, comfortably in most cases — enough for easy conversation regardless of your own background.' },
  { q: 'Is this category available for dinner dates, not just hotel or home visits?', a: 'Yes. If you want a public dinner date rather than a private visit, mention that upfront and we’ll match accordingly.' },
  { q: 'How far in advance should I book?', a: 'Same-night booking is usually fine, but a little notice — even an hour or two — gives us a better chance of matching exactly who you want.' },
  { q: 'Can I combine this with a dinner date instead of going straight to a hotel or home visit?', a: 'Yes, that’s a common way to structure the evening. Mention it when you message and we’ll plan around it.' },
  { q: 'What if I’m not sure this category is the right fit for me?', a: 'Message us on WhatsApp and describe what you’re looking for — we’d rather point you to a better-fitting category than have you book the wrong one.' },
  { q: 'Do you cover Paharganj and Hauz Khas for this category too?', a: 'Yes, along with every other location we serve. Mention your area and we’ll match a companion who’s genuinely nearby.' },
  { q: 'Can I book a hotel visit as well as a home visit in this category?', a: 'Yes, both are available. Let us know which one you need when you message and we’ll plan the arrival accordingly.' },
  { q: 'Can I book a full night rather than just a couple of hours?', a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want and we’ll quote a rate for exactly that.' },
];

export default function Bengali() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white">
      <StickyWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Categories', item: `${SITE_URL}/model-call-girls-in-delhi` },
              { '@type': 'ListItem', position: 3, name: 'Bengali Escorts', item: `${SITE_URL}/bengali-escorts-in-delhi` },
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
      <section className="relative bg-gradient-to-b from-teal-950 to-gray-900 text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full mb-4">
              <FaLeaf className="w-3.5 h-3.5" /> Soft-spoken, warm &amp; verified
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Bengali Escorts in Delhi
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              For clients who want a calmer, more conversational evening — our Bengali companions in
              Delhi are known for warmth, easy conversation and a gentler pace, verified the same way
              as every profile on the site.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Message Us on WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
            <Image
              src="/Webpimages/172420-8871.webp"
              alt="Bengali escorts in Delhi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <FaLeaf className="text-teal-600 w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Verified across all 12 Delhi NCR locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* At a glance box */}
      <section className="py-10 px-6 bg-teal-50 border-b border-teal-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickFacts.map((f) => (
              <div key={f.label} className="bg-white rounded-xl p-4 border border-teal-100 text-center">
                <div className="text-xs uppercase tracking-wide text-teal-700 font-semibold mb-1">{f.label}</div>
                <div className="text-sm text-gray-800 font-medium">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Not every client is looking for a lively, high-energy evening. A steady number of our
            regulars specifically ask for{' '}
            <strong className="font-semibold text-gray-900">Bengali escorts in Delhi</strong> — companions
            known for a gentler manner and conversation that actually feels like conversation, not
            just filler between other things.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every profile in this category is verified the same way as the rest of the site — a
            genuine photo check and a short confirmation call before anyone is listed. Whether you
            want an independent Bengali escort or prefer us to shortlist from our roster, tell us
            your preference on WhatsApp and we&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* Why clients choose */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            What Clients Notice About This Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <r.icon className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What soft-spoken actually means */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            What &quot;Soft-Spoken&quot; Actually Looks Like in a Booking
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            It&apos;s easy to write &quot;calmer, gentler manner&quot; on a page and have it mean nothing.
            In practice, it looks like a companion who doesn&apos;t fill every silence with forced
            small talk, who reads whether you want to talk or just relax, and who doesn&apos;t treat the
            evening like something to get through efficiently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For clients who&apos;ve had a long day and don&apos;t want a high-energy evening thrown at
            them the moment the door opens, that difference matters more than it sounds like it
            should. It&apos;s not about being reserved to the point of distance — it&apos;s a warmth that
            builds gradually rather than arriving all at once.
          </p>
          <p className="text-gray-700 leading-relaxed">
            None of this means every Bengali companion is identical in personality — they&apos;re not.
            But it&apos;s a reasonably consistent thread across this category, which is exactly why
            clients come back to it specifically rather than booking at random.
          </p>
        </div>
      </section>

      {/* Who books */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Who Actually Books This Category
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A fair number are clients winding down after a stressful day who specifically don&apos;t
            want a loud, high-energy evening — they want something closer to unwinding with company
            than a night out. Corporate travellers who&apos;ve had back-to-back meetings tend to fall
            into this group often.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Others are regulars who&apos;ve tried a few categories on the site and settled here because
            the pace suits them better long-term, not because of where a companion is from
            specifically. The regional label is really shorthand for a personality type more than
            anything else.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;re not sure this is the right fit for what you want, message us on WhatsApp and
            describe the evening you&apos;re after — we&apos;d rather point you to the right category than
            have you book the wrong one.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Bengali Companions</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-3 shadow-md border border-gray-100">
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={p.image} alt="Bengali escort profile in Delhi" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm text-gray-900">{p.label}</div>
                  <div className="text-xs text-gray-500">{p.tag}</div>
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-medium">
                  Request
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common assumptions */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            A Couple of Assumptions Worth Correcting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            One assumption we hear sometimes is that a regional category like this means less
            variety in personality — that every profile will feel the same. That&apos;s not accurate.
            The label describes a general tendency, not a script every companion follows identically.
            You&apos;ll still find differences in energy, humour and conversational style within this
            category, the same as any other.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Another is that regional categories are somehow less carefully verified than the more
            general listings on the site. They&apos;re not — every profile here goes through the exact
            same photo check and confirmation call as anywhere else. If anything, niche categories
            get scrutinised more closely by us, simply because clients searching for something
            specific tend to notice a mismatch faster than a generic booking would reveal one.
          </p>
        </div>
      </section>

      {/* How this differs from Punjabi */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Bengali vs Our Punjabi Category — Which One Fits What You Want
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;re deciding between this page and our{' '}
            <Link href="/punjabi-escorts-in-delhi" className="text-teal-700 font-medium hover:underline">
              Punjabi escorts
            </Link>{' '}
            category, it mostly comes down to energy. Punjabi companions tend to be more upfront and
            lively from the first few minutes. Bengali companions lean toward a calmer, more
            conversational pace that builds gradually rather than starting loud.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Neither is objectively better — it depends what kind of evening you actually want. If
            you&apos;re still unsure, message us on WhatsApp and describe what you&apos;re after; we&apos;ll
            point you toward whichever category actually fits, rather than just pushing you toward
            one page.
          </p>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            What This Category Actually Costs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rates here follow the same structure as every other category on the site — based on
            duration and the specific companion, not the regional label. A Bengali escort in Delhi
            doesn&apos;t cost more or less than any other category by default; pricing is quoted
            directly on WhatsApp once we know what you&apos;re looking for.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Short visits, multi-hour bookings, and full-night stays are all bookable, and each is
            priced for exactly that duration — nothing is bundled or padded. If a listing elsewhere
            quotes one flat number regardless of what you&apos;re actually booking, that&apos;s usually a
            sign to be cautious.
          </p>
        </div>
      </section>

      {/* Verification */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Every Profile Here Is Actually Checked
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
              <FaCheckCircle className="text-teal-600 w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700">A genuine photo check before any profile goes live.</p>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
              <FaCheckCircle className="text-teal-600 w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700">A short confirmation call, not just a form submission.</p>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
              <FaCheckCircle className="text-teal-600 w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700">Inactive profiles removed regularly, not left listed for months.</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Areas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-teal-600 w-5 h-5" /> Areas We Cover
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-teal-500 hover:text-teal-700 transition">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same-night booking note */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Booking Tonight? Here&apos;s What Actually Happens
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Message us on WhatsApp with your area and that you&apos;re looking for this category
            specifically. We&apos;ll check who&apos;s realistically available nearby and send back a
            profile, usually within a few minutes during normal hours. No forms, no account to
            create, no waiting on hold.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Once you&apos;ve confirmed, we share an arrival estimate and the rate for the duration you
            asked for. You don&apos;t pay anything until your companion has actually arrived — that part
            doesn&apos;t change no matter which category or area you&apos;re booking in.
          </p>
        </div>
      </section>

      {/* Booking tips */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Before You Message Us
          </h2>
          <div className="space-y-5">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <span className="font-bold text-teal-600">{i + 1}.</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="font-semibold text-gray-900">{tip.t}</strong> {tip.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Questions About Booking This Category
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left px-6 py-4">
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <FiChevronDown className={`flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-teal-600' : 'text-gray-400'}`} />
                </button>
                <div className={`px-6 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Explore Other Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-teal-500 hover:text-teal-700 transition">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Looking for a Calmer, Warmer Evening?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Message us your area on WhatsApp — Aerocity, Connaught Place, Dwarka, or anywhere else in
          Delhi NCR — and we&apos;ll share a verified Bengali profile matched to you. No advance payment
          — just confirm and pay later once you&apos;ve met.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
            <FaWhatsapp /> Message on WhatsApp
          </a>
          <Link href="/model-call-girls-in-delhi" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
            View All Categories
          </Link>
        </div>
      </section>
    </main>
  );
}
