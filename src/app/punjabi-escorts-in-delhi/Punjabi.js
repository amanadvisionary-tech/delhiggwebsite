'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaHeart, FaUserTie, FaShieldAlt, FaClock, FaFire, FaLock, FaStar } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/download331.webp', label: 'Simran • 25', tag: 'Evening Visits' },
  { image: '/Webpimages/download432.webp', label: 'Harleen • 24', tag: 'Hotel Stays' },
  { image: '/Webpimages/download645.webp', label: 'Gurleen • 26', tag: 'Weekend Bookings' },
  { image: '/Webpimages/downloadee.webp', label: 'Navpreet • 23', tag: 'Corporate Evenings' },
  { image: '/Webpimages/download22.webp', label: 'Rupinder • 25', tag: 'Same-Night Requests' },
];

const WHATSAPP = 'https://api.whatsapp.com/send?phone=918826482370';
const SITE_URL = 'https://www.delhigirl.in';

const areas = [
  { name: 'Aerocity', href: '/aerocity-escorts' },
  { name: 'Connaught Place', href: '/call-girls-in-connaught-place' },
  { name: 'Mahipalpur', href: '/call-girls-in-mahipalpur' },
  { name: 'Dwarka', href: '/call-girls-in-dwarka' },
  { name: 'Lajpat Nagar', href: '/call-girls-in-lajpat-nagar' },
  { name: 'Noida', href: '/call-girls-in-noida' },
  { name: 'Gurgaon', href: '/call-girls-in-gurgaon' },
  { name: 'Karol Bagh', href: '/call-girls-in-karol-bagh' },
  { name: 'Vasant Kunj', href: '/call-girls-in-vasant-kunj' },
  { name: 'Saket', href: '/call-girls-in-saket' },
  { name: 'Paharganj', href: '/call-girls-in-paharganj' },
  { name: 'Hauz Khas', href: '/call-girls-in-hauz-khas' },
];

const otherCategories = [
  { name: 'Independent Profile', href: '/independent-escorts-in-delhi' },
  { name: 'High Profile', href: '/high-profile-escorts-in-delhi' },
  { name: 'College Girl', href: '/collage-call-girls-in-delhi' },
  { name: 'Air Hostess', href: '/air-hostess-escorts-in-delhi' },
  { name: 'Russian Escorts', href: '/russian-escorts-in-delhi' },
  { name: 'Housewife', href: '/housewife-escorts-in-delhi' },
];

const reasons = [
  { icon: FaFire, title: 'Bold, Confident Energy', body: 'Clients who search for Punjabi escorts in Delhi are usually after someone lively and upfront — less shy small talk, more genuine energy from the first few minutes.' },
  { icon: FaHeart, title: 'Warm, Talkative Company', body: 'A naturally warm, expressive manner that makes conversation easy, whether it’s a quick visit or a full evening.' },
  { icon: FaLock, title: 'Comfortable Communication', body: 'Fluent in Punjabi, Hindi and English, which many clients find puts them at ease faster than a purely formal interaction.' },
  { icon: FaClock, title: 'Flexible, Evening-Friendly', body: 'Available across evenings and late nights, which suits clients unwinding after work or travelling through Delhi.' },
];

const steps = [
  { n: '01', title: 'Tell us your area and preference', body: 'Let us know which part of Delhi NCR you’re in — we’ll shortlist Punjabi companion profiles matched to that area.' },
  { n: '02', title: 'Review a verified profile', body: 'We share a genuine, verified profile — no stock photos, no surprises. Take your time deciding.' },
  { n: '03', title: 'Confirm and relax', body: 'Once confirmed, we coordinate the hotel or home visit discreetly — payment only after you’ve actually met.' },
];

const tips = [
  { t: 'Say "Punjabi" upfront.', b: 'Mentioning the category clearly when you message speeds up matching and avoids mix-ups with other profiles.' },
  { t: 'Share your area, not just your city.', b: 'We cover twelve locations across Delhi NCR — telling us which one gets you a faster, closer match.' },
  { t: 'Confirm on WhatsApp, not a phone call.', b: 'Text keeps a clear record of timing, location and rate, avoiding confusion for either side at the door.' },
  { t: 'Pay only after you meet.', b: 'We never ask for advance payment or a booking fee for any category. If anyone claims otherwise, it isn’t us.' },
  { t: 'Be specific about the evening you want.', b: 'A lively night out, a quiet conversation, a full night — being clear upfront helps us match a companion whose energy actually fits.' },
];

const faqs = [
  { q: 'Are your Punjabi escorts in Delhi genuine, verified profiles?', a: 'Yes. Every Punjabi companion listed is a real, verified profile — a genuine photo check and a short confirmation call happen before anyone is added.' },
  { q: 'How discreet is booking a Punjabi escort in Delhi?', a: 'Fully discreet. Bookings are handled the same way across every category — no unnecessary detail is shared beyond what’s needed to complete the visit.' },
  { q: 'Which areas do you cover for Punjabi escorts in Delhi?', a: 'The same twelve locations we cover across Delhi NCR — Aerocity, Connaught Place, Dwarka, Mahipalpur, Lajpat Nagar, Noida, Gurgaon, Karol Bagh, Vasant Kunj, Saket, Paharganj and Hauz Khas.' },
  { q: 'Do I need to pay in advance to book a Punjabi escort?', a: 'No. Pay later applies here too — you confirm the booking on WhatsApp and settle payment only once your companion has arrived.' },
  { q: 'Do you have independent Punjabi call girls, or only agency profiles?', a: 'Both. If you specifically want an independent Punjabi escort in Delhi, tell us upfront and we’ll match accordingly.' },
  { q: 'What do Punjabi escorts in Delhi typically cost?', a: 'Rates depend on duration and the companion you choose. We quote exact pricing on WhatsApp once we know your preferences.' },
  { q: 'Can I book a Punjabi companion the same night?', a: 'Yes, same-night booking is normal. Message us your area on WhatsApp and we’ll tell you who’s available within the hour.' },
  { q: 'Can I book a full night, not just a short visit?', a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want and we’ll quote a rate for exactly that.' },
  { q: 'Do Punjabi escorts visit hotels, homes, or both?', a: 'Both. Let us know which one you need when you message, along with your area, and we’ll plan the arrival accordingly.' },
  { q: 'How do I know the profile is real before I book?', a: 'Every Punjabi companion listed has been through our verification process — a photo check and a short confirmation call before she’s added.' },
  { q: 'Do Punjabi escorts also speak Hindi and English fluently?', a: 'Yes. Most companions in this category speak Punjabi, Hindi and English comfortably, which makes conversation easy regardless of your own background.' },
  { q: 'Can I request a specific look or age range within this category?', a: 'Yes, tell us your preference when you message and we’ll shortlist accordingly from the profiles available.' },
  { q: 'Is this category available across all your Delhi NCR locations?', a: 'Yes, Punjabi escorts are available across all twelve locations we cover — just mention your area when you message.' },
  { q: 'Is cash accepted, or do I need to pay digitally?', a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp when you confirm the booking.' },
  { q: 'Can I book a full night with a Punjabi escort, not just a short visit?', a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want when you message and we’ll quote a rate for exactly that.' },
  { q: 'Do Punjabi escorts visit hotels, homes, or both?', a: 'Both. Whether you’re at a hotel or want a home visit, let us know when you message along with your area, and we’ll plan the arrival accordingly.' },
  { q: 'Can I book the same Punjabi companion again for a future visit?', a: 'Yes, and it’s common. Mention her name or profile on WhatsApp and we’ll check her availability before confirming.' },
  { q: 'Do you cover serviced apartments and long-stay properties too?', a: 'Yes, the same process applies — share the property name and area, and we’ll match a companion accordingly.' },
  { q: 'Can I book a Punjabi escort for a dinner date rather than just a hotel or home visit?', a: 'Yes. Dinner dates and outings are bookable the same way — mention it upfront so we match a companion comfortable with that kind of evening.' },
];

export default function Punjabi() {
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
              { '@type': 'ListItem', position: 2, name: 'Categories', item: `${SITE_URL}/model-call-girls-in-delhi` },
              { '@type': 'ListItem', position: 3, name: 'Punjabi Escorts', item: `${SITE_URL}/punjabi-escorts-in-delhi` },
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
              <FaFire className="w-3.5 h-3.5" /> Bold, Vivacious & Verified
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Punjabi Escorts in Delhi, Bold &amp; Full of Energy
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              For clients who want lively, confident company rather than a quiet, formal evening —
              our Punjabi companions in Delhi bring warmth, humour and genuine energy to every
              booking, verified the same way as every other profile on the site.
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
              src="/Webpimages/SexyWomen.webp"
              alt="Punjabi escorts in Delhi"
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
            Not every client wants a reserved, formal evening. A steady share of our regulars
            specifically ask for{' '}
            <strong className="font-semibold text-gray-900">Punjabi escorts in Delhi</strong> —
            companions known for a livelier, more upfront personality and a natural ease in
            conversation that some clients simply connect with faster.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Whether it&apos;s a dinner date, a quiet hotel visit, or a full evening out, the appeal is
            usually the same — genuine warmth without needing to work for it, and a personality that
            fills a room rather than fading into the background.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Every Punjabi companion listed goes through the same verification we use across the rest
            of the site — a genuine photo check and a short confirmation call before she&apos;s added.
            We don&apos;t run recycled photos or dead numbers under a regional label just to attract
            clicks, which is a common complaint about other Punjabi escort listings online.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Whether you&apos;re after an independent Punjabi escort in Delhi or prefer us to shortlist
            from our verified roster, both options are available — just tell us your preference on
            WhatsApp. Pricing is quoted directly there once we know what you&apos;re looking for.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This category is available across every location we cover — Aerocity, Gurgaon, Noida,
            Connaught Place, Dwarka, and every other area on our list. Wherever you&apos;re based in
            Delhi NCR, tell us your area and we&apos;ll shortlist a Punjabi companion genuinely close to
            you rather than someone commuting across the city.
          </p>
        </div>
      </section>

      {/* Why Punjabi companions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Clients Choose Punjabi Companions
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            It usually comes down to energy and comfort, not just the booking itself.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <r.icon className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            How We Verify Punjabi Escort Profiles
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Regional labels get used loosely on a lot of listing sites — sometimes it&apos;s just a tag
            slapped on any profile to catch a specific search. We treat &quot;Punjabi&quot; as an actual
            category, not a marketing gimmick. Every profile listed here has been through a genuine
            photo check and a short confirmation call before she&apos;s added to the page.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;ve been let down before by a listing that promised a Punjabi companion and sent
            someone else entirely, that&apos;s exactly the gap we&apos;re trying to close. Message us on
            WhatsApp and ask any question about a profile before confirming — we&apos;d rather answer it
            upfront than have you find out at the door.
          </p>
        </div>
      </section>

      {/* Who books */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Who Usually Books Punjabi Escorts in Delhi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            It&apos;s a broader mix than the label suggests. Corporate clients unwinding after a long
            day often ask for a Punjabi companion specifically because the conversation feels less
            effortful — there&apos;s less need to warm someone up before the evening actually starts.
            Local clients who&apos;ve booked quieter, more reserved profiles before and want a change of
            pace are another common group.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We also get regulars who&apos;ve tried a few categories on the site — independent, model,
            high profile — and settled on Punjabi companions as their preference going forward,
            usually citing the energy and directness as the reason. None of this changes how a
            booking works; the process, pricing structure and pay-later policy stay identical across
            every category we list.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;re unsure whether a Punjabi companion is the right fit for what you&apos;re after,
            message us on WhatsApp and describe roughly what you want from the evening — we&apos;ll tell
            you honestly whether this category or one of our other categories is the better match.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A fair number of clients also book this category specifically for group evenings or
            celebrations — birthdays, small get-togethers, or simply a livelier night out with
            friends. The energy that draws solo clients to Punjabi companions tends to work just as
            well in a group setting, though every booking is still arranged individually through
            WhatsApp rather than as a package.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Punjabi Escorts vs Other Categories — What&apos;s Actually Different
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compared to{' '}
            <Link href="/high-profile-escorts-in-delhi" className="text-purple-700 font-medium hover:underline">high profile escorts</Link>,
            the difference is mostly tone — Punjabi companions tend to be more expressive and
            informal, where high profile bookings lean more polished and reserved. Compared to{' '}
            <Link href="/collage-call-girls-in-delhi" className="text-purple-700 font-medium hover:underline">college call girls</Link>,
            the energy is similarly lively but with more confidence and less nervousness.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Against{' '}
            <Link href="/independent-escorts-in-delhi" className="text-purple-700 font-medium hover:underline">independent escorts</Link>{' '}
            generally, there&apos;s heavy overlap — several of our Punjabi profiles are independent by
            definition. The distinction here is about personality and manner rather than booking
            structure, which stays identical: same WhatsApp process, same pay-later policy, same
            verification standard.
          </p>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Punjabi Companions</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-3 shadow-md border border-gray-100">
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={p.image} alt="Punjabi escort profile in Delhi" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
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

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Punjabi Escorts in Delhi Through Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, Real Profiles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No stock photos, no bait-and-switch at the door — every Punjabi profile is genuinely
                checked.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaLock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discreet Booking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Handled the same discreet way as every category on the site — nothing shared beyond
                what&apos;s needed.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Same as Always</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No advance payment. Confirm on WhatsApp, and settle payment once your companion has
                actually arrived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Punjabi escorts in Delhi are matched by area the same way every other category is — tell
            us where you are and we&apos;ll shortlist companions who are actually nearby.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-purple-400 hover:text-purple-700 transition">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            First Time Booking a Punjabi Escort? Read This
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A few honest tips from clients who&apos;ve booked this category before.
          </p>
          <div className="space-y-5">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <span className="font-bold text-purple-600">{i + 1}.</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="font-semibold text-gray-900">{tip.t}</strong> {tip.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaUserTie className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Booking Works</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Kept simple and low-pressure, exactly the way this kind of booking should feel.
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
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Punjabi Escorts — Common Questions
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

      {/* Explore Other Categories */}
      <section className="py-16 px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Explore Other Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-purple-400 hover:text-purple-700 transition">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Looking for a Punjabi Companion Tonight?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Message us your area on WhatsApp and we&apos;ll share a verified Punjabi profile matched to
          you — Aerocity, Gurgaon, Noida, Karol Bagh, or anywhere else in Delhi NCR. No advance
          payment — just confirm and pay later once you&apos;ve met.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
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
