"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      image: '/Webpimages/download31.webp', // Placeholder image pathss
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
      image: '/Webpimages/signin.webp', // Placeholder image path
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
                question: 'Are your foreigner call girls in Delhi verified?',
                answer: 'Yes. We have our call girls in Delhi which are all foreigners and our escorts in Delhi which are Russians all screened and ID verified and behaviour screened. To ensure authenticity, we offer clients safe, clean, and reliable call girl services in Delhi, without risk or ambiguity.',
                category: 'account',
              },
              {
                id: 2,
                question: 'Do you offer book-now pay-later call girl services in Delhi?',
                answer: 'Yes. Our book now pay later call girl services in Delhi enable their clients to book a foreign model initially and pay her on arrival. This service provides the convenience, privacy, and an easy coordination both to new and returning clients.',
                category: 'payments',
              },
              {
                id: 3,
                question: 'Are Russian call girls in Delhi suitable for corporate clients?',
                answer: 'Absolutely. Our call girls in Delhi are Russian girls who are well-groomed, polite and soft spoken. They are the choice of corporate clients with their laid-back attitude and impeccable manners. They provide a relaxing atmosphere that would be appropriate to business travellers who would need the services of reliable call girls in Delhi.',
                category: 'booking',
              },
              {
                id: 4,
                question: 'Do you provide low price foreigner call girls in Delhi?',
                answer: 'Yes. We have affordable foreigner call girls in Delhi for clients who want budget-friendly international profiles without affecting standards of cleanliness or behaviour. Every profile is well-groomed and professionally presented.',
                category: 'booking',
              },
              {
                id: 5,
                question: 'Can I hire foreigner call girls in Delhi for bachelor parties?',
                answer: 'Yes. We offer Russian call girls in Delhi, dancers and foreign employees to bachelor parties. They are entertaining, vibrant, and clean professional conduct befitting group events and other high profile celebrations.',
                category: 'payments',
              },
              {
                id: 6,
                question: 'What makes your Russian escorts in Delhi different?',
                answer: 'We have Russian escorts in Delhi who are verified, well-trained and polite. They bring cleanliness, sophistication and a warm sense of comfort that makes clients feel relaxed and at ease — well suited to hotel visits, corporate clients, and first-time users.',
                category: 'services',
              },
              {
                id: 7,
                question: 'Are foreigner call girls available late night in Delhi?',
                answer: 'Yes. There is no time when our foreigner call girls in Delhi are not available particularly in 5 star hotels. Our call girls Russian Service in Delhi are still on whether you need to relax in the presence of a companion or even showcase classy company in the presence of a charming lady.',
                category: 'account',
              },
              {
                id: 8,
                question: 'How safe is it to book foreigner call girls in Delhi?',
                answer: 'Completely safe. We provide confirmed profiles, personalized coordination, hotel only services, and book-now pay-later services of the Russian Service in Delhi. All clients receive privacy and authentic foreigner models without any danger.',
                category: 'services',
              },
              {
                id: 9,
                question: 'Do you have Russian escorts near Aerocity or Connaught Place?',
                answer: 'Yes, Russian and foreign escorts are available across Delhi NCR including Aerocity, Connaught Place, Dwarka, and Gurgaon — the same verified booking process applies wherever you are.',
                category: 'account',
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
  { image: '/Webpimages/call-girl-7.webp', name: 'Diya', age: 24, tag: 'Dinner • Hotel Stays' },
  { image: '/Webpimages/download (7).webp', name: 'Meera', age: 26, tag: 'Events • Travel' },
  { image: '/Webpimages/Watch Full Video.webp', name: 'Tanya', age: 23, tag: 'Nightlife • Dining' },
  { image: '/Webpimages/download (14).webp', name: 'Pooja', age: 25, tag: 'Hotel Visits • Parties' },
  { image: '/Webpimages/modelg.webp', name: 'Riya', age: 24, tag: 'Corporate Events • Dinner' },
  { image: '/Webpimages/SSWSW.webp', name: 'Simran', age: 26, tag: 'Travel • Overnight Stays' },
  { image: '/Webpimages/stafff.webp', name: 'Ananya', age: 23, tag: 'Parties • Dining' },
  { image: '/Webpimages/staf1.webp', name: 'Neha', age: 24, tag: 'Dinner Dates • Travel' },
]
// End Locations
 const features3 = [
    { icon: ShieldCheckIcon, title: "Verified Profiles" },
    { icon: SparklesIcon, title: "Premium Companionship" },
    { icon: HeartIcon, title: "Calm & Respectful" },
    { icon: BriefcaseIcon, title: "Corporate Friendly" },
  ];

  //aedfa
  const points = [
    {
      icon: SparklesIcon,
      text: "Soft-spoken foreigner call girls",
    },
    {
      icon: MoonIcon,
      text: "Warm, easygoing company",
    },
    {
      icon: CheckBadgeIcon,
      text: "Russian escorts etiquette trained",
    },
    {
      icon: GlobeAltIcon,
      text: "Global, clean, and tidy employees",
    },
    {
      icon: BriefcaseIcon,
      text: "Ideal for corporate & business clients",
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
          description: "An elite destination that foreigners use. Our foreigners call girls suit well into this atmosphere with their polite manners, business-like grooming, and grace. Perfect for customers who want high-class company in a high-end suite.",
          image: "/Webpimages/theleela.webp",
          amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
          price: "₹25,000",
          features: ["Ocean View", "Private Beach", "Helipad"]
        },
        {
          id: 2,
          name: "Taj Palace, Chanakyapuri",
          location: "New Delhi",
          rating: 5,
          description: "This hotel is suitable to the clients who want to relax and experience a quiet atmosphere. The Russian escorts in Delhi fit here like a glove and they provide one with easy chatting and soft companionship that makes post-long meetings or traveling schedule much easier.",
          image: "/Webpimages/tajpalace.webp",
          amenities: ["Overwater Bungalows", "Coral Reef Access", "Underwater Restaurant", "Spa Sanctuary"],
          price: "₹45,000",
          features: ["Private Island", "Seaplane Transfer", "Glass Floor"]
        },
        {
          id: 3,
          name: "ITC Maurya, New Delhi ",
          location: "New Delhi",
          rating: 5,
          description: "It has a well-developed crowd, which makes it suitable with corporate customers. Our foreigner models are of high etiquette, with a soft spa touch and clean presentation, and a warm reception.",
          image: "/Webpimages/itcmaurya.webp",
          amenities: ["Ski Valet", "Heated Indoor Pool", "Mountain Spa", "Fondue Restaurant"],
          price: "₹38,000",
          features: ["Private Ski Lift", "Fireplace Lounges", "Chocolate Atelier"]
        },
        {
          id: 4,
          name: "JW Marriott, Aerocity",
          location: "New Delhi",
          rating: 5,
          description: "A contemporary high-end house ideal for night bookings. Staffing of our Russian girl in Delhi do so in an unimposing and friendly manner that is conducive to being within business hotels.",
          image: "/Webpimages/jwmarriott.webp",
          amenities: ["Private Oasis Pool", "Camel Rides", "Desert Spa", "Starlight Dining"],
          price: "₹32,000",
          features: ["Falconry Experience", "Gold-plated Interiors", "Private Dune"]
        },
        {
          id: 5,
          name: "The Imperial, Janpath",
          location: "New Delhi",
          rating: 5,
          description: "A vintage hotel that is suitable to accompany elegant and well-trained foreigner escorts. These models add charisma and ease and make your evening light, relaxing, and pleasantly memorable.",
          image: "/Webpimages/imperial.webp",
          amenities: ["Cliffside Infinity Pool", "Jungle Spa", "Rice Terrace Dining", "Cultural Workshops"],
          price: "₹28,000",
          features: ["Volcano Views", "Sacred Spring", "Monkey Sanctuary"]
        },
        {
          id: 6,
          name: "The Oberoi, New Delhi",
          location: "New Delhi",
          rating: 5,
          description: "Our foreign call girls uphold international standards of grooming and decorum, and you can expect a premium, intimate experience at the exclusive Oberoi, New Delhi.",
          image: "/Webpimages/oberoihotel.webp",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.delhigirl.in/" },
            { "@type": "ListItem", position: 2, name: "Russian Escorts in Delhi", item: "https://www.delhigirl.in/russian-escorts-in-delhi" },
          ],
        }),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      }}
    />
    {/* banner */}
               <header className="relative w-full h-screen min-h-[460px] flex items-center">
      {/* Background image - place your image at /public/Webpimages/hero-banner.webp */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Webpimages/banner-1.webp"
          alt="Russian escorts in Delhi at 5-star hotels"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Stronger dark overlay so text stays readable regardless of how bright the photo is */}
        <div className="absolute inset-0 bg-black/55 -z-10" />
        {/* Left-side scrim, heavier where the heading/text sits */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left content */}
          <div className="lg:col-span-7 mt-17">
            <motion.h1
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.8)' }}
            >
              Russian Escorts in Delhi{" "}
              <span className="text-amber-300">
                — Verified &amp; Discreet
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-2xl text-gray-100"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
            >
              Meet verified Russian and foreign escorts in Delhi for relaxed, unhurried company at 5-star hotels across Aerocity, Connaught Place, and Gurgaon. Easy WhatsApp booking, and you pay only after you meet.
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

              <a href="#profiles" className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-gray-700 hover:shadow-md transition">
                View Profiles
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
          alt="Verified Russian escort profile"
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
                    <a
                      href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20book%20a%20Russian%20escort%20in%20Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center rounded-full py-2 text-sm bg-gradient-to-r from-pink-500 to-violet-500 text-white"
                    >
                      Request
                    </a>
                    <a
                      href="#profiles"
                      className="rounded-full py-2 px-4 text-sm bg-gray-100 text-gray-700"
                    >
                      Details
                    </a>
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
                <Image
                  src={p.image}
                  alt={`${p.name} — Russian/foreign escort profile in Delhi`}
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
                <a
                  href={`https://api.whatsapp.com/send?phone=918826482370&text=${encodeURIComponent(`Hi, I'd like to book ${p.name} in Delhi.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  Request
                </a>
              </div>
            </motion.div>
          ))}

          {/* View more profiles -> WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20see%20more%20Russian%2Fforeign%20escort%20profiles%20in%20Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[160px] flex flex-col items-center justify-center text-center bg-gray-50 rounded-2xl p-3 shadow-sm border-2 border-dashed border-purple-200 hover:border-purple-400 transition-colors"
          >
            <span className="text-2xl mb-2">💬</span>
            <span className="text-sm font-medium text-purple-700">View More Profiles</span>
            <span className="text-xs text-gray-500 mt-1">on WhatsApp</span>
          </a>
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
         <div id="profiles" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    Our Russian &amp; Foreign Escort Profiles
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Meet our diverse team of professionals who bring excellence and passion to every engagement.
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
                          <a
                            href={`https://api.whatsapp.com/send?phone=918826482370&text=${encodeURIComponent(`Hi, I'd like to book ${staff.name} in Delhi.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                          >
                            View Profile
                          </a>
                          <a
                            href="https://api.whatsapp.com/send?phone=918826482370"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat on WhatsApp"
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </a>
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
            
            {/* /// */}
                <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column - Text */}
        <div className="lg:col-span-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Celebrity Models <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Russian</span> Escorts in
            <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600">Delhi</span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-xl">
            Delhi Girl connects you with high-class foreign call girls in Delhi for a calm, quality experience. We offer Russian call girls in Delhi, European escorts, Uzbek models, and foreign celebrity-style companions. Each one knows how to keep the mood relaxed and warm, so you feel genuinely looked after.
          </p>
          <p className="mt-8 text-gray-600 max-w-xl">
            Their soft manner, courteous voice, and goodwill and liking in each session make them feel relaxed. Our Russian escorts in Delhi are invited by many corporate, business, and hospitality clients who prefer them since a level of class, elegance, and a comfortable international atmosphere always accompanies them.
          </p>
          <p className="mt-8 text-gray-600 max-w-xl">
            
If you are fond of soft-spoken, well-groomed, clean, and premium foreign models in Delhi, Delhi Girl ensures you see only verified profiles. We remain focused on your comfort, privacy, and satisfaction.
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
                <Image src="/Webpimages/download432.webp" alt="top" fill sizes="328px" style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* Bottom image - rotated opposite */}
            <div className="absolute bottom-0 left-0 transform -rotate-3 shadow-2xl rounded-xl border-8 border-white bg-white">
              <div className="relative w-[360px] h-[304px] rounded-lg overflow-hidden">
                <Image src="/Webpimages/downloadd3.webp" alt="bottom" fill sizes="360px" style={{ objectFit: "cover" }} />
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
              src="/Webpimages/Evie Lee Mikomin (1).webp"
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
            Russian &amp; Foreign Escorts in Delhi
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              For Every Occasion
            </span>
          </h2>

          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              Delhi Girl connects you with well-groomed, easygoing Russian and foreign escorts in Delhi who know how to make an evening feel comfortable rather than staged. Whether it&apos;s a quiet evening near Aerocity, a lounge visit in Connaught Place, or a relaxed conversation over dinner, our Russian call girls service in Delhi is built around your pace, not a script.
            </p>
            <p>
              Our foreign escorts, including European and Russian models, are chosen for their warmth, grace, and easy professionalism — the kind that suits business travellers and corporate clients as much as anyone looking for good company. If you want a smooth, classy evening at a 5-star hotel in Delhi or Gurgaon, our Russian escorts are a solid choice.
            </p>
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
            <a
              href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20book%20a%20Russian%20escort%20in%20Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 rounded-full overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold text-lg shadow-2xl"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
            </a>

            <a
              href="#profiles"
              className="px-10 py-4 rounded-full bg-white text-gray-900 font-semibold text-lg border border-gray-200 shadow hover:shadow-md transition"
            >
              View Profiles
            </a>
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
          <div className="relative rounded-[30px] overflow-hidden shadow-2xl h-[500px]">
            <Image
              src="/Webpimages/model.webp"
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
            Find Best Foreigner for Late Night
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Russian Escorts in Delhi
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Foreigner models, clean, well-groomed, polite and soothing models all night long to spend relaxing time and receive top-class Escort Service in Delhi. What you get:
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
            <a
              href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20book%20a%20Russian%20escort%20in%20Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold text-lg shadow-xl hover:scale-[1.03] transition"
            >
              Book Now
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=918826482370"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold text-lg hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
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
                  How to Book Russian Escorts in Delhi for Bachelor Party?
                </h2>
                <p className="text-gray-400">It is convenient to use our easy and discreet system to book foreigner escorts in delhi.</p>
              </div>
    
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Select Your Foreigner staff',
                    desc: 'Search the profiles of Russian call girls in Delhi, foreign models, belly dancers, or party entertainers. Choose the appearance, fashion and feel you desire at the bachelor event. Our verified profiles are only that, so that you will have clean, polite, and presentable escorts to fit any group set-up.',
                    icon: <UserCheck className="w-8 h-8" />
                  },
                  {
                    step: '02',
                    title: 'Share Party Details',
                    desc: 'Choose the location, time and the kind of entertainment you desire. Our Foreigner Escort girls are accommodative to parties whether it is in soft companionship, belly dancing or fun hostessing. We arrange the schedules and make the perfect entrance to five-star hotels or private halls.',
                    icon: <MessageCircle className="w-8 h-8" />
                  },
                  {
                    step: '03',
                    title: 'Confirm Your Booking ',
                    desc: 'After shortlisting the models, you get their availability in form of status. Once it is confirmed, we book the schedule and make the foreigner escorts ready to take part in your bachelor event. The whole process is confidential and stress-free, where no trouble arises during the party.',
                    icon: <Shield className="w-8 h-8" />
                  },
                  {
                    step: '04',
                    title: 'Have a delicate, high-end Experience',
                    desc: 'Our Foreigner Escorts are punctual, well-behaved and professionally converse with your guests. They do not go too far in making the environment lively, warm and fun. Ideal for corporate bachelor nights, lounge parties or solo suite parties.',
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
            Our Service Locations For Russian Escorts in Delhi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           We only offer foreigner escort service in 5-star hotels that have been verified within the course of Delhi NCR.
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
                <a
                  href={`https://api.whatsapp.com/send?phone=918826482370&text=${encodeURIComponent(`Hi, I'd like to book a Russian escort at ${hotel.name}, Delhi.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  View Details
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
              <Image
                src="/Webpimages/hotel-lounge-chandelier.webp"
                alt="Luxury escort package for Russian escorts in Delhi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl shadow-xl object-cover"
              />
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
                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> High-profile models available 24/7</li>
                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Verified profiles, no surprises</li>
                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Discreet, professional, and always on time</li>
                {/* <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Michelin restaurant reservations</li>
                <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Free spa credits</li> */}
              </ul>
              <div className="flex space-x-4">
                <a
                  href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20Luxury%20Experience%20Package"
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
                  Contact Concierge
                </a>
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
        <h3 className="text-2xl sm:text-3xl font-semibold">Why Choose Delhi Girl To Book Your Premium Call Girls in Delhi?</h3>
        <div className="w-14 h-1 bg-white rounded mt-4 mb-5"></div>
        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
          We provide secure, intimate and high-quality experiences and certified Russian Escorts in Delhi.
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
                Verified Foreigner Profiles Only
              </h4>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                All foreign escorts and the Russian call girls in Delhi go through ID checks, behavioural checks, and grooming checks. Our type of profiles is authentic, reliable, and clean to guarantee the safety and comfort of clients.
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
              <h4 className="font-semibold text-base">Professional, Composed, and Well-Groomed</h4>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
                Our foreign escorts speak softly, present themselves well, and carry a calm, composed presence — ideal for hotels, corporate clients, and first-time users.
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
              <h4 className="font-semibold text-base">Smooth 5-Star Hotel Coordination</h4>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
                Each escort is trained to move into hotels without notice and act in a professional manner. Clients are not disturbed, there is no attention, and no inconvenience.
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
                Pay-Later, Easy Book-Now
              </h4>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                You are able to reserve a Delhi foreigner call girl and pay later when you arrive in Delhi. An easy alternative for clients who are easy and hassle-free in their arrangements.
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
                Kind, Likeable, and Emotionally Comforting Escorts 
              </h4>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                In Delhi, our Russian escorts are aware of how to maintain a pleasant atmosphere. They suit customers who require ease rather than coercion.
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
              <h4 className="font-semibold text-base">Efficient Corporate Booking Agency</h4>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
                Our foreign models are well-trained, presentable, and respectable, and this is the reason why many business travellers choose our service, as they know the manners of the corporate world.
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
                      <p className="text-sm opacity-90">International companionship, Delhi hotels</p>
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
                      <li className="flex items-start gap-3"><FaCheck className="text-green-500 mt-1" /> <span>Verified Profile</span></li>
                      <li className="flex items-start gap-3"><FaCheck className="text-green-500 mt-1" /> <span>5-Star Hotel Friendly</span></li>
                      <li className="flex items-start gap-3"><FaCheck className="text-green-500 mt-1" /> <span>Pay After You Meet</span></li>
                      <li className="flex items-start gap-3"><FaCheck className="text-green-500 mt-1" /> <span>Fully Discreet</span></li>
                      </ul>


                      <a
                        href={`https://api.whatsapp.com/send?phone=918826482370&text=${encodeURIComponent(`Hi, I'd like to book a Russian/foreign escort (${tier === 'one' ? 'one session' : tier === 'two' ? 'two sessions' : 'full night'}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 block text-center w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md"
                      >
                        Select Package
                      </a>
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
        Hire Foreigner Call Girls in Delhi <br className="hidden sm:block" />
        as Your Dating Partner
      </h2>

      <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded mt-4 mb-6"></div>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        Looking for someone relaxed, stylish, and easy to be around? Our foreign call girls in Delhi — Russian, Uzbek, and European profiles — are soft-spoken and quick to put you at ease. Perfect for quiet evenings, dinner dates, lounge outings, and corporate travellers looking for warm, genuine company. Every profile is verified, well-mannered, and good-natured.
      </p>

    </div>

    {/* RIGHT CONTENT CARD */}
    <div className="relative">
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          A Relaxed Evening With Russian Escorts in Delhi
        </h3>

        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
          Our Russian and foreign escorts in Delhi offer easy, natural, and unhurried company. Nothing feels rushed or scripted — just polite conversation and a genuinely pleasant evening. Ideal for clients who want relaxed, high-end international company.
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
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_24rem] gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>
      <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm rounded-full 
        bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
          <path d="M12 2l7 3v5c0 5-3.6 9.7-7 11-3.4-1.3-7-6-7-11V5l7-3z" 
            stroke="white" strokeWidth="1.4"/>
        </svg>
        Affordable & Premium
      </span>

      <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
        Book Foreign Call Girls in Delhi <br className="hidden sm:block" />
        at a Low Price
      </h2>

      <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded mt-4 mb-6"></div>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
       Delhi Girl makes it simple to book great foreign companionship without overpaying. We know clients want polite, well-groomed companions at a fair price, so we&apos;ve kept our rates honest without cutting corners on quality. Our Russian call girls in Delhi, Uzbek models, and European companions bring pleasant conversation and a friendly manner that puts you at ease instantly.
      </p>

      <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
        Every profile is verified and well-presented, and knows how to keep the mood calm and pleasant — even at a lower price point. Well suited to business travellers, first-time clients, and anyone who wants quiet, easygoing company rather than a loud night out. Our affordable foreign call girls in Delhi still meet you at genuine 5-star hotels, with the same discretion and quality — just simple booking and honest pricing.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] max-w-sm mx-auto lg:mx-0">
      <Image
        src="/Webpimages/stafff.webp"
        alt="Affordable foreign call girls in Delhi at 5-star hotels"
        fill
        sizes="(max-width: 1024px) 60vw, 24rem"
        style={{ objectFit: 'cover' }}
      />
    </div>
  </div>
</section>
            {/* end next */}             
    {/* hhhh */}
                    <section className="w-full py-16 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Get Started With Delhi Girl for High-Profile Russian Escorts in Delhi
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Contact Delhi Girl any time to book a verified, courteous, and high-end Russian escort in Delhi — 5-star hotels, home visits, and more. Easy WhatsApp booking, discreet service, and genuine profiles guaranteed.
          </p>


          <a
            href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20book%20a%20Russian%20escort%20in%20Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Book Now
          </a>
        </div>

        {/* Image Section */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/Webpimages/young-woman.webp"
            alt="Russian escort service in Delhi"
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