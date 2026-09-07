'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaUsers, FaGlassCheers, FaMapMarkedAlt, FaClock, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import TrustBar from '../components/TrustBar';
import StickyWhatsApp from '../components/StickyWhatsApp';

const gallery = [
  { image: '/Webpimages/call-girl-12.webp', label: 'Reyna • 24', tag: 'Group Bookings' },
  { image: '/Webpimages/call-girl-13.webp', label: 'Aliya • 25', tag: 'Weekend Parties' },
  { image: '/Webpimages/7168.webp', label: 'Naisha • 23', tag: 'Hotel Banquet Regular' },
  { image: '/Webpimages/7170.webp', label: 'Vidhi • 26', tag: 'Farmhouse Parties' },
  { image: '/Webpimages/18244.webp', label: 'Zara • 24', tag: 'Late Night Bookings' },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const areas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Noida', href: '/call-girls-in-noida' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
];

const otherCategories = [
  { name: 'Model Call Girls', href: '/model-call-girls-in-delhi' },
  { name: 'High Profile', href: '/high-profile-escorts-in-delhi' },
  { name: 'Russian Escorts', href: '/russian-escorts-in-delhi' },
  { name: 'Hotel Escorts', href: '/hotel-escorts-in-delhi' },
  { name: 'Independent Profile', href: '/independent-escorts-in-delhi' },
];

const checklist = [
  { t: 'Confirm your headcount early.', b: 'Group size changes everything — how many companions you need, what venue makes sense, and how the evening is timed. Lock this down before you message us.' },
  { t: 'Pick a venue that actually works.', b: 'A hotel room fits two, maybe three people comfortably. Anything bigger needs a suite, a private hall, or a farmhouse — sort this before the night, not during it.' },
  { t: 'Appoint one point of contact.', b: 'Group chats get chaotic fast. Have one friend — usually not the groom — handle the WhatsApp coordination with us so instructions don’t get lost.' },
  { t: 'Set a rough budget per head.', b: 'It’s easier to plan when everyone knows the number upfront rather than splitting a surprise bill at 1am.' },
  { t: 'Decide on timing before the night starts.', b: 'Bachelor parties tend to run long and loose. Give us a realistic arrival window rather than "whenever we’re ready" — it helps everyone.' },
];

const steps = [
  { n: '01', title: 'One person messages us with the plan', body: 'Headcount, venue, date, and roughly when things kick off. We’ll tell you honestly what’s realistic for that group size.' },
  { n: '02', title: 'We shortlist based on the group, not just one person', body: 'Group bookings work differently from solo ones — we match based on the whole evening, not a single profile.' },
  { n: '03', title: 'Confirm details closer to the date', body: 'Final headcount and venue confirmation happen a day or two out, since bachelor party plans shift constantly.' },
  { n: '04', title: 'Pay after, same as always', body: 'No advance payment for group bookings either. Settle up once everyone’s actually met and the evening is underway.' },
];

const faqs = [
  { q: 'Do you actually handle group bookings, or is this just a rebranded solo page?', a: 'We handle genuine group bookings. The coordination is different from a solo visit — headcount, venue, and timing all need to be locked down in advance, which this page exists to explain.' },
  { q: 'What’s a realistic group size for a bachelor party booking?', a: 'Most groups we work with are four to eight people. Larger groups are possible but need more notice and usually a bigger venue like a private hall or farmhouse.' },
  { q: 'Can we book at a farmhouse or private venue instead of a hotel?', a: 'Yes, farmhouses are actually common for bachelor parties. Just confirm the exact address and access details in advance so there’s no confusion on the night.' },
  { q: 'How much notice do you need for a group booking?', a: 'The earlier the better — at least a day or two for anything beyond three or four people. Last-minute small groups are sometimes possible, but we can’t promise it.' },
  { q: 'Do we need to pay per person in advance?', a: 'No. Pay later applies to group bookings too. One agreed amount, settled once everyone’s met, no advance from anyone.' },
  { q: 'Can the groom book separately from the rest of the group?', a: 'Yes, that happens often. Just let us know upfront so we can plan the evening around two separate arrangements rather than assuming it’s all one booking.' },
  { q: 'Is it discreet if the venue has other guests around, like a hotel banquet floor?', a: 'Yes. Companions are used to arriving quietly regardless of venue — the same discretion applies whether it’s a private farmhouse or a hotel with other guests nearby.' },
  { q: 'Do you cover bachelor parties outside central Delhi, like Gurgaon or Noida farmhouses?', a: 'Yes, across all the areas we serve, including the farmhouse belts near Gurgaon and Noida. Share the exact location and we’ll confirm coverage.' },
  { q: 'What if our plans change on the day — timing shifts, headcount changes?', a: 'It happens constantly with bachelor parties, and we’re used to it. Keep us updated on WhatsApp as things shift and we’ll adjust where we can.' },
  { q: 'Can we book late at night once the party is already underway?', a: 'Yes, late-night group bookings are common. The more notice you can give even mid-evening, the smoother the coordination.' },
  { q: 'Should the groom pay separately from the rest of the group?', a: 'That’s up to you — some groups split everything evenly, others treat the groom’s share as a gift. Decide before the night so it doesn’t become an awkward moment at the end.' },
  { q: 'Is alcohol involved, or do we need to arrange that separately?', a: 'We don’t supply alcohol — that’s on your side to arrange at the venue. Just make sure your companions and the group are comfortable with whatever setting you’ve planned.' },
  { q: 'What happens if half the group cancels last minute?', a: 'Let us know as early as possible. We’ll adjust the booking to the smaller group where we can, though very late changes are harder to accommodate cleanly.' },
  { q: 'Can we book if it’s not technically a bachelor party, just a big friends’ night out?', a: 'Yes, the same group-booking process applies regardless of the occasion. The planning advice on this page is useful for any group booking, not just bachelor parties specifically.' },
  { q: 'Do you offer different companions than your solo booking pages?', a: 'No, it’s the same verified roster across the site. This page is really about the group-booking process — headcount, venue, coordination — not a separate set of profiles.' },
  { q: 'Do you cover bachelorette parties too, or only bachelor parties?', a: 'Our roster and process are set up for bachelor parties specifically. If you have a different kind of group event in mind, message us and we’ll tell you honestly whether we can help.' },
  { q: 'Can we mix a bachelor party booking with other entertainment, like a DJ or bartender?', a: 'Yes, that’s common and entirely your arrangement to make separately. We just need to know the venue and timing so our part of the evening fits around everything else.' },
  { q: 'Is there a minimum group size for this to count as a group booking?', a: 'Not really — even two or three people can use the same coordination approach described on this page. It becomes essential once you’re past four or five.' },
  { q: 'Do you cover bachelor parties in Gurgaon and Noida farmhouses specifically?', a: 'Yes, both areas are well covered. Share the exact location and access details and we’ll confirm.' },
  { q: 'Can the group pay in one combined amount rather than splitting individually with you?', a: 'Yes, that’s how it usually works — one agreed total, settled by whoever is coordinating. How the group splits it afterward is entirely up to you.' },
  { q: 'Is cash accepted, or does it need to be digital?', a: 'Both work fine. Most groups pay cash on the night, but UPI is an option too if that’s easier for whoever’s handling payment.' },
];

export default function BachelorParty() {
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
              { '@type': 'ListItem', position: 3, name: 'Bachelor Party Escorts', item: `${SITE_URL}/bachelor-party-escorts-in-delhi` },
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
      <section className="relative bg-gradient-to-b from-indigo-950 to-gray-900 text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full mb-4">
              <FaUsers className="w-3.5 h-3.5" /> Group bookings, handled properly
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Bachelor Party Escorts in Delhi
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Planning the last night out before the wedding? Group bookings work differently from a
              solo visit — headcount, venue and timing all matter. Here&apos;s how to actually get it
              right.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Plan Your Night on WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
            <Image
              src="/Webpimages/MODEL (1).webp"
              alt="Bachelor party escorts in Delhi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <FaUsers className="text-indigo-600 w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Group bookings for 2 to 15+ people, planned properly</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Planning a Bachelor Party in Delhi? Here&apos;s the Part Most People Get Wrong
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Most bachelor party planning goes fine right up until the booking itself, and then it
            falls apart because nobody actually agreed on the basics — how many people, what venue,
            who&apos;s paying what. A group of six friends messaging us individually at midnight with
            different stories is the single biggest reason group bookings go badly.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong className="font-semibold text-gray-900">Bachelor party escorts in Delhi</strong>{' '}
            work best when one person owns the coordination — usually the best man, not the groom —
            and the group has agreed on headcount and venue before anyone reaches out to us. We&apos;re
            happy to help you figure out what&apos;s realistic, but we can&apos;t plan the party for you.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This page is built around the actual questions groups ask us — venue limits, group size,
            pricing per head, and how to keep the night from turning into logistical chaos. If you
            just want a straightforward solo booking instead, our{' '}
            <Link href="/hotel-escorts-in-delhi" className="text-indigo-700 font-medium hover:underline">
              hotel escorts
            </Link>{' '}
            page covers that.
          </p>
        </div>
      </section>

      {/* Planning checklist */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Sort These Out Before You Message Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Five minutes of planning saves an hour of confusion on the actual night.
          </p>
          <div className="space-y-5">
            {checklist.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
                <FaCheckCircle className="text-indigo-600 w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="font-semibold text-gray-900">{item.t}</strong> {item.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue suitability */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Which Venue Actually Makes Sense for Your Group
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <FaMapMarkedAlt className="text-indigo-600 w-6 h-6 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Hotel Room or Suite</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fine for two to four people. Beyond that it gets cramped fast — upgrade to a suite or
                a different venue for bigger groups.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <FaMapMarkedAlt className="text-indigo-600 w-6 h-6 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Private Hall or Banquet Space</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Common for groups of six or more. Confirm the venue allows external visitors before
                you book anything.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <FaMapMarkedAlt className="text-indigo-600 w-6 h-6 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Farmhouse</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Popular around Gurgaon and outer Delhi — the most flexible option for large, loud
                groups, provided access is arranged in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budgeting */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            A Straight Answer on Budgeting for the Night
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nobody wants to be the friend doing math at 1am, so it&apos;s worth sorting out roughly what
            everyone&apos;s comfortable spending before the night starts. Costs scale with group size,
            duration and venue — a two-hour booking for four people at a hotel costs meaningfully
            less than an all-night booking for eight at a farmhouse, and that difference is easier to
            plan for in advance than to discover mid-party.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We quote exact numbers on WhatsApp once we know your group size and plan — we don&apos;t
            publish a flat rate card because group bookings genuinely vary too much for that to be
            useful. What we can tell you honestly: splitting evenly among the group beforehand causes
            far fewer arguments than figuring it out after the fact.
          </p>
          <p className="text-gray-700 leading-relaxed">
            One more thing worth knowing — the groom&apos;s share is sometimes covered by the group as a
            gift, sometimes not. That&apos;s entirely your call, but deciding it in advance avoids an
            awkward moment when the bill actually comes up.
          </p>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Mistakes We See Groups Make, Almost Every Weekend
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The single biggest one is nobody actually owning the booking. Five friends each message
            us separately with slightly different plans, we can&apos;t tell which version is real, and
            the whole thing slows down right when everyone wants it to move fast. Pick one person
            before the night even starts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The second is assuming a venue works without checking. A hotel room booked for two people
            does not comfortably fit eight — someone always assumes it&apos;ll be &quot;fine&quot; and it
            never is. If your group is bigger than three or four, sort the venue out properly first.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The third is waiting until the party is already underway to message us. We can often help
            same-day, but a bachelor party booked with real notice always goes more smoothly than one
            arranged in a rush at midnight after a few drinks.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Companions Available for Group Bookings</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-3 shadow-md border border-gray-100">
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={p.image} alt="Bachelor party companion profile in Delhi" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm text-gray-900">{p.label}</div>
                  <div className="text-xs text-gray-500">{p.tag}</div>
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium">
                  Request
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How group bookings work */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaGlassCheers className="text-indigo-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Group Bookings Actually Work</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Different from a solo booking — here&apos;s the real process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="text-5xl font-bold text-indigo-100 mb-2">{s.n}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Groups Book Through Us Instead of Piecing It Together Themselves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaUsers className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">One Coordination Point</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                One WhatsApp thread, one plan — not six friends messaging separately and confusing
                everyone.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Profiles, Group or Solo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Same verification standard whether it&apos;s one companion or several for a bigger group.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Even for Groups</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment from anyone in the group. Settle once the evening is actually
                underway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Popular Bachelor Party Areas We Cover</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            From hotel suites in Aerocity to farmhouses around Gurgaon — tell us your venue and
            we&apos;ll confirm coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition">
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
            Group Booking Questions, Answered Honestly
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left px-6 py-4">
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <FiChevronDown className={`flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-indigo-600' : 'text-gray-400'}`} />
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Booking Solo Instead?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-indigo-400 hover:text-indigo-700 transition">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Got the Headcount and Venue Sorted?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Message us on WhatsApp with the headcount, venue and date, and we&apos;ll tell you honestly
          what&apos;s realistic for your group — whether that&apos;s a hotel suite in Aerocity or a
          farmhouse out past Gurgaon. No advance payment from anyone, ever.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
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
