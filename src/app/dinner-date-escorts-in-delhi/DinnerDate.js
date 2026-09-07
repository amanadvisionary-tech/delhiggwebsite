'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaUtensils, FaBriefcase, FaUsers, FaComments, FaUserTie, FaClock, FaShieldAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import TrustBar from '../components/TrustBar';
import StickyWhatsApp from '../components/StickyWhatsApp';

const gallery = [
  { image: '/Webpimages/download (10).webp', label: 'Aditi • 26', tag: 'Business Dinners' },
  { image: '/Webpimages/download (20).webp', label: 'Nisha • 25', tag: 'Corporate Events' },
  { image: '/Webpimages/download7.webp', label: 'Manya • 24', tag: 'Wedding Plus-One' },
  { image: '/Webpimages/downloadd6.webp', label: 'Sonal • 27', tag: 'Fine Dining Regular' },
  { image: '/Webpimages/download27.webp', label: 'Riya • 25', tag: 'Client Entertainment' },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const areas = [
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Saket', href: '/call-girls-in-saket' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Hauz Khas', href: '/call-girls-in-hauz-khas' },
];

const otherCategories = [
  { name: 'High Profile', href: '/high-profile-escorts-in-delhi' },
  { name: 'Air Hostess', href: '/air-hostess-escorts-in-delhi' },
  { name: 'Model Call Girls', href: '/model-call-girls-in-delhi' },
  { name: 'Girlfriend Experience', href: '/girlfriend-experience-in-delhi' },
  { name: 'Hotel Escorts', href: '/hotel-escorts-in-delhi' },
];

const etiquette = [
  { t: 'The reservation goes under your name.', b: 'Keep it simple — a normal dinner reservation, nothing that flags attention at the host stand.' },
  { t: 'Arrival is usually staggered, not together.', b: 'Most clients prefer arriving separately by a few minutes rather than walking in as an obvious pair.' },
  { t: 'Companions are briefed on the occasion.', b: 'Tell us if it’s a quiet dinner, a work event, or a wedding function — the right presentation and conversation style depends on which.' },
  { t: 'Alcohol comfort varies by companion.', b: 'If drinking is part of the evening, mention it upfront so we match someone comfortable with that setting.' },
  { t: 'Sensitive topics are avoided by default.', b: 'Companions are trained to keep conversation easy and appropriate for a public setting, especially around colleagues or extended family.' },
];

const steps = [
  { n: '01', title: 'Tell us the occasion', body: 'Business dinner, client entertainment, a wedding function — the context changes who we suggest and how they’re briefed.' },
  { n: '02', title: 'Pick a companion suited to it', body: 'We shortlist based on presentation and conversational comfort, not just availability.' },
  { n: '03', title: 'Confirm venue and timing', body: 'Share the restaurant or venue and rough timing so arrival is planned properly, not rushed.' },
  { n: '04', title: 'Enjoy the evening, pay after', body: 'No advance payment. Settle up once the evening is actually happening.' },
];

const faqs = [
  { q: 'Can I actually book someone for a public dinner, not just a hotel room?', a: 'Yes. Dinner dates and public outings are a regular booking type — just tell us the venue and occasion when you message.' },
  { q: 'Will my companion be comfortable at a nice restaurant, or does that need a special request?', a: 'Comfort at a proper restaurant is one of the things we specifically screen for on this page — mention it’s a dinner date and we’ll match accordingly.' },
  { q: 'Can I book someone to accompany me to a corporate event or client dinner?', a: 'Yes, this is a common request from business travellers. Give us context on the event and we’ll match someone who presents well in that setting.' },
  { q: 'What about a wedding function where I need a plus-one?', a: 'This works too. Tell us it’s a wedding-related event and roughly what’s expected — a companion who can hold a conversation with extended family, not just you.' },
  { q: 'Do I need to explain the relationship to other guests?', a: 'That’s entirely up to you and not something we script. Companions are briefed to keep things natural and let you guide how much is said.' },
  { q: 'Is this more expensive than a standard hotel booking?', a: 'Not inherently — pricing depends on duration, not the setting. We quote exact rates on WhatsApp once we know your plan.' },
  { q: 'Can the evening include both dinner and a hotel visit afterward?', a: 'Yes, this is actually how a lot of dinner date bookings work. Let us know the full plan so timing and duration are quoted correctly.' },
  { q: 'Do you cover restaurants across Connaught Place, Aerocity and Gurgaon?', a: 'Yes, across all the areas we serve. Share the restaurant location and we’ll confirm a companion who can reach it comfortably.' },
  { q: 'Do I need to pay in advance for a dinner date booking?', a: 'No. Pay later is standard here too — confirm on WhatsApp and settle payment once you’ve actually met.' },
  { q: 'What if I need someone on short notice for a same-day dinner?', a: 'Same-day bookings are often possible, especially in well-covered areas like Connaught Place and Aerocity. Message us as early as you can.' },
  { q: 'Will my companion know what to say if colleagues ask questions at a work dinner?', a: 'Companions booked for this category are briefed to keep things natural and low-key. We don’t script specific answers, but they’re used to handling casual questions without making things awkward.' },
  { q: 'Is cash accepted, or do I need to pay digitally?', a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp.' },
  { q: 'Can I book the same companion again for future dinners or events?', a: 'Yes, and many clients do exactly this once they find someone who fits well. Mention her name or profile on WhatsApp and we’ll check availability first.' },
  { q: 'Is a full evening — dinner plus afterward — priced differently than just dinner?', a: 'Pricing is based on total duration, not the specific activities. Tell us your full plan when you message and we’ll quote accordingly.' },
  { q: 'Do you cover rooftop bars and lounges as well as restaurants?', a: 'Yes. Tell us the type of venue when you message and we’ll match a companion comfortable with that specific setting.' },
  { q: 'Can I book this for a company holiday party or a similar large event?', a: 'Yes, larger events are bookable — mention the size and format of the event so we can match appropriately.' },
  { q: 'Do you cover both weekday business dinners and weekend social dinners?', a: 'Yes, both are common. Weekday bookings skew more corporate, weekends skew more social — either way, tell us the context and we’ll match accordingly.' },
  { q: 'How far in advance should I book for an important dinner?', a: 'A day or two of notice gives us the best chance of matching exactly the right personality for the occasion. Same-day is often still possible, just with fewer options.' },
  { q: 'Can I book the same companion for a recurring monthly business dinner?', a: 'Yes, several corporate clients do exactly this. Mention it’s a recurring arrangement and we’ll try to keep the same match available each time.' },
  { q: 'What if I’m not sure this category fits what I want?', a: 'Message us on WhatsApp and describe the occasion — we’d rather point you toward a better-fitting category, like our girlfriend experience or hotel escorts pages, than have you book the wrong one.' },
  { q: 'Is cash accepted at the end of the evening, or do I need to pay digitally?', a: 'Both work. Most clients pay cash, but UPI is fine too if that’s easier — just mention your preference on WhatsApp.' },
  { q: 'Do you cover dinner dates in Noida and Dwarka as well?', a: 'Yes, across all twelve locations we serve. Share the restaurant or venue location and we’ll confirm a companion who can reach it comfortably.' },
  { q: 'Can I book a hotel visit afterward without arranging it separately?', a: 'Yes, most clients treat it as one continuous plan. Tell us upfront so timing and pricing cover the whole evening, not just dinner.' },
];

export default function DinnerDate() {
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
              { '@type': 'ListItem', position: 3, name: 'Dinner Date Companions', item: `${SITE_URL}/dinner-date-escorts-in-delhi` },
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
      <section className="relative bg-gradient-to-b from-amber-950 to-gray-900 text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full mb-4">
              <FaUtensils className="w-3.5 h-3.5" /> Presentable. Well-spoken. Comfortable in public.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Dinner Date &amp; Corporate Companions in Delhi
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Not every booking happens behind a hotel room door. For dinners, client events and
              functions where you actually need someone who can hold a table, this is the page for
              it.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Message Us on WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
            <Image
              src="/Webpimages/download (10).webp"
              alt="Dinner date companion in Delhi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <FaUtensils className="text-amber-600 w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Matched for conversation, not just availability</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Three scenarios */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Three Reasons Clients Actually Book This
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <FaBriefcase className="text-amber-600 w-7 h-7 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">The Solo Business Trip</h3>
                <p className="text-gray-700 leading-relaxed">
                  You&apos;re in Delhi for a few days, meetings are done by seven, and eating alone in a
                  hotel restaurant every night gets old fast. A dinner date fixes that specific
                  problem — good company for the evening, nothing more complicated than that.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <FaUsers className="text-amber-600 w-7 h-7 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Entertaining a Client</h3>
                <p className="text-gray-700 leading-relaxed">
                  Some business dinners go better with a fourth or sixth at the table. Clients book a
                  companion who can genuinely hold a conversation and read the room, not just look
                  the part.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <FaUtensils className="text-amber-600 w-7 h-7 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">A Wedding or Family Function</h3>
                <p className="text-gray-700 leading-relaxed">
                  Showing up to a cousin&apos;s wedding alone invites questions you&apos;d rather not
                  answer. A companion who can hold her own with extended family for an evening solves
                  that without much explanation needed.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <FaComments className="text-amber-600 w-7 h-7 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Just an Evening Out</h3>
                <p className="text-gray-700 leading-relaxed">
                  Not every booking needs a bigger reason. Some clients simply want a proper dinner
                  with good conversation before the evening continues elsewhere — no work angle, no
                  event, just company worth having.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to tell us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What to Tell Us Before We Confirm the Reservation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The venue and rough timing matter most — a quiet café conversation and a formal business
            dinner call for different presentation, so knowing which one it is changes who we
            suggest. If there&apos;s a dress code or a particular tone to the event, mention that too;
            it&apos;s a five-second detail that saves an awkward mismatch later.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If other people will be at the table — colleagues, family, a client — say so, and roughly
            who they are. A companion briefed properly beforehand handles a room full of strangers far
            more naturally than one figuring it out on the spot.
          </p>
        </div>
      </section>

      {/* What makes someone right for public dining */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Not Every Profile Is Built for a Public Dinner
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A companion who&apos;s great for a quiet hotel visit isn&apos;t automatically the right fit for
            a two-hour dinner in front of colleagues or family. Conversation matters more here —
            being able to talk about something other than the booking itself, reading when to lead
            and when to listen, staying comfortable if the evening runs long.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tell us it&apos;s a dinner date or corporate event when you message, and we&apos;ll match you
            with someone specifically suited to that — not just whoever&apos;s available that evening.
            It&apos;s a small detail that makes a real difference to how the night actually goes.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Companions Suited to Dinner Dates</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-3 shadow-md border border-gray-100">
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={p.image} alt="Dinner date companion profile in Delhi" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm text-gray-900">{p.label}</div>
                  <div className="text-xs text-gray-500">{p.tag}</div>
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium">
                  Request
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing explainer */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            How Pricing Actually Works for This Category
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We don&apos;t publish a flat rate for dinner dates because the setting changes the maths —
            a two-hour dinner is priced differently from a dinner that continues into a longer
            evening afterward, and a formal corporate event sometimes runs longer than a casual meal.
            What stays constant is that you get an exact number on WhatsApp before anything is
            confirmed, not a vague range.
          </p>
          <p className="text-gray-700 leading-relaxed">
            One thing worth knowing upfront: the meal itself — the restaurant bill — is separate from
            the companion&apos;s rate. That&apos;s a normal, expected part of this kind of booking, not a
            hidden cost, but it&apos;s worth budgeting for if it&apos;s your first time arranging one.
          </p>
        </div>
      </section>

      {/* Restaurant etiquette */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            How We Handle the Public Side of the Evening
          </h2>
          <div className="space-y-5">
            {etiquette.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
                <FaComments className="text-amber-600 w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="font-semibold text-gray-900">{item.t}</strong> {item.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Different venues */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Fine Dining, Rooftop Bars, or a Quiet Café — the Venue Changes What We Recommend
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A formal fine-dining table calls for someone poised, comfortable with a longer meal and
            unhurried conversation. A rooftop bar or lounge setting works better with a companion
            who&apos;s relaxed around drinks and a slightly louder environment. A quiet café or casual
            restaurant is the easiest setting of the three — most companions handle it comfortably
            without much briefing needed.
          </p>
          <p className="text-gray-700 leading-relaxed">
            None of this is complicated on your end — just tell us roughly what kind of place you&apos;re
            going to, and we handle matching the right companion to it. Clients who skip this detail
            usually still have a fine evening, but the ones who mention it get a noticeably better
            match.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaUserTie className="text-amber-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Booking a Dinner Date, Step by Step</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            A little more planning than a standard visit, but still simple.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="text-5xl font-bold text-amber-100 mb-2">{s.n}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, Same Standard</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No stock photos, no surprises — every profile is genuinely checked before it&apos;s
                listed.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaComments className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Matched for Conversation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Public-setting bookings get matched specifically for that, not just general
                availability.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Every Time</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment. Confirm on WhatsApp, settle up once the evening&apos;s underway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Areas We Cover for Dinner Dates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Restaurants and event venues across Delhi NCR — tell us the location and we&apos;ll confirm
            a companion who can reach it comfortably.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-amber-500 hover:text-amber-700 transition">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            What Clients Usually Ask Before a Dinner Date Booking
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left px-6 py-4">
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <FiChevronDown className={`flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-amber-600' : 'text-gray-400'}`} />
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Looking for Something Else Instead?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-amber-500 hover:text-amber-700 transition">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Have a Dinner or Event Coming Up?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Tell us the occasion, venue and roughly who else will be there — we&apos;ll match you with
          someone who&apos;s actually right for it, not just whoever&apos;s free. No advance payment, ever.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
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
