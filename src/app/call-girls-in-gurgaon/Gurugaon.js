'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import {  FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import {  Star, MapPin, Sparkles, Hotel, Building2 } from 'lucide-react';



export default function Locations() {
  
   // 5 start hotel 
      const [activeHotel, setActiveHotel] = useState(null);
    
    const hotels = [
      {
        id: 1,
        name: "The Oberoi, Gurgaon",
        location: "Golf Course Road, Gurugram",
        rating: 5,
        description: "Modern architecture, close luxury. She walks in, and suddenly the room feels warmer and more welcoming — like you actually want to stay in.",
        image: "/Webpimages/hotel-suite-interior.webp",
        amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
        price: "₹18,000",
        features: ["Golf Course View", "Rooftop Pool", "Business Lounge"]
      },
      {
        id: 2,
        name: "The Leela Ambience, Gurugram",
        location: "Ambience Island, NH-8, Gurugram",
        rating: 5,
        description: "The vibe’s upscale, but not stiff. She’ll stroll right through, turn the space into a relaxed night, and lift your spirits without a word.",
        image: "/Webpimages/hotel-lounge-chandelier.webp",
        amenities: ["Luxury Spa", "Personal Shopper", "Sky Lounge", "24/7 Butler Service"],
        price: "₹16,000",
        features: ["Mall-Adjacent", "Late Checkout", "Business Lounge"]
      },
      {
        id: 3,
        name: "Trident, Gurgaon",
        location: "DLF Cyber City, Gurugram",
        rating: 5,
        description: "Known for being peaceful and polished. It’s the kind of place you can talk for hours, laugh, and genuinely feel lighter with someone beside you.",
        image: "/Webpimages/hotel-atrium-lobby.webp",
        amenities: ["Rooftop Pool", "Michelin-star Restaurant", "24/7 Butler Service"],
        price: "₹14,000",
        features: ["Cyber City Views", "Business Lounge", "Late Checkout"]
      },
      {
        id: 4,
        name: "OITC Grand Bharat (Gurgaon region)",
        location: "Sohna Road, Gurugram",
        rating: 5,
        description: "Feels like a weekend getaway even if you’re here for work — she brings the same energy, making it less about the crowd and more about you two.",
        image: "/Webpimages/hotel-exterior-night.webp",
        amenities: ["Luxury Spa", "Infinity Pool", "Personal Shopper"],
        price: "₹20,000",
        features: ["Resort-Style", "Golf View", "Quiet Setting"]
      },
      {
        id: 5,
        name: "Taj City Centre, Gurugram",
        location: "MG Road, Gurugram",
        rating: 5,
        description: "Fun, upbeat, colorful. She fits right in, brightens things up, and makes sure there’s never a dull minute in your stay.",
        image: "/Webpimages/hotel-dining-wood.webp",
        amenities: ["Sky Lounge", "Michelin-star Restaurant", "24/7 Butler Service"],
        price: "₹15,000",
        features: ["Metro-Adjacent", "Rooftop Bar", "Business Lounge"]
      },
      {
        id: 6,
        name: "The Westin, Gurgaon",
        location: "Sushant Lok, Gurugram",
        rating: 5,
        description: "Luxury with a homey touch. The room feels just right — calm, private, and personal, the way you want after a long day.",
        image: "/Webpimages/hotel-lounge-nook.webp",
        amenities: ["Rooftop Pool", "Luxury Spa", "Personal Shopper"],
        price: "₹17,000",
        features: ["Sushant Lok Views", "Late Checkout", "Quiet Setting"]
      }
    ];
  
    const amenitiesIcons = {
      "Infinity Pool": <FaSwimmingPool className="text-blue-500" />,
      "Michelin-star Restaurant": <FaUtensils className="text-red-500" />,
      "Luxury Spa": <FaSpa className="text-pink-500" />,
      "24/7 Butler Service": <FaConciergeBell className="text-amber-500" />,
      "Overwater Bungalows": <FaSwimmingPool className="text-cyan-500" />,
      "Coral Reef Access": <FaSwimmingPool className="text-teal-500" />,
      "Underwater Restaurant": <FaUtensils className="text-indigo-500" />,
      "Spa Sanctuary": <FaSpa className="text-purple-500" />,
      "Ski Valet": <FaParking className="text-blue-600" />,
      "Heated Indoor Pool": <FaSwimmingPool className="text-amber-500" />,
      "Mountain Spa": <FaSpa className="text-emerald-500" />,
      "Fondue Restaurant": <FaUtensils className="text-yellow-600" />,
      "Private Oasis Pool": <FaSwimmingPool className="text-amber-500" />,
      "Camel Rides": <FaConciergeBell className="text-orange-800" />,
      "Desert Spa": <FaSpa className="text-orange-600" />,
      "Starlight Dining": <FaUtensils className="text-indigo-500" />,
      "Cliffside Infinity Pool": <FaSwimmingPool className="text-emerald-500" />,
      "Jungle Spa": <FaSpa className="text-green-600" />,
      "Rice Terrace Dining": <FaUtensils className="text-lime-600" />,
      "Cultural Workshops": <FaConciergeBell className="text-amber-700" />,
      "Rooftop Pool": <FaSwimmingPool className="text-sky-500" />,
      "Sky Lounge": <FaConciergeBell className="text-purple-500" />,
      "Personal Shopper": <FaConciergeBell className="text-pink-500" />,
      "Broadway Concierge": <FaConciergeBell className="text-red-500" />
    };
      //end 5 start hotel 
      // FAQ Section
 const [activeCategory, setActiveCategory] = useState('all');
      const categories = [
        { id: 'all', name: 'All Staff' },
        { id: 'airhostess', name: 'Airhostess' },
        { id: 'celebrity', name: 'Celebrity' },
        { id: 'college', name: 'College Girls' },
        { id: 'foreign', name: 'Foreign Girls' },
        { id: 'highprofile', name: 'High Profile' },
      ];

                const [activeCategory1, setActiveCategory1] = useState('all');
              const [searchTerm, setSearchTerm] = useState('');
              const [openQuestion, setOpenQuestion] = useState(null);
            
              const categories1 = [
                { id: 'all', name: 'All Questions' },
                { id: 'account', name: 'Account' },
                { id: 'booking', name: 'Bookings' },
                { id: 'payments', name: 'Payments' },
                { id: 'services', name: 'Services' },
              ];
            
              const faqs = [
                {
                  id: 1,
                  question: 'Are Gurugram escorts actually the same women shown online?',
                  answer: 'You get the same person in the photo — no mismatches or fake profiles. What you see is exactly who shows up to meet you.',
                  category: 'account',
                },
                {
                  id: 2,
                  question: 'Can escorts enter five-star hotels in Gurugram without issues?',
                  answer: 'Yes, escorts arrive without any dramas — dressed smart and fitting in. Hotels don’t interfere, so your meeting stays private and breezy.',
                  category: 'payments',
                },
                {
                  id: 3,
                  question: 'Do you offer escorts who fit corporate settings and formal events?',
                  answer: 'Of course. These women know their way around a dinner table, a client event, and they’ll make you look way more comfortable when things feel stiff in a crowd.',
                  category: 'booking',
                },
                {
                  id: 4,
                  question: 'How discreet is the booking process in Gurugram?',
                  answer: 'Your details are never stored or shared. From texting to meeting, everything is on the down-low — your privacy matters as much to us as to you.',
                  category: 'booking',
                },
                {
                  id: 5,
                  question: 'Are escorts available for late-night companionship in Gurugram?',
                  answer: 'Always. Even if you get free after midnight, escorts are available at any hour — from business hotels to city apartments.',
                  category: 'payments',
                },
                {
                  id: 6,
                  question: 'Can I choose a specific personality type or vibe?',
                  answer: 'Absolutely, you can be clear about what you want. Whether you want someone calm, outgoing, playful, or totally sophisticated, you’ll be matched with the right companion.',
                  category: 'services',
                },
                {
                  id: 7,
                  question: 'Is the service limited to hotels only?',
                  answer: 'Not at all. Escorts work in hotels, serviced flats, gated communities, and private homes — you name it, as long as it’s safe.',
                  category: 'account',
                },
                {
                  id: 8,
                  question: 'How do I trust the quality of escorts in Gurugram?',
                  answer: 'Delhi Girl screens every woman for style, smarts, and honesty. You get someone who’s real — no awkward surprises, only genuine conversation and a good atmosphere every time.',
                  category: 'services',
                },
              ];
            
              const filteredFaqs = faqs.filter(faq => {
                const matchesCategory = activeCategory1 === 'all' || faq.category === activeCategory1;
                const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCategory && matchesSearch;
              });
            
              const toggleQuestion = (id) => {
                setOpenQuestion(openQuestion === id ? null : id);
              };
                //End FAQ Section
      
const cities = [
{ name: 'DELHI', img: '/Webpimages/hotel3.webp' },
{ name: 'MUMBAI', img: '/Webpimages/lajpatnagahotel.webp' },
{ name: 'NOIDA', img: '/Webpimages/RoseateHouse.webp' },
{ name: 'BANGALORE', img: '/Webpimages/paschimvihar.webp' },
{ name: 'PUNE', img: '/Webpimages/JwMarriott_CP.webp' },
{ name: 'AHMEDABAD', img: '/Webpimages/connaught-place-delhi.webp' },
{ name: 'GURGAON', img: '/Webpimages/holidayIn_CP.webp' },
{ name: 'HYDERABAD', img: '/Webpimages/tajmahalhotel_lajpatnagar.webp' },
{ name: 'KOLKATA', img: '/Webpimages/paschimvihar.webp' },
{ name: 'CHENNAI', img: '/Webpimages/hotel2.webp' },
{ name: 'CHANDIGARH', img: '/Webpimages/pullmanAerocity.webp' },
{ name: 'JAIPUR', img: '/Webpimages/jwmarriott.webp' },
]
const profiles = [
  { image: '/Webpimages/modelg.webp' },
  { image: '/Webpimages/18244.webp' },
  { image: '/Webpimages/172420-8871.webp' },
  { image: '/Webpimages/Model2.webp' },
  { image: '/Webpimages/7168.webp' },
  { image: '/Webpimages/49.webp' },
  { image: '/Webpimages/Model21.webp' },
]

const services = [
    {
      id: "01",
      title: "Professional Corporate Companionship",
      desc: "Need someone at your event or business meetup? These escorts get the scene. They’re comfortable in formal wear, spark up clever banter, and make you look right at home.",
      tag: "Business Meets",
    },
    {
      id: "02",
      title: "Private Hotel Companions",
      desc: "Just want time to chill in your room? They’ll join you for an easy, quiet evening — no rush, no scripts, just good company.",
      tag: "Private Time",
    },
    {
      id: "03",
      title: "Social Event Partners",
      desc: "Taking them out means the room feels lighter. They know how to work a party, strike up conversation, and make sure you’re having fun.",
      tag: "Parties & Events",
    },
    {
      id: "04",
      title: "Dinner Date Escorts",
      desc: "Enjoy your food, have some laughs, and don’t stress about awkward silences. They know how to keep a dinner flowing and make the night stick in your mind.",
      tag: "Dinner Dates",
    },
    {
      id: "05",
      title: "Travel & Short Trip Companions",
      desc: "Exploring the city? Rolling out for a short trip? Their energy turns a normal ride into a shared adventure — you’ll actually have someone to talk to and laugh with on the go.",
      tag: "Trips & Travel",
    },
    {
      id: "06",
      title: "Premium Independent Companionship",
      desc: "Want things relaxed? Go for an independent escort — what you see is what you get, with zero pressure and totally real company.",
      tag: "Independent",
    },
  ];
  // sfdsa
  const benefits = [
    {
      title: "No Guesswork, Total Privacy",
      desc: "No public noise — it’s just you and your chosen company, completely private and interruption-free.",
      icon: "🔒",
    },
    {
      title: "High Standards & Professionalism",
      desc: "Escorts with polished grooming, style, and presence — perfect for blending in or standing out when needed.",
      icon: "💎",
    },
    {
      title: "Reliable Across Gurugram",
      desc: "Hotels, apartments, business districts — they reach anywhere on time with no hassle.",
      icon: "📍",
    },
    {
      title: "Real Relaxation",
      desc: "Break away from stress and long work weeks with someone who genuinely knows how to ease your mind.",
      icon: "🌿",
    },
    {
      title: "Service You Can Count On",
      desc: "Smooth, confusion-free meetings that build trust — the reason people keep coming back.",
      icon: "✨",
    },
  ];
  return (
    <>
    <header className="relative overflow-hidden bg-gradient-to-r from-rose-50 via-white to-amber-50">
      <div className="absolute inset-0">
        <Image
          src="/Webpimages/fashion-portrait-beautiful-blonde-model.webp"  // 👉 apni banner image yaha lagao
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-75 sm:brightness-90"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg"
            >
              Escort Service in Gurugram — Elite, Verified Companionship
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
            >
              Discover the finest selection of professional escorts in Gurugram, tailored to elevate your social and business experiences with grace and sophistication.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://api.whatsapp.com/send?phone=918826482370"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition"
                aria-label="Primary action - Book now"
              >
                Book Your Companion
              </a>

              <a
                href="#hotels"
                className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-5 py-3 text-sm font-medium backdrop-blur-sm hover:bg-white/10 transition"
                aria-label="Secondary action - View services"
              >
                View Our Services
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3 text-xs text-white/90"
            >
              <li className="bg-white/10 px-3 py-1 rounded-full">Verified Profiles</li>
              <li className="bg-white/10 px-3 py-1 rounded-full">24/7 Support</li>
              <li className="bg-white/10 px-3 py-1 rounded-full">Discreet Booking</li>
            </motion.ul>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src="/Webpimages/18244.webp"
                      alt="Service sample"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">Top-rated Professionals</h3>
                    <p className="text-sm text-white/80">Handpicked, background-checked</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-white/6 p-3 rounded-lg">
                    <p className="text-xs text-white/80">From</p>
                    <p className="text-sm font-semibold text-white">₹999</p>
                  </div>

                  <div className="bg-white/6 p-3 rounded-lg">
                    <p className="text-xs text-white/80">Avg. Response</p>
                    <p className="text-sm font-semibold text-white">5 min</p>
                  </div>
                </div>

                <a
                  href="https://api.whatsapp.com/send?phone=918826482370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block w-full text-center rounded-md bg-white text-gray-900 px-4 py-2 font-medium shadow-sm hover:shadow-md transition"
                >
                  Quick Book
                </a>
              </div>
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/6 text-white/90">24+ Outlets</div>
              <div className="p-3 rounded-lg bg-white/6 text-white/90">Secure Payments</div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 40 C360 120 1080 -40 1440 40 L1440 120 L0 120 Z" fill="rgba(255,255,255,0.06)" />
      </svg>
    </header>
    {/* banner */}
               <section className="relative bg-gradient-to-r from-amber-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">✦</span>
            </div>

            {/* Label matches Our Premium gradient */}
            <p className="text-sm font-medium uppercase bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              OUR OUTLETS
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
    Top-Tier Bliss
  </span>{' '}
  <span className="text-amber-500">With Gurugram</span>
  <br />
  <span className="bg-black text-white px-3 py-1 rounded-md inline-block mt-2">
     Escorts
  </span>
</h2>

          <p className="text-gray-600 max-w-md">
            Where real charm, close comfort, and those genuine adult moments make your night feel all kinds of different.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=918826482370"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition"
            >
              📞 Message on WhatsApp
            </a>

            {/* Book Now uses matching gradient background */}
            <a
              href="https://api.whatsapp.com/send?phone=918826482370"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium shadow-lg hover:scale-[1.02] transition-transform"
            >
              Book Now
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/Webpimages/RoseateHouse.webp" // apni image path yaha dena
            alt="Spa & Beauty"
            width={700}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
        </motion.div>
      </div>
    </section>
            {/* end banner */}
            
            {/* aadsd */}
                <section className="bg-gradient-to-b from-amber-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <motion.h2
                    className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Experience the{" "}
                    <span className="relative">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Premium Company & Curated Moments
                      </span>
                      <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/60 z-0"></span>
                    </span>
                  </motion.h2>
        
                  <motion.div
                    className="space-y-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-600 text-lg leading-relaxed">
                         
                      Trusted,{" "}
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                        discreet and professional
                      </strong>
                      , companionship for events,{" "}
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                       travel,
                      </strong>{" "}
                      and curated experiences across Gurugram.{" "}
                      
                    </p>
                    
                  </motion.div>
           

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://api.whatsapp.com/send?phone=918826482370"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:bg-emerald-600 transition"
              >
                Book on WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#hotels"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-800 text-sm font-medium shadow-sm hover:shadow-md transition"
              >
                View Services
              </a>
            </div>

            {/* Feature list */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  {/* icon */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold">Verified Profiles</h4>
                <p className="mt-1 text-xs text-gray-500">Identity & background-checked</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold">Discreet Booking</h4>
                <p className="mt-1 text-xs text-gray-500">Secure & private handling</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold">Personal Concierge</h4>
                <p className="mt-1 text-xs text-gray-500">Tailored experiences & planning</p>
              </div>
            </div>
          </div>

          {/* Right: Profiles / Gallery */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">Featured Companions</h3>
                  <p className="text-xs text-gray-500">Curated for quality & style</p>
                </div>
                <div className="text-xs text-gray-400">Delhi</div>
              </div>

              {/* Carousel-like simple row (replace with real carousel if you want) */}
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
  {profiles.map((p, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.03 }}
      className="min-w-[160px] bg-gray-50 rounded-2xl p-3 shadow-sm"
    >
      <div className="w-full h-50 rounded-lg overflow-hidden bg-gray-200">
        {/* use p.image not p (object) */}
        <Image
          src={p.image}
          alt={`profile-${idx}`}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-3">
        <div className="font-medium text-sm">Ari • 26</div>
        <div className="text-xs text-gray-500">Events • Travel • Dining</div>
      </div>

      <div className="mt-3">
        <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white">Request</a>
      </div>
    </motion.div>
  ))}
</div>

              <div className="mt-4 text-xs text-gray-500">
                All profiles are verified and available for lawful, non-sexual companionship & event services only.
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -left-6 -top-6 hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 2-4 3-4 5v1h8v-1c0-2-4-3-4-5z" />
              </svg>
              <div className="text-sm font-medium">Trusted & Verified</div>
            </div>
          </div>
        </div>

        {/* Small CTA strip */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-inner border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-gray-800">Need something special?</div>
            <div className="text-xs text-gray-500">Custom experiences for birthdays, corporate events, travel & more.</div>
          </div>
          <div className="flex gap-3">
            <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full bg-emerald-500 text-white text-sm">Enquire Now</a>
            <a href="#faq" className="px-5 py-2 rounded-full border border-gray-200 text-sm">Read FAQ</a>
          </div>
        </div>
      </div>
    </section>
            {/* Content Hero Section */}
              <section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
    {/* Left: Text */}
    <div className="order-2 lg:order-1 text-center lg:text-left">
      <motion.h2
                    className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Gurugram Escorts:{" "}
                    <span className="relative">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Your Destination for Elite Escort Service in Gurgaon
                      </span>
                      <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/60 z-0"></span>
                    </span>
                  </motion.h2>
        
                  <motion.div
                    className="space-y-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Everyone in Gurugram is always in a rush — you see sharp workspaces, glitzy buildings, and five-star hotels packed with folks chasing big dreams. Delhi Girl gets that vibe, sending in someone who turns heads with style, walks in with sure confidence, and just has this peaceful energy that puts you at ease and makes you forget the day.{" "}
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                      </strong>
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      It’s not only about good looks. These women carry themselves with assurance and know how to settle the room. They’ll pick up on your mood right away, chatting with you without awkward small talk or fake lines. Maybe you’ve had a weird meeting or just want someone to shake off the work day with — either way, the women know when to lighten things up or make things meaningful.{" "}
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                      </strong>
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      What sticks is how it never feels forced. They meet you with a smile, listen, and make sure every second feels natural — never awkward or rehearsed. With Delhi Girl, it’s not just another night out. It’s a grown-up escape that feels like it was built exactly for you.{" "}
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                      </strong>
                    </p>
                  </motion.div>
      {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
        {title.split('\n').map((line, i) => (
          <span key={i} className={i === 1 ? 'block mt-2' : 'block'}>{line}</span>
        ))}
      </h2> */}

      {/* <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-lg">
        {subtitle}
      </p> */}

      <div className="mt-10 flex justify-center lg:justify-start">
        <a
          href="#hotels"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          View Properties
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>

    {/* Right: Polaroid-ish Webpimages */}
    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
      <div className="w-full max-w-lg lg:max-w-2xl relative">
        {/* Top image */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 0.6 }}
          className="absolute right-0 -top-12 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2"
          style={{ transformOrigin: 'right center' }}
        >
          <div className="rounded-md overflow-hidden border-1 border-white">
            <Image
              src='/Webpimages1/download (29).webp'
              alt="property 1"
              width={900}
              height={600}
              className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
            />
          </div>
        </motion.div>

        {/* Bottom image */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-52 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2 mx-auto"
          style={{ transformOrigin: 'left center' }}
        >
          <div className="rounded-md overflow-hidden border-1 border-white">
            <Image
              src='/Webpimages1/download (36).webp'
              alt="property 2"
              width={900}
              height={600}
              className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
            />
          </div>
        </motion.div>

        {/* Decorative subtle background circle */}
        <div className="hidden lg:block absolute -left-28 top-28 w-56 h-56 bg-white rounded-full opacity-30 filter blur-xl"></div>
      </div>
    </div>
  </div>
              </section>
              {/* End Content Hero Section */}

            {/* Location */}
                <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-center mb-16"
                    >
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Our Prime Locations for Escort Service in Gurugram
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Easy access across high-end spots, main business areas, and all the prime neighborhoods — smooth connection, wherever you are.
                      </p>
                    </motion.div>
            
            
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {cities.map((c, i) => (
            <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className="group block rounded-2xl overflow-hidden shadow-lg relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
            >
            <div className="relative w-full h-44 sm:h-48 lg:h-52">
            <Image
            src={c.img}
            alt={c.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            </div>


            <div className="absolute left-0 right-0 bottom-4 px-4 text-center">
            <span className="text-white text-lg sm:text-xl font-semibold tracking-wider drop-shadow-lg uppercase">{c.name}</span>
            </div>
            </motion.div>
            ))}
            </div>


            <div className="flex justify-center mt-10">
            <a
            href="/escort-service-in-delhi"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
            >
            View All Locations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            </a>
            </div>
            </div>
            </section>
                {/* End Location */}
           
            
            {/* 5 star hotel */}
        <div id="hotels" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                5-Star Hotels for Gurugram Escort Service
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kick back with a top companion inside Gurugram’s best hotel lobbies and suites — where the setting matches the company every time.
              </p>
            </motion.div>

            {/* Hotel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                    activeHotel === hotel.id ? "ring-4 ring-purple-500" : ""
                  }`}
                  onClick={() => setActiveHotel(activeHotel === hotel.id ? null : hotel.id)}
                >
                  {/* Hotel Image */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={`${hotel.name}, ${hotel.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                    <div className="absolute top-4 right-4 z-20 flex items-center bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      <FaStar className="mr-1" />
                      {hotel.rating}
                    </div>
                    <div className="absolute bottom-4 left-4 z-20 text-white">
                      <h3 className="text-xl font-bold">{hotel.name}</h3>
                      <p className="text-sm">{hotel.location}</p>
                    </div>
                  </div>

                  {/* Hotel Info */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-2">Key Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.slice(0, 4).map((amenity, index) => (
                          <div key={index} className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                            <span className="mr-2">{amenitiesIcons[amenity]}</span>
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Price and Features */}
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-700">{hotel.price}</div>
                        <div className="text-sm text-gray-500">per night</div>
                      </div>
                      <div className="flex space-x-2">
                        {hotel.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Button */}
                    <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Hotel - Theme matched */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative min-h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-800/30 z-10"></div>
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <h3 className="text-2xl font-bold">Luxury Experience Package</h3>
                    <p className="mt-2 max-w-md">Book 3 nights and receive complimentary spa treatments, airport transfers, and dining credits</p>
                  </div>
                  {/* Placeholder Image */}
                  <div className="relative bg-gradient-to-br from-purple-300 to-pink-400 w-full h-full flex items-center justify-center">
                    <Image
                        src="/Webpimages/32586.webp"
                        alt="Luxury Spa"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="rounded-2xl shadow-xl object-cover"
                      />
                    {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> */}
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 text-white">
                  <div className="flex items-center mb-4">
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="ml-2 font-semibold">Top Rated</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Exclusive Benefits for Our Guests</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Complimentary airport transfers</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Personal concierge service</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> VIP lounge access</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Michelin restaurant reservations</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Free spa credits</li>
                  </ul>
                  <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-white text-purple-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                      Explore Packages
                    </button>
                    <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                      Contact Concierge
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* END Hotel */}
<section className="w-full bg-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1 text-xs font-medium tracking-wide text-purple-300 uppercase">
            Our Escort Services in Gurugram
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Escort{" "}
            <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
              Services in Gurugram
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300/80">
            For guys who want more than just company — here’s a simple list that
            covers every mood.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.85)] sm:p-7"
            >
              {/* Top row */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-xs font-semibold text-purple-300 ring-1 ring-purple-500/40">
                    {service.id}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                    {service.title}
                  </h3>
                </div>

                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-200 ring-1 ring-purple-500/30">
                  {service.tag}
                </span>
              </div>

              {/* Divider */}
              <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-700/60 via-slate-800 to-slate-900" />

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
                {service.desc}
              </p>

              {/* Footer Line */}
              <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400/80 group-hover:bg-pink-400" />
                  Tailored for modern, discreet experiences
                </span>

                <span className="hidden text-[11px] uppercase tracking-wide text-slate-500 sm:inline">
                  Gurugram · Premium Companionship
                </span>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-10 bg-gradient-to-t from-purple-700/20 via-pink-600/10 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>

      </div>
    </section>

<section className="bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] py-20 px-6 md:px-16 relative overflow-hidden">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-lg font-medium text-purple-700 tracking-widest">
        WHY CLIENTS COME BACK
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-[#2d1f2f] mt-4 mb-6">
        Trusted Escort Service in Gurugram
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
      {/* Left Column */}
      <div>
        {/* Foreigner Staff */}
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10 border border-purple-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-purple-800">Why Choose Delhi Girl as Centre for Best Escort Service in Gurugram</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Trust is everything here — see why Delhi Girl keeps regulars coming back.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {title: ' Verified Premium Profiles Only', desc: 'Every woman is checked for the real deal — looks, style, manners, and confidence are non-negotiable. You spot her online, that’s who you’re getting.'},
              {title: 'Full Confidentiality & Discreet Coordination', desc: 'Your time stays yours. No leaking info, no weird calls, just quick bookings and subtle arrivals.'},
              {title: ' 24/7 Availability for Gurugram Clients', desc: 'No matter if it’s early morning or late at night, someone’s always on hand for your work schedule or unpredictable plans.'},
              {title:'Personalized Companionship Experience',desc:'Your mood, your pace. They adjust to chill nights, lively outings, or something quiet and private.'},
              {title:'Refined, Well-Groomed, Mature Escorts',desc:'Expect someone who looks the part, knows how to talk, and fits every kind of scene — from a hotel to a swanky bar.'},
              {title:' Trusted Reputation in Delhi NCR',desc:'Ask around — repeat clients choose Delhi Girl because every detail is sorted, and the premium feeling never slips.'}

            ].map((item, index) => (
              <div key={index} className="bg-pink-50 p-4 rounded-xl">
                <h3 className="font-bold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          {/* <p className="text-gray-600 leading-relaxed">
            This holistic framework allows us to create treatments that don&apos;t just relax temporarily but catalyze lasting change. Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
          </p> */}
          <div className="mt-6">
            <span className="inline-block bg-purple-100 text-purple-700 py-1 px-4 rounded-full text-sm font-medium">
              Verified Profiles, Every Booking
            </span>
          </div>
        </motion.div>

        {/* How to book */}
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-purple-800">How to Book Our Call Girls in Gurugram</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Quick, private, and easy — the process is a breeze.
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-6">
            {[
              'Pick your match from real profiles — there’s always enough variety for any mood or preference.', 'Drop the location and your preferred meeting time.', 'Book with one tap and relax — you get a fast, secure reply, and your privacy is locked in all the way.',
              'Your escort shows up right on time, looking sharp and setting the right vibe from the start.', 'The rest? Conversation, comfort, and fun — all revolving around you.'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-purple-700 rounded-full mr-3"></div>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
          {/* <p className="text-gray-600 leading-relaxed">
            Beyond technical excellence, we select therapists for their intuitive healing abilities. Monthly training includes emotional intelligence development and energy work certification. This investment shows in our 98% client retention rate and numerous industry awards.
          </p> */}
          <div className="mt-6">
            <span className="inline-block bg-purple-100 text-purple-700 py-1 px-4 rounded-full text-sm font-medium">
              Pay After You Meet
            </span>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Additional Information */}
    <motion.div 
      className="mt-16 bg-gradient-to-r from-purple-700 to-pink-600 rounded-2xl p-8 text-white shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Book the Top Rated Professional For Escort Services in Gurugram</h3>
          <p className="mb-4 opacity-90">
            Pick up the phone, get matched to a fresh face, and treat yourself to a night that feels made for you. Whether it’s a low-key night, classy dinner, or something spontaneous, Delhi Girl means you get all comfort and charm in one place.
          </p>
          
        </div>
        <div className="flex justify-center">
          <a 
            href="https://t.me/Tanuspa" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
          >
            <FaTelegram className="text-xl mr-3" />
            Join Telegram Channel
          </a>
        </div>
      </div>
    </motion.div>
  </div>
</section>
{/* ffa */}
 <section className="w-full bg-[#FFF9EC] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B1E]">
            Benefits of Booking{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Escort Services in Gurugram
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            Why more men prefer premium companionship crafted for comfort,
            privacy, and the best experience possible.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-7 hover:shadow-[0_14px_50px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-[#1B1B1E]">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Gradient underline hover */}
              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-40 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>


{/* FAQ Section */}
    <div id="faq" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <FiHelpCircle className="text-3xl text-purple-600 mr-3" />
            <span className="text-sm font-semibold bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full">
              Frequently Asked Questions
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            How can we help?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services, bookings, payments, and more.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for questions..."
              className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory1(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory1 === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className={`h-6 w-6 ${openQuestion === faq.id ? 'text-purple-600' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openQuestion === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600"
                    >
                      <div className="pt-2 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
                  <p className="text-purple-200 max-w-md">
                    Our support team is available 24/7 to assist you with any questions or concerns you may have.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a
                    href="mailto:info@delhigirl.in"
                    className="flex items-center justify-center bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    <FiMail className="mr-2" />
                    Email Support
                  </a>
                  <a
                    href="/contact-us"
                    className="flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                  >
                    <FiMessageSquare className="mr-2" />
                    Live Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    {/* End FAQ Section */}

    </>
  );
}