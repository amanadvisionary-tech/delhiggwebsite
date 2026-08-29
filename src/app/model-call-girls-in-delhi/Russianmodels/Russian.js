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


export default function Russianmodels() {
  {/* staff showcase */}
    const [activeCategory, setActiveCategory] = useState('Russianmodels');
    const categories = [
        { id: 'Russian Models', name: 'Russianmodels' },
        { id: 'foreign', name: 'Foreign Girls' },
      { id: 'all', name: 'All Staff' },
      { id: 'celebrity', name: 'Celebrity' },
      { id: 'college', name: 'College Girls' },     
      { id: 'highprofile', name: 'High Profile' },
    ];
    const staffMembers = [
    {
      id: 1,
      name: 'Sophia Martinez',
      role: 'Senior Airhostess',
      category: 'Independentprofile',
      description: '5+ years experience with international airlines. Fluent in 4 languages.',
      image: '/Webpimages/download (30).webp', // Placeholder image path
    },
    {
      id: 2,
      name: 'Alex Johnson',
      role: 'TV Personality',
      category: 'Independentprofile',
      description: 'Award-winning host of "Nightlife" show. Known for vibrant personality.',
      image: '/Webpimages/download (32).webp', // Placeholder image pathss
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
      category: 'Russianmodels',
      description: 'Fortune 500 company board member. MBA from Harvard Business School.',
      image: '/Webpimages/49.webp',
    },
    {
      id: 6,
      name: 'Mia Thompson',
      role: 'First Class Hostess',
      category: 'Russianmodels',
      description: 'Specialized in luxury travel experience. Trained in hospitality management.',
      image: '/Webpimages/smiling.webp', // Placeholder image path
    },
    {
      id: 7,
      name: 'Chloe Williams',
      role: 'Film Actress',
      category: 'Russianmodels',
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

              const profiles = [
  { image: '/Webpimages/modelg.webp' },
  { image: '/Webpimages/18244.webp' },
  { image: '/Webpimages/172420-8871.webp' },
  { image: '/Webpimages/Model2.webp' },
  { image: '/Webpimages/7168.webp' },
  { image: '/Webpimages/49.webp' },
  { image: '/Webpimages/Model21.webp' },

  { image: '/Webpimages/modelg.webp' },
  { image: '/Webpimages/18244.webp' },
  { image: '/Webpimages/172420-8871.webp' },
  { image: '/Webpimages/Model2.webp' },
  { image: '/Webpimages/7168.webp' },
  { image: '/Webpimages/49.webp' },
  { image: '/Webpimages/Model21.webp' },
]

const features = [
  { id: 1, title: 'Expertise', desc: 'We leverage over 15 years of experience to deliver high-quality, tailored solutions for every client.', color: 'from-yellow-100 to-yellow-50', dot: 'bg-yellow-400' },
  { id: 2, title: 'Custom Solutions', desc: 'Each solution is personalized, ensuring your business gets the exact tools it needs to succeed.', color: 'from-violet-100 to-violet-50', dot: 'bg-violet-500' },
  { id: 3, title: 'Customer-Focused', desc: 'We prioritize your satisfaction and aim to exceed your expectations in every project we take on.', color: 'from-pink-100 to-pink-50', dot: 'bg-pink-400' },
  { id: 4, title: 'Innovation', desc: 'We stay ahead of the curve, implementing the latest technologies to keep your business on the cutting edge.', color: 'from-sky-100 to-sky-50', dot: 'bg-sky-500' },
  { id: 5, title: 'Flexibility', desc: 'We understand that businesses change, and we offer solutions that can adapt to your evolving needs.', color: 'from-green-100 to-green-50', dot: 'bg-green-400' },
  { id: 6, title: 'Quality Commitment', desc: 'We are committed to delivering solutions that meet the highest standards of quality, ensuring long-term success.', color: 'from-rose-100 to-rose-50', dot: 'bg-rose-400' },
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

const locations = [
{
title: "Escort Services in Aerocity",
subtitle: "Premium hotel bookings near the airport",
icon: <FaHotel className="text-3xl" />,
points: ["Roseate", "Pullman", "JW Marriott", "Lemon Tree", "Novotel"],
},
{
title: "Escort Services in Connaught Place (CP)",
subtitle: "Central, classy & close to the best nightlife",
icon: <FaBuilding className="text-3xl" />,
points: ["The Park", "Le Meridien"],
},
{
title: "Escort Services in NFC",
subtitle: "Luxury stays at The Suryaa and nearby hotels",
icon: <FaHotel className="text-3xl" />,
points: ["The Suryaa Hotel"],
},
{
title: "Escort Services in Gurgaon",
subtitle: "Corporate hubs & upscale hotel options",
icon: <FaBuilding className="text-3xl" />,
points: ["Gurgaon luxury hotels & business districts"],
},
{
title: "Private Home Escort Services in Delhi NCR",
subtitle: "Discreet, secure & verified companions at your doorstep",
icon: <FaHome className="text-3xl" />,
points: ["Safe home visits", "Verified profiles", "Discreet arrival & departure"],
},
];
  return (
    <>
       
    {/* banner */}
               <header className="relative w-full h-screen min-h-[560px] flex items-center">
      {/* Background image - place your image at /public/Webpimages/hero-banner.webp */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Webpimages/fashion-portrait-beautiful-blonde-model.webp"
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
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
            >
              Variety of <span className="text-pink-500">Escort Services</span>
              <br /> in Delhi for <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Your</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-2xl text-gray-600"
            >
              Trusted, discreet and professional companionship for events, travel, and curated experiences across Delhi. Book verified profiles for safe and tailored services.
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
                            Variety of{" "}
                            <span className="relative">
                              <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                                Escort Services in Delhi for Your
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
                              and curated experiences across Delhi.{" "}
                              
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
                    Our Exceptional Team
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
            {/* /// */}
                <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column - Text */}
        <div className="lg:col-span-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Delhi Escorts Agency - <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">No Compromise</span> on Quality
            <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600">Escorts Service</span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-xl">
            Welcome to <span className="font-semibold text-purple-600">Delhi Body Spa</span>, where we offer a range of luxury spa treatments including female to male spa, couple massages, and much more. Escape the hustle of Delhi and immerse yourself in rejuvenating treatments tailored to your needs.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700 max-w-md">
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
          </ul>

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
              <div className="w-72 h-48 relative rounded-lg overflow-hidden">
                <Image src="/Webpimages/model1.webp" alt="top" layout="fill" objectFit="cover" />
              </div>
            </div>

            {/* Bottom image - rotated opposite */}
            <div className="absolute bottom-0 left-0 transform -rotate-3 shadow-2xl rounded-xl border-8 border-white bg-white">
              <div className="w-80 h-56 relative rounded-lg overflow-hidden">
                <Image src="/Webpimages/modelg.webp" alt="bottom" layout="fill" objectFit="cover" />
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
            <section className="min-h-screen flex items-center justify-center bg-white p-8">
<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/* Left gradient circle content */}
<div className="lg:col-span-5 relative">
<div className="absolute -left-24 -top-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 shadow-lg transform -translate-x-6 -translate-y-6 lg:block hidden"></div>


<div className="relative z-10 p-10 lg:py-24 lg:px-12 text-white">
<h3 className="text-4xl font-semibold">Why Choose Us</h3>
<div className="w-16 h-1 bg-white rounded mt-4 mb-6"></div>
<p className="text-white/90 leading-relaxed">
Insert your desired text here. This is a simple text. 
A brief introduction about your cybersecurity company. Highlight your key
strengths and build trust with short, confident copy.
</p>
</div>


{/* bottom-right small curved gradient for logo */}
<div className="absolute right-0 bottom-0 w-40 h-28 rounded-tl-2xl bg-gradient-to-br from-purple-700 via-pink-500 to-rose-400 flex items-center justify-center text-white p-3 shadow-md">
<div className="flex items-center gap-3">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1L3 5v6c0 5 4 9 9 11 5-2 9-6 9-11V5l-9-4z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 12.5l1.75 1.75L15.5 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<div className="text-sm font-medium">YOUR<br/>LOGO HERE</div>
</div>
</div>
</div>


{/* Right cards */}
<div className="lg:col-span-7">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{/* Card 1 */}
<div className="relative bg-white rounded-2xl p-6 shadow-md overflow-hidden">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-100">
<svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-pink-500">
<path d="M12 2l7 3v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
<div>
<h4 className="font-semibold text-slate-800">Title Placeholder</h4>
<p className="mt-1 text-sm text-slate-500">It is our dedication to quality, professionalism, and unmatched privacy that makes Delhi Scarlet our clients‘ first choice.</p>
</div>
</div>
</div>


{/* Card 2 - accent gradient */}
<div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 text-white rounded-2xl p-6 shadow-md overflow-hidden">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center border border-white/20">
<svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
<rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
<circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
</svg>
</div>
<div>
<h4 className="font-semibold text-white">Title Placeholder</h4>
<p className="mt-1 text-sm text-white/90">Our Delhi escorts are scrutinised to be great-looking and have sexy bodies to make you feel on top of the world. Our independent Delhi escorts work in their own way—from the girlfriend experience beyond expectations but with a transactional twist.</p>
</div>
</div>
</div>

{/* Card 3 */}
<div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 text-white rounded-2xl p-6 shadow-md overflow-hidden">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center border border-white/20">
<svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
<rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
<circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
</svg>
</div>
<div>
<h4 className="font-semibold text-white">Title Placeholder</h4>
<p className="mt-1 text-sm text-white/90">They know how to engage, entertain, and beguile with both beauty and brains.

When you are with the Delhi Independent Escorts, you not only have a date, but you also get a memorable connection. Our clients continue to select us for our expectations in cleanliness, timing, and emotional intelligence.</p>
</div>
</div>
</div>




{/* Card 4 */}
<div className="relative bg-white rounded-2xl p-6 shadow-md overflow-hidden">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-100">
<svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-pink-500">
<path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8 12 2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
<div>
<h4 className="font-semibold text-slate-800">Title Placeholder</h4>
<p className="mt-1 text-sm text-slate-500">Our high-class Delhi female escorts are good in conversation and dressed up well according to client requirements. Be it a hotel room all night or a high-class party, our Delhi Escort Service assures that your need is fulfilled with our hot Delhi call girls.</p>
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
                {/* Location */}
            <section className="py-16 bg-gradient-to-r from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full shadow-sm">
            <HiLocationMarker className="text-2xl" />
            <span className="text-sm font-semibold">Where You Can Book</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                     Our Service Areas & Premium Locations
                  </h2>

          

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our call girl services in Delhi are available across multiple prime locations in Delhi NCR — from Aerocity hotel luxury to discreet home visits. Choose your preferred area and book a verified companion with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-amber-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  {loc.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{loc.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{loc.subtitle}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                {loc.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 text-amber-500">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-amber-700 font-medium">Available 24/7</span>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm shadow hover:bg-amber-700 transition"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Prefer a custom request? We also handle special bookings for events, corporate visits, and long stays. Our team ensures verified profiles and discreet arrangements for all service types.
          </p>
        </div>
      </div>
    </section>
    {/* Location */}
                {/* why choose us section */}
            <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Why <span className="italic text-indigo-600">Choose</span> Seven Figure Agency?</h2>
          <p className="mt-3 text-gray-500">Here’s why businesses choose us to handle their digital needs:</p>
        </div>

        <div className="relative">
          {/* Vertical dashed center line for desktop */}
          <div className="hidden md:block absolute inset-x-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent pointer-events-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10">
            {features.map((f, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={f.id} className={`relative md:py-6 md:pr-6 ${isLeft ? 'md:pl-0 md:pr-10' : 'md:pl-10 md:pr-0'}`}>
                  {/* connector dot on center */}
                  <div className={`hidden md:block absolute top-6 -right-6 md:translate-x-1/2 ${isLeft ? 'md:-right-6' : 'md:-left-6'} z-10`}>
                    <div className={`h-4 w-4 rounded-full ${f.dot} ring-4 ring-white shadow-md`} />
                  </div>

                  <div className={`relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-50`}>
                    <div className={`p-6 md:p-8`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center ${f.dot} text-white font-bold`}> 
                          {/* small icon - use first letter */}
                          <span className="text-lg">{f.title.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                          <p className="mt-2 text-sm text-gray-500 max-w-xl">{f.desc}</p>
                        </div>
                      </div>
                    </div>
                    {/* pastel background pill bottom-left to mimic image */}
                    <div className={`absolute inset-0 -z-10 rounded-xl`} style={{ background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.03) 100%)` }} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dotted SVG connectors (only on md+) */}
          <svg className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden>
            {features.map((_, i) => {
              // draw curved connectors between pairs: index 0 connects to 1, 1->2 visually etc.
              // We'll draw short dotted arcs near each pair using path commands — approximate positions.
              const y = 80 + i * 110
              const x1 = 0
              return (
                <path key={i} d={`M50 ${y} C250 ${y+10}, 350 ${y+10}, 550 ${y}`} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="6 6" fill="none" />
              )
            })}
          </svg>
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          /* add spacing to left column cards so they appear staggered */
          .grid > div:nth-child(odd) { transform: translateX(-20px); }
          .grid > div:nth-child(even) { transform: translateX(20px); }
        }
      `}</style>
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