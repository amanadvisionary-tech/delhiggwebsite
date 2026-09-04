'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaHeart, FaUserTie, FaShieldAlt, FaClock, FaGem, FaLock } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/downloadd1.webp', label: 'Rina • 32', tag: 'Evening Visits' },
  { image: '/Webpimages/downloadd2.webp', label: 'Sunita • 30', tag: 'Hotel Stays' },
  { image: '/Webpimages/downloadd3.webp', label: 'Meenal • 34', tag: 'Weekday Bookings' },
  { image: '/Webpimages/downloadd4.webp', label: 'Kavita • 29', tag: 'Corporate Evenings' },
  { image: '/Webpimages/downloadd5.webp', label: 'Poonam • 33', tag: 'Discreet Home Visits' },
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
];

const otherCategories = [
  { name: 'Independent Profile', href: '/independent-escorts-in-delhi' },
  { name: 'High Profile', href: '/high-profile-escorts-in-delhi' },
  { name: 'College Girl', href: '/collage-call-girls-in-delhi' },
  { name: 'Air Hostess', href: '/air-hostess-escorts-in-delhi' },
  { name: 'Russian Escorts', href: '/russian-escorts-in-delhi' },
  { name: 'Model Call Girls', href: '/model-call-girls-in-delhi' },
];

const reasons = [
  {
    icon: FaGem,
    title: 'Mature, Confident Company',
    body: 'Clients who prefer housewife escorts in Delhi usually want someone experienced and self-assured — less small talk, more genuine, comfortable conversation from the first few minutes.',
  },
  {
    icon: FaHeart,
    title: 'Warm, Unhurried Manner',
    body: 'Housewife companions tend to bring a calmer, more attentive energy — better suited to a relaxed evening than a rushed visit.',
  },
  {
    icon: FaLock,
    title: 'Discretion Both Ways',
    body: 'Many of our housewife profiles have their own reasons for privacy, so every booking is handled with extra care on both sides — no unnecessary detail is ever shared.',
  },
  {
    icon: FaClock,
    title: 'Flexible, Weekday-Friendly',
    body: 'Housewife companions are often available on weekday afternoons and evenings, not just weekend nights — useful if your schedule doesn’t match typical booking hours.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Tell us your area and preference',
    body: 'Let us know which part of Delhi NCR you’re in and roughly the kind of companion you’re looking for — we’ll shortlist housewife profiles matched to that.',
  },
  {
    n: '02',
    title: 'Review a verified profile',
    body: 'We share a genuine, verified profile — no stock photos, no surprises. Take your time deciding, there’s no pressure to confirm immediately.',
  },
  {
    n: '03',
    title: 'Confirm and relax',
    body: 'Once confirmed, we coordinate the hotel or home visit discreetly — payment only after you’ve actually met.',
  },
];

const faqs = [
  {
    q: 'Are your housewife escorts in Delhi genuine, or just a marketing label?',
    a: 'Genuine. Every housewife profile listed is a real, verified companion, typically in her late twenties to mid-thirties, chosen specifically for clients who prefer more mature, experienced company over younger profiles.',
  },
  {
    q: 'How discreet is booking a housewife companion, for both sides?',
    a: 'Very. Many of these companions have personal reasons for privacy, so we handle both the client’s and the companion’s confidentiality with extra care — details are never shared beyond what’s needed to complete the booking.',
  },
  {
    q: 'Which areas do you cover for housewife escorts in Delhi?',
    a: 'The same areas we cover across Delhi NCR — Aerocity, Connaught Place, Dwarka, Mahipalpur, Lajpat Nagar, Noida, Gurgaon, Karol Bagh, Vasant Kunj and Saket. Tell us your area and we’ll match accordingly.',
  },
  {
    q: 'Do I need to pay in advance to book a housewife escort?',
    a: 'No. Pay later applies here too — you confirm the booking on WhatsApp and settle payment only once your companion has arrived.',
  },
  {
    q: 'What do housewife escorts in Delhi typically cost?',
    a: 'Rates depend on duration and the companion you choose. We quote exact pricing on WhatsApp once we know your preferences — no hidden add-ons at the door.',
  },
  {
    q: 'Can I book a housewife companion the same night?',
    a: 'Yes, same-night booking is normal. Message us your area on WhatsApp and we’ll tell you who’s available within the hour.',
  },
  {
    q: 'Can I book a full night with a housewife escort, not just a short visit?',
    a: 'Yes. Full-night bookings are available alongside shorter visits — tell us the duration you want when you message and we’ll quote a rate for exactly that.',
  },
  {
    q: 'Do housewife escorts visit hotels, homes, or both?',
    a: 'Both. Let us know which one you need when you message, along with your area, and we’ll plan the arrival accordingly.',
  },
  {
    q: 'How do I know the profile is real before I book?',
    a: 'Every housewife companion listed has been through our verification process — a photo check and a short confirmation call before she’s added. We don’t list unverified or recycled profiles.',
  },
  {
    q: 'Is cash accepted, or do I need to pay digitally?',
    a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp when you confirm the booking.',
  },
  {
    q: 'Can I request the same housewife companion again for a future booking?',
    a: 'Yes, and it’s common. If you’ve booked someone before and want her again, just mention her name or profile on WhatsApp and we’ll check her availability first.',
  },
  {
    q: 'What age range do your housewife escorts in Delhi usually fall into?',
    a: 'Typically late twenties to mid-thirties. If you have a specific preference within that range, let us know when you message and we’ll shortlist accordingly.',
  },
];

export default function Housewife() {
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
              { '@type': 'ListItem', position: 2, name: 'Categories', item: `${SITE_URL}/model-call-girls-in-delhi` },
              { '@type': 'ListItem', position: 3, name: 'Housewife Escorts', item: `${SITE_URL}/housewife-escorts-in-delhi` },
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
              <FaLock className="w-3.5 h-3.5" /> Extra-discreet booking, both sides
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Housewife Escorts in Delhi, Mature &amp; Discreet
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              For clients who prefer someone more mature, experienced and self-assured — our housewife
              companions in Delhi bring a calmer, warmer energy than a typical booking, with
              confidentiality handled carefully on both sides.
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
              src="/Webpimages/housewife.webp"
              alt="Housewife escorts in Delhi"
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
            Not every client is looking for the youngest profile on the list. A good number of our
            regulars specifically ask for{' '}
            <strong className="font-semibold text-gray-900">housewife escorts in Delhi</strong> —
            companions who are typically a little older, more experienced, and considerably more
            comfortable holding a real conversation than a nervous first-timer.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            These bookings tend to come with an extra layer of sensitivity, because many of our
            housewife companions have their own reasons for wanting privacy. We treat that as
            seriously as we treat client confidentiality — nothing about either side is shared beyond
            what&apos;s strictly needed to arrange the visit.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Whether you&apos;re after an independent housewife escort in Delhi or prefer us to shortlist
            from our verified roster, both options are available — just tell us your preference on
            WhatsApp. Pricing is quoted directly there once we know what you&apos;re looking for, and
            same-night bookings are handled as easily as ones planned a few days out.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every housewife profile listed goes through the same verification we use across the rest
            of the site — a genuine photo check and a short confirmation call before she&apos;s added.
            We don&apos;t run recycled photos or dead numbers under a &quot;housewife&quot; label just to
            attract clicks, which is a common complaint about other housewife escort listings online.
            If a profile is on this page, she&apos;s active and checked.
          </p>
        </div>
      </section>

      {/* Why housewife companions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Clients Choose Housewife Companions
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            It usually comes down to the kind of evening you&apos;re after, not just the booking itself.
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

      {/* Who books housewife companions */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Who Usually Books Housewife Escorts in Delhi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            It&apos;s a wider mix of clients than people assume. Married men looking for someone who
            understands discretion without needing it explained are a big part of it — a housewife
            companion generally doesn&apos;t need the conversation about confidentiality that a younger
            profile might. Corporate travellers who&apos;ve done the usual younger-companion booking
            before and want something calmer are another common group.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We also get a fair number of first-time clients who are simply more comfortable with
            someone closer to their own age, and regulars who&apos;ve tried a few categories on the site
            — independent, model, college — and settled on housewife companions as their preference
            going forward. None of this changes how a booking works; the process, pricing structure
            and pay-later policy stay identical across every category we list.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;re unsure whether a housewife companion is the right fit for what you&apos;re after,
            message us on WhatsApp and describe roughly what you want from the evening — we&apos;ll tell
            you honestly whether this category or one of our other categories is the better match.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A smaller but consistent group of clients are simply repeat bookers who&apos;ve found a
            companion they get along with and keep coming back to the same profile. That&apos;s common in
            this category specifically — once a client and companion click, the conversation gets
            easier every time, which is part of why housewife escorts in Delhi tend to have a higher
            rate of repeat clients than average.
          </p>
        </div>
      </section>

      {/* How we verify */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            How We Verify Housewife Companions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The word &quot;housewife&quot; gets used loosely on a lot of listing sites — sometimes it&apos;s
            just a label slapped on any profile to attract clicks, with no real verification behind
            it. We treat it as an actual category, not a marketing tag. Every profile listed here has
            been through a genuine photo check and a short confirmation call before she&apos;s added to
            the page.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            That verification matters more here than in most categories, because clients specifically
            booking a housewife escort are usually doing so for the maturity and experience, not just
            a photo. A mismatch between the profile and who actually shows up is a bigger letdown in
            this category than almost any other, so we&apos;re stricter about keeping listings current
            and removing anyone who goes inactive.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;ve been burned before by a housewife escort listing that turned out to be fake or
            outdated, that&apos;s exactly the gap we&apos;re trying to close. Message us on WhatsApp and
            ask any question about a profile before confirming — we&apos;d rather answer it upfront than
            have you find out at the door.
          </p>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Housewife Companions</h2>
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
                    alt={`Housewife escort profile in Delhi`}
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

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Housewife Escorts in Delhi Through Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, Real Profiles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every housewife companion is genuinely verified — no stock photos, no bait-and-switch
                at the door.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaLock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Two-Way Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Confidentiality is handled carefully for the client and the companion alike, given how
                sensitive these bookings can be.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
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
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Housewife escorts in Delhi are matched by area the same way every other category is —
            tell us where you are and we&apos;ll shortlist companions who are actually nearby, whether
            that&apos;s a hotel visit in Aerocity, a residential pocket in Vasant Kunj, or a home visit
            near Karol Bagh. Coverage runs across all ten locations below, and if you&apos;re somewhere
            not listed, message us anyway — we usually still cover it, just with a slightly longer
            arrival window.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-purple-400 hover:text-purple-700 transition"
              >
                {area.name}
              </Link>
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

      {/* Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Housewife Escorts vs Other Categories — What&apos;s Actually Different
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compared to{' '}
            <Link href="/collage-call-girls-in-delhi" className="text-purple-700 font-medium hover:underline">college call girls</Link>{' '}
            in Delhi, the biggest difference is pace and conversation style — housewife companions
            tend to be less nervous, more direct, and better at reading what kind of evening you
            actually want without a lot of prompting. Compared to{' '}
            <Link href="/model-call-girls-in-delhi" className="text-purple-700 font-medium hover:underline">model call girls</Link>,
            the focus shifts from polished presentation toward genuine, relaxed company.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Against{' '}
            <Link href="/independent-escorts-in-delhi" className="text-purple-700 font-medium hover:underline">independent escorts</Link>{' '}
            generally, housewife companions overlap heavily — in fact, several of our housewife
            profiles are independent by definition. The distinction we&apos;re making on this page is
            about age, manner and experience rather than booking structure, which stays identical
            across every category: same WhatsApp process, same pay-later policy, same verification
            standard.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;re torn between categories, the simplest approach is to just tell us what matters
            most — age range, conversation style, or a specific look — and let us suggest a category
            rather than guessing from the label alone.
          </p>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            First Time Booking a Housewife Escort? Read This
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A few honest tips from clients who&apos;ve booked this category before.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">1.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Say &quot;housewife&quot; upfront.</strong>{' '}
                Mentioning the category clearly when you message speeds up matching — we won&apos;t
                suggest a younger profile by mistake.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">2.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Share your area, not just your city.</strong>{' '}
                We cover ten locations across Delhi NCR — telling us which one gets you a faster,
                closer match.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">3.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Confirm on WhatsApp, not a phone call.</strong>{' '}
                Text keeps a clear record of timing, location and rate, avoiding confusion for either
                side at the door.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">4.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Pay only after you meet.</strong>{' '}
                We never ask for advance payment or a booking fee for any category, housewife
                included. If anyone claims otherwise, it isn&apos;t us.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">5.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Be specific about what you&apos;re after.</strong>{' '}
                A quiet conversation, a relaxed evening, a full night — being clear upfront helps us
                match a companion whose manner actually fits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Housewife Escorts — Common Questions
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

      {/* Explore Other Categories */}
      <section className="py-16 px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Explore Other Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-purple-400 hover:text-purple-700 transition"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Looking for a Housewife Companion Tonight?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Message us your area on WhatsApp and we&apos;ll share a verified housewife profile matched to
          you. No advance payment — just confirm and pay later once you&apos;ve met.
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
            href="/model-call-girls-in-delhi"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            View All Categories
          </Link>
        </div>
      </section>
    </main>
  );
}
