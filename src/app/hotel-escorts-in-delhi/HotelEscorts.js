'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaHotel, FaUserTie, FaShieldAlt, FaClock, FaConciergeBell, FaLock, FaKey } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const gallery = [
  { image: '/Webpimages/call-girl-1.webp', label: 'Aisha • 25', tag: '5-Star Incall' },
  { image: '/Webpimages/call-girl-3.webp', label: 'Neha • 24', tag: 'Business Hotel Regular' },
  { image: '/Webpimages/call-girl-5.webp', label: 'Priya • 26', tag: 'Suite Visits' },
  { image: '/Webpimages/call-girl-9.webp', label: 'Kiara • 23', tag: 'Late Check-In' },
  { image: '/Webpimages/call-girl-11.webp', label: 'Meher • 25', tag: 'Corporate Stays' },
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
  { name: 'High Profile', href: '/high-profile-escorts-in-delhi' },
  { name: 'Independent Profile', href: '/independent-escorts-in-delhi' },
  { name: 'Air Hostess', href: '/air-hostess-escorts-in-delhi' },
  { name: 'Model Call Girls', href: '/model-call-girls-in-delhi' },
  { name: 'Russian Escorts', href: '/russian-escorts-in-delhi' },
  { name: 'Punjabi Escorts', href: '/punjabi-escorts-in-delhi' },
];

const reasons = [
  { icon: FaKey, title: 'Comfortable at Reception', body: 'Companions are used to walking into 5-star lobbies as a regular guest would — no awkward pauses, no drawing attention at check-in.' },
  { icon: FaLock, title: 'Room-Number Discretion', body: 'We only need your room number and hotel name to plan arrival — nothing about your booking is shared beyond that.' },
  { icon: FaConciergeBell, title: 'Suite & Business-Hotel Ready', body: 'From business hotels to 5-star suites, companions adapt their presentation to match the property.' },
  { icon: FaClock, title: 'Late Check-In Friendly', body: 'Landing on a late flight or finishing a delayed meeting? Hotel bookings are built around flexible arrival timing.' },
];

const steps = [
  { n: '01', title: 'Share your hotel and area', body: 'Tell us the hotel name and which part of Delhi NCR it’s in — we’ll match a companion who can reach you without crossing the city.' },
  { n: '02', title: 'Confirm your room details', body: 'Once you’ve picked a profile, share your room number and expected timing so arrival goes smoothly at the desk.' },
  { n: '03', title: 'Meet and pay after', body: 'Your companion arrives as a normal guest visitor — payment only happens once you’ve actually met.' },
];

const tips = [
  { t: 'Have your room number ready.', b: 'This is the one detail that speeds up hotel bookings the most — share it as soon as you confirm.' },
  { t: 'Mention if your hotel has visitor sign-in.', b: 'Some properties log visitors at the desk — let us know so your companion arrives prepared and unbothered by it.' },
  { t: 'Tell us your check-in or landing time.', b: 'For late check-ins or flight-timed visits, sharing your schedule upfront means less waiting on both sides.' },
  { t: 'Confirm on WhatsApp, not a phone call.', b: 'Text keeps a clear record of the hotel, room, timing and rate, avoiding confusion at the door.' },
  { t: 'Pay only after you meet.', b: 'We never ask for advance payment or a booking fee, hotel bookings included. If anyone claims otherwise, it isn’t us.' },
];

const faqs = [
  { q: 'Do escorts visit 5-star hotels, or only budget properties?', a: 'Both. Companions are comfortable at 5-star hotels, business hotels, and budget guesthouses alike — just tell us which kind of property you’re at.' },
  { q: 'Will hotel security or reception be a problem?', a: 'Generally no. Companions arrive dressed and presented as a normal guest visitor and don’t draw attention at the lobby or lift.' },
  { q: 'Do I need to inform the hotel in advance about a visitor?', a: 'Only if your specific property requires visitor sign-in at the desk — most don’t for a short visit. If yours does, let us know and we’ll plan around it.' },
  { q: 'Is it discreet to book an escort to my hotel room?', a: 'Yes. We only ask for your hotel name and room number to coordinate arrival — nothing about your booking is shared beyond that.' },
  { q: 'Do you cover hotels in Aerocity, Gurgaon and Noida too?', a: 'Yes, across all twelve Delhi NCR locations we serve. Tell us your hotel’s area and we’ll match a companion already nearby.' },
  { q: 'Do I need to pay in advance for a hotel booking?', a: 'No. Pay later is standard — you confirm on WhatsApp and settle payment only once your companion has arrived at your room.' },
  { q: 'Can I book a hotel visit the same night?', a: 'Yes, same-night booking is common, including late check-ins. Message us your hotel and area and we’ll confirm availability.' },
  { q: 'Can I book a full night at the hotel, not just a short visit?', a: 'Yes. Full-night bookings are available — tell us the duration you want and we’ll quote a rate for exactly that.' },
  { q: 'What if my flight lands late and I check in after midnight?', a: 'That’s a common scenario, especially near Aerocity and Mahipalpur. Share your landing time and we’ll plan the visit around it.' },
  { q: 'How do I know the profile is real before I book?', a: 'Every companion listed has been through our verification process — a photo check and a short confirmation call before she’s added.' },
  { q: 'Do you cover budget hotels too, or only 5-star properties?', a: 'Both. Budget hotels and guesthouses are covered the same way as 5-star properties — just tell us which kind of property you’re staying at.' },
  { q: 'What if my hotel doesn’t allow visitors at all?', a: 'A small number of properties are strict about this. Let us know if yours is, and we’ll be upfront about whether a visit is realistic before you confirm anything.' },
  { q: 'Can corporate travellers book discreetly without it showing on hotel records?', a: 'A short visitor entry at reception is normal at most hotels and isn’t unusual for business travellers. We don’t ask for any information that would appear on a corporate expense or hotel folio.' },
  { q: 'Is cash accepted, or do I need to pay digitally?', a: 'Both work. Most clients pay cash on arrival, but UPI is fine too if that’s easier — just mention your preference on WhatsApp when you confirm the booking.' },
  { q: 'Do you cover hotels near the airport for late-arriving flights?', a: 'Yes, Aerocity and Mahipalpur see the most airport-adjacent hotel bookings. Share your landing time and we’ll plan the visit around it.' },
  { q: 'What if I’m sharing the room with a colleague on a business trip?', a: 'Let us know upfront — we’ll plan timing and arrival so it works around your specific room situation rather than assuming you have the room to yourself.' },
  { q: 'Can I request the same companion again for a future hotel stay?', a: 'Yes, and it’s common among repeat business travellers. Mention her name or profile on WhatsApp and we’ll check her availability first.' },
  { q: 'Do you cover serviced apartments and long-stay properties too?', a: 'Yes, the same process applies — share the property name and area, and we’ll match a companion accordingly.' },
  { q: 'Is there a difference in rate between 5-star and budget hotel bookings?', a: 'Rates are based on duration and companion choice, not the property tier. We quote exact pricing on WhatsApp once we know your preferences.' },
  { q: 'Can I book a hotel escort for a dinner date before heading back to my room?', a: 'Yes. Dinner dates and outings can be arranged the same way — mention it upfront so we match a companion comfortable with that kind of evening.' },
];

export default function HotelEscorts() {
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
              { '@type': 'ListItem', position: 3, name: 'Hotel Escorts', item: `${SITE_URL}/hotel-escorts-in-delhi` },
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
              <FaHotel className="w-3.5 h-3.5" /> 5-Star & Business Hotel Incall
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Hotel Escorts in Delhi, Every Property, Every Location
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl">
              Staying at a 5-star hotel, a business property, or a budget guesthouse anywhere in
              Delhi NCR? Our companions are used to hotel visits — comfortable at reception, quiet at
              the lift, and matched to whichever property you&apos;re in.
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
              src="/Webpimages/staf1.webp"
              alt="Hotel escorts in Delhi"
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
            Most of our bookings across Delhi NCR end up happening in a hotel room, not a home —
            which is why{' '}
            <strong className="font-semibold text-gray-900">hotel escorts in Delhi</strong> gets
            searched so often by travellers, corporate guests and locals booking a room for the
            evening. The details that matter here are different from a home visit: reception
            etiquette, room-number coordination, and knowing how to arrive without standing out.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Whether you&apos;re at a 5-star property near Aerocity, a business hotel in Gurgaon or
            Noida, or a budget guesthouse in Paharganj or Karol Bagh, the same standard applies —
            verified companions who know how to walk through a lobby like any other guest, and a
            booking process built around your hotel and room, not just your city.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Corporate travellers make up a large share of hotel bookings, usually after a late flight
            or a long day of meetings. Others are local clients who&apos;ve booked a hotel room
            specifically for the evening, away from home. Either way, the coordination is the same:
            hotel name, room number, and a rough arrival window is all we need.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Every companion listed here goes through the same verification we use across the site —
            a genuine photo check and a short confirmation call before she&apos;s added. We don&apos;t list
            unverified numbers under a &quot;hotel escorts&quot; label just to attract clicks.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This page exists because hotel-visit bookings have their own set of practical questions —
            reception rules, room-number coordination, late check-ins — that a generic location page
            doesn&apos;t always answer directly. Whatever hotel or area you&apos;re in, treat this as the
            reference for how the hotel side of a booking actually works.
          </p>
        </div>
      </section>

      {/* Why hotel bookings work */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Hotel Bookings Work Smoothly With Us
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Hotel visits have their own etiquette — this is what we get right, every time.
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

      {/* Incall vs outcall */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Incall vs Outcall — Which One Applies to a Hotel Visit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An outcall is what most hotel bookings actually are — your companion travels to your
            hotel and room, which is what this page covers. An incall would mean visiting a
            companion&apos;s own location instead, which is a separate arrangement and not what most
            hotel guests are looking for. If a listing elsewhere blurs this distinction, that&apos;s
            usually a sign it isn&apos;t being run properly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For outcall hotel bookings, timing matters more than for a home visit — hotel traffic,
            lift wait times, and reception check-in all add a few minutes that a residential visit
            doesn&apos;t have. We factor that into the arrival estimate we give you, so the window we
            quote is realistic rather than optimistic.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Aerocity and Mahipalpur see the highest volume of hotel outcall requests given the
            concentration of properties near the airport, followed by Gurgaon and Connaught Place for
            business travel, and Karol Bagh and Paharganj for budget-hotel guests near the railway
            corridor. Wherever your hotel is, the same standard applies — verified companions,
            room-level discretion, and pay after you meet.
          </p>
        </div>
      </section>

      {/* Featured Companions Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Companions for Hotel Visits</h2>
              <p className="text-gray-600 text-sm mt-1">Verified profiles, updated regularly</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-3 shadow-md border border-gray-100">
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                  <Image src={p.image} alt="Hotel escort profile in Delhi" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
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

      {/* Hotel etiquette */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Hotel Etiquette We Follow, Every Booking
          </h2>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">1.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Dressed appropriately for the property.</strong>{' '}
                A 5-star lobby and a budget guesthouse call for different presentation — companions
                adjust accordingly so nothing draws a second look.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">2.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">No loitering in lobbies or corridors.</strong>{' '}
                Arrival is timed to go straight from entrance to lift to your room, minimising time
                spent in shared spaces.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">3.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Quiet, low-key knock and entry.</strong>{' '}
                No calling out in hallways, no unnecessary noise near neighbouring rooms.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">4.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">Respectful of hotel staff and rules.</strong>{' '}
                Every property has its own policies, and companions are briefed to follow whatever the
                specific hotel expects of guests and visitors.
              </p>
            </div>
            <div className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
              <span className="font-bold text-purple-600">5.</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="font-semibold text-gray-900">A clean, quiet exit.</strong>{' '}
                Departure is handled the same discreet way as arrival, so nothing about the visit
                lingers after it&apos;s over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Book Hotel Escorts in Delhi Through Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaShieldAlt className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, Real Profiles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Genuinely verified companions who know how to present themselves at any hotel
                standard.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaLock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Room-Level Discretion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We only need your hotel and room number — nothing about your stay is shared beyond
                that.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <FaClock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Later, Every Hotel</h3>
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Hotel Areas We Cover</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Hotel bookings are matched by area the same way every other booking is — tell us which
            part of Delhi NCR your hotel is in and we&apos;ll shortlist companions who are actually
            nearby.
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
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            First Time Booking an Escort to Your Hotel? Read This
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A few honest tips that make hotel visits go smoothly.
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

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3">
            <FaUserTie className="text-purple-600 w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Hotel Booking Works</h2>
          </div>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            Built around your hotel and room, not just your city.
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
            Hotel Escorts — Common Questions
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
      <section className="py-16 px-6 border-t border-gray-100">
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
          Booked Into a Hotel Tonight?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Share your hotel name, area and room number on WhatsApp and we&apos;ll tell you exactly
          who&apos;s available nearby, whether you&apos;re at a 5-star property or a budget guesthouse. No
          advance payment — just confirm and pay later once you&apos;ve met.
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
