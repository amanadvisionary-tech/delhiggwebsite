"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { AnimatePresence } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
import { FaHotel, FaHome, FaBuilding } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import {
  MoonIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Check, Shield, Clock, Star, Hotel, CreditCard, MessageCircle, UserCheck } from 'lucide-react';
import {  FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking } from 'react-icons/fa';
import {
  BuildingOfficeIcon,
  CakeIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import {
  ClockIcon,
  ChatBubbleLeftRightIcon,
  

} from "@heroicons/react/24/outline";
import {
  CurrencyRupeeIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import {
  FireIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Celebprofile() {
  {/* staff showcase */}
    const [activeCategory, setActiveCategory] = useState('foreign');
    const categories = [
        { id: 'foreign', name: 'Foreign Girls' },
      { id: 'all', name: 'All Staff' },
      { id: 'airhostess', name: 'Airhostess' },
      { id: 'celebrity', name: 'Celebrity' },
      { id: 'college', name: 'College Girls' },     
      { id: 'highprofile', name: 'High Profile' },
    ];
    const staffMembers = [
    {
      id: 1,
      name: 'Sophia Martinez',
      role: 'Senior Airhostess',
      category: 'airhostess',
      description: '5+ years experience with international airlines. Fluent in 4 languages.',
      image: '/Webpimages/download (30).webp', // Placeholder image path
    },
    {
      id: 2,
      name: 'Alex Johnson',
      role: 'TV Personality',
      category: 'foreign',
      description: 'Award-winning host of "Nightlife" show. Known for vibrant personality.',
      image: '/Webpimages/download (11).webp', // Placeholder image pathss
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Marketing Student',
      category: 'college',
      description: 'Top of her class at NYU. Passionate about digital marketing trends.',
      image: '/Webpimages/spaStaffInsta.webp', // Placeholder image path
    },
    {
      id: 4,
      name: 'Isabella Rossi',
      role: 'International Model',
      category: 'foreign',
      description: 'Milan-born fashion model. Featured in Vogue and Elle magazines.',
      image: '/Webpimages/celebrityspastaff.webp', // Placeholder image path
    },
    {
      id: 5,
      name: 'Olivia Chen',
      role: 'Corporate Executive',
      category: 'foreign',
      description: 'Fortune 500 company board member. MBA from Harvard Business School.',
      image: '/Webpimages/49.webp',
    },
    {
      id: 6,
      name: 'Mia Thompson',
      role: 'First Class Hostess',
      category: 'foreign',
      description: 'Specialized in luxury travel experience. Trained in hospitality management.',
      image: '/Webpimages/smiling.webp', // Placeholder image path
    },
    {
      id: 7,
      name: 'Chloe Williams',
      role: 'Film Actress',
      category: 'celebrity',
      description: 'Rising star in independent cinema. Trained at Royal Academy of Dramatic Art.',
      image: '/Webpimages/413965.webp', // Placeholder image path
    },
    {
      id: 8,
      name: 'Ava Garcia',
      role: 'Engineering Student',
      category: 'college',
      description: 'Robotics club president. Developing AI solutions for sustainable energy.',
      image: '/Webpimages/download (31).webp', // Placeholder image path
    },
  ];
    const filteredStaff = activeCategory === 'all' 
      ? staffMembers 
      : staffMembers.filter(member => member.category === activeCategory);
      {/* End Staff Showcase */}
      {/* pricing */}
      const [tier, setTier] = useState('one')


const priceMap = {
one: { amount: '₹20k', note: 'Per 2-hour session' },
two: { amount: '₹40k', note: 'Per 4-hour (2 sessions)' },
night: { amount: '₹60k', note: 'Full night / Overnight' }
}


const current = priceMap[tier]
          {/* end pricing */}
          // FAQ Section
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
                question: 'Are your independent escorts in Delhi verified and real?',
                answer: 'Yes. Every independent escort in Delhi goes through ID and behaviour checks. You meet real girls with genuine profiles, ensuring a safe and smooth independent escorts service in Delhi.',
                category: 'account',
              },
              {
                id: 2,
                question: 'Do independent call girls in Delhi visit 5-star hotels?',
                answer: 'Yes. Independent call girls in Delhi visit hotels such as JW Marriott, The Oberoi, and The Leela. They enter discreetly and behave professionally for a private experience.',
                category: 'payments',
              },
              {
                id: 3,
                question: 'Do you offer independent college girl profiles?',
                answer: 'Yes. We provide independent college girls who stay clean, polite, friendly, and easy to speak with. Ideal for clients seeking youthful and light companionship.',
                category: 'booking',
              },
              {
                id: 4,
                question: 'Are independent escorts better than agency escorts?',
                answer: 'Many clients choose independent female escorts in Delhi for their natural behaviour, relaxed presence, and genuine connection. The experience feels smooth and unscripted.',
                category: 'booking',
              },
              {
                id: 5,
                question: 'How much does an independent girl in Delhi cost?',
                answer: 'Rates depend on profile, duration, and location. We also list low-price independent call girls in Delhi without compromising hygiene or conduct.',
                category: 'payments',
              },
              {
                id: 6,
                question: 'Are independent escorts safe to book in Delhi?',
                answer: 'Yes. All profiles get verified, and escorts meet only at secure premium hotels. Privacy stays protected throughout the process.',
                category: 'services',
              },
              {
                id: 7,
                question: 'Can I book independent call girls for late-night service?',
                answer: 'Yes. Independent escorts service in Delhi runs 24/7, ideal for late-night hotel bookings, especially for corporate travellers.',
                category: 'account',
              },
              {
                id: 8,
                question: 'How do I choose the right independent Delhi girl?',
                answer: 'Browse profiles and select based on personality, appearance, and comfort level. We help you match with the right independent Delhi girl for your preference.',
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

              const profiles = [
  { image: '/Webpimages/download7.webp' },
  { image: '/Webpimages/download (7).webp' },
  { image: '/Webpimages/download (19).webp' },
  { image: '/Webpimages/download (14).webp' },
  { image: '/Webpimages/modelg.webp' },
  { image: '/Webpimages/18244.webp' },
  { image: '/Webpimages/172420-8871.webp' },
  
  { image: '/Webpimages/7168.webp' },
  { image: '/Webpimages/49.webp' },
  

  { image: '/Webpimages/modelg.webp' },
  { image: '/Webpimages/18244.webp' },
  { image: '/Webpimages/172420-8871.webp' },
  { image: '/Webpimages/7168.webp' },
  { image: '/Webpimages/49.webp' },
  
]
const content = `At Delhi Escorts Agency, we redefine personalised luxury by combining professional care, complete discretion, and a client-first approach. Our team of highly trained therapists and hosts are selected for their skills, professionalism, and commitment to exceptional service. Every interaction is handled with respect and sensitivity, ensuring you feel comfortable, valued, and understood from the moment you connect with us.

We take privacy seriously: appointments are confidential, records are protected, and every booking is managed with discrete communication. Whether you prefer a tranquil home visit or the refined setting of a premium hotel, our team adapts to your needs while maintaining the highest safety and hygiene standards. Our rigorous background checks, ongoing training, and quality audits ensure consistency and trust in every experience.

Choice and convenience are at the heart of what we offer. With multiple categories of professionals, flexible booking windows, and seamless online scheduling, finding the right match is quick and intuitive. We provide transparent pricing, clear policies, and attentive customer support so you can make informed decisions with confidence.

Quality is non-negotiable: from luxurious linens and premium oils to elegant presentation and punctual service, we obsess over details so you can relax and enjoy the moment. Clients repeatedly choose us for our reliability, refined standards, and the tailored, memorable experiences we craft.

Ultimately, our mission is to deliver respectful, elevated companionship and spa services that enhance wellbeing and create lasting impressions. We blend modern conveniences with timeless hospitality to offer an experience that is safe, luxurious, and consistently outstanding. Choose Delhi Escorts Agency for discretion, professionalism, and a level of care designed around you. Our commitment to continuous improvement means we listen to feedback, refine our offerings, and innovate services so every visit surpasses expectations and fosters trust, relaxation, and genuine satisfaction for discerning clients. Every time, always.`;

const features1 = [
  { title: "Professional Team", desc: "Certified therapists and vetted hosts trained for client comfort." },
  { title: "Discreet Service", desc: "Strict confidentiality and respectful communication at every step." },
  { title: "Flexible Booking", desc: "Easy online scheduling, hotel or home visits, and multiple time slots." },
  { title: "Premium Standards", desc: "High hygiene, quality linens, and curated products for relaxation." },
];


// End Locations
 const features3 = [
    { icon: ShieldCheckIcon, title: "Verified Profiles" },
    { icon: SparklesIcon, title: "Spa-Like Experience" },
    { icon: HeartIcon, title: "Calm & Respectful" },
    { icon: BriefcaseIcon, title: "Corporate Friendly" },
  ];

  //aedfa
  const points = [
    {
      icon: SparklesIcon,
      text: "youthful charm",
    },
    {
      icon: MoonIcon,
      text: "mischievous energy",
    },
    {
      icon: CheckBadgeIcon,
      text: "playful teasing",
    },
    {
      icon: GlobeAltIcon,
      text: "endless conversation",
    },
    {
      icon: BriefcaseIcon,
      text: "confidence wrapped in sweetness",
    },
  ];

     // 5 start hotel 
        const [activeHotel, setActiveHotel] = useState(null);
      
      const hotels = [
        {
          id: 1,
          name: "The Leela Palace, New Delhi",
          location: "New Delhi",
          rating: 5,
          description: "An elegant space suited for clients who value calm and grace. Independent escorts walk freely here in light behaviour and well-dressed appearance that mixes organically.",
          image: "/hotel-royale.webp",
          amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
          price: "₹25,000",
          features: ["Ocean View", "Private Beach", "Helipad"]
        },
        {
          id: 2,
          name: "JW Marriott, Aerocity",
          location: "New Delhi",
          rating: 5,
          description: "Ideal for business travellers. Independent call girls enter discreetly and offer relaxed, friendly company after flights or meetings.",
          image: "/hotel-azure.webp",
          amenities: ["Overwater Bungalows", "Coral Reef Access", "Underwater Restaurant", "Spa Sanctuary"],
          price: "₹45,000",
          features: ["Private Island", "Seaplane Transfer", "Glass Floor"]
        },
        {
          id: 3,
          name: "Taj Palace, Chanakyapuri  ",
          location: "New Delhi",
          rating: 5,
          description: "A peaceful hotel for quiet evenings. Independent escorts add gentle talk and comfortable company that feels easy and unforced.",
          image: "/hotel-alpine.webp",
          amenities: ["Ski Valet", "Heated Indoor Pool", "Mountain Spa", "Fondue Restaurant"],
          price: "₹38,000",
          features: ["Private Ski Lift", "Fireplace Lounges", "Chocolate Atelier"]
        },
        {
          id: 4,
          name: "The Oberoi, New Delhi ",
          location: "New Delhi",
          rating: 5,
          description: "Perfect for clients wanting a relaxed, spa-like feel. Independent female escorts bring balanced interaction that helps you fully unwind.",
          image: "/hotel-oasis.webp",
          amenities: ["Private Oasis Pool", "Camel Rides", "Desert Spa", "Starlight Dining"],
          price: "₹32,000",
          features: ["Falconry Experience", "Gold-plated Interiors", "Private Dune"]
        },
        {
          id: 5,
          name: "ITC Maurya, New Delhi ",
          location: "New Delhi",
          rating: 5,
          description: "A professional setting popular with corporate guests. Independent escorts maintain mature conduct and neat grooming to suit premium surroundings.",
          image: "/hotel-emerald.webp",
          amenities: ["Cliffside Infinity Pool", "Jungle Spa", "Rice Terrace Dining", "Cultural Workshops"],
          price: "₹28,000",
          features: ["Volcano Views", "Sacred Spring", "Monkey Sanctuary"]
        },
        {
          id: 6,
          name: "The Imperial, Janpath ",
          location: "New Delhi",
          rating: 5,
          description: "A chic mood and welcoming independent girls ensure that the evening is very smooth, light, and enjoyable",
          image: "/hotel-sapphire.webp",
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
  return (
    <>
       
    {/* banner */}
               <header className="relative w-full h-screen min-h-[560px] flex items-center">
      {/* Background image - place your image at /public/Webpimages/hero-banner.webp */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Webpimages/young-woman-lying-alone.webp"
          alt="Luxury spa background"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-sm -z-10" />
        {/* soft gradient vignette */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white"
            >
              Try High Profile <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Escorts in Delhi for Elite,</span>
              <br /> Premium Companionship <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">| Book Now</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-2xl text-gray-600"
            >
              Enjoy the class, elegance and premium charm of high profile escorts in Delhi who bring confidence, warmth and a polished companionship experience. Book high profile escorts in Delhi now and pay only when they arrive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-[1.02] transform transition">
                Book on WhatsApp
              </a>

              <a href="#faq" className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-gray-700 hover:shadow-md transition">
                View Services
              </a>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white/80 rounded-xl shadow-md">
                <div className="text-pink-500 text-2xl">✔️</div>
                <p className="mt-2 font-semibold">Verified Profiles</p>
                <p className="text-sm text-gray-500">Identity & background-checked</p>
              </div>

              <div className="p-4 bg-white/80 rounded-xl shadow-md">
                <div className="text-pink-500 text-2xl">🔒</div>
                <p className="mt-2 font-semibold">Discreet Booking</p>
                <p className="text-sm text-gray-500">Secure & private handling</p>
              </div>

              <div className="p-4 bg-white/80 rounded-xl shadow-md">
                <div className="text-pink-500 text-2xl">⭐</div>
                <p className="mt-2 font-semibold">Personal Concierge</p>
                <p className="text-sm text-gray-500">Tailored experiences & planning</p>
              </div>
            </div>
          </div>

          {/* Decorative right panel with card stack - purely visual on banner */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px] ml-auto"
            >
              <div className="absolute -right-8 -top-8 w-72 h-44 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-sm shadow-xl transform rotate-3" />
              <div className="absolute -right-4 top-6 w-72 h-44 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-sm shadow-2xl transform -rotate-2" />

              <div className="relative z-10 bg-white/95 rounded-2xl shadow-2xl p-4">
                <div className="w-full h-44 rounded-lg overflow-hidden bg-gray-100">
                  {/* replace with small preview image if you want */}
                  {/* <div className="w-full h-full flex items-center justify-center text-gray-300">Profile Preview</div> */}
                  <Image
          src="/Webpimages/18244.webp"
          alt="Luxury spa background"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
                </div>

                <div className="mt-3">
                  <div className="text-sm font-semibold text-gray-800">Ari • 26</div>
                  <div className="text-xs text-gray-500 mt-1">Events • Travel • Dining</div>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 rounded-full py-2 text-sm bg-gradient-to-r from-pink-500 to-violet-500 text-white">Request</button>
                    <button className="rounded-full py-2 px-4 text-sm bg-gray-100 text-gray-700">Details</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* subtle bottom wave divider */}
      <div className="absolute left-0 right-0 bottom-0 -mb-1">
        <svg viewBox="0 0 1440 60" className="w-full h-12 block" preserveAspectRatio="none">
          <path d="M0,20 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="rgba(255,255,255,0.9)" />
        </svg>
      </div>
    </header>  
        {/* end banner */}
         {/* /// */}
                <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column - Text */}
        <div className="lg:col-span-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            High Profile Escorts <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">in Delhi for Elite Men</span> Who Prefer Premium  
            <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600"> Companionship</span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-xl">
            <span className="font-semibold text-purple-600"> </span>
           You have come to the right place if you are seeking high profile escorts in Delhi who bring class, beauty, and a premium experience without the formality that is unnecessary. The choice of our escorts must be made because of their beauty, manners, pleasing character and their capacity to establish good rapport easily. Our high profile escorts in Delhi are favourites of clients seeking mature companionship, intelligent discourse, and a warm and sensual ambience.
          </p>
          <p className="mt-8 text-gray-600 max-w-xl">
           Delhi Girl has a reputation for offering the most professional and glamorous high profile call girls in Delhi, particularly to corporate clients, business travellers, NRIs, and men who require a degree of class when they pre-book a fellow.
          </p>

          {/* <ul className="mt-8 space-y-4 text-gray-700 max-w-md">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900">Professional Therapists</h4>
                <p className="text-sm text-gray-600">Experienced & certified therapists, trained for multiple massage styles.</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900">Private & Safe</h4>
                <p className="text-sm text-gray-600">Discreet home and hotel services ensuring complete privacy.</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900">24+ Outlets</h4>
                <p className="text-sm text-gray-600">Multiple premium locations across Delhi NCR—book at your convenience.</p>
              </div>
            </li>
          </ul> */}

          <div className="mt-8">
            <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
              Book Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right column - Image stack */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Top image - rotated slightly */}
            <div className="absolute -top-8 -right-6 transform rotate-6 shadow-2xl rounded-xl border-8 border-white bg-white">
              {/* Replace the src with your public path or a remote URL */}
              <div className="relative w-[328px] h-[272px] rounded-lg overflow-hidden">
                <Image src="/Webpimages/32586.webp" alt="top" fill sizes="328px" style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* Bottom image - rotated opposite */}
            <div className="absolute bottom-0 left-0 transform -rotate-3 shadow-2xl rounded-xl border-8 border-white bg-white">
              <div className="relative w-[360px] h-[304px] rounded-lg overflow-hidden">
                <Image src="/Webpimages/Watch Full Video.webp" alt="bottom" fill sizes="360px" style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* Soft radial gradient circle to mimic background highlight */}
            <div className="relative z-0 h-[320px] w-full rounded-xl flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl" style={{ background: 'radial-gradient(closest-side, rgba(245,245,247,0.8), transparent 60%)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile tweak: stacked layout */}
      <style jsx>{`
        @media (max-width: 1024px) {
          /* Slightly reduce rotations on small screens */
          .rotate-6 { transform: rotate(3deg); }
          .-rotate-3 { transform: rotate(-2deg); }
        }
      `}</style>
    </section>
            {/* /// */}
        
        {/* End Content Hero Section */}
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
                            Choose High Profile Escort{" "}
                            <span className="relative">
                              <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                                 Service in Delhi for Elite, Sophisticated Companionship
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
                                 
                              {" "}
                              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                              </strong>
                              Our high profile escort service in Delhi suits clients who love mature confidence mixed with a quiet, magnetic charm. These companions speak with polish, carry themselves with grace, and fill the room with effortless class. Their presence feels natural, their conversation feels smooth, and the connection builds before you realize what happened.
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
                        href="#faq"
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
            {/* content section */}
            
        {/* staff showcase */}
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    Choose Independent Call Girls in Delhi for Genuine, Comfortable Companionship
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Independent escorts connect personally, keeping the evening smooth, calm, and unrushed.
                  </p>
                </motion.div>
        
                {/* Category Filters */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-3 mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </motion.div>
        
                {/* Staff Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredStaff.map((staff) => (
                    <motion.div
                      key={staff.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="relative h-72 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <div className="absolute inset-0 flex items-end p-6 z-20">
                          <div>
                            <h3 className="text-xl font-bold text-white">{staff.name}</h3>
                            <p className="text-pink-300 font-medium">{staff.role}</p>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 z-20">
                          {categories.find(cat => cat.id === staff.category)?.name}
                        </div>
                        
                        {/* Placeholder for image */}
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-full h-full flex items-center justify-center">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                          <Image
                                src={staff.image} // Make sure `staff.image` has full image URL or path
                                alt={staff.name}
                                fill
                                className="object-cover"
                              />
                           </div>
                      </div>
                      
                      <div className="p-5">
                        <p className="text-gray-600 mb-4">{staff.description}</p>
                        
                        <div className="flex space-x-3">
                          <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                            View Profile
                          </button>
                          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
        
                {/* Stats Section */}
                <motion.div 
                  className="mt-20 bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl p-8 text-white shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">Why Our Team Stands Out</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { value: '200+', label: 'Professionals' },
                        { value: '98%', label: 'Client Satisfaction' },
                        { value: '50+', label: 'Countries Represented' },
                        { value: '24/7', label: 'Availability' }
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                          <div className="text-pink-200">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* End Staff Showcase */}
            <section className="relative bg-white py-24 px-4 md:px-10 overflow-hidden">
      
      {/* Soft Gradient Accent */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-pink-500/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-purple-600/10 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Celebrity Escorts in <span className="text-pink-600">Delhi for Men</span> With Refined Taste
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
          Models similar to the influencer type, those of high class, those of high fashion, and those who have the confidence to carry themselves constitute our celebrity escorts in Delhi. Our high profile escorts in Delhi are well-dressed, friendly to be around, and comfortable in luxury venues, such as 5-star hotels, lounges, and private events.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
           They are attractive because of their communication skills, their well-groomed appearance, and the way they make any place more comfortable and pleasant. They are easy companions and without embarrassing situations. If you want a partner who has the instincts of reading body language, timing, social behaviour and so on, then our high profile escorts in Delhi are the best option.
          </p>
          {/* <p className="mt-4 text-gray-600 leading-relaxed">Their prices remain affordable without compromising their quality, behaviour or teasing nature. Your night will be unforgettable with them. Light flirting, soft hinting and a chemistry that occupies your mind.</p> */}

          
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[4/5]">
          <Image
            src="/Webpimages/downloadd5.webp"
            alt="Elegant Independent Delhi Girl"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-3xl shadow-xl object-cover"
          />

          <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold text-gray-800">
              Calm • Educated • Well-Mannered
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Perfect for professional companionship
            </p>
          </div>
        </div>

      </div>
    </section>
           
            {/* new section */}
            {/* // */}
            <section className="relative bg-[#fafafa] py-28 px-4 md:px-10 overflow-hidden">

      {/* Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-pink-500/20 rounded-full blur-[150px]" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-purple-600/20 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* RIGHT – IMAGE */}
        <div className="relative">
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl h-[750px]">
            <Image
              src="/Webpimages/download (9).webp"
              alt="Luxury lounge ambience"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-semibold">
                Calm • Classy • Professional
              </p>
              <p className="text-sm opacity-90">
                Designed for refined companionship
              </p>
            </div>
          </div>
        </div>

        {/* LEFT – CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-semibold tracking-widest text-pink-700 bg-white shadow rounded-full">
            FOREIGN & RUSSIAN ESCORTS
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            Why High Profile Escorts In
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Delhi Are Different From Normal Escorts?
            </span>
          </h2>

          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              A high-profile escort is more of a sophisticated experience. These females are accustomed to high-end hospitality, event companionship, and private meetings. Their actions are quiet, desirable, and restrained. They are familiar with the ways of presenting themselves in luxury hotels, maintaining privacy, and establishing comfort in an adult, delicate manner.
            </p>
            <p>
             Clients choose them because they offer the benefits of consistency, reliability, and balanced sensuality without the needless drama and discomfort.
            </p>
            {/* <p>These companions stay smart, sophisticated, and naturally magnetic. They talk well, engage lightly, and turn your night into a story you do not want to stop. Whether you prefer vibrant energy, gentle warmth, or slow, refined attraction, our Delhi high profile escorts match your style with ease.</p> */}
           
          </div>

          {/* ICON HIGHLIGHTS – INLINE */}
          {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features3.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white shadow border border-gray-100"
                >
                  <Icon className="w-6 h-6 text-pink-600" />
                  <span className="font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div> */}

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-6">
            <button className="group relative px-10 py-4 rounded-full overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold text-lg shadow-2xl">
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
            </button>

            <button className="px-10 py-4 rounded-full bg-white text-gray-900 font-semibold text-lg border border-gray-200 shadow hover:shadow-md transition">
              View Profiles
            </button>
          </div>
        </div>

        

      </div>
    </section>
            {/* // */}
            {/* new */}
            <section className="relative bg-white py-28 px-4 md:px-10 overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-purple-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] bg-pink-500/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – IMAGE */}
        <div className="relative">
          <div className="relative rounded-[30px] overflow-hidden shadow-2xl h-[640px]">
            <Image
              src="/Webpimages/download (13).webp"
              alt="Luxury late night ambience"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl font-semibold">
                Late Night • Calm • Premium
              </p>
              <p className="text-sm opacity-90">
                Designed for relaxed & refined evenings
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-semibold tracking-widest text-purple-700 bg-purple-50 rounded-full">
            LATE NIGHT FOREIGNER ESCORTS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            High Profile Escorts Available
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              24/7 for Your Pleasure
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
           Our Delhi high profile escorts stay ready to bring elegance into your night. Whether it is late-night boredom, a business trip, a quiet evening, or a moment where you want to treat yourself, our high profile escorts in Delhi carry the class you want.
          </p>
          

          {/* POINTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white shadow border border-gray-100"
                >
                  <Icon className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-800 font-medium">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
Spend your night with our high profile escort in Delhi who brings refined charm, warm conversation, and moments that feel close and unforgettable. She becomes the highlight of your day and the sophistication you did not know you needed.
</p>

          {/* CTA */}
          <div className="mt-12 flex gap-6 flex-wrap">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold text-lg shadow-xl hover:scale-[1.03] transition">
              Book Now
            </button>
            <button className="px-10 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold text-lg hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
    {/* // */}
    <section className="relative bg-[#fafafa] py-24 px-4 md:px-10 overflow-hidden">

      {/* Soft glow accents */}
      <div className="absolute -top-28 -left-28 w-[420px] h-[420px] bg-pink-500/15 rounded-full blur-[140px]" />
      <div className="absolute -bottom-28 -right-28 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
           High Profile Escorts in Delhi Ready <span className="text-pink-600">to Fulfil Your Elite Companionship Desires</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Everyone holds a vision of the perfect elite companion, poised, charming, and sophisticated. Now you get to explore that world in a safe and premium way.
          </p>

          {/* <p className="mt-4 text-gray-600 leading-relaxed">
            Whether it’s a quiet evening indoors, a relaxed outing, or simply
            someone to talk with, these Delhi high profile escorts add energy and charm
            that lifts the mood without pressure or formality.
          </p> */}

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <SparklesIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Open-minded</span>
            </div>

            <div className="flex items-center gap-3">
              <HeartIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Friendly</span>
            </div>

            <div className="flex items-center gap-3">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Adventurous</span>
            </div>

            <div className="flex items-center gap-3">
              <ClockIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">completely non-judgmental</span>
            </div>

            <div className="flex items-center gap-3">
              <SparklesIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Energetic</span>
            </div>
          </div>

          <p className="mt-8 text-gray-700 font-medium">
           They listen to what you want, sense your mood, and match your energy in a natural way. Their chemistry feels addictive. Their presence feels thrilling. Their ability to pull you away from stress remains unmatched.
          </p>
          <p className="mt-8 text-gray-700 font-medium">Whether you want soft teasing, playful humour, flirtatious looks, or close moments, our  know how to raise the heat without crossing limits.</p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/5]">
          <Image
            src="/Webpimages/download (33).webp"
            alt="High Profile Escort Companionship Delhi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-3xl shadow-xl object-cover"
          />

          <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold text-gray-800">
              Friendly • Lively • Approachable
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Easy-going companionship, anytime
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* // */}
    {/* // */}
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Premium High Profile Escorts for Elegant, <span className="text-pink-600"> Refined, and Deeply Satisfying Nights</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            The moment you meet a premium high profile escort, you see why our service holds the top spot.
          </p>

          {/* Simple List */}
          <ul className="mt-6 grid grid-cols-2 gap-y-3 text-gray-700">
            <li>• These companions feel different.</li>
            <li>• They look stunning.</li>
            <li>• They stay poised.</li>
            <li>• They stay engaging.</li>
          </ul>

          <p className="mt-6 text-gray-600 leading-relaxed">
           They like to create romantic, memorable, and thoroughly enjoyable evenings.
          </p>
          <p className="mt-6 text-gray-600 leading-relaxed">
           They read your mood quickly, put you at ease with the most subtle gestures, and make every conversation feel effortless. Their presence fills the room. Their charm draws you in. Their company becomes impossible to resist.
          </p>
          <p className="mt-6 text-gray-600 leading-relaxed">
           You are not just booking a date. You are stepping into a world of class, confidence, and refined allure.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/5]">
          <Image
            src="/Webpimages/download (32).webp"
            alt="High Profile Escort Companionship Delhi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
    {/* // */}
    {/* // */}
    <section className="relative bg-[#fafafa] py-24 px-4 md:px-10 overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-[460px] h-[460px] bg-pink-500/15 rounded-full blur-[160px]" />
      <div className="absolute -bottom-32 -left-32 w-[460px] h-[460px] bg-purple-600/15 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            High Profile Escort Service in Delhi <br />
            <span className="text-pink-600">Starting at ₹6999</span>
            – Cash Payment Available
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Searching for a high profile escort without long steps or hidden rules? Our service stays simple.
          </p>

          {/* Booking Points */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <CurrencyRupeeIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Pay when she arrives</span>
            </div>

            <div className="flex items-center gap-3">
              <CurrencyRupeeIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">No advance</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">All profiles verified</span>
            </div>

            <div className="flex items-center gap-3">
              <ClockIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Available 24×7</span>
            </div>

            <div className="flex items-center gap-3">
              <BuildingOffice2Icon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Instant Hotel Visits</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Private and quick booking</span>
            </div>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed">
            There is no end of sophistication in Delhi and not many people can be unaware of the elite social circles where high profile escorts can turn a premium evening into reality.
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Our escorts remain elegant, confident, poised, and very beautiful. They fit men who desire to be impressed without being pressured, and companions without any awkward moments.
          </p>
          <p className="mt-6 text-gray-600 leading-relaxed">These companions enjoy new introductions, having good moments together, and creating the rapport you desire. Their polished and spontaneous nature keeps the meeting smooth and natural.</p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/5]">
          <Image
            src="/Webpimages/downloadee.webp"
            alt="High Profile Escort Service in Delhi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-3xl shadow-xl object-cover"
          />

          <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold text-gray-800">
              Private • Verified • Comfortable
            </p>
            <p className="text-xs text-gray-500 mt-1">
              A smooth experience from start to finish
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* // */}
    {/* // */}
    <section className="bg-white py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Types of High Profile Escorts You Can Hire in Delhi
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            personalities, looks, and styles so you find the exact companion you want. Each escort carries her own charm, her own poise, and her own way of making your night stay in your memory for days.
          </p>
           <ul className="text-gray-700 space-y-1">
              <li>• Some prefer soft and gentle.</li>
              <li>• Some prefer bold and stylish.</li>
              <li>• Some prefer lively and sociable.</li>
              <li>• Some prefer slow, refined attraction.</li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
           No matter what your preference looks like, there is a high profile escort in Delhi who matches it perfectly. Warm, engaging, charming, and naturally magnetic.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Below are the most loved types of high profile escorts in Delhi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              The Socialite
            </h3>
            <p className="text-gray-600 mb-4">
            These are companions who remain up-to-date, fashionable, and self-assured. You can spot them as soon as they enter the door. Designer style, bright eyes, and flawless grooming produce an irresistible appeal at a glance.
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• Runway-style looks</li>
              <li>• Effortless charm</li>
              <li>• Poised confidence</li>
              <li>• Smooth, engaging talk</li>
            </ul>
            <p className="text-gray-600 mb-4">
            They suit clients who want a companion with style, presence, and steady sophistication. Their vibe feels polished and event-ready.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              The Cultured Companion
            </h3>
            <p className="text-gray-600 mb-4">
              Some clients crave grace and soft warmth. These companions stay gentle, refined, and comforting. Their quiet smile alone lifts your stress.
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• graceful elegance</li>
              <li>• calm presence</li>
              <li>• tender manner</li>
              <li>• slow-building chemistry</li>
            </ul>
             <p className="text-gray-600 mb-4">
             They move at a natural pace. They build a soft bond that grows into warm, genuine attraction. Perfect for men who love subtle, pure, close moments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
               The Bold & Confident Delhi Escort
            </h3>
            <p className="text-gray-600 mb-4">
              This type stays in high demand. She walks in with presence. Playful, fearless, engaging, and bold. She loves conversation, loves chemistry, and loves nights filled with excitement.
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• spontaneous wit</li>
              <li>• playful humour</li>
              <li>• vibrant energy</li>
              <li>• magnetic boldness</li>
            </ul>
            <p className="text-gray-600 mb-4">
              If you want a companion who keeps the energy high and knows how to command a room with one look, this type fits you perfectly.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              The Polished Newcomer With Fresh Charm
            </h3>
            <p className="text-gray-600 mb-4">
              These companions feel new, poised, and full of natural allure. Their elegance mixed with curiosity creates an appeal clients adore. Everything about them feels fresh.
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• genuine warmth</li>
              <li>• natural sophistication</li>
              <li>• soft chemistry</li>
              <li>• fresh, refined charm</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Their presence alone clears your stress. They suit men who want a warm, joyful, and close connection.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
               The Corporate Companion
            </h3>
            <p className="text-gray-600 mb-4">
              Some men want depth instead of loud energy. These companions offer thoughtful conversation, mature warmth, and slow emotional connection. Many carry backgrounds in business, law, or the arts.
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• deep conversation</li>
              <li>• warm presence</li>
              <li>• quiet sophistication</li>
              <li>• a calming vibe</li>
            </ul>
            <p className="text-gray-600 mb-4">
              They read your mood well and create a smooth, steady, intimate night. Ideal for high-profile clients and business travellers.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              The Vibrant, Sociable Companion
            </h3>
            <p className="text-gray-600 mb-4">
              These companions bring energy and excitement. They fill the room with charm the moment they walk in. Their wit and engaging tone make every minute feel lively.
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• lively energy</li>
              <li>• cheerful conversation</li>
              <li>• adventurous spirit</li>
              <li>• playful sophistication</li>
            </ul>
            <p className="text-gray-600 mb-4">
             They suit men who want an event-ready companion filled with warmth, laughs, and non-stop engagement.
            </p>
          </div>

        </div>
      </div>
    </section>
    {/* // */}
{/* why choice us */}
            <section className="min-h-screen flex items-center justify-center bg-white px-4 py-14 sm:px-6 lg:p-8">
  <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

    {/* LEFT SIDE */}
    <div className="lg:col-span-5 relative">

      {/* Big Gradient Circle (desktop only) */}
      <div className="absolute -left-32 -top-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 blur-sm hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 rounded-3xl lg:bg-transparent bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 p-8 sm:p-10 lg:py-24 lg:px-12 text-white">
        <h3 className="text-2xl sm:text-3xl font-semibold">Why High Profile Escorts in Delhi Make Your Nights Unforgettable</h3>
        <div className="w-14 h-1 bg-white rounded mt-4 mb-5"></div>
        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
          We focus on verified profiles and private companionship.
        </p>
      </div>

      {/* Logo box – hide on very small screens */}
      <div className="absolute right-4 bottom-4 sm:right-0 sm:bottom-0 w-36 h-24 rounded-tl-2xl bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 hidden sm:flex items-center justify-center text-white p-3 shadow-md">
        <div className="flex items-center gap-3">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 1L3 5v6c0 5 4 9 9 11 5-2 9-6 9-11V5l-9-4z" stroke="white" strokeWidth="1.2"/>
            <path d="M9.5 12.5l1.75 1.75L15.5 10" stroke="white" strokeWidth="1.4"/>
          </svg>
          <div className="text-xs font-medium leading-tight">
            YOUR<br />LOGO
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE CARDS */}
    <div className="lg:col-span-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center border">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-pink-500">
                <path d="M12 2l7 3v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-base">
                Mature Confidence With Slow-Building Charm
              </h4>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                High profile escorts in Delhi bring effortless charm that turns into warm, magnetic pull. Their poised smiles and refined manner create rising rapport that feels natural and captivating.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 text-white rounded-2xl p-5 sm:p-6 shadow-md">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-white/30">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-base">Natural Chemistry, Not Scripted Behaviour</h4>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
                Their reactions stay real. Their laughter stays honest. Their closeness builds a charged atmosphere that keeps you wanting more.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 text-white rounded-2xl p-5 sm:p-6 shadow-md">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-white/30">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-base">Perfect For First-Time Clients</h4>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
                Their gentle nature and friendly tone make them great for men who want connection without pressure.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center border">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-pink-500">
                <path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8 12 2z" stroke="currentColor"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-base">
                Soft-Spoken, Polished, and Impeccably Groomed
              </h4>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                Delhi high profile escorts keep a refined and elegant look. Light fragrance, sharp style, and a polished vibe that draws you in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
{/* // */}
<section className="relative bg-[#fafafa] py-24 px-4 md:px-10 overflow-hidden">

      {/* Soft Night Glow */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-pink-500/15 rounded-full blur-[160px]" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] bg-purple-600/15 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            How Our High Profile Escorts Create{" "}
            <span className="text-pink-600">No-Limit Nights</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Our high profile escort service in Delhi focuses on fulfilling your hidden desires in a safe and refined way.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            They turn a quiet night into an adventure full of:
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <SparklesIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Teasing</span>
            </div>

            <div className="flex items-center gap-3">
              <HeartIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Closeness</span>
            </div>

            <div className="flex items-center gap-3">
              <FireIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Chemistry</span>
            </div>

            <div className="flex items-center gap-3">
              <UserIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Personal Attention</span>
            </div>
          </div>

          <p className="mt-8 text-gray-700 font-medium">
            These girls know how to make even a small moment feel rich with desire.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/5]">
          <Image
            src="/Webpimages/download (4).webp"
            alt="Luxury Night Companionship Delhi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-3xl shadow-xl object-cover"
          />

          <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold text-gray-800">
              Romantic • Intimate • Unforgettable
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Where every moment feels richer
            </p>
          </div>
        </div>

      </div>
    </section>



    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Booking Process */}
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Book High Profile Escorts in Delhi Without Advance – 100% Guaranteed
                </h2>
                {/* <p className="text-gray-400">Booking an independent call-girl in Delhi stays simple and private. </p> */}
              </div>
    
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Select Your Preferred High Profile Escort',
                    desc: 'Browse fresh, charming, verified profiles and choose the vibe you like.',
                    icon: <UserCheck className="w-8 h-8" />
                  },
                  {
                    step: '02',
                    title: ' Share Hotel Location & Timing',
                    desc: 'Send your 5-star hotel details for a clean and private arrival.',
                    icon: <MessageCircle className="w-8 h-8" />
                  },
                  {
                    step: '03',
                    title: 'Get Instant, Private Booking Confirmation',
                    desc: 'We confirm everything quietly with no extra questions.',
                    icon: <Shield className="w-8 h-8" />
                  },
                  {
                    step: '04',
                    title: 'Pay After She Arrives',
                    desc: 'Give payment only when your high profile escort reaches your door.',
                    icon: <CreditCard className="w-8 h-8" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 h-full">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-4">
                        <div className="text-white font-bold">{item.step}</div>
                      </div>
                      <div className="text-pink-400 mb-3 flex justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

    </div>
    {/* Hotels */}
    

            {/* pricing */}
                <section className="py-12 bg-gray-50">
                      <div className="max-w-7xl mx-auto px-6">
                      {/* Top selector - centered pill like screenshot */}
                      <div className="flex justify-center mb-10">
                      <div className="inline-flex bg-white rounded-3xl shadow-lg p-2 items-center">
                      <button
                      onClick={() => setTier('one')}
                      className={`px-6 py-3 rounded-full font-medium transition ${tier === 'one' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md' : 'text-gray-600'}`}>
                      One Session
                      </button>
                      <button
                      onClick={() => setTier('two')}
                      className={`ml-3 px-6 py-3 rounded-full font-medium transition ${tier === 'two' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md' : 'text-gray-600'}`}>
                      Two Sessions
                      </button>
                      <button
                      onClick={() => setTier('night')}
                      className={`ml-3 px-6 py-3 rounded-full font-medium transition ${tier === 'night' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md' : 'text-gray-600'}`}>
                      Full Night
                      </button>
                      </div>
                      </div>


                      {/* Single price card styled like screenshot (orange top + white body + rounded) */}
                      <div className="flex justify-center">
                      <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl border border-transparent hover:border-purple-300 transition">
                      {/* Header (orange) */}
                      <div className="px-6 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                      <div className="flex items-center justify-between">
                      <div>
                      <h4 className="font-bold text-lg">Foreigner</h4>
                      <p className="text-sm opacity-90">International companions for cultural exchange</p>
                      </div>
                      <div className="opacity-30">🌍</div>
                      </div>
                      </div>


                      {/* Body */}
                      <div className="bg-white px-6 py-8">
                      <div className="text-center">
                      <div className="text-4xl font-extrabold text-gray-900">{current.amount}</div>
                      <div className="text-sm text-gray-500 mt-1">{current.note}</div>
                      </div>


                      <ul className="mt-6 space-y-3 text-gray-700">
                      <li className="flex items-start gap-3"><FaCheck className="text-green-500 mt-1" /> <span>Cultural exchange</span></li>
                      <li className="flex items-start gap-3"><FaCheck className="text-green-500 mt-1" /> <span>Language practice</span></li>
                      <li className="flex items-start gap-3"><FaCheck className="text-green-500 mt-1" /> <span>International cuisine</span></li>
                      <li className="flex items-start gap-3"><FaCheck className="text-green-500 mt-1" /> <span>Global perspective</span></li>
                      </ul>


                      <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md">Select Package</button>
                      </div>
                      </div>
                      </div>
                      </div>
                      </section>
                {/* end pricing */}
                {/* start */}
                <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="relative z-10">
      <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        International Companionship
      </span>

      <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
        High Profile Escort Service in Delhi for <br className="hidden sm:block" />
        Men Who Want Real Class & Real Excitement
      </h2>

      <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded mt-4 mb-6"></div>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
       Our Delhi high profile escorts bring joy, elegance, and real excitement. Whether you want playful romance, girlfriend-like warmth, deep emotional connection, or late-night fun, they deliver that spark without hesitation.
      </p>
      <ul className="text-gray-700 space-y-1">
              <li>• premium experiences</li>
              <li>• sophisticated allure</li>
              <li>• soft intimacy</li>
              <li>• warm chemistry</li>
              <li>• irresistible closeness</li>
            </ul>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">You are in the right place.</p>

    </div>

    {/* RIGHT CONTENT CARD */}
    <div className="relative">
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          Book Your High Profile Escort in Delhi Now – Let the Night Begin
        </h3>

        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
          Your fantasy deserves attention. Your desire deserves action. Your night deserves someone who knows how to make it unforgettable. Choose your girl. Share your hotel. Get ready for a night filled with thrill, temptation, and sweet tension.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="px-4 py-2 text-xs rounded-full bg-white/15">
            Soft-Spoken
          </span>
          <span className="px-4 py-2 text-xs rounded-full bg-white/15">
            Well-Mannered
          </span>
          <span className="px-4 py-2 text-xs rounded-full bg-white/15">
            International Etiquette
          </span>
          <span className="px-4 py-2 text-xs rounded-full bg-white/15">
            Relaxed Experience
          </span>
        </div>
      </div>
    </div>

  </div>
</section>
            {/* end */}
            {/* next start */}
            <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    
  </div>
</section>
            {/* end next */}             
    {/* hhhh */}
                    <section className="w-full py-16 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Book High Profile Escorts in Delhi Tonight
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
           Pick your favourite high profile escort and enjoy warm, irresistible chemistry that turns your night into something you remember. Private booking, no advance, verified profiles, and complete satisfaction.
          </p>
          

          <button className="mt-4 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/Webpimages/download34.webp"
            alt="Luxury Spa"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-2xl shadow-xl object-cover"
          />
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