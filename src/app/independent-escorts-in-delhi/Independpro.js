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

export default function Foreignmodel() {
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
      image: '/Webpimages/download (15).webp', // Placeholder image pathss
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
      text: "Natural charm and respectful manners",
    },
    {
      icon: MoonIcon,
      text: "Clean, hygienic, well-kept appearance",
    },
    {
      icon: CheckBadgeIcon,
      text: "Friendly attitude and easy bonding",
    },
    {
      icon: GlobeAltIcon,
      text: "No agency control or fixed behaviour",
    },
    {
      icon: BriefcaseIcon,
      text: "Clear talk and warm presence",
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
          image: "/Webpimages/theleela.webp",
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
          image: "/Webpimages/jwmarriott.webp",
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
          image: "/Webpimages/tajpalace.webp",
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
          image: "/Webpimages/oberoihotel.webp",
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
          image: "/Webpimages/itcmaurya.webp",
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
  return (
    <>
       
    {/* banner */}
               <header className="relative w-full h-screen min-h-[560px] flex items-center">
      {/* Background image - place your image at /public/Webpimages/hero-banner.webp */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Webpimages/bannermodel.webp"
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
              Try Independent <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Escorts in Delhi for</span>
              <br /> Private & Premium Companionship <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">| Book Now</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-2xl text-gray-600"
            >
              Enjoy soft-spoken, well-groomed, mature independent call girls in Delhi who create comfort, grace, and a natural feel inside your 5-star hotel room. Booking stays simple, service stays safe, and companionship feels warm and easy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#book" className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-[1.02] transform transition">
                Book a Consultation
              </a>

              <a href="#services" className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-gray-700 hover:shadow-md transition">
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
                            Verified Foreigner{" "}
                            <span className="relative">
                              <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                                 Call Girls in Delhi For Corporate Tycoons
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
                              European and Russian models of the highest rank, available to corporate clients, for peaceful, elegant, and business companionship.
                            </p>
                            
                          </motion.div>
                   
        
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:bg-emerald-600 transition"
                      >
                        Book a Consultation
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
        
                      <a
                        href="#services"
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
                <a href="#contact" className="inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white">Request</a>
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
                    <a href="#contact" className="px-5 py-2 rounded-full bg-emerald-500 text-white text-sm">Enquire Now</a>
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
            Independent Delhi Girl for <span className="text-pink-600">Corporate, Travel & Hotel</span> Companionship
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Delhi runs on speed, and many men prefer company that understands that pace. An independent Delhi girl fits naturally through her calm conduct, soft way of talking, and personal appeal.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Majority of the independent escorts are students, professionals or educated women who take good care of themselves. This makes the time feel balanced and refined. Their relaxed manner, neat look, and polite conduct suit clients looking for:
          </p>

          {/* Feature List */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <BriefcaseIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Business Travellers</span>
            </div>

            <div className="flex items-center gap-3">
              <BuildingOfficeIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Corporate Clients</span>
            </div>

            <div className="flex items-center gap-3">
              <HomeModernIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Hotel Companionship</span>
            </div>

            <div className="flex items-center gap-3">
              <CakeIcon className="h-6 w-6 text-pink-600" />
              <span className="text-gray-700">Dinner & Lounge Dates</span>
            </div>
          </div>

          <p className="mt-8 text-gray-700 font-medium">
           You enjoy good company without tension or formality.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[4/5]">
          <Image
            src="/Webpimages/download.webp"
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
            {/* /// */}
                <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column - Text */}
        <div className="lg:col-span-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Independent Escorts <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">in Delhi for</span> Men Who Want
            <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600"> Real Connection</span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-xl">
            <span className="font-semibold text-purple-600"> </span>
            Independent escorts in Delhi are unique when the aim will be actual comfort and a sense of personal touch. These women have their own fashion, self-confidence and warmth. They are self-managed, work individually, and present themselves to the clients in an honest and relaxed way. They do not stick to the patterns or training, which makes each meeting relaxed and real.
          </p>
          <p className="mt-8 text-gray-600 max-w-xl">
            If the plan includes calm conversation, a polished dinner partner, or quiet company inside your hotel room, an independent female escort in Delhi reads your mood well. Her courteousness, clean look, respectful voice, and plain manner befits both first-time visitors and business clients.
          </p>
          <p className="mt-8 text-gray-600 max-w-xl">
           The time becomes relaxed rather than rigid with an independent Delhi girl, and this is the reason why most people favor them to formal escort arrangements.
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
            <a href="#book" className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
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
              <div className="w-82 h-68 relative rounded-lg overflow-hidden">
                <Image src="/Webpimages/download (35).webp" alt="top" layout="fill" objectFit="cover" />
              </div>
            </div>

            {/* Bottom image - rotated opposite */}
            <div className="absolute bottom-0 left-0 transform -rotate-3 shadow-2xl rounded-xl border-8 border-white bg-white">
              <div className="w-90 h-76 relative rounded-lg overflow-hidden">
                <Image src="/Webpimages/download (34).webp" alt="bottom" layout="fill" objectFit="cover" />
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
            {/* new section */}
            {/* // */}
            <section className="relative bg-[#fafafa] py-28 px-4 md:px-10 overflow-hidden">

      {/* Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-pink-500/20 rounded-full blur-[150px]" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-purple-600/20 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* RIGHT – IMAGE */}
        <div className="relative">
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl h-[650px]">
            <Image
              src="/Webpimages/download (3).webp"
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
            Independent College Girl
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              in Delhi for Simple & Friendly Company
            </span>
          </h2>

          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              For those who enjoy light-hearted and friendly presence, an independent college girl in Delhi fits perfectly. These girls bring a fresh and easy vibe that helps you settle instantly. They attend established colleges and handle their profiles themselves, and this makes their behaviour natural and unscripted. The conversations are unproblematic, etiquette is mild, and coziness is kept in the center to all clients.
            </p>
            <p>
             College girls are appropriate with clients who appreciate simplicity such as easy conversation, friendly smiles, natural communication, and youthful vitality that boosts the mood. They are also polite, clean and very soft-spoken, thereby appealing to first time users, travellers or any other people seeking quiet companionship in a hotel.
            </p>
            <p>With an independent college girl, there is no rush or stress. Her friendly nature, positive outlook, and neat casual style help the time feel smooth and pleasant.</p>
            <p>If you want company that feels easy to talk to, share a laugh with, and relax around, an independent college girl in Delhi fits well.</p>
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
          <div className="relative rounded-[30px] overflow-hidden shadow-2xl h-[650px]">
            <Image
              src="/Webpimages/download (2).webp"
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
            Find Independent Girl in Delhi
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              for Late Night Escort Service
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Independent escorts are soft-spoken, neat, natural and can be booked across 5-star hotels, late at night. They are perfect for clients who want calm, peaceful, and genuine companionship without any rush. These
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Booking Process */}
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How to Book Independent Call Girl in Delhi?
                </h2>
                <p className="text-gray-400">Booking an independent call-girl in Delhi stays simple and private. </p>
              </div>
    
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Choose Your Independent Escort',
                    desc: 'Search through trust-worthy profiles of unmarried Delhi girls, college girls, or professional friends. Pick the profile that matches your comfort and taste. Each listing goes through checks for safety and conduct, ensuring your experience stays smooth and stress-free from the start.',
                    icon: <UserCheck className="w-8 h-8" />
                  },
                  {
                    step: '02',
                    title: 'Share Your Location & Time',
                    desc: 'Enter your hotel name and your desired time. Independent escorts are time-conscious and will arrive on time without attracting attention. We verify and confirm only safe places as we ensure that all is safe and under control.',
                    icon: <MessageCircle className="w-8 h-8" />
                  },
                  {
                    step: '03',
                    title: 'Get Private Confirmation ',
                    desc: 'Once details are set, the booking gets confirmed quietly. You receive a private message with arrival information. The entire process stays fast, silent, and fully confidential.',
                    icon: <Shield className="w-8 h-8" />
                  },
                  {
                    step: '04',
                    title: 'Enjoy Natural Companionship',
                    desc: 'Your call girl is an independent lady with a well-groomed, polite, and comfortable arrival. She provides the right atmosphere of being at ease and spending time to enjoy without feeling pressured or embarrassing situations.',
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
    {/* 5 star hotel */}
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Top 5-Star Hotels for Independent Escorts Service in Delhi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Independent escorts are only organized in some premium hotels.
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
                {/* Background Image */}
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div> */}
                
                <div className="absolute top-4 right-4 z-20 flex items-center bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  <FaStar className="mr-1" />
                  {hotel.rating}
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <p className="text-sm">{hotel.location}</p>
                </div>
                {/* Placeholder Image */}
                {/* <div className="bg-gradient-to-br from-purple-100 to-pink-200 w-full h-full flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div> */}
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
              <Image
                src="/Webpimages/modelg.webp"
                alt="Luxury Spa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-800/30 z-10"></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h3 className="text-2xl font-bold">Exclusive Packages For Escort Service in Delhi</h3>
                <p className="mt-2 max-w-md">The ultimate packages of pleasure are made to fatten you with beauty, fire, intimacy, and wild satisfaction.</p>
              </div>
              {/* Placeholder Image */}
              <div className="bg-gradient-to-br from-purple-300 to-pink-400 w-full h-full flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
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
    
            {/* why choice us */}
            <section className="min-h-screen flex items-center justify-center bg-white px-4 py-14 sm:px-6 lg:p-8">
  <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

    {/* LEFT SIDE */}
    <div className="lg:col-span-5 relative">

      {/* Big Gradient Circle (desktop only) */}
      <div className="absolute -left-32 -top-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 blur-sm hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 rounded-3xl lg:bg-transparent bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 p-8 sm:p-10 lg:py-24 lg:px-12 text-white">
        <h3 className="text-2xl sm:text-3xl font-semibold">Why Choose Delhi Girl for Independent Escorts Service in Delhi?</h3>
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
                Verified Independent Profiles
              </h4>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                Each independent female escort passes personal checks for safety, conduct, and authenticity. You meet genuine self-managed girls with real pictures and clear details.
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
              <h4 className="font-semibold text-base">Natural, Polite & Friendly Companions</h4>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
                Independent escorts talk quietly, act in a respectable manner and maintain low tones during the meeting. Ease and comfort are the driving forces of all interactions.
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
              <h4 className="font-semibold text-base">Private & Secure Booking System</h4>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
                Your privacy stays protected at all stages. We do not have to use irrelevant questions and do not discuss personal information.
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
                Best for Corporate & Business Clients
              </h4>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                Delhi call girls work independently and know how to behave in a professional way. They suit dinners, lounges, travel stays, and hotel companionship without discomfort.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center border">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-pink-500">
                <path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8 12 2z" stroke="currentColor"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-base">
                Book Now, Pay on Arrival
              </h4>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                Bookings stay simple, with payment after arrival. This suits clients who prefer clarity and safety in arrangements.
              </p>
            </div>
          </div>
        </div>

         {/* Card 6 */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 text-white rounded-2xl p-5 sm:p-6 shadow-md">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-white/30">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-base">Smooth Coordination for All 5-Star Hotels</h4>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
               Independent escorts enter hotels quietly and meet clients with grace. Everything runs clean, controlled, and private
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

{/* // */}



            {/* //// */}
           
            

            
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
        Hire Independent Escorts in Delhi <br className="hidden sm:block" />
        for Natural Dating Experience
      </h2>

      <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded mt-4 mb-6"></div>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
       If you want companionship that feels easy and genuine, an independent girl in Delhi fits well. These girls maintain neat grooming, friendly talk, and a natural style that keeps the evening light. Whether you choose a college girl, professional, or mature companion, each brings real presence and steady energy.
      </p>

    </div>

    {/* RIGHT CONTENT CARD */}
    <div className="relative">
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          Enjoy Relaxing, Spa-Like Comfort With Independent Call Girls in Delhi
        </h3>

        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
          Independent female escorts create a calm setting through gentle talk and warm manners. Their presence feels easy instead of formal, helping you relax after a long day. For short visits or quiet hotel time, their steady energy makes the experience soothing and memorable.
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
            Contact Independent Call Girl Agency in Delhi for Private & High-Class Service
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
           Connect anytime to book verified independent escorts for hotel companionship. Safe handling, real profiles, and smooth booking are assured.
          </p>
          

          <button className="mt-4 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/Webpimages/download (35).webp"
            alt="Luxury Spa"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
                {/* FAQ Section */}
                    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
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
                                    href="mailto:support@example.com" 
                                    className="flex items-center justify-center bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                  >
                                    <FiMail className="mr-2" />
                                    Email Support
                                  </a>
                                  <a 
                                    href="/contact" 
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