// components/ModernBannerClient.jsx
"use client";


import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import React, { useState } from 'react';
import {  FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking, FaSpa, FaStar, FaCheck } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';



export default function Delhiescorts({
  title = "Premium Personal Services",
  subtitle = "Luxury experience — Book trusted professionals across Delhi",
  ctaPrimary = "Book Now",
  ctaSecondary = "View Services",
  image = "/Webpimages/bannermodel.webp" // use local optimized image
})

{
    // 5 start hotel 
          const [activeHotel, setActiveHotel] = useState(null);
        
        const hotels = [
          {
            id: 1,
            name: "Grand Royale Palace",
            location: "Bangkok, Thailand",
            rating: 5,
            description: "An iconic luxury hotel offering breathtaking views of the city skyline and the Chao Phraya River.",
            image: "/Webpimages/lajpatnagahotel.webp",
            amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
            price: "₹25,000",
            features: ["Ocean View", "Private Beach", "Helipad"]
          },
          {
            id: 2,
            name: "Azure Waters Resort",
            location: "Maldives",
            rating: 5,
            description: "Experience paradise in our overwater villas with direct access to crystal-clear lagoons.",
            image: "/Webpimages/JwMarriott_CP.webp",
            amenities: ["Overwater Bungalows", "Coral Reef Access", "Underwater Restaurant", "Spa Sanctuary"],
            price: "₹45,000",
            features: ["Private Island", "Seaplane Transfer", "Glass Floor"]
          },
          {
            id: 3,
            name: "Alpine Peak Lodge",
            location: "Swiss Alps, Switzerland",
            rating: 5,
            description: "Majestic mountain retreat with ski-in/ski-out access and panoramic alpine views.",
            image: "/Webpimages/jaypeeVasantAerocity.webp",
            amenities: ["Ski Valet", "Heated Indoor Pool", "Mountain Spa", "Fondue Restaurant"],
            price: "₹38,000",
            features: ["Private Ski Lift", "Fireplace Lounges", "Chocolate Atelier"]
          },
          {
            id: 4,
            name: "Oasis Desert Mirage",
            location: "Dubai, UAE",
            rating: 5,
            description: "Luxurious desert sanctuary blending traditional Arabian hospitality with modern opulence.",
            image: "/Webpimages/holidayIn_CP.webp",
            amenities: ["Private Oasis Pool", "Camel Rides", "Desert Spa", "Starlight Dining"],
            price: "₹32,000",
            features: ["Falconry Experience", "Gold-plated Interiors", "Private Dune"]
          },
          {
            id: 5,
            name: "Emerald Bay Retreat",
            location: "Bali, Indonesia",
            rating: 5,
            description: "Tropical paradise nestled in lush rainforest with stunning ocean vistas and traditional Balinese architecture.",
            image: "/Webpimages/pullmanAerocity.webp",
            amenities: ["Cliffside Infinity Pool", "Jungle Spa", "Rice Terrace Dining", "Cultural Workshops"],
            price: "₹28,000",
            features: ["Volcano Views", "Sacred Spring", "Monkey Sanctuary"]
          },
          {
            id: 6,
            name: "Sapphire Sky Tower",
            location: "New York City, USA",
            rating: 5,
            description: "Ultra-modern luxury in the heart of Manhattan with panoramic city views from every suite.",
            image: "/Webpimages/tajmahalhotel_lajpatnagar.webp",
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
          {/* staff showcase */}
            const [activeCategory, setActiveCategory] = useState('all');
            const categories1 = [
              { id: 'all', name: 'All Staff' },
              { id: 'airhostess', name: 'Airhostess' },
              { id: 'celebrity', name: 'Celebrity' },
              { id: 'college', name: 'College Girls' },
              { id: 'foreign', name: 'Foreign Girls' },
              { id: 'highprofile', name: 'High Profile' },
            ];
            const staffMembers = [
              {
                id: 1,
                name: 'Sophia Martinez',
                role: 'Senior Airhostess',
                category: 'airhostess',
                description: '5+ years experience with international airlines. Fluent in 4 languages.',
                image: '/Webpimages/follow for more.webp', // Placeholder image path
              },
              {
                id: 2,
                name: 'Alex Johnson',
                role: 'TV Personality',
                category: 'celebrity',
                description: 'Award-winning host of "Nightlife" show. Known for vibrant personality.',
                image: '/Webpimages/downloadd6.webp', // Placeholder image pathss
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
                category: 'highprofile',
                description: 'Fortune 500 company board member. MBA from Harvard Business School.',
                image: '/Webpimages/49.webp',
              },
              {
                id: 6,
                name: 'Mia Thompson',
                role: 'First Class Hostess',
                category: 'airhostess',
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
                image: '/Webpimages/image1.webp', // Placeholder image path
              },
            ];
            const filteredStaff = activeCategory === 'all' 
              ? staffMembers 
              : staffMembers.filter(member => member.category === activeCategory);
              {/* End Staff Showcase */}
          // sds
          
    // FAQ Section
    const [activeCategory1, setActiveCategory1] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'account', name: 'Account' },
    { id: 'booking', name: 'Bookings' },
    { id: 'payments', name: 'Payments' },
    { id: 'services', name: 'Services' },
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I create an account?',
      answer: 'Creating an account is simple. Click on the "Sign Up" button in the top right corner, fill in your details including name, email, and password, then verify your email address.',
      category: 'account',
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are securely processed with 256-bit encryption.',
      category: 'payments',
    },
    {
      id: 3,
      question: 'Can I modify my booking after confirmation?',
      answer: 'Yes, you can modify your booking up to 24 hours before your scheduled appointment. Simply log into your account, go to "My Bookings", and select "Modify". Changes are subject to availability.',
      category: 'booking',
    },
    {
      id: 4,
      question: 'How do I cancel a reservation?',
      answer: 'To cancel a reservation, go to "My Bookings" in your account dashboard, select the booking you wish to cancel, and click "Cancel". Cancellation policies vary by service type - please review before confirming.',
      category: 'booking',
    },
    {
      id: 5,
      question: 'What is your refund policy?',
      answer: 'We offer full refunds for cancellations made at least 48 hours in advance. Cancellations within 24-48 hours receive a 50% refund. No refunds are available for cancellations within 24 hours of the appointment.',
      category: 'payments',
    },
    {
      id: 6,
      question: 'Are your services available internationally?',
      answer: 'Yes, we currently operate in 15 countries worldwide. Please check our locations page for specific service availability in your region. Additional fees may apply for international bookings.',
      category: 'services',
    },
    {
      id: 7,
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page, enter your registered email, and you will receive a password reset link. This link expires in 30 minutes for security reasons.',
      category: 'account',
    },
    {
      id: 8,
      question: 'What safety measures do you have in place?',
      answer: 'All our staff undergo thorough background checks and professional training. We offer contactless payment options, 24/7 support, and an emergency contact system for your safety.',
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
  return (
    <>
    <header className="relative overflow-hidden bg-gradient-to-r from-rose-50 via-white to-amber-50">
      <div className="absolute inset-0">
        <Image
          src="/Webpimages/pretty-sensual-blonde-model-laying-bed-enjoy-her-morning-luxury-hotel-wearing-burgundy-silk-nightdress-robe-blind-hairs-beauty-face-boudoir-style.webp"  // 👉 apni image yaha lagao
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
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition"
                aria-label="Primary action - Book now"
              >
                {ctaPrimary}
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-5 py-3 text-sm font-medium backdrop-blur-sm hover:bg-white/10 transition"
                aria-label="Secondary action - View services"
              >
                {ctaSecondary}
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
                  href="#quickbook"
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
    
    {/* content */}
     <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE AREA */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/Webpimages/download34.webp" // 👉 apni image yaha lagao
              alt="Luxury Spa Image"
              width={700}
              height={500}
              className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          </div>

          {/* CONTENT AREA */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            Experience Pure Luxury & Ultimate Relaxation
                          </h2>
            {/* <h2 className="text-4xl md:text-5xl font-bold from-purple-600 to-pink-600 bg-clip-text font-serif mb-6">
              Experience Pure Luxury & Ultimate Relaxation
            </h2> */}

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {/* 👉 Yaha apna 300 words ka content paste kar do */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis 
              dignissim lorem, nec cursus massa sollicitudin et. Integer pretium, ipsum 
              nec tincidunt cursus, libero justo tincidunt dui, eget facilisis tortor 
              risus vitae nulla. Sed non sapien eget nisl convallis porttitor. Nam 
              mattis orci eu elit fermentum, vitae consequat tortor malesuada. Nulla 
              facilisi. Suspendisse potenti. Mauris vel suscipit ex, ut tempus sem. 
              Donec at lorem id sapien convallis tempor. Integer iaculis sem vel velit 
              fringilla malesuada. Vivamus luctus fringilla lorem non viverra. Cras 
              aliquet, felis vel tempus iaculis, nisi orci volutpat felis, non varius 
              velit nibh vitae neque. Phasellus efficitur ex at mauris dictum, sit amet 
              posuere massa ultricies. Mauris elementum rhoncus nulla eget fermentum. 
            </p>
            

            <button className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-md hover:bg-emerald-700 transition-all">
              Book Appointment
            </button>
          </div>

        </div>
      </div>
    </section>
    {/* end content */}
    
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
                            Our Premium Location in Aerocity
                          </h2>
                          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Meet our diverse team of professionals who bring excellence and passion to every engagement.
                          </p>
                        </motion.div>
                
                
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {cities.map((c, i) => (
                <motion.a
                key={c.name}
                href={`#/cities/${c.name.toLowerCase()}`}
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
                </motion.a>
                ))}
                </div>
                
                
                <div className="flex justify-center mt-10">
                <a
                href="#/cities"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                >
                View All Cities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                </a>
                </div>
                </div>
                </section>
                    {/* End Location */}
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
                                Trusted Call Girl Services in Delhi – VIP Companions for Every Occasion
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
                              {categories1.map(category => (
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
                    {/* content */}
                   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Experience Luxury Like Never Before
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Step into a world of comfort, elegance, and unforgettable hospitality.
            Designed for premium travellers, these luxury spaces combine world-class
            amenities with breathtaking views and exceptional service.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/Webpimages/@stepsister_videos_2025_hd • Milkshake Website Builder.webp"  // ⭐ apni image yaha lagao
              alt="Luxury Hotel"
              width={800}
              height={550}
              className="rounded-2xl transition-all duration-700 group-hover:scale-105"
            />

            {/* Rating Badge */}
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              ★ 5-Star
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grand Royale Luxury Suites
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Discover absolute perfection in the heart of the city. Our luxury
              suites are crafted with premium interiors, warm lighting, and
              breathtaking skyline views. Enjoy 24/7 butler service, multi-cuisine
              dining, infinity pools, and world-class spa therapies — all designed
              to offer an unforgettable stay for global travellers, couples, and
              families seeking the highest standard of comfort and privacy.
            </p>
             <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Discover absolute perfection in the heart of the city. Our luxury
              suites are crafted with premium interiors, warm lighting, and
              breathtaking skyline views. Enjoy 24/7 butler service, multi-cuisine
              dining, infinity pools, and world-class spa therapies — all designed
              to offer an unforgettable stay for global travellers, couples, and
              families seeking the highest standard of comfort and privacy.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Discover absolute perfection in the heart of the city. Our luxury
              suites are crafted with premium interiors, warm lighting, and
              breathtaking skyline views.
            </p>

            {/* Key Amenities */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                Infinity Pool
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                Luxury Spa
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                24/7 Butler
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                Fine Dining
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-2xl font-bold text-purple-600">₹25,000</p>
              <button className="px-7 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-medium shadow-md hover:opacity-90 transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>

      </div>
                    </section>
                    
                    {/* 5 star hotel */}
                    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-7xl mx-auto">
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center mb-16"
                        >
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            Our 5-Star Hotel Collection
                          </h2>
                          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover the world&apos;s most exclusive luxury hotels and resorts, each offering unparalleled service and unforgettable experiences.
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
                                    src={hotel.image} // string URL or local import
                                    alt={hotel.name}
                                    fill                                        // fills the parent container
                                    className="object-cover object-center"     // cover behavior
                                    priority={false}                            // set true if critical for LCP
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
                                {/* Placeholder Image */}
                                <div className="bg-gradient-to-br from-purple-100 to-pink-200 w-full h-full flex items-center justify-center">
                                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
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
                                {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> */}
                                <Image
                                  src="/Webpimages/SexyWomen.webp"
                                  alt="Luxury Spa"
                                  fill
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                  className="rounded-2xl shadow-xl object-cover"
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
                    {/* hhhh */}
                    <section className="w-full py-16 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Discover the Ultimate Luxury Experience
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Experience a premium level of relaxation, comfort, and personalized care. 
            Our professional therapists ensure that each session is tailored to your needs, 
            offering deep relief, stress reduction, and complete mind-body rejuvenation.
          </p>
          <p className="text-lg opacity-90 leading-relaxed">
            With world-class ambiance, premium oils, and international techniques, 
            each therapy gives you a blissful escape from your daily routine. 
            Book your session today and feel the transformation.
          </p>

          <button className="mt-4 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="/Webpimages/SexyWomen.webp"
            alt="Luxury Spa"
            width={735}
            height={490}
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
    {/* content section */}
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-6">

        {/* Gradient Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Premium Spa & Wellness Experience
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Indulge in a world-class spa experience designed to relax your mind, body, 
          and soul. Enjoy soothing therapies, premium oils, and 5-star hospitality.
        </p>

        {/* bottom pink-purple line */}
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>

        {/* White Card */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-10 text-left space-y-4">

          {/* Badge */}
          <span className="inline-block px-4 py-2 text-sm font-semibold 
            text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg">
            5-Star Wellness
          </span>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-gray-900">
            Why Choose Our Luxury Spa?
          </h3>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed text-lg">
            We offer a unique combination of traditional healing and modern wellness therapies. 
            From deep tissue and aromatherapy to relaxing hot stone sessions, every experience is 
            tailored for complete relaxation. Our certified therapists, premium oils, and serene 
            ambiance ensure an unforgettable wellness journey.
          </p>

          {/* Gradient Tags */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium">
              Premium Oils
            </span>
            <span className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium">
              Aromatherapy
            </span>
            <span className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium">
              Luxury Rooms
            </span>
            <span className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium">
              Certified Experts
            </span>
          </div>

        </div>

        {/* CTA Button */}
        <button className="mt-8 px-8 py-4 font-semibold rounded-xl shadow-lg
          bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:opacity-90 transition">
          Book Now
        </button>

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
