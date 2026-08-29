// components/ModernBannerClient.jsx
"use client";


import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import React, { useState } from 'react';
import {  FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking, FaSpa, FaStar, FaCheck } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Heart, 
  Star, 
  Building 
} from 'lucide-react';
import { 
  Lock,   
  Clock, 
  Shield, 
  Home 
} from 'lucide-react';



export default function Delhiescorts({
  title = "Elite Charm & Premium Dating Partner With Aerocity escorts",
  subtitle = "Need someone to make your stress disappear as soon as someone enters your Aerocity suite? Select from our Aerocity escorts and have fun at your doorstep.",
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
            name: "JW Marriott, Aerocity",
            location: "Delhi, India ",
            rating: 5,
            description: "A well-dressed, energetic hotel wherein your guests act as a soothing, sophisticated atmosphere that transforms your hotel room into an exclusive getaway to the stress of the city.",
            image: "/Webpimages/lajpatnagahotel.webp",
            amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
            price: "₹25,000",
            features: ["Ocean View", "Private Beach", "Helipad"]
          },
          {
            id: 2,
            name: "Andaz Delhi Hyatt Concept",
            location: "Delhi, India",
            rating: 5,
            description: "Friendly to modern environment and artistic interiors. Your friend improves the evening with style, friendliness, and an intelligent discussion that is very easy to follow.",
            image: "/Webpimages/JwMarriott_CP.webp",
            amenities: ["Overwater Bungalows", "Coral Reef Access", "Underwater Restaurant", "Spa Sanctuary"],
            price: "₹45,000",
            features: ["Private Island", "Seaplane Transfer", "Glass Floor"]
          },
          {
            id: 3,
            name: "Pullman New Delhi Aerocity",
            location: "Delhi, India",
            rating: 5,
            description: "An elegant, global-style hotel that can suit customers with fine companionship ,with a seamles,s easy interaction.",
            image: "/Webpimages/jaypeeVasantAerocity.webp",
            amenities: ["Ski Valet", "Heated Indoor Pool", "Mountain Spa", "Fondue Restaurant"],
            price: "₹38,000",
            features: ["Private Ski Lift", "Fireplace Lounges", "Chocolate Atelier"]
          },
          {
            id: 4,
            name: "Novotel New Delhi Aerocity",
            location: "Delhi, India",
            rating: 5,
            description: "The place is alive, and it gets even more so when accompanied by an escort that is charming, light-humoured and full of comfortable energy.",
            image: "/Webpimages/holidayIn_CP.webp",
            amenities: ["Private Oasis Pool", "Camel Rides", "Desert Spa", "Starlight Dining"],
            price: "₹32,000",
            features: ["Falconry Experience", "Gold-plated Interiors", "Private Dune"]
          },
          {
            id: 5,
            name: "Holiday Inn, Aerocity",
            location: "Delhi, India",
            rating: 5,
            description: "One of the most tranquil spots that the clients would want to be in, trying to relax after flights or a hard day at work, having the chance to find pleasant company.",
            image: "/Webpimages/pullmanAerocity.webp",
            amenities: ["Cliffside Infinity Pool", "Jungle Spa", "Rice Terrace Dining", "Cultural Workshops"],
            price: "₹28,000",
            features: ["Volcano Views", "Sacred Spring", "Monkey Sanctuary"]
          },
          {
            id: 6,
            name: "Roseate House, Aerocity Zone",
            location: "Delhi, India",
            rating: 5,
            description: "An upscale, luxurious atmosphere that goes well with a friend who understands how to combine classiness with a feeling of comfort.",
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
      question: 'Are escorts allowed to visit Aerocity hotels without hassle?',
      answer: 'Yes. Escorts come in unannounced, like any other guest. Aerocity hotels are privacy-conscious, and our companions understand how to move about in a professional manner in order to allow zero attention or interruption.',
      category: 'account',
    },
    {
      id: 2,
      question: 'Do Aerocity escorts differ from Delhi escorts?',
      answer: 'The Aerocity escorts are chosen to be elegant, groomed, and socially mature which is befitting to the international traveller and visitors to corporations. They give it a peaceful and sophisticated air that suits this luxury belt.',
      category: 'payments',
    },
    {
      id: 3,
      question: 'Can we book an escort for a long layover?',
      answer: 'Absolutely. Most of the clients in transit employ escorts on a short-term basis. Friends will come fast, and they will provide a calming presence and assist you in relaxing before your new flight.',
      category: 'booking',
    },
    {
      id: 4,
      question: 'Are there escorts in escorting clients in Aerocity lounges or restaurants?',
      answer: 'Yes. Escorts are bearers of elegant manners and openness to conversation, and hence they are the best companions of fine meals, visit to the lounge, or socializing at night within Aerocity.',
      category: 'booking',
    },
    {
      id: 5,
      question: 'Does the service have a secure and confidential service to business travellers?',
      answer: 'Completely. Our level of confidentiality is high, we only need few details, and we make sure that escorts are will be at their lowest profile. No harm was done to your identity.',
      category: 'payments',
    },
    {
      id: 6,
      question: 'Is it possible to choose an escort depending on personality?',
      answer: 'Yes. You want an escort who is soft-spoken, cheerful, elegant, confident, or even mature, and we have a match to your emotional comfort.',
      category: 'services',
    },
    {
      id: 7,
      question: 'Are late night escorts possible in Aerocity?',
        answer: 'Yes. Aerocity runs 24/7 — and so do we. Escorts will be at your request any time you need to be warmly company.',
      category: 'account',
    },
    {
      id: 8,
      question: 'Why would Aerocity be the place of choice as an escort?',
      answer: 'Its five-star hotels, global atmosphere and privacy levels makes it ideal to have a discreet and high-end companionship. Escorts fit very well and customer feel easy and comfortable.',
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
const services = [
    {
      id: "01",
      title: "Airport and Travel Accompaniment Service",
      desc: "Ideal for travellers coming or leaving via IGI. Escorts are a way of relaxing and having a good talk with someone to relieve the burden of long travel and hotel stay stress.",
      tag: "Business Meets",
    },
    {
      id: "02",
      title: "Luxury Hotel Companionship",
      desc: "Perfect clients who like to spend quiet and comfy evenings in their suite. Escorts are warm, emotionally supportive, and sophisticated, helping you feel deeply relaxed.",
      tag: "Private Time",
    },
    {
      id: "03",
      title: "Lounge & Fine Dining Escorts",
      desc: "The already memorable restaurants of Aerocity are even more memorable with a friend who can bring class, social grace, and conversation that is both interesting and easygoing.",
      tag: "Parties & Events",
    },
    {
      id: "04",
      title: "Corporate Event Escorts",
      desc: "For summits, conferences, business meetings, and gatherings at hotels in Aerocity, our escorts will present themselves in a mature, socially competent manner.",
      tag: "Dinner Dates",
    },
    {
      id: "05",
      title: "Transit Client Companionship Short Stay",
      desc: "For clients on quick contact or a journey at a short distance, escorts can be a wonderful experience, good companionship, and soothing to the client who does not feel that there is haste.",
      tag: "Trips & Travel",
    },
    {
      id: "06",
      title: "High End Independent Escorts in Aerocity",
      desc8: "To people who like genuine chemistry and arousal of natural association, independent escorts provide character, coziness, and reality.",
      tag: "Independent",
    },
  ];

  // why choice us
  const services2 = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Complete Discretion for Hotel Visits",
    description: "Aerocity hotels are tough, yet our escorts deal with the entrance in a professional manner. They fit in perfectly like guests with zero attention and complete confidentiality.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Highly Verified, Selective Profiles",
    description: "All escorts are filtered in terms of personality, grooming, social etiquette and reliability. Aerocity captures a sophisticated audience and that is the quality we are displaying in our profiles.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Perfect for Business Travellers",
    description: "The majority of Aerocity clients are worn out after traveling or holding meetings. Our escorts provide a solid, non-invasive company, a good company, and a companionable company that cannot overwhelm them.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personalized Companionship Experience",
    description: "Escorts can be as talkative, silent, deep, funny, or mellow as you desire. It depends on your comfort; they just merge with it.",
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Elegant, Mature, Well-Groomed Escorts",
    description: "Look for polished looks, manners, clarity of communication, and emotional intelligence, all of which are appropriate to the exclusive hospitality culture of Aerocity.",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Trusted Across NCR Hotels & Business Hubs",
    description: "Delhi Girl is reputable among professional organizations, has authentic profiles, and provides escorts who meet the demands of high-end hotel settings.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  }
];
// Booking Step
const steps = [
  {
    number: "01",
    title: "Explore Profiles",
    description: "Filter through friends according to the looks, personality, and accessibility until you get the one that matches your vibe",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Share Your Hotel & Timing",
    description: "Include room information and your choice of a convenient and desirable visit.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Confirm Booking Privately",
    description: "You are given an inconspicuous confirmation of arrival. Nothing is complicated and secret.",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: "04",
    title: "Escort Comes in a professional manner",
    description: "Your escort is coming in as an ordinary guest, clean, serene, and unemotional, so that no one is about to notice him.",
    color: "from-amber-500 to-orange-500"
  },
  {
    number: "05",
    title: "Get Cozy and Natural Company",
    description: "You need to relax into the night with a companion who brings with him the reassuring presence, attractiveness, and closeness that fit into your comfort.",
    color: "from-red-500 to-rose-500"
  }
];
// benifits
const benefits = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Seamless Privacy Inside 5-Star Hotels",
    description: "The Aerocity hotels are maintained to international standards, and thus privacy becomes easy. Escorts come as ordinary visitors, blend in the space well, and establish a relaxed and seamless experience. You like to be with people without feeling concerned about being attended to, making noises, and making unnecessary checks; all this is naturally subtle.",
    features: ["International standards", "Zero attention drawn", "Relaxed experience"]
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Perfect for Business Travelers & Transit Stays",
    description: "Majority of the Aerocity customers come to the venue exhausted, overworked, or mentally exhausted. Escorts in this regard know how to beat the rhythm of airport schedules, late flights and protracted meetings. They provide a grounding company, considerate conversation and emotional comfort that makes you unwind and feel like being human once more.",
    features: ["Airport schedule aware", "Emotional comfort", "Non-invasive presence"]
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "High-Quality Escorts Matching Aerocity’s Vibe",
    description: "Aerocity appeals to sophisticated, global travellers - hence, escorts that are chosen in this area are laden with sophistication, grooming, etiquette, and smooth social appeal. They are very energetic and are befitting luxury hotels, upscale lounges, and business settings.",
    features: ["Luxury hotel appropriate", "Global traveler suitable", "Upscale lounge ready"]
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Round-the-Clock Availability for Flexible Needs",
    description: "You can arrive at midnight, get up early, or do something on the spur of the moment, but at any time, you can enjoy the company of escorts. The flexibility is at par with the travellers who are not bound to any specific schedules.",
    features: ["No schedule restrictions", "Instant bookings", "Last-minute arrangements"]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "A Calm, Safe, Controlled Environment",
    description: "Aerocity is one of the most secure hospitality clusters of NCR. All this, including the security and the ease of access, facilitates the comfort of companionship without any hitch. The clients are not afraid to invite escorts since the setting is organized, peaceful, and well-managed.",
    features: ["Enhanced security", "Easy access", "Comfort assured"]
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Premium Ambience That Enhances the Experience",
    description: "Five-star rooms, signature lounges, low lighting, soft music, and advanced interiors automatically boost the mood. Your friend follows in upon that mood and makes your evening something warm and cozy and delightfully luxurious.",
    features: ["Luxurious rooms", "Mood lighting", "Cozy atmosphere"]
  }
];
  return (
    <>
    <header className="relative overflow-hidden bg-gradient-to-r from-rose-50 via-white to-amber-50">
      <div className="absolute inset-0">
        <Image
          src={image}
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
              src="/Webpimages/18244.webp" // 👉 apni image yaha lagao
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
                            Your Premier Destination for High-Profile Call girls in Aerocity
                          </h2>
            {/* <h2 className="text-4xl md:text-5xl font-bold from-purple-600 to-pink-600 bg-clip-text font-serif mb-6">
              Experience Pure Luxury & Ultimate Relaxation
            </h2> */}

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Aerocity is the place where the luxury, travel and nightlife of Delhi converge with five-star hotels, nightclubs, business people, and men who like to relax in the company of refined people after long and hard working days. Delhi Girl introduces Call girls in Aerocity who go hand in hand with this setting: refined, dignified, adult, and of course, charismatic.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our Aerocity escorts enter your suite with an air of quiet assurance and that assuring quality which quiets the mind immediately. They know the rhythm of business travellers, the silence after meetings, the need to talk to real people, and the need for a company that is more welcoming than suffocating.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              You are looking to relax with someone, someone to take you to a lounge or someone who just gets you and does not need to push the mood on you; these Call girls in Aerocity fit well in any case. Delhi Girl makes each of the experiences in Aerocity premium, intimate, well-organized, and an emotional experience
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
                            Prime Areas We Cover for Escort service in Aerocity
                          </h2>
                          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Every hotel, lounge, luxurious suites, and private meeting areas around the Aerocity hospitality belt.
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
                    
                    
                    {/* 5 star hotel */}
                    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-7xl mx-auto">
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center mb-16"
                        >
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            5-Star Hotels for Escort service in Aerocity
                          </h2>
                          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Higher levels of companionship are offered with the privacy of leading luxury hotels at IGI Airport.
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
                                  src="/Webpimages/ph_ miller_millka.webp"
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
              Services in Aerocity
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300/80">
            Designed to appeal to travellers, business visitors, luxury staycationers,and men who want to have a smooth companion.
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
    {/* why choice us */}
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Delhi Girl for Escort Service in Aerocity
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          An exclusive, high-quality, and secret service tailored to the needs of high-profile travellers and business people.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services2.map((service, index) => (
          <div 
            key={index}
            className="group p-6 rounded-2xl border border-gray-200 hover:border-gray-300 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`inline-flex p-3 rounded-xl ${service.bgColor} ${service.color} mb-4`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                Learn more →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* Booking Step */}
     <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Book Our Call Girls in Aerocity
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          An impeccable booking experience among busy people and travellers.
        </p>
      </div>
      
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 -translate-y-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Number Circle */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              
              {/* Step Content */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 text-center w-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden my-4">
                  <div className="w-8 h-8 mx-auto rotate-90 text-gray-300">
                    ↓
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8 md:p-10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready for an Exceptional Experience?
          </h3>
          <p className="text-gray-300 mb-8">
            Book your premium Aerocity escort service with complete discretion 
            and professional handling. Perfect for business travelers, executives, 
            and discerning visitors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              Browse Profiles
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* benifits */}
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 rounded-3xl p-6 md:p-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">
          <Star className="w-4 h-4 mr-2" />
          Premium Benefits
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Benefits of Booking Escort Services in Aerocity
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Benefits of Booking Escort Services in Aerocity
By selecting Aerocity to spend time with, you are not only selecting a place, but you are also selecting an experience that is being molded by luxury, privacy, and emotional comfort. The development of this section of the Delhi NCR is aimed at travellers, executives, and men looking for a relaxed company after a hard day, lateness, or consecutive meetings.

Delhi Girl takes that ease a notch higher by having friends who will make you feel comfortable, close, and a soothing presence that moves your stay to a whole new level.

        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <div className="text-blue-600">
                  {benefit.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Book the Top-Rated Professional for Escort Services in Aerocity
            </h3>
            <p className="text-gray-600">
             Share beautiful company that is warm, conversational, charming and feels comfortable. Be it a business traveller, a business guest, or a person who just wants to relax in his or her luxury suite, Delhi Girl offers an experience that has been customised to his or her mood and comfort.
            </p>
          </div>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 whitespace-nowrap">
            Book Now
          </button>
        </div>
      </div>
    </section>
                    

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
            src="/Webpimages/Model2.webp"
            alt="Luxury Spa"
            width={736}
            height={412}
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
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
