'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaHeart, FaUserTie, FaShieldAlt, FaClock, FaCommentDots, FaCoffee } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import TrustBar from '../components/TrustBar';
import StickyWhatsApp from '../components/StickyWhatsApp';

const gallery = [
  { image: '/Webpimages/call-girl-2.webp', label: 'Tanvi • 25', tag: 'Dinner + Evening' },
  { image: '/Webpimages/call-girl-4.webp', label: 'Ishita • 24', tag: 'Full Night GFE' },
  { image: '/Webpimages/call-girl-6.webp', label: 'Ridhima • 26', tag: 'Weekend Regulars' },
  { image: '/Webpimages/call-girl-7.webp', label: 'Ananya • 23', tag: 'Overnight Stays' },
  { image: '/Webpimages/call-girl-10.webp', label: 'Kritika • 25', tag: 'Repeat Clients' },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const areas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Saket', href: '/call-girls-in-saket' },
  { name: 'Hauz Khas', href: '/call-girls-in-hauz-khas' },
];

const otherCategories = [
  { name: 'Independent Profile', href: '/independent-escorts-in-delhi' },
  { name: 'High Profile', href: '/high-profile-escorts-in-delhi' },
  { name: 'Housewife', href: '/housewife-escorts-in-delhi' },
  { name: 'Model Call Girls', href: '/model-call-girls-in-delhi' },
  { name: 'Hotel Escorts', href: '/hotel-escorts-in-delhi' },
];

const reasons = [
  { icon: FaCommentDots, title: 'Real Conversation', body: 'Not filler talk while you wait — an actual back-and-forth, the kind you'
    + '’d have with someone you already know.' },
  { icon: FaHeart, title: 'Warmth, Not Just Politeness', body: 'Closeness and affection are part of the booking, not an awkward extra you have to ask for separately.' },
  { icon: FaClock, title: 'Nobody Watching the Clock', body: 'GFE bookings run slower by design. Nobody is rushing you toward the door.' },
  { icon: FaCoffee, title: 'Room for Dinner or Drinks First', body: 'A lot of GFE bookings start well before the room — dinner, a drink, just talking.' },
];

const howToAsk = [
  { t: 'Just say the words.', b: '"GFE" or "girlfriend experience" is enough — we know exactly what that means and won’t make you explain further.' },
  { t: 'Mention if dinner comes first.', b: 'Some GFE bookings start at a restaurant, some start straight at the hotel. Say which one you want and we’ll match a companion who’s comfortable with that.' },
  { t: 'Tell us the duration honestly.', b: 'A rushed hour rarely feels like GFE. Most clients book at least a few hours, some the full night — say what you actually want, not what feels "normal".' },
  { t: 'It’s fine to ask questions first.', b: 'If you’re not sure a companion is a good fit for this style of booking, ask us before confirming. We’d rather match you properly than have you disappointed.' },
];

const faqs = [
  { q: 'What does GFE actually mean, in practice?', a: 'It means the booking is paced like an evening with someone you’re dating, not a quick transaction — real conversation, affection, closeness, and no sense of being rushed.' },
  { q: 'Is GFE more expensive than a standard booking?', a: 'Usually a little, mostly because GFE bookings tend to run longer. We quote exact pricing on WhatsApp once we know the duration and companion you want.' },
  { q: 'Can I book GFE for just an hour, or does it need to be longer?', a: 'You can ask for it either way, but honestly, an hour rarely feels like a real GFE experience. Most clients who want this booking style go for at least two to three hours, or a full night.' },
  { q: 'Do all companions offer the girlfriend experience, or only some?', a: 'Most do, but not every companion’s personality suits it equally well. Tell us you want GFE specifically and we’ll match you with someone genuinely good at it, not just whoever’s free.' },
  { q: 'Can I book dinner or drinks before the GFE booking starts?', a: 'Yes, this is common. Let us know your plan when you message and we’ll match a companion comfortable with a public dinner date beforehand.' },
  { q: 'Is it awkward to ask for GFE if I’ve never done it before?', a: 'No. Just say the word "GFE" on WhatsApp — you don’t need to explain or justify it. We get this request often enough that it’s completely routine for us.' },
  { q: 'Do I need to pay in advance for a GFE booking?', a: 'No. Pay later applies here too — you confirm on WhatsApp and settle payment only once your companion has actually arrived.' },
  { q: 'Which areas do you offer girlfriend experience bookings in?', a: 'All the locations we cover across Delhi NCR — Aerocity, Connaught Place, Gurgaon, Vasant Kunj, Saket, Hauz Khas and more. Tell us your area and we’ll match accordingly.' },
  { q: 'Can I book the same companion again for future GFE visits?', a: 'Yes, and a lot of GFE clients do exactly this. Mention her name or profile on WhatsApp and we’ll check her availability first.' },
  { q: 'Is a full night GFE booking available?', a: 'Yes. Full-night bookings are one of the more common ways clients book this style — tell us the duration and we’ll quote a rate for exactly that.' },
  { q: 'How do I know a profile is genuinely good at the girlfriend experience, not just labelled that way?', a: 'Ask us directly on WhatsApp before confirming. We’d rather be honest about who suits this booking style than have you disappointed after the fact.' },
  { q: 'Is cash accepted, or do I need to pay digitally?', a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference when you confirm.' },
  { q: 'Does GFE mean a companion will act like an actual girlfriend, calling and texting afterward?', a: 'No. It describes the pace and warmth of the booking itself, not an ongoing relationship afterward. Some clients do rebook the same companion regularly, but that’s a separate arrangement, not part of what GFE means.' },
  { q: 'Can I book GFE for a first date at a restaurant before going anywhere private?', a: 'Yes, this is a common way clients structure it. Mention the plan when you message and we’ll match a companion comfortable with a public dinner beforehand.' },
  { q: 'Is there a difference between GFE and what your Girlfriend Experience category near dinner dates covers?', a: 'They overlap. GFE describes the booking style itself; our dinner date page is more about the specific setting. You can combine both — a GFE-style evening that starts with dinner.' },
  { q: 'What if the companion I book doesn’t feel like a good GFE match once we meet?', a: 'Be honest with us afterward so we can adjust future recommendations, but during the booking itself, most mismatches come down to expectations not being communicated clearly beforehand — which is exactly why we ask you to be specific when you message.' },
  { q: 'Do you cover GFE bookings across all your Delhi NCR locations?', a: 'Yes, this booking style is available in every area we serve — Aerocity, Connaught Place, Gurgaon, Vasant Kunj, Saket, Hauz Khas and more.' },
  { q: 'Can I book GFE with an independent companion rather than through your roster?', a: 'Yes. If you specifically want an independent escort for a GFE-style booking, mention it upfront and we’ll match accordingly — the verification standard stays the same either way.' },
  { q: 'Do I need to pay in advance for a GFE booking?', a: 'No. Pay later applies here too — you confirm on WhatsApp and settle payment only once your companion has actually arrived.' },
  { q: 'Can I book GFE at a hotel as well as at home?', a: 'Yes, both are fine. Let us know which one you need when you message and we’ll plan the arrival accordingly.' },
  { q: 'Is GFE only for overnight stays, or can it be a shorter afternoon booking too?', a: 'It can be either. GFE describes the pace of the booking, not a fixed time of day or minimum length, though most clients do book a few hours at minimum to get the full benefit of it.' },
  { q: 'Can I request the same companion again for future GFE bookings?', a: 'Yes, and a lot of regulars do exactly this once they find someone who fits well. Mention her name or profile on WhatsApp and we’ll check availability first.' },
];

export default function GFE() {
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
              { '@type': 'ListItem', position: 3, name: 'Girlfriend Experience', item: `${SITE_URL}/girlfriend-experience-in-delhi` },
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
      <section className="relative bg-gradient-to-b from-rose-950 to-gray-900 text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full mb-4">
              <FaHeart className="w-3.5 h-3.5" /> No rush. No script. Just a real evening.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Girlfriend Experience in Delhi — What It Actually Means
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              If you searched &quot;GFE escorts in Delhi&quot; and aren&apos;t completely sure what you&apos;re
              supposed to ask for, you&apos;re not the only one. Here&apos;s what it means, how it&apos;s
              different from a standard booking, and how to ask for it without overthinking it.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp /> Message Us on WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96">
            <Image
              src="/Webpimages/Cindy.webp"
              alt="Girlfriend experience booking in Delhi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <FaHeart className="text-rose-600 w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Verified companions, matched for GFE specifically</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* What does GFE mean */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What Does &quot;Girlfriend Experience&quot; Actually Mean?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            It&apos;s not a separate category of women, and it isn&apos;t a euphemism for something else —
            it&apos;s a booking style. GFE just means the whole evening is paced like a date rather than
            a visit. Real conversation instead of small talk to fill silence. Closeness and affection
            that feel natural, not like a checklist. Nobody watching the clock, waiting for you to
            wrap up.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A lot of clients ask for this without quite knowing the term for it — they just say they
            want &quot;someone who actually seems into it&quot; or &quot;not someone rushing me out the
            door.&quot; If that&apos;s roughly what you&apos;re after, GFE is the word for it, and it&apos;s a
            completely normal thing to ask for.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every companion we list is verified the same way regardless of booking style, but not
            every profile has the same natural warmth or conversational ease that GFE bookings
            benefit from. Tell us upfront that you want this style and we&apos;ll match you with someone
            who&apos;s genuinely good at it — not just whoever happens to be free that evening.
          </p>
        </div>
      </section>

      {/* What GFE is not */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What GFE Isn&apos;t, Since That&apos;s Usually the Confusing Part
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            It doesn&apos;t mean a romantic relationship, and nobody involved is pretending otherwise —
            it&apos;s a paid booking, and everyone understands that going in. What changes is how the
            time is spent, not what it actually is. Being upfront about that tends to make the
            evening more comfortable, not less, because there&apos;s no pretending happening on either
            side.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            It also isn&apos;t a fixed script that every companion performs the same way. Two GFE
            bookings can feel quite different depending on the person — some companions lean toward
            quiet, attentive conversation, others are more playful and talkative. If you have a
            specific personality type in mind, say so when you message and we&apos;ll factor that into
            who we suggest.
          </p>
          <p className="text-gray-700 leading-relaxed">
            And it isn&apos;t only for clients who&apos;ve never booked before. Plenty of regulars who&apos;ve
            tried standard visits switch to GFE once they realise the pacing actually suits them
            better — it&apos;s not a &quot;beginner&quot; option or an &quot;advanced&quot; one, just a different
            way of spending the time.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            GFE vs a Standard Booking
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm sm:text-base text-left">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-5 py-4 font-semibold"> </th>
                  <th className="px-5 py-4 font-semibold">Standard Booking</th>
                  <th className="px-5 py-4 font-semibold">Girlfriend Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-5 py-4 font-medium text-gray-900">Pace</td>
                  <td className="px-5 py-4 text-gray-600">Efficient, straightforward</td>
                  <td className="px-5 py-4 text-gray-600">Slower, unhurried</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="px-5 py-4 font-medium text-gray-900">Conversation</td>
                  <td className="px-5 py-4 text-gray-600">Light, optional</td>
                  <td className="px-5 py-4 text-gray-600">A real part of the evening</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-gray-900">Closeness &amp; affection</td>
                  <td className="px-5 py-4 text-gray-600">Minimal</td>
                  <td className="px-5 py-4 text-gray-600">Warm, natural, not rushed</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="px-5 py-4 font-medium text-gray-900">Typical duration</td>
                  <td className="px-5 py-4 text-gray-600">Shorter visits</td>
                  <td className="px-5 py-4 text-gray-600">Several hours or full night</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-gray-900">Best suited for</td>
                  <td className="px-5 py-4 text-gray-600">A quick, simple visit</td>
                  <td className="px-5 py-4 text-gray-600">An evening you actually want to enjoy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Both styles get the same verification and pay-later policy — the difference is purely how
            the time together is paced.
          </p>
          <p className="text-gray-700 leading-relaxed mt-8 max-w-2xl mx-auto text-center">
            Neither option is objectively better — a standard booking makes complete sense when
            you&apos;re short on time or just want something simple and direct. GFE exists for the
            evenings where you actually have the time and want to spend it feeling like company
            rather than a transaction. Knowing which one you want before you message us is the whole
            trick to getting it right the first time.
          </p>
        </div>
      </section>

      {/* Why clients ask for it */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Clients Specifically Ask for GFE
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Usually it comes down to wanting the evening to feel less transactional.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <r.icon className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Companions Known for GFE Bookings</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-3 shadow-md border border-gray-100">
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={p.image} alt="Girlfriend experience companion profile in Delhi" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm text-gray-900">{p.label}</div>
                  <div className="text-xs text-gray-500">{p.tag}</div>
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium">
                  Request
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to actually ask for it */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            How to Actually Ask for GFE, Without the Awkwardness
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            First time asking for this? Here&apos;s exactly what to say.
          </p>
          <div className="space-y-5">
            {howToAsk.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <span className="font-bold text-rose-600">{i + 1}.</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="font-semibold text-gray-900">{item.t}</strong> {item.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            GFE bookings are available everywhere we operate across Delhi NCR — tell us your area and
            we&apos;ll match a companion who&apos;s both nearby and genuinely suited to this booking style.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-rose-400 hover:text-rose-700 transition">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            The Part That Actually Matters — Getting the Match Right
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaUserTie className="w-8 h-8 text-rose-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Matched, Not Assigned</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t just send whoever&apos;s free. GFE requests go to companions who are actually
                comfortable with that pace and style.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-rose-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, Same as Always</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No stock photos, no surprises at the door — every profile is genuinely checked before
                it&apos;s listed.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-rose-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, No Exceptions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Confirm on WhatsApp, pay only once your companion has actually arrived. No advance,
                no booking fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Questions Clients Actually Ask Before Booking GFE
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left px-6 py-4">
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <FiChevronDown className={`flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-rose-600' : 'text-gray-400'}`} />
                </button>
                <div className={`px-6 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore other categories */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Not Sure GFE Is What You Want?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-rose-400 hover:text-rose-700 transition">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Want an Evening That Doesn&apos;t Feel Rushed?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Message us on WhatsApp, say &quot;GFE&quot;, and tell us your area — Aerocity, Connaught Place,
          Gurgaon, or anywhere else in Delhi NCR. We&apos;ll match you with a companion who&apos;s
          genuinely good at it. No advance payment, ever.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
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
