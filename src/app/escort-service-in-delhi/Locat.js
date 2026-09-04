'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa, FaWhatsapp } from 'react-icons/fa';
import { FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { Star, MapPin, Sparkles, Hotel, Building2 } from 'lucide-react';
import { Content } from 'next/font/google';



export default function Locations() {

  // 5 start hotel 
  const [activeHotel, setActiveHotel] = useState(null);

  const hotels = [
    {
      id: 1,
      name: "The Leela Palace, New Delhi",
      location: "New Delhi",
      rating: 5,
      description: "Royal escapades with your own cavalry of style, blending grace with hot titillation, grinding bodies, kisses, caressing touches and a night to fuse you, both inward and out. The atmosphere, the sumptuousness, the woman, all that becomes hard to resist the sense of pleasure.",
      image: "/Webpimages/theleela.webp",
      amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
      price: "₹25,000",
      features: ["Ocean View", "Private Beach", "Helipad"]
    },
    {
      id: 2,
      name: "Taj  hNew Delhi",
      rating: 5,
      description: "A private fantasy playground. She moves up, lips rubbing your skin, fingers making a dangerous path, the body being wrapped around you, and the night becomes wild, passionate and addictive.",
      image: "/Webpimages/tajpalace.webp",
      amenities: ["Overwater Bungalows", "Coral Reef Access", "Underwater Restaurant", "Spa Sanctuary"],
      price: "₹45,000",
      features: ["Private Island", "Seaplane Transfer", "Glass Floor"]
    },
    {
      id: 3,
      name: "The Oberoi, New Delhi",
      location: "New Delhi",
      rating: 5,
      description: "Blameless high-fashion and eroticism. Your escort knows how to strip your stress, get into your arms and ride your urges with the perfect measure of control, slow, deep, intense or fast and heated.",
      image: "/Webpimages/oberoihotel.webp",
      amenities: ["Ski Valet", "Heated Indoor Pool", "Mountain Spa", "Fondue Restaurant"],
      price: "₹38,000",
      features: ["Private Ski Lift", "Fireplace Lounges", "Chocolate Atelier"]
    },
    {
      id: 4,
      name: "ITC Maurya, Chanakyapuri",
      location: "New Delhi",
      rating: 5,
      description: "A classics of luxury in which passion strikes more. She anticipates warm mouths, cooing moans, tight hugs, intense orgasms, and a night filled with an intoxicating touch that she dominates and makes you go through exciting pleasure heights.",
      image: "/Webpimages/itcmaurya.webp",
      amenities: ["Private Oasis Pool", "Camel Rides", "Desert Spa", "Starlight Dining"],
      price: "₹32,000",
      features: ["Falconry Experience", "Gold-plated Interiors", "Private Dune"]
    },
    {
      id: 5,
      name: "JW Marriott, Aerocity",
      location: "New Delhi",
      rating: 5,
      description: "A glamorous mixture of fashion and passion. She understands how to creep into your bed, and put her thighs around you, and coo all kinds of foul allurements, and get you out of the world beyond your room.",
      image: "/Webpimages/jwmarriott.webp",
      amenities: ["Cliffside Infinity Pool", "Jungle Spa", "Rice Terrace Dining", "Cultural Workshops"],
      price: "₹28,000",
      features: ["Volcano Views", "Sacred Spring", "Monkey Sanctuary"]
    },
    {
      id: 6,
      name: "The Imperial, Janpath",
      location: "New Delhi",
      rating: 5,
      description: "There is classic opulence combined with fire and brim. Your retinue is slow, voluptuous, then fierce, wild love-making, riding you, teasing you, holding you, and making a night to remember.",
      image: "/Webpimages/imperial.webp",
      amenities: ["Rooftop Pool", "Sky Lounge", "Personal Shopper", "Broadway Concierge"],
      price: "₹52,000",
      features: ["Central Park View", "Penthouse Suites", "Private Elevator"]
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
      question: 'Are your Delhi escorts actually real, or will I get scammed like other agencies?',
      answer: 'Only real escorts are offered at Delhi Girl. No false photos, no substituted models, no excuses. You get the very woman you select, the same face, same curves, the same vitality, the same experience. No deceits, no disillusionment, no cheating',
      category: 'account',
    },
    {
      id: 2,
      question: 'Do the escorts offer full intimate service or only companionship?',
      answer: 'Majority of escorts provide full service based on comfort, chemistry, and behavior of the clients. In case the vibe is correct and both of them agree with each other, the session is wild, intimate, and very satisfying. It is not forced, feigned, Delhi Girl always develops naturally.',
      category: 'payments',
    },
    {
      id: 3,
      question: 'Can escorts visit top 5-star hotels without any issues?',
      answer: 'Yes. Our escorts will know how to fit in as high-end guests do. They do this in a discreet manner, act in a business manner, and cause no form of disturbance. Privacy and comfort are completely guaranteed during the booking.',
      category: 'booking',
    },
    {
      id: 4,
      question: 'What if I want a bold, adventurous, kinky, or wild experience?',
      answer: 'Just share what you crave. You want to have the slow sensual kissing, deep riding, playful domination, or for some people who desire passion, we will match you with the correct woman. Our escorts will fit your fantasies and make your nights to be worth remembering.',
      category: 'booking',
    },
    {
      id: 5,
      question: 'Are Russian escorts hotter or more passionate than Indian escorts?',
      answer: 'Each of the two categories possesses its fire. Russians have daring, aggressive sexual closeness and sheer strength whereas the Indian escorts have warmth, erotic bodies, charm and great emotional connection. It is a matter of what type of night you would want.',
      category: 'payments',
    },
    {
      id: 6,
      question: 'Does it have late-night or early-morning escort service in Delhi?',
      answer: 'Yes. We operate 24/7. The urge to snack in the middle of the night, the need to feel lonely in the early morning, the need to feel desperate after a night party, at any hour that you get the urge to feel the fire, your favorite companion is ready with suggestive power and inescapable warmth.',
      category: 'services',
    },
    {
      id: 7,
      question: 'Are you absolutely confidential when making bookings?',
      answer: 'Absolutely. None is stored, exchanged, spilled, and talked about. The identity, hotel data and activities remain completely confidential. Delhi Girl is a company that deals with the clients of the most prestigious professions- privacy is a very strict principle.',
      category: 'account',
    },
    {
      id: 8,
      question: 'How do I know the escort will match my sexual preferences?',
      answer: 'We want to know what you like and book it beforehand body type, personality, level of confidence, explicitness, and intimacy style. Sensual, wild, dominant, or playful, we propose a woman who will strike the right sexual tempo to you.',
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
  const outlets = [
    {
      name: "The Grand Plaza",
      desc: "Luxury spa at the heart of downtown with panoramic city views",
      rating: 5,
      tag: "Exclusive",
      // icon: <Sparkles className="w-6 h-6 text-pink-600" /> // Pink
      icon: <MapPin className="w-6 h-6 text-purple-600" /> // Green
    },
    {
      name: "Marina Bay Resort",
      desc: "Beachfront sanctuary with ocean-inspired treatments",
      rating: 5,
      tag: "Waterfront",
      // icon: <Hotel className="w-6 h-6 text-blue-600" /> // Blue
      icon: <MapPin className="w-6 h-6 text-purple-600" /> // Green
    },
    {
      name: "Skyline Tower",
      desc: "Rooftop wellness center with city skyline views",
      rating: 5,
      tag: "Panoramic",
      // icon: <Building2 className="w-6 h-6 text-purple-600" /> // Purple
      icon: <MapPin className="w-6 h-6 text-purple-600" /> // Green
    },
    {
      name: "Royal Gardens",
      desc: "Historic mansion transformed into a luxury spa retreat",
      rating: 5,
      tag: "Heritage",
      icon: <MapPin className="w-6 h-6 text-purple-600" /> // Green
    },
  ];
  const cities = [
    { name: 'AEROCITY', img: '/Webpimages/hotel-atrium-lobby.webp', href: '/aerocity-escorts' },
    { name: 'CONNAUGHT PLACE', img: '/Webpimages/connaught-place-delhi.webp', href: '/call-girls-in-connaught-place' },
    { name: 'DWARKA', img: '/Webpimages/hotel2.webp', href: '/call-girls-in-dwarka' },
    { name: 'MAHIPALPUR', img: '/Webpimages/paschimvihar.webp', href: '/call-girls-in-mahipalpur' },
    { name: 'LAJPAT NAGAR', img: '/Webpimages/tajmahalhotel_lajpatnagar.webp', href: '/call-girls-in-lajpat-nagar' },
    { name: 'NOIDA', img: '/Webpimages/hotel3.webp', href: '/call-girls-in-noida' },
    { name: 'GURGAON', img: '/Webpimages/hotel-exterior-night.webp', href: '/call-girls-in-gurgaon' },
    { name: 'KAROL BAGH', img: '/Webpimages/hotel-exterior-night.webp', href: '/call-girls-in-karol-bagh' },
    { name: 'VASANT KUNJ', img: '/Webpimages/hotel-lounge-chandelier.webp', href: '/call-girls-in-vasant-kunj' },
    { name: 'SAKET', img: '/Webpimages/hotel-lounge-nook.webp', href: '/call-girls-in-saket' },
  ]
  const profiles = [
    { image: '/Webpimages/modelg.webp', name: 'Riya', age: 24, tag: 'Dinner • Hotel Stays' },
    { image: '/Webpimages/18244.webp', name: 'Simran', age: 26, tag: 'Events • Travel' },
    { image: '/Webpimages/172420-8871.webp', name: 'Ananya', age: 23, tag: 'Dining • Nightlife' },
    { image: '/Webpimages/Model2.webp', name: 'Priya', age: 25, tag: 'Hotel Visits • Parties' },
    { image: '/Webpimages/7168.webp', name: 'Neha', age: 24, tag: 'Corporate Events • Dinner' },
    { image: '/Webpimages/49.webp', name: 'Kavya', age: 27, tag: 'Travel • Overnight Stays' },
    { image: '/Webpimages/call-girl-1.webp', name: 'Isha', age: 23, tag: 'Parties • Dining' },
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
      title: "Reliable Across Delhi NCR",
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

  // Content
  const services2 = [
    {
      title: "Independent Escorts in Delhi",
      desc: "Independent escorts in Delhi bring their own personality and confidence straight to your room — no script, no forced routine, just a genuinely relaxed evening on their own terms.",
      headline: "Why clients choose independent escorts",
      points: [
        "Real chemistry, not a performance",
        "More freedom in how the evening unfolds",
        "A closer, more personal connection"
      ],
      para: "They read the mood and match your pace, whether that's slow and easy or something more intense.",
      href: "/independent-escorts-in-delhi"
    },
    {
      title: "College Call Girls in Delhi",
      desc: "College-going companions bring a youthful, easygoing energy — friendly, curious, and genuinely fun to be around without any of the usual formality.",
      headline: "Why clients choose college call girls",
      points: [
        "Natural, easygoing charm",
        "Playful and full of energy",
        "A refreshingly casual vibe"
      ],
      para: "It's a popular pick for clients who want the evening to feel relaxed rather than staged.",
      href: "/collage-call-girls-in-delhi"
    },
    {
      title: "High Profile Escorts in Delhi",
      desc: "For clients who want a companion with model-level looks and a polished, high-profile presence — the kind of evening that feels genuinely upscale.",
      headline: "Highlights",
      points: [
        "Striking looks and real presence",
        "Refined, high-end manner",
        "An evening that feels like a scene from a film"
      ],
      para: "Booking a high profile escort in Delhi is especially popular for dinner dates and special occasions.",
      href: "/high-profile-escorts-in-delhi"
    },
    {
      title: "Air Hostess Escort Service",
      desc: "Air hostess escorts bring a polished, well-travelled presence — composed, well-spoken, and easy company for business travellers and evening bookings alike.",
      headline: "Why clients love air hostess escorts",
      points: [
        "Poised and well-groomed",
        "Easy, sophisticated conversation",
        "Comfortable in any setting"
      ],
      para: "This is one of our most requested categories for corporate evenings and hotel stays.",
      href: "/air-hostess-escorts-in-delhi"
    },
    {
      title: "Russian Escorts in Delhi",
      desc: "Russian escorts in Delhi combine striking looks with a bold, confident energy — a popular choice for clients after something a little different.",
      headline: "Why Russian escorts are a top pick",
      points: [
        "Bold, confident presence",
        "High energy company",
        "A memorable change of pace"
      ],
      para: "Many clients specifically request Russian escorts in Delhi for exactly this reason.",
      href: "/russian-escorts-in-delhi"
    }
  ];
  return (
    <>
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.delhigirl.in' },
              { '@type': 'ListItem', position: 2, name: 'Escort Service in Delhi', item: 'https://www.delhigirl.in/escort-service-in-delhi' },
            ],
          }),
        }}
      />

      {/* FAQPage structured data — static, matches the 8 visible FAQ items exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Are your Delhi escorts actually real, or will I get scammed like other agencies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Only real escorts are offered at Delhi Girl. No false photos, no substituted models, no excuses. You get the very woman you select, the same face, same curves, the same vitality, the same experience. No deceits, no disillusionment, no cheating',
                },
              },
              {
                '@type': 'Question',
                name: 'Do the escorts offer full intimate service or only companionship?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Majority of escorts provide full service based on comfort, chemistry, and behavior of the clients. In case the vibe is correct and both of them agree with each other, the session is wild, intimate, and very satisfying. It is not forced, feigned, Delhi Girl always develops naturally.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can escorts visit top 5-star hotels without any issues?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Our escorts will know how to fit in as high-end guests do. They do this in a discreet manner, act in a business manner, and cause no form of disturbance. Privacy and comfort are completely guaranteed during the booking.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if I want a bold, adventurous, kinky, or wild experience?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Just share what you crave. You want to have the slow sensual kissing, deep riding, playful domination, or for some people who desire passion, we will match you with the correct woman. Our escorts will fit your fantasies and make your nights to be worth remembering.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are Russian escorts hotter or more passionate than Indian escorts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Each of the two categories possesses its fire. Russians have daring, aggressive sexual closeness and sheer strength whereas the Indian escorts have warmth, erotic bodies, charm and great emotional connection. It is a matter of what type of night you would want.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does it have late-night or early-morning escort service in Delhi?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We operate 24/7. The urge to snack in the middle of the night, the need to feel lonely in the early morning, the need to feel desperate after a night party, at any hour that you get the urge to feel the fire, your favorite companion is ready with suggestive power and inescapable warmth.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are you absolutely confidential when making bookings?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. None is stored, exchanged, spilled, and talked about. The identity, hotel data and activities remain completely confidential. Delhi Girl is a company that deals with the clients of the most prestigious professions- privacy is a very strict principle.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I know the escort will match my sexual preferences?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We want to know what you like and book it beforehand body type, personality, level of confidence, explicitness, and intimacy style. Sensual, wild, dominant, or playful, we propose a woman who will strike the right sexual tempo to you.',
                },
              },
            ],
          }),
        }}
      />

      {/* banner */}
      <section className="relative bg-gradient-to-r from-amber-50 to-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">

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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Verified Delhi Escorts &amp;{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Call Girls
              </span>{' '}
              for Every Location
            </h1>

            <p className="text-gray-600 max-w-md">
              Book verified{' '}
              <strong className="font-semibold text-gray-900">Delhi escorts</strong> and{' '}
              <strong className="font-semibold text-gray-900">call girls in Delhi</strong> across{' '}
              <Link href="/aerocity-escorts" className="text-purple-700 font-medium hover:underline">Aerocity</Link>,{' '}
              <Link href="/call-girls-in-connaught-place" className="text-purple-700 font-medium hover:underline">Connaught Place</Link>,{' '}
              <Link href="/call-girls-in-dwarka" className="text-purple-700 font-medium hover:underline">Dwarka</Link>,{' '}
              <Link href="/call-girls-in-mahipalpur" className="text-purple-700 font-medium hover:underline">Mahipalpur</Link>,{' '}
              <Link href="/call-girls-in-lajpat-nagar" className="text-purple-700 font-medium hover:underline">Lajpat Nagar</Link>,{' '}
              <Link href="/call-girls-in-noida" className="text-purple-700 font-medium hover:underline">Noida</Link>,{' '}
              <Link href="/call-girls-in-gurgaon" className="text-purple-700 font-medium hover:underline">Gurgaon</Link>,{' '}
              <Link href="/call-girls-in-karol-bagh" className="text-purple-700 font-medium hover:underline">Karol Bagh</Link>,{' '}
              <Link href="/call-girls-in-vasant-kunj" className="text-purple-700 font-medium hover:underline">Vasant Kunj</Link> &amp;{' '}
              <Link href="/call-girls-in-saket" className="text-purple-700 font-medium hover:underline">Saket</Link> — same-day booking at premium hotels.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=918826482370"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform"
              >
                <FaWhatsapp className="text-lg" /> Book Now
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-lg h-72 md:h-96 max-w-xl mx-auto lg:mx-0"
          >
            <Image
              src="/Webpimages/5-star-hotels.webp"
              alt="5-star luxury hotel in Delhi NCR for escort service bookings"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 36rem"
              style={{ objectFit: 'cover' }}
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
                Enjoy the pleasure at your{" "}
                <span className="relative">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    doorstep with the escort service in Delhi
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

                  Lady-love companionship,{" "}
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                    daring chemistry,
                  </strong>
                  and irresistible closeness brought back to your{" "}
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                    home or hotel
                  </strong>{" "}
                  at any hour when you request them.{" "}

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
                  href="https://www.delhigirl.in/delhi-call-girl-service"
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
                      <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-200">
                        <Image
                          src={p.image}
                          alt={`${p.name} — Delhi escort companion profile`}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="mt-3">
                        <div className="font-medium text-sm">{p.name} • {p.age}</div>
                        <div className="text-xs text-gray-500">{p.tag}</div>
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
              Get An Demand Escort{" "}
              <span className="relative">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Service in Delhi To the 5 Star Hotel Outlet
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
                Delhi Girl is the best at providing high-end pleasure to women who know how to transform a boring room into a heated fantasy realm. As soon as she enters your five-star suite, everything becomes different: the smell of her comes in your direction, her body language flirts with you, her gaze fixes on you, and the night turns out to be dangerous in all the right ways.
                These escorts do not come by; they slide in assuredly, sensuously, whispers, caresses, and a sensual beat that makes you get involved in their world.
                {" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                </strong>
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Do you prefer going at a slow, sensual pace with low lights or would you prefer to have a wild ride, fast, close, and personal with her, having complete control of your body and breath? Delhi Girl would make sure your ride is as much fun as you. Your suite is your plaything, her body your escape, the night something you have to remember even after she is gone, that becomes stuck to your skin.{" "}
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
                    src='/Webpimages/call-girl-10.webp'
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
                    src='/Webpimages/download27.webp'
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
              Our Prime Locations for Delhi Escort Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The best places in Delhi NCR are abuzz with good looks, chemistry, and undeniable company.
            </p>
          </motion.div>



          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {cities.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <Link
                  href={c.href}
                  className="group block rounded-2xl overflow-hidden shadow-lg relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  <div className="relative w-full h-44 sm:h-48 lg:h-52">
                    <Image
                      src={c.img}
                      alt={`Call girls in ${c.name.charAt(0) + c.name.slice(1).toLowerCase()}`}
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
                </Link>
              </motion.div>
            ))}
          </div>


          <div className="flex justify-center mt-10">
            <a
              href="https://api.whatsapp.com/send?phone=918826482370"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
            >
              Message on WhatsApp
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
              Our Top-Notch 5 Star Hotels for Escort Service in Delhi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              It is a personal luxury heaven when our escorts step in your suite making your hotel experience a one-to-one pleasure. Their warm gestures, smooth contours, firmer grip, teasing manoeuvres, and sultry voice turn your five star stay into a night that is oozing with pleasure. Delhi Girl escorts know how to beat you when you wish, give up when you wish, and follow you note-by-note. The following are the luxury hotels, which our escorts often attend with clients (we do not own hotels; we just service them):
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
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group ${activeHotel === hotel.id ? "ring-4 ring-purple-500" : ""
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
                  <a
                    href="https://api.whatsapp.com/send?phone=918826482370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    Book This Hotel on WhatsApp
                  </a>
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
                  <h3 className="text-2xl font-bold">Exclusive Packages For Escort Service in Delhi</h3>
                  <p className="mt-2 max-w-md">The ultimate packages of pleasure are made to fatten you with beauty, fire, intimacy, and wild satisfaction.</p>
                </div>
                {/* Placeholder Image */}
                <div className="bg-gradient-to-br from-purple-300 to-pink-400 w-full h-full flex items-center justify-center">
                  {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> */}
                  <Image
                    loading="lazy"
                    src="/Webpimages/call-girl-3.webp"
                    alt="Exclusive escort service packages in Delhi"
                    fill
                    className="object-cover rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700"
                  />
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
                <h3 className="text-3xl font-bold mb-4">World Class Call Girls in Delhi: 100+ Profiles, Multiple Locations and Professional Team</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Ready Elite high-profile models 24/7</li>
                  <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Erotic fantasies made to order</li>
                  <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Confirmed escorts keeping class, discretion and passion.</li>
                  {/* <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Michelin restaurant reservations</li>
            <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Free spa credits</li> */}
                </ul>
                <div className="flex space-x-4">
                  <a
                    href="http://localhost:3001/cheap-call-girls-in-delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-purple-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Explore Packages
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=918826482370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* END Hotel */}

      {/* content section  */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Most In-Demand Escort Categories in Delhi
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Every category below is verified to the same standard — pick the type of companion that fits your evening best.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services2.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:border-pink-500"
              >
                <h3 className="text-2xl font-semibold mb-3 text-pink-400">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">{item.headline}</h4>

                <ul className="space-y-2 text-sm text-gray-400 mb-4">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="text-white mb-4">{item.para}</p>
                <Link
                  href={item.href}
                  className="inline-block text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
                >
                  View {item.title} Profiles →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* end of previous code */}
      {/* <section className="w-full bg-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

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

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.85)] sm:p-7"
            >
            
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

              
              <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-700/60 via-slate-800 to-slate-900" />

              
              <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
                {service.desc}
              </p>

              <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400/80 group-hover:bg-pink-400" />
                  Tailored for modern, discreet experiences
                </span>

                <span className="hidden text-[11px] uppercase tracking-wide text-slate-500 sm:inline">
                  Gurugram · Premium Companionship
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-10 bg-gradient-to-t from-purple-700/20 via-pink-600/10 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>

      </div>
    </section> */}
      {/* content section  */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#fefaf6] to-[#fdf9f5] overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50/80 to-transparent"></div>
        <div className="pointer-events-none absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-200/20 blur-3xl animate-pulse-slow"></div>
        <div className="pointer-events-none absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-200/20 blur-3xl animate-pulse-slow"></div>

        {/* Subtle grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-grid-pattern"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Image - Enhanced with modern frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group h-[550px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                loading="lazy"
                src="/Webpimages/hotel-suite-interior.webp"
                alt="Escort service in Delhi — luxury hotel suite"
                fill
                className="object-cover rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Modern corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-pink-400/50 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-pink-400/50 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-purple-400/50 rounded-br-lg"></div>

              {/* Floating Accent Circle */}
              <motion.div
                className="pointer-events-none absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-300/20 blur-2xl"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Enhanced Heading with decorative elements */}
            <div className="relative">
              <div className="absolute -left-6 top-3 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Witness the ultimate comfort{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                  to your hotel with Best Delhi Escorts Service
                  <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full"></div>
                </span>
              </h2>
            </div>

            {/* Enhanced Content with modern list */}
            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                The <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">escorts of Delhi Girl</strong>,
                are created in honor of men who need profound, uncontrollable pleasure and soft seductive chemistry. The instant she sits next you, her gentle thighs pressing yours, her hands caressing your chest, her lips caressing your ears — you have a sensation that your entire mind has changed to hunger.
              </p>

              {/* <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
          <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Our Specialties
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Female-to-male therapies</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Couple spa sessions</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Rejuvenating body-to-body massages</span>
            </li>
          </ul>
        </div> */}

              <p>
                These escorts have a feeler of when to be slow and cozy, when to brush your skin with warm breaths, and when to switch the gears, immobilize you, straddling you, thrusting passion into you with grabs that are full of confidence and authority.
              </p>
              <p>Each one of them will be worth satisfying your body, exciting your senses and making you breathless. A long, luxurious night of kisses, cuddles, intimate, deep riding or a fast, wild, hot affair - Delhi Girl introduces you to women who know just how to get to the right places.</p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://api.whatsapp.com/send?phone=918826482370"
                className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="absolute -inset-10 bg-gradient-to-r from-white/20 via-white/5 to-white/20 transform rotate-12 group-hover:animate-shine"></div>
                </div>
                <span className="relative z-10 flex items-center">
                  Book Appointment
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </motion.a>

              {/* <motion.a
          
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full font-medium border-2 bg-white/80 backdrop-blur-sm border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg transition-all relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <span className="relative z-10 flex items-center">
            Book Appointment
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
        </motion.a> */}
            </div>
          </motion.div>
        </div>
      </section>
      {/* end content section   */}
      <section className="bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] py-20 px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          {/* <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-lg font-medium text-purple-700 tracking-widest">
        OUR SIGNATURE OFFERINGS
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-[#2d1f2f] mt-4 mb-6">
        Premium Spa Experiences
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
    </motion.div> */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
      
      <div>
        
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
          <p className="text-gray-600 leading-relaxed">
            This holistic framework allows us to create treatments that don&apos;t just relax temporarily but catalyze lasting change. Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-purple-100 text-purple-700 py-1 px-4 rounded-full text-sm font-medium">
              60-90 min | From ₹2,800
            </span>
          </div>
        </motion.div>

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
              'AYour escort shows up right on time, looking sharp and setting the right vibe from the start.', 'The rest? Conversation, comfort, and fun — all revolving around you.'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-purple-700 rounded-full mr-3"></div>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Beyond technical excellence, we select therapists for their intuitive healing abilities. Monthly training includes emotional intelligence development and energy work certification. This investment shows in our 98% client retention rate and numerous industry awards.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-purple-100 text-purple-700 py-1 px-4 rounded-full text-sm font-medium">
              75-90 min | From ₹3,200
            </span>
          </div>
        </motion.div>
      </div>
    </div> */}

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
                <h3 className="text-2xl font-bold mb-4">Get personalized Escort Services to Your Doorstep</h3>
                <p className="mb-4 opacity-90">
                  Delhi Girl makes your pleasure event a tailor-made affair. Your escort can go slow romantic, rough and passionate, deep sensual riding, deep encounters, whatever you desire it to be.
                  Your room turns into the comfort zone, your fantasy turns out to be the way, and her body turns out to be the door to absolute satisfaction

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
      {/* <section className="w-full bg-[#FFF9EC] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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


              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-40 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section> */}
      {/* 300 content section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fefaf6] to-[#fdf9f5] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50 to-transparent opacity-70"></div>
        <div className="pointer-events-none absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-100/30 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-200/30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group h-[550px]">
              <Image
                loading="lazy"
                src="/Webpimages/413965.webp"
                alt="Escort service in Delhi — verified companions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Accent Circle */}
              <motion.div
                className="pointer-events-none absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-300/20 blur-2xl"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Enjoy Most Satisfying{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Escort Services in Delhi
              </span>
            </h2>

            {/* Long Content */}
            <div className="text-gray-600 text-lg leading-relaxed space-y-5 mb-8">
              <p>
                <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"></strong>,
                Delhi Girl introduces the women who are familiar with how to release your inner desires using your lips, wild kissing, warm thighs, seductive curves, and risky intimate acts. These escorts are aware of how to take charge, be it mounting you, grinds, riding deep, flipping you any time into explosive passion.
              </p>
              <p>
                Their chemistry is addictive, their presence magnetic and their sensual rhythm is exactly what your body needs. Be it a short, intense session or a lengthy night of deep penetration, these escorts can guarantee that you can make away with a satisfied, relaxed, and needing more.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=918826482370"
                className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-90 transition-all"></div>
                <span className="relative z-10">Explore More</span>
              </a>

              {/* <a
          
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full font-medium border-2 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-purple-50 transition-colors relative overflow-hidden group"
        >
          <span className="relative z-10">Book Appointment</span>
        </a> */}
            </div>
          </motion.div>
        </div>
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get started with Delhi Girls for Escort Service in Hotel & Home
              </h3>
              <p className="text-gray-600">
                Book your upscale beauty today and enter into a night of passion, chemistry, pleasure and uncontrollable intimacy.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=918826482370"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
      {/* end 300 content section  */}

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
          {/* <motion.div
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
        </motion.div> */}

          {/* Category Filters */}
          {/* <motion.div 
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
        </motion.div> */}

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