'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import { FaSwimmingPool, FaWifi, FaUtensils, FaConciergeBell, FaParking } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { Sparkles, Camera, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Users } from "lucide-react";


export default function Home({
  Webpimages = ['/Webpimages/bannermodel.webp'], // keep single image or pass swiper Webpimages externally
  imageUrl = '/Webpimages/banner-2.webp',
  title = 'Affordable call girl Services',
  subtitle = '• Pay after Meeting, NO Advance Payment',
  cta = 'Book Now',
  ctaHref = 'https://api.whatsapp.com/send?phone=918826482370',
}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  {/* staff showcase */ }
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
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
      description: 'Our airhostess call girls are elegant, well-spoken, and professionally trained. They know how to make every moment comfortable and classy. If you are looking for a premium airhostess call girls in Delhi for private meetings, dinners, or hotel stays, these girls offer a calm, mature, and luxurious experience with complete privacy.',
      image: '/Webpimages/follow for more.webp', // Placeholder image path
    },
    {
      id: 2,
      name: 'Alex Johnson',
      role: 'TV Personality',
      category: 'celebrity',
      description: 'Alex Johnson is a confident and stylish TV personality with a charming presence. She knows how to connect easily and make every moment enjoyable. If you are looking for a celebrity call Girls in Delhi with class, confidence, and elegance, Alex offers premium companionship for parties, events, and private meetings with full discretion.',
      image: '/Webpimages/downloadd6.webp', // Placeholder image pathss
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Marketing Student',
      category: 'college',
      description: 'Emma Wilson is a smart and confident marketing student with a friendly and positive nature. She is well-spoken and easy to connect with, making her a great choice for relaxed companionship. If you are looking for a Delhi college girl with a modern mindset and classy presence, Emma offers a comfortable and discreet experience.',
      image: '/Webpimages/downloadd5.webp', // Placeholder image path
    },
    {
      id: 4,
      name: 'Isabella Rossi',
      role: 'International Model',
      category: 'foreign',
      description: 'Isabella Rossi is a stunning international model with a confident personality and elegant style. She carries herself with grace and knows how to make every meeting special. If you are looking for a foreign call Girls in Delhi with premium looks and classy companionship, Isabella offers a luxurious and discreet experience.',
      image: '/Webpimages/celebrityspastaff.webp', // Placeholder image path
    },
    {
      id: 5,
      name: 'Olivia Chen',
      role: 'Corporate Executive',
      category: 'highprofile',
      description: 'Olivia Chen is a smart and confident corporate executive with a polished personality. She understands professionalism, good conversation, and classy company. If you are looking for a high profile call Girls in Delhi for business dinners, meetings, or private time, Olivia offers premium companionship with complete discretion and comfort.',
      image: '/Webpimages/Evie Lee Mikomin.webp',
    },
    {
      id: 6,
      name: 'Mia Thompson',
      role: 'First Class Hostess',
      category: 'airhostess',
      description: 'Mia Thompson is a well-groomed and elegant first class hostess with a calm and confident personality. She knows how to make people feel comfortable with her polite nature and smooth conversation. If you are looking for an airhostess call Girls in Delhi who offers premium companionship with class and discretion, Mia is a perfect choice.',
      image: '/Webpimages/downloadee.webp', // Placeholder image path
    },
    {
      id: 7,
      name: 'Chloe Williams',
      role: 'Film Actress',
      category: 'celebrity',
      description: 'Chloe Williams is a graceful film actress with a strong screen presence and elegant personality. She is confident, well-mannered, and knows how to carry herself with style. If you are looking for a celebrity call Girls in Delhi who offers premium companionship for events, parties, or private meetings, Chloe brings class, charm, and complete discretion.',
      image: '/Webpimages/413965.webp', // Placeholder image path
    },
    {
      id: 8,
      name: 'Ava Garcia',
      role: 'Engineering Student',
      category: 'college',
      description: 'Ava Garcia is a smart and confident engineering student with a friendly and calm personality. She is well-spoken and easy to connect with. If you are looking for a college girl call Girls in Delhi who offers comfortable companionship with privacy and respect, Ava is a great choice.',
      image: '/Webpimages/American full videos.webp', // Placeholder image path
    },
  ];
  const filteredStaff = activeCategory === 'all'
    ? staffMembers
    : staffMembers.filter(member => member.category === activeCategory);
  {/* End Staff Showcase */ }
  {/* pricing */ }
  const [selectedDuration, setSelectedDuration] = useState('session'); // 'session', 'two', 'night'

  const pricingPlans = [
    {
      id: 'spa',
      title: 'Spa Staff',
      icon: <FaSpa className="text-pink-500" />,
      description: 'Professional spa therapists for ultimate relaxation',
      color: 'from-pink-500 to-rose-500',
      pricing: {
        session: '5k',
        two: '10k',
        night: '15k'
      },
      features: ['Delhi Local Girls', 'Complete satisfaction', 'Girlfriend Experience', 'Full Body To Body Nuru massage - Nude']
    },
    {
      id: 'college',
      title: 'College Girls',
      icon: <FaGraduationCap className="text-blue-500" />,
      description: 'Energetic and vibrant companions',
      color: 'from-blue-500 to-indigo-600',
      pricing: {
        session: '10k',
        two: '20k',
        night: '30k'
      },
      features: ['5 Star Hotel', 'Girlfriend Experience', 'Deep French Kiss', 'Blow Job (BJ)']
    },
    {
      id: 'airhostess',
      title: 'Airhostess',
      icon: <FaPlane className="text-teal-500" />,
      description: 'Professional and sophisticated companions',
      color: 'from-teal-500 to-emerald-600',
      pricing: {
        session: '15k',
        two: '30k',
        night: '45k'
      },
      features: ['5 Star Hotel', 'High Profile Airhostess', 'Girlfriend Experience', 'Deep French Kiss']
    },
    {
      id: 'foreigner',
      title: 'Foreigner',
      icon: <FaGlobeAsia className="text-amber-500" />,
      description: 'International companions for cultural exchange',
      color: 'from-amber-500 to-orange-500',
      pricing: {
        session: '20k',
        two: '40k',
        night: '60k'
      },
      features: ['5 Star Hotel', 'Foreigner Staff', 'Girlfriend Experience', 'Deep French Kiss']
    },
    {
      id: 'celebrity',
      title: 'Celebrity',
      icon: <FaCrown className="text-purple-500" />,
      description: 'Exclusive high-profile companions',
      color: 'from-purple-600 to-fuchsia-600',
      pricing: {
        session: '30k',
        two: '60k',
        night: '90k'
      },
      features: ['5 Star Hotel', 'Insta Model', 'Girlfriend Experience', 'Celebrity Profile']
    }
  ];
  {/* end pricing */ }
  // 5 start hotel 
  const [activeHotel, setActiveHotel] = useState(null);

  const hotels = [
    {
      id: 1,
      name: "The Leela Palace, Delhi",
      location: "Delhi, India",
      rating: 5,
      description: "The Leela Palace with our entourage, where we make your night hot with classy seduction, friendly vibe, and luxury intimate gay company.",
      image: "/Webpimages/lajpatnagahotel.webp",
      amenities: ["Infinity Pool", "Michelin-star Restaurant", "Luxury Spa", "24/7 Butler Service"],
      price: "₹25,000",
      features: ["Ocean View", "Private Beach", "Helipad"]
    },
    {
      id: 2,
      name: "The Imperial, Delhi",
      location: "Delhi, India",
      rating: 5,
      description: "A legendary dreamy den in which your friend transforms the atmosphere into a seductive memorable experience that would satisfy your most secret desires.",
      image: "/Webpimages/JwMarriott_CP.webp",
      amenities: ["Overwater Bungalows", "Coral Reef Access", "Underwater Restaurant", "Spa Sanctuary"],
      price: "₹45,000",
      features: ["Private Island", "Seaplane Transfer", "Glass Floor"]
    },
    {
      id: 3,
      name: "Taj Palace, Delhi",
      location: "Delhi, India",
      rating: 5,
      description: "A grand hotel where beauty meets and savors in the presence of your companion aspires a moment of warmth, enticement, and unruffled delight.",
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
      question: 'Are airhostess call girls in Delhi listed on Delhi Girl verified and trustworthy?',
      answer: 'Yes, Delhi Girl verifies every airhostess call girls in Delhi through proper checks. These Delhi call girls are professionally managed, well-mannered, and focused on providing safe, comfortable, and premium companionship with complete client satisfaction.',
      category: 'account',
    },
    {
      id: 2,
      question: 'Can I book an airhostess Delhi call girls for hotels or private locations?',
      answer: 'Yes, airhostess Delhi call girls from Delhi Girl are available for hotels and private locations. Bookings are handled smoothly with proper coordination, ensuring privacy, comfort, and a stress-free experience for clients.',
      category: 'payments',
    },
    {
      id: 3,
      question: 'What makes celebrity call girls in Delhi from Delhi Girl special and premium?',
      answer: 'Celebrity call girls in Delhi offer glamorous looks, confident personalities, and high-profile companionship. Delhi Girl carefully manages these profiles to deliver premium experiences with class, elegance, and complete discretion.',
      category: 'booking',
    },
    {
      id: 4,
      question: 'Can celebrity Delhi girls attend parties, events, or private meetings?',
      answer: 'Yes, celebrity Delhi girls are available for parties, social events, and private meetings. Delhi Girl ensures proper coordination so clients enjoy smooth companionship without stress or unnecessary complications.',
      category: 'booking',
    },
    {
      id: 5,
      question: 'Are Delhi college girls on Delhi Girl genuine and properly verified?',
      answer: 'Yes, every Delhi college girls profile listed on Delhi Girl is verified for safety and authenticity. These Delhi college girls are managed professionally to ensure reliable and comfortable companionship.',
      category: 'payments',
    },
    {
      id: 6,
      question: 'Can I book a Delhi college girls for short duration meetings?',
      answer: 'Yes, Delhi Girl offers flexible booking options for Delhi college girl services. You can choose short or extended time slots based on your comfort and requirement.',
      category: 'services',
    },
    {
      id: 7,
      question: 'Are foreign call girls in Delhi available through Delhi Girl brand?',
      answer: 'Yes, Delhi Girl offers verified foreign call girls in Delhi for clients seeking premium and international-style companionship with professional service standards.',
      category: 'account',
    },
    {
      id: 8,
      question: 'What kind of experience do foreign Delhi girls usually provide?',
      answer: 'Foreign Delhi girls provide classy, modern, and premium companionship. Their confident personalities and international style make them suitable for clients wanting a luxury call girl in Delhi.',
      category: 'services',
    },
    {
      id: 9,
      question: 'Who should book high profile call girls in Delhi from Delhi Girl?',
      answer: 'High profile call girls in Delhi are ideal for businessmen, corporate clients, and VIP guests seeking mature, professional, and premium companionship through Delhi Girl.',
      category: 'account',
    },
    {
      id: 10,
      question: 'Are high profile Delhi girls trained and experienced companions?',
      answer: 'Yes, high profile Delhi girls are well-trained, confident, and experienced. Delhi Girl ensures they meet premium standards of behavior, communication, and professionalism.',
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
  // Sample content data
  const features = [
    {
      id: 1,
      title: "BOOKING 24*7 OPEN",
      description: "Anxiety-free company of the daring male who needs a contact.",
      icon: "📅"
    },
    {
      id: 2,
      title: "No Advance payment",
      description: "High-end friendship with people that suit your mood and craziness.",
      icon: "💸"
    },
    {
      id: 3,
      title: "5 Star Hotels",
      description: "Complete privacy and reliable call girling services throughout the NCR of Delhi.",
      icon: "🔒"
    },
    {
      id: 4,
      title: "100% Satisfaction",
      description: "Pleasure, passion, chemistry and comfort are some of the elite experiences designed.",
      icon: "🔞"
    }
  ];


  const categories3 = [
    { id: 'all', name: 'All Articles' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'culture', name: 'Culture' },
  ];

  const articles = [
    {
      id: 1,
      title: "Delhi Street Style Revolution",
      description: "Delhi's fashion scene is undergoing a remarkable transformation. Young women across the capital are redefining street style with a blend of traditional and contemporary elements. From Chandni Chowk's vibrant markets to the chic boutiques of South Delhi, a new fashion movement is emerging that celebrates individuality while honoring cultural heritage.",
      category: 'fashion',
      readTime: '8 min read',
      image: '/delhi-fashion.webp'
    },
    {
      id: 2,
      title: "Monsoon Skincare Secrets",
      description: "The humid Delhi monsoon brings unique challenges for skincare. Discover how to maintain glowing skin during the rainy season with these dermatologist-approved tips. Learn about the best ingredients to combat humidity-induced breakouts and how to adjust your routine for maximum effectiveness during Delhi's wettest months.",
      category: 'beauty',
      readTime: '6 min read',
      image: '/monsoon-skincare.webp'
    },
    {
      id: 3,
      title: "Empowering Women in Delhi",
      description: "Delhi is witnessing a surge in women-led initiatives that are transforming communities. From tech startups in Cyber Hub to social enterprises in Old Delhi, women are breaking barriers and creating impactful change. This article explores the inspiring stories of 5 Delhi women who are reshaping their industries and paving the way for future generations.",
      category: 'lifestyle',
      readTime: '10 min read',
      image: '/women-empowerment.webp'
    },
    {
      id: 4,
      title: "Festival Fashion Guide",
      description: "As Delhi prepares for the festive season, discover how to create stunning looks that blend tradition with modern flair. This comprehensive guide covers everything from selecting the perfect fabrics for Delhi's climate to accessorizing your outfit with locally-made jewelry. We've curated looks for every occasion, whether you're attending a Diwali gathering or a wedding celebration.",
      category: 'fashion',
      readTime: '12 min read',
      image: '/festival-fashion.webp'
    },
  ];

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(article => article.category === activeCategory);
  {/* End Sample content data */ }
  const cities = [
    { name: 'Noida', img: '/Webpimages/hotel3.webp', href: '/call-girls-in-noida' },
    { name: 'Gurgaon', img: '/Webpimages/lajpatnagahotel.webp', href: '/call-girls-in-gurgaon' },
    { name: 'Faridabaad', img: '/Webpimages/RoseateHouse.webp', href: '/escort-service-in-delhi' },
    { name: 'Mahipalpur', img: '/Webpimages/paschimvihar.webp', href: '/call-girls-in-mahipalpur' },
    { name: 'Aerocity', img: '/Webpimages/JwMarriott_CP.webp', href: '/aerocity-escorts' },
    { name: 'Connaught Place', img: '/Webpimages/connaught-place-delhi.webp', href: '/call-girls-in-connaught-place' },
    { name: 'New Friends Colony', img: '/Webpimages/holidayIn_CP.webp', href: '/escort-service-in-delhi' },
    { name: 'Dwarka', img: '/Webpimages/tajmahalhotel_lajpatnagar.webp', href: '/call-girls-in-dwarka' },
    { name: 'Paharganj', img: '/Webpimages/paschimvihar.webp', href: '/escort-service-in-delhi' },
    { name: 'Vasant kunj', img: '/Webpimages/hotel2.webp', href: '/escort-service-in-delhi' },
    { name: 'Lajpat Nagar ', img: '/Webpimages/pullmanAerocity.webp', href: '/call-girls-in-lajpat-nagar' },
    { name: 'Kalkaji', img: '/Webpimages/jwmarriott.webp', href: '/escort-service-in-delhi' },
  ]
  const profiles = [
    { image: '/Webpimages/call-girl-4.webp', name: 'Diya', age: 24, tag: 'Dinner • Hotel Stays' },
    { image: '/Webpimages/download (7).webp', name: 'Meera', age: 26, tag: 'Events • Travel' },
    { image: '/Webpimages/call-girl-2.webp', name: 'Tanya', age: 23, tag: 'Nightlife • Dining' },
    { image: '/Webpimages/download (14).webp', name: 'Pooja', age: 25, tag: 'Hotel Visits • Parties' },
    { image: '/Webpimages/modelg.webp', name: 'Riya', age: 24, tag: 'Corporate Events • Dinner' },
    { image: '/Webpimages/call-girl-12.webp', name: 'Simran', age: 26, tag: 'Travel • Overnight Stays' },
    { image: '/Webpimages/call-girl-1.webp', name: 'Ananya', age: 23, tag: 'Parties • Dining' },
    { image: '/Webpimages/7168.webp', name: 'Neha', age: 24, tag: 'Dinner Dates • Travel' },
    { image: '/Webpimages/49.webp', name: 'Kavya', age: 27, tag: 'Hotel Stays • Events' },
  ]
  const items = [
    {
      title: 'Adult Companion Only for 18+',
      // subtitle: 'Only for 18+',
      src: '/Webpimages/18+.webp',
    },
    {
      title: 'Anal Sex on Special Deman',
      // subtitle: 'Special Deman',
      src: '/Webpimages/anal.webp',
    },
    {
      title: 'Kama-Sutra Sex Pose',
      // subtitle: 'Sex Pose',
      src: '/Webpimages/kamasutra.webp',
    },
    {
      title: 'Without Condom Sucking',
      // subtitle: 'Sucking',
      src: '/Webpimages/SUCKING.webp',
    },
    {
      title: 'Enjoy All Sexual Activity',
      // subtitle: 'Sexual Activity',
      src: '/Webpimages/anal.webp',
    },
    {
      title: 'Get Best Sensual Encounter in Bed',
      subtitle: 'Sensual Encounter in Bed',
      src: '/Webpimages/bedposition.webp',
    }
  ]

  const locations = [
    "Call Girl in CP",
    "Call girl in dwaka",
    "Call girl in janakpuri",
    "Call girl in ghaziabad",
    "Call girl in Paharganj",
    "Call girl in Rohini",
    "Call girl in Noida",
    "Call girl in Lajpat Nagar",
    "Call girl in Aerocity",
    "Call girl in Gurgaon",
    "Call girl in Mahipalpur",
    "Call girl in Vasant Kunj",
    "Call girl in Karol Bagh",
    "Call girl in Saket",
    "Call girl in Hauz Khas",
    "Call girl in Greater Kailash",
    "Call girl in Dilshad Garden",
    "Call girl in Dwarka",
    "Call girl in East Of Kailash",
    "Call girl in Nehru Place",
  ];

  const getLocationHref = (label) => {
    const l = label.toLowerCase();
    if (l.includes('cp')) return '/call-girls-in-connaught-place';
    if (l.includes('noida')) return '/call-girls-in-noida';
    if (l.includes('aerocity')) return '/aerocity-escorts';
    if (l.includes('gurgaon')) return '/call-girls-in-gurgaon';
    if (l.includes('mahipalpur')) return '/call-girls-in-mahipalpur';
    if (l.includes('dwaka') || l.includes('dwarka')) return '/call-girls-in-dwarka';
    if (l.includes('lajpat')) return '/call-girls-in-lajpat-nagar';
    return '/escort-service-in-delhi';
  };
  return (
    <>
      {/* FAQPage structured data — static, hardcoded to match the 10 visible FAQ items exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are airhostess call girls in Delhi listed on Delhi Girl verified and trustworthy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Delhi Girl verifies every airhostess call girls in Delhi through proper checks. These Delhi call girls are professionally managed, well-mannered, and focused on providing safe, comfortable, and premium companionship with complete client satisfaction.",
                },
              },
              {
                "@type": "Question",
                name: "Can I book an airhostess Delhi call girls for hotels or private locations?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, airhostess Delhi call girls from Delhi Girl are available for hotels and private locations. Bookings are handled smoothly with proper coordination, ensuring privacy, comfort, and a stress-free experience for clients.",
                },
              },
              {
                "@type": "Question",
                name: "What makes celebrity call girls in Delhi from Delhi Girl special and premium?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Celebrity call girls in Delhi offer glamorous looks, confident personalities, and high-profile companionship. Delhi Girl carefully manages these profiles to deliver premium experiences with class, elegance, and complete discretion.",
                },
              },
              {
                "@type": "Question",
                name: "Can celebrity Delhi girls attend parties, events, or private meetings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, celebrity Delhi girls are available for parties, social events, and private meetings. Delhi Girl ensures proper coordination so clients enjoy smooth companionship without stress or unnecessary complications.",
                },
              },
              {
                "@type": "Question",
                name: "Are Delhi college girls on Delhi Girl genuine and properly verified?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, every Delhi college girls profile listed on Delhi Girl is verified for safety and authenticity. These Delhi college girls are managed professionally to ensure reliable and comfortable companionship.",
                },
              },
              {
                "@type": "Question",
                name: "Can I book a Delhi college girls for short duration meetings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Delhi Girl offers flexible booking options for Delhi college girl services. You can choose short or extended time slots based on your comfort and requirement.",
                },
              },
              {
                "@type": "Question",
                name: "Are foreign call girls in Delhi available through Delhi Girl brand?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Delhi Girl offers verified foreign call girls in Delhi for clients seeking premium and international-style companionship with professional service standards.",
                },
              },
              {
                "@type": "Question",
                name: "What kind of experience do foreign Delhi girls usually provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Foreign Delhi girls provide classy, modern, and premium companionship. Their confident personalities and international style make them suitable for clients wanting a luxury call girl in Delhi.",
                },
              },
              {
                "@type": "Question",
                name: "Who should book high profile call girls in Delhi from Delhi Girl?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "High profile call girls in Delhi are ideal for businessmen, corporate clients, and VIP guests seeking mature, professional, and premium companionship through Delhi Girl.",
                },
              },
              {
                "@type": "Question",
                name: "Are high profile Delhi girls trained and experienced companions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, high profile Delhi girls are well-trained, confident, and experienced. Delhi Girl ensures they meet premium standards of behavior, communication, and professionalism.",
                },
              },
            ],
          }),
        }}
      />
      {/* Banner */}
      <section className="relative w-full py-20">
        {/* Background image with dark gradient overlay */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
          {/* Responsive height: mobile 60vh, md 80vh, lg 90vh */}
          <div className="relative h-[70vh] md:h-[75vh] lg:h-[90vh] w-full">
            <Image
              src={imageUrl}
              alt="Premium call girl in Delhi available for booking"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

            {/* Content container */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Left side - text */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white max-w-2xl py-8 md:py-12"
                  >
                    <p className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm mb-3">Premium • Discreet • Verified</p>

                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mt-2">
                      Hire Premium Call Girls in Delhi | Book Now, Pay Later
                    </h1>

                    <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 max-w-prose">Find verified call girls in Delhi for VIP full service with no questions asked. Book now & pay later for premium Delhi escorts. Instant 24/7 booking available.</p>

                    <div className="mt-6 flex items-center gap-3 flex-wrap">
                      <a
                        href={ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow-lg transform transition hover:scale-105 text-sm sm:text-base"
                        aria-label="Book now"
                      >
                        {cta}
                      </a>

                      <a
                        href="/delhi-call-girl-service"
                        className="text-sm text-white/90 underline underline-offset-4"
                      >
                        View Services
                      </a>
                    </div>

                    {/* small trust badges */}
                    <div className="mt-5 flex gap-3 items-center text-xs sm:text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                        <span>Verified Profiles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                        <span>24/7 Support</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right side - subtle framed card (visible on md+) */}
                  {/* <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  className="hidden md:flex justify-end"
                >
                  <div className="w-[320px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                    <div className="relative h-[440px] w-full">
                      <Image
                        src={imageUrl}
                        alt="Model cropped"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </motion.div> */}
                </div>
              </div>
            </div>

            {/* Mobile sticky mini CTA (center bottom) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 md:hidden w-full px-4">
              <div className="flex items-center justify-between gap-4 bg-white/95 rounded-full px-4 py-3 shadow-sm backdrop-blur-sm max-w-[92vw]">

                <div className="truncate">
                  <p className="text-sm font-semibold truncate">{title}</p>
                  <p className="text-xs text-gray-600 truncate">{subtitle}</p>
                </div>

                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full p-2 bg-green-500 text-white"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Small responsive strip CTA for tablet+ (optional) */}
        <div className="mt-4 md:mt-6 container mx-auto px-4 sm:px-6 md:px-12 hidden md:block">
          <div className="flex items-center justify-between gap-4 bg-white rounded-full px-4 py-3 shadow-sm">
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-gray-600">{subtitle}</p>
            </div>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium"
            >
              {cta}
            </a>
          </div>
        </div>
      </section>
      {/* End Banner */}

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* ===== SECTION HEADING ===== */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium text-pink-600 tracking-wide">
              Our Premium Services
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Fullfill all your sexual fantasies with best call girl service in Delhi
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Whether you have a fantasy to cum on face or want anal sex without hearing no, turn to Delhi Girls, most reliable team of call girls in Delhi. Book now pay later at best 24x7 call girl services in Delhi
            </p>
          </div>
          {/* ===== END HEADING ===== */}

          {/* Responsive grid: 1 on xs, 2 on sm, 3 on md, 4 on lg, 6 on xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-10 items-start">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center px-2"
              >
                {/* Image */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-sm hover:shadow-lg transition duration-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src={it.src}
                    alt={it.title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 640px) 56px, (max-width: 1024px) 80px, 96px"
                    priority={false}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800 leading-tight">
                  {it.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-2 text-sm text-gray-600 max-w-[160px]">
                  {it.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.h2
              className="text-2xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Most demanded call-girl services in Delhi{" "}
              <span className="relative">

                <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  to achieve your fantasies
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
                Experience full relaxation and energy at our escorts in Delhi, using traditional techniques of Eastern Europe during the luxury session. We have trained call girls in Delhi to give the touch of traditional wellness therapies with the help of escorts in Delhi  and rejuvenation designed to remove tension, mood and revitalize your body. Our professional call girls are trained in providing services without disagreeing with your fantasy requirements.{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">

                </strong>

              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                As per the demand of clients, we do have many girls as per the preferences, including models, air hostesses, college young girls, and celebrities and so on. We will give you real photos of the girls before the session starts, just to have a confirmation from your side. That the call girls in Delhi is enough to fully meet your needs, uplift your mood, arouse your senses and make your body relax by fulfilling all the requirements. By getting the confirmation of an escorts in Delhi for your enjoyable day or night.
                {" "}
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
                href="https://api.whatsapp.com/send?phone=918826482370"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                Book Now
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
                    src='/Webpimages1/image2.webp'
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
                    src='/Webpimages1/Wantto.webp'
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

      {/* start */}
      <section className="relative py-10 bg-gradient-to-b from-[#faf7f4] to-white overflow-hidden">

        {/* Soft background glow */}
        <div className="absolute -top-12 -left-32 w-[420px] h-[420px] rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative container mx-auto px-4 md:px-10">

          {/* Heading */}
          <div className="max-w-5xl mx-auto text-center mb-16">


            <h2 className="text-3xl Female to Male Massagemd:text-4xl font-bold text-gray-900 mb-4">
              Affordable call girl services in Delhi
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Get your desire fulfilled with affordable call girls in Delhi at 5-star hotels. We arrange a girl with an affordable price range for our customers.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Connaught Place */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-pink-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-900">
                  5-Star Hotel outlets
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We provide services in 5-star hotels to maintain privacy and hygiene.
              </p>
            </div>

            {/* Aerocity */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-purple-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Customized Sessions
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We provide sessions as per customer desire and, on the basis of requirement, call girls will be allotted.
              </p>
            </div>

            {/* Mahipalpur */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-pink-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-900">
                  High profile Models
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                In this category the session is attended by a professional high profile model.
              </p>
            </div>

          </div>
          <h2 className="text-2xl mt-5 Female to Male Massagemd:text-4xl font-bold text-gray-700 mb-4">
            We offer services in prime location of Delhi
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide call girl services at prime locations in Delhi NCR. With our highly professional models, we became the best call-girl service provider in Delhi.
          </p>
        </div>
      </section>
      {/* end */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <motion.h2
                className="text-2xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                24/7 Call Girl Services in Delhi –{" "}
                <span className="relative">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    Discreet, Safe & Reliable
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
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                    Delhi Girls
                  </strong> {" "}
                  provides a
                  {" "}<strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">
                    call-girl
                  </strong>{" "}

                  with maintained high professionalism and trust for any companionship at events, parties or just private sessions across Delhi.
                </p>

              </motion.div>


              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:bg-emerald-600 transition"
                >
                  Book a Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="/delhi-call-girl-service"
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
                  <p className="mt-1 text-xs text-gray-500">We have escorts in Delhi with full verification and background checks.</p>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                  <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold">No Advance Payment</h4>
                  <p className="mt-1 text-xs text-gray-500">We don&apos;t recommend you to give advance payment. After attending a satisfying session, then payment will be made.</p>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                  <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold">High Profile Model</h4>
                  <p className="mt-1 text-xs text-gray-500">We do have high profile models as per your needs. We offer escorts in Delhi.</p>
                </div>
              </div>
            </div>

            {/* Right: Profiles / Gallery */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">Featured Profiles</h3>
                    <p className="text-xs text-gray-500">Trusted & Verified Profiles</p>
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
                        <a
                          href={`https://api.whatsapp.com/send?phone=918826482370&text=${encodeURIComponent(`Hi, I'd like to book ${p.name} on Delhi Girl.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 w-full text-center text-sm py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        >
                          <FaWhatsapp className="text-sm" /> Book Now
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-gray-500">
                  We are trusted in providing 100% satisfaction for customers.
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
              <div className="text-sm font-semibold text-gray-800">Our call girls in Delhi</div>
              <div className="text-xs text-gray-500">Visit Delhi Girls, which eases stress and also pampers you. Both services will boost your mood, ease your muscles and give you a luxurious experience tailored to your preferences.</div>
            </div>
            <div className="flex gap-3">
              <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full bg-emerald-500 text-white text-sm whitespace-nowrap">Enquire Now</a>
              <a href="#faq" className="px-5 py-2 rounded-full border border-gray-200 text-sm whitespace-nowrap">Read FAQ</a>
            </div>
          </div>
        </div>
      </section>
      {/* content section */}
      <section className="relative bg-gradient-to-br from-[#fdf9f5] via-[#fefaf6] to-[#f8f4ed] py-5 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-28 h-28 rounded-full bg-pink-200/30 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-200/30 blur-2xl"></div>

        {/* Gradient Accent Shapes */}
        <div className="absolute top-24 left-12 opacity-20 rotate-12">
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="1.5">
            <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-16 opacity-20 -rotate-12">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="1.5">
            <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Side: Image Gallery */}
            <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group">
                <div className="relative h-96">
                  <Image
                    src="/Webpimages/32586.webp"
                    alt="Relaxing Spa Massage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg tracking-wide">Signature Massage</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { src: "/Webpimages/download (34).webp", alt: "Spa Ambience" },
                  { src: "/Webpimages1/download (51).webp", alt: "Luxury Spa" }
                ].map((img, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500 group">
                    <div className="relative h-56">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Content */}
            <div className={`transition-all duration-1000 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-purple-50">

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xl shadow-md">
                    🌸
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 ml-4 tracking-tight">
                    Hire our Delhi Call Girls for Memorable Hotel Night Companionship
                  </h2>
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Delhi Girl connects you with verified <strong>Delhi call girls</strong> and independent escorts for discreet hotel and outcall bookings across Delhi NCR. Every companion is well-mannered, groomed, and based near prime areas like Aerocity, Connaught Place, Mahipalpur, and Dwarka.
                </p>

                {/* Locations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "💆‍♀️", title: "Lajpat Nagar", desc: "South Delhi Favorite", href: "/call-girls-in-lajpat-nagar" },
                    { icon: "🕯️", title: "Aerocity", desc: "Near 5-Star Hotels", href: "/aerocity-escorts" },
                    { icon: "🏨", title: "Connaught Place", desc: "Central Delhi Hub", href: "/call-girls-in-connaught-place" },
                    { icon: "🌱", title: "Dwarka", desc: "South West Delhi", href: "/call-girls-in-dwarka" }
                  ].map((loc, i) => (
                    <Link key={i} href={loc.href} className="bg-purple-50/60 p-4 rounded-xl flex items-start hover:shadow-md transition-all">
                      <div className="text-purple-600 text-2xl mr-3 mt-1">{loc.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">{loc.title} Call Girls</h3>
                        <p className="text-gray-600 text-sm">{loc.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Description */}
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Across Aerocity, Connaught Place, Mahipalpur, and Dwarka, our Delhi escorts keep every visit relaxed, private, and unhurried — whether it&apos;s a quiet hotel evening or company for a night out.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With 100+ verified profiles across multiple locations, Delhi Girl is a trusted name for{" "}
                    <Link href="/high-profile-escorts-in-delhi" className="text-purple-600 font-medium hover:underline">
                      premium escort service in Delhi
                    </Link>
                    . Browse the full{" "}
                    <Link href="/escort-service-in-delhi" className="text-purple-600 font-medium hover:underline">
                      list of Delhi NCR locations
                    </Link>
                    , pick a profile, and confirm your booking on WhatsApp in minutes.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=918826482370"
                    className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-full text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book Via WhatsApp
                  </a>

                  <a
                    href="/cheap-call-girls-in-delhi"
                    className="flex-1 inline-flex items-center justify-center bg-white border-2 border-purple-600 text-purple-700 px-6 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-all duration-300 shadow hover:shadow-md"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-10H8v2h2v2h2v-2h2v-2h-2V8h-2v2zm7 5h-7v-2h7v2z" />
                    </svg>
                    View Packages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content */}
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
              Highly Demanded Call Girls in Delhi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The below-mentioned Delhi Girls  are always in high demand due to their unique way of providing services.
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
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
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
                    <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      View Profile
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
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
              <h3 className="text-2xl font-bold mb-6 text-center">Why Our call girl Service in Delhi Stand Out</h3>
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
              We serve our services at primes location of Delhi Or Nearby Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide our Call Girlservices at top locations in Delhi and NCR. With professional and high profile models we are the one of the best call girl providers in Delhi.
            </p>
          </motion.div>



          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {cities.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.href}
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
              href="/escort-service-in-delhi"
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
      {/* About Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-pink-100/40 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Right Text Section */}
          <motion.div
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="mr-2">✦</span> Call Girls In Delhi
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Russian Call Girls in Delhi At ₹2,999  {" "}
              <span className="relative">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  | Book Now | Pay at Arrival
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
                Delhi Girl is the place to go for men are obsessed with russian call girls in Delhi, who like class, chemistry, and seduction in an ideal combination. Our red hot Delhi call girls come in with mesmerising eyes, curvy forms, addictive charm, and a warm, seductive manner that wraps around you like velvet. They can make you forget your worries, tempt your body, make you relax, or burn your entire night down.

                Say hello to your sexy dating partner at Delhi Girl, the hub of call girls in Delhi who are ever ready to take your nights to the next level of whispers, intimate love, audaciousness, and smooth relationships, making it feel genuine and natural.

                {" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">

                </strong>

              </p>
              <p className="text-gray-600 text-lg leading-relaxed">

                You want a person sensual, a person playful, a person charming, a person fiercely seductive, you want to feel all that you had in your pocket and had always wanted to do. Delhi Girl is the discoverer of a range of collections that touch all the longings you had previously in your pocket.

                {" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium">

                </strong>

              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { title: "Verified Call Girls", icon: "🌏" },
                { title: "Professional Profiles", icon: "💆‍♂️" },
                { title: "Independent Call Girls", icon: "✨" },
                { title: "Russian Call Girls", icon: "👩‍❤️‍👨" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-50 hover:border-pink-100 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-purple-100 text-purple-700 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs">

                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/about-us"
                className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-90 transition-all"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Learn More About Us
                </span>
              </motion.a>

              <motion.a
                href="#Pricing"
                className="px-8 py-4 rounded-full font-medium border-2 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-purple-50 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Pricing
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Left Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group w-full h-[900px]">
              <Image
                loading="lazy"
                src="/Webpimages/Evie Lee Mikomin (1).webp"
                alt="Spa Interior"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="rounded-[2.5rem] z-0"
              />
              <motion.div
                className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-pink-300/20 blur-xl z-0"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* end About Section */}

      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Benefits of Choosing Delhi Girl For Genuine call girl Service in Delhi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get many benefits with trusted call girls in Delhi, Gurgaon and Noida with high-quality services at 5 star hotels.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <a href="/delhi-call-girl-service" className="inline-block px-6 py-3 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-colors">
                    Explore
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial section */}
          {/* <div className="mt-24 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="ml-4">
              <h4 className="text-xl font-bold">Priya Sharma</h4>
              <p className="text-pink-500">Fashion Blogger, South Delhi</p>
            </div>
          </div>
          <blockquote className="text-2xl italic text-gray-700">
            "This platform transformed how I connect with Delhi's fashion community. The local style guides helped me navigate Delhi's unique fashion landscape like never before!"
          </blockquote>
        </div> */}
        </div>
      </section>
      {/* End Content */}
      {/* ///// */}
      <section className="relative bg-gradient-to-br from-amber-50 via-rose-50 to-white py-24 px-6 md:px-16 overflow-hidden">
        {/* Decorative blurred circles */}
        <div className="absolute -top-16 left-10 w-72 h-72 rounded-full bg-rose-200/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-200/20 blur-2xl"></div>

        <div className="relative z-10 grid md:grid-cols-[24rem_1fr] gap-12 items-center">
          {/* Left Image */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto md:mx-0 w-full"
          >
            <Image
              src="/Webpimages/call-girl-8.webp"
              alt="call girl service in Noida"
              fill
              sizes="(max-width: 768px) 60vw, 24rem"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Enjoy Top-Rated <span className="text-rose-600">Call Girl Service in Noida</span>
            </h2>
            <p className="text-lg text-gray-700">
              Delhi Girl brings the same verified, high-profile companionship to Noida — confident, warm, and easy to talk to, our companions know how to make an evening feel relaxed and personal rather than rushed.
            </p>
            <p className="text-lg text-gray-700">
              Every visit is private and on your schedule, whether it&apos;s a quiet hotel evening or company for a night out. Explore our full range of{" "}
              <Link href="/escort-service-in-delhi" className="text-rose-600 font-medium hover:underline">
                Delhi NCR escort locations
              </Link>{" "}
              to find a companion near you.
            </p>

            <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full shadow-lg transition-all text-lg">
              Book Now
            </a>
          </motion.div>
        </div>
      </section>
      {/* ///////////// */}
      {/* <section className="relative bg-gradient-to-r from-pink-100 via-rose-50 to-pink-200 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Webpimages/32586.webp" 
              alt="Delhi Girl"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Relax and Rejuvenate At 5 star  <span className="text-pink-600">hotels with VIP call girls in Delhi</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            There is no better than a Delhi Girl in terms of clothes that mix high-end beauty and irresistible sensuality. Our call girls know how to make even a normal night magnetic when her eyes are fixed on yours and all the rest of the world is forgotten. There is organic chemistry, real-life warmth, and the pleasure goes deeper than you imagine. You feel the sparkling intimacy whether she lays her arms around you, brings her lips closer with an inviting smile, or draws you towards her, embracing you.
          </p>
          
          <div className="flex gap-4">
            <a href="/delhi-call-girl-service" className="px-6 py-3 rounded-xl bg-pink-600 text-white font-semibold shadow-lg hover:bg-pink-700 transition">
              View Services
            </a>
            <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-pink-600 text-pink-600 font-semibold hover:bg-pink-50 transition">
              Book Now
            </a>
          </div>
        </motion.div>
      </div>
    </section> */}
      {/* /////? */}
      <section className="relative bg-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Enjoy pleasure and luxury <span className="text-pink-600">with the elite Independent call girls in Delhi</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              There is no better than a Delhi Girl in terms of clothes that mix high-end beauty and irresistible sensuality. Our call girls in Delhi know how to make even a normal night magnetic when her eyes are fixed on yours and all the rest of the world is forgotten.

              With our Delhi Call Girls, you will enjoy the organic chemistry, real-life warmth, and the pleasure goes deeper than you imagine. You feel the sparkling intimacy when she lays her arms around you, brings her lips closer with an inviting smile, or draws you towards her, embracing you. Our Delhi Girl every action will make you irresistible to grab her and spend the best night of your entire life.

            </p>


            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                <Sparkles className="w-10 h-10 text-pink-600 mb-2" />
                <p className="font-semibold text-gray-800">Trusted Girls</p>
              </div>
              <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                <Camera className="w-10 h-10 text-pink-600 mb-2" />
                <p className="font-semibold text-gray-800">Model profile</p>
              </div>
              <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                <MapPin className="w-10 h-10 text-pink-600 mb-2" />
                <p className="font-semibold text-gray-800">Foreigner girls</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Webpimages1/download (34).webp" // apni image ka path daalna
                alt="Delhi Girl Lifestyle"
                width={600}
                height={500}
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
              #DelhiVibes
            </div>
          </motion.div>
        </div>
      </section>

      {/* end content section */}


      {/* pricing */}
      <div id="Pricing" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            >
              Get Pocket - Friendly call girl Services in Delhi With High-Profile Models
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy with affordable call girls in Delhi at 5 star hotels. We offer 5 star rates Call Girlservice in Delhi.
            </p>
          </div>

          {/* Duration Selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12 p-4 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { id: 'session', label: 'One Session' },
              { id: 'two', label: 'Two Sessions' },
              { id: 'night', label: 'Full Night' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedDuration(option.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${selectedDuration === option.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {option.label}
                {selectedDuration === option.id && (
                  <FaStar className="ml-2 text-yellow-300 animate-pulse" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group ${plan.id === 'celebrity' ? 'ring-2 ring-purple-500 ring-offset-4' : ''
                  }`}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{plan.icon}</div>
                      <h3 className="text-xl font-bold">{plan.title}</h3>
                    </div>
                    {plan.id === 'celebrity' && (
                      <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <FaStar className="mr-1" /> Premium
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-sm opacity-90">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="p-6 border-b border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                      ₹{plan.pricing[selectedDuration]}
                    </div>
                    <div className="text-gray-500 mt-1">
                      {selectedDuration === 'session' && 'Per 2-hour session'}
                      {selectedDuration === 'two' && 'For two sessions'}
                      {selectedDuration === 'night' && 'Full night experience'}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://api.whatsapp.com/send?phone=918826482370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 block text-center w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.id === 'celebrity'
                        ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800'
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300'
                      }`}>
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Premium service with Delhi Girl to the rescue</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> ●	Confidential arrangements</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> ●	Verified elite companions</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> ●	Smooth booking experience</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> ●	Multiple location availability</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> ●	24/7 support</li>
                    <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> ●	Individualized Call Girlservices.</li>
                  </ul>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-6 min-w-[300px]">
                  <h4 className="font-bold text-lg mb-3">Why choose us?</h4>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">98%</div>
                    <div className="ml-3 text-gray-300">Client Satisfaction Rate</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">24/7</div>
                    <div className="ml-3 text-gray-300">Support Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* end pricing */}
      <section className="relative py-24 bg-gradient-to-b from-[#faf7f4] to-white overflow-hidden">

        {/* Soft background glow */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-pink-400/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative container mx-auto px-4 md:px-10">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Natural • Playful • Relaxed
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Top Delhi College Girl Profiles for Natural, Playful Companionship
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Delhi Girl also introduces one to the profiles of the Delhi college girls who are young, attractive, social, and full of natural energy.
              These friends introduce a fresh breeze, light humour, easy-going interaction, playful behaviour, and slow-paced chemistry. They suit the best customers who desire a cool zest and are not inundated.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Connaught Place */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-pink-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Call Girls in Connaught Place
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                One of Delhi&apos;s busiest luxury areas is Connaught Place, and Delhi Girl offers an upscale choice of elegant, relaxed, and confident company that would fit in. You may have a desirable dinner partner, an unwinded evening partner, or anyone who brings out your personality and warmth; our call girls in Connaught Place are the best option.
              </p>
            </div>

            {/* Aerocity */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-purple-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Call Girls in Aerocity
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Aerocity is one of the best places where travellers can be found, and Delhi Girl can get hotel companionship in Aerocity by offering elegant and professional call girls. These call girls are very mature and composed, befitting the high-end international traveller. They come silently, socialize without any issues, and create a friendly atmosphere the moment they arrive.
              </p>
            </div>

            {/* Mahipalpur */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-indigo-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Call Girls in Mahipalpur
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Clients staying in areas close to the airport consider Mahipalpur one of the most convenient places to stay. Delhi Girl offers quick, unobtrusive access to refined call girls in Mahipalpur, particularly for guests with a tight schedule or who need call girls at night.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* DFGDHDFGH///////////////////// */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Premium Delhi call girls for Sexual Entertainment 24/7
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How the Capital is Redefining Style and Empowerment
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Image */}
              <motion.div
                className="relative h-96 lg:h-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-10"></div> */}
                <div className="relative w-full h-full">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="relative bg-gray-200 rounded-xl w-full h-full flex items-center justify-center">
                        <Image
                          src="/Webpimages/call-girl-13.webp"
                          alt="Delhi Fashion"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="absolute bottom-6 left-6 z-20 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-800">
                Photo: Chandni Chowk Markets
              </div> */}
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                className="p-6 md:p-8 lg:p-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Invite Best Call Girls for ultimate call girl service in Gurgaon
                </h3>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                  <p>
                    Delhi Girl is the best option for call girl service in Gurgaon as far as irresistible pleasure is concerned. Our russian models knows how to seduce, tease, and thrill you with each move. Our Gurgaon call girls carry a magnetic appeal: soft lips, aggressive curves, warm touches, playful strokes, and a seductive rhythm that makes you find yourself right in the moment.
                  </p>

                  <p>
                    These are the people who understand how to make you feel the slow sensual sparks to the highs of passion without you even noticing when the transition took place. They are there to steal your stress and touch to light fires inside you without you even realizing you had them. Spending the night with them is like desire freed in the most amiable way.
                    Highlights:

                  </p>

                  {/* <p>
                  Social media has played a crucial role in this evolution. Delhi&apos;s fashion influencers have created communities that transcend traditional boundaries, showcasing how to style traditional garments in modern ways.
                </p> */}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/call-girls-in-gurgaon" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Read More
                  </a>
                  <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Share Article
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Takeaways</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-start">
                      <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">●	Corruption that goes to the very bottom.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">●	Natural explosive chemistry.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">●	Sometimes it becomes memories.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">●	Shaped in your own way by pleasure.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 5 star hotel */}
      {/* 5 star hotel */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Best in class call girl Service at Top Hotels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spend on luxurious time with high-end friends who take your experience to the next level in the best hotels in Delhi NCR.
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
                  <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="mt-6 block text-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
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
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-800/30 z-10"></div>

                {/* Text on Image */}
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h3 className="text-2xl font-bold">
                    Luxury Package for call girl Service in Gurgaon
                  </h3>
                  <p className="mt-2 max-w-md">
                    An exquisite, luxurious, male-oriented experience aimed at men who are
                    longing to have intimacy, bond, seduce, and the full body experience.
                  </p>
                </div>

                {/* Real Image */}
                <Image
                  src="/Webpimages/bannermodel.webp" // 👈 apni image ka path
                  alt="Luxury call girl Service in Gurgaon"
                  fill
                  className="object-cover"
                  loading="lazy"
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

                <h3 className="text-3xl font-bold mb-4">
                  Exclusive Benefits for Our Guests
                </h3>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <FaCheck className="text-green-400 mr-2" /> Elite model selection
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-400 mr-2" /> Completely personalized
                    pleasure experience
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-400 mr-2" /> High level privacy & discreet
                    service
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-400 mr-2" /> Multiple time-slot options
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-400 mr-2" /> Safe & verified professionals
                  </li>
                </ul>

                <div className="flex space-x-4">
                  <a href="/cheap-call-girls-in-delhi" className="px-6 py-3 bg-white text-purple-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    Explore Packages
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    Contact Concierge
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
      {/* END Hotel */}
      {/* CCCC */}
      {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Delhi Girls Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated content on fashion, beauty, lifestyle, and culture in Delhi
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories3.map(category => (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <div className="absolute inset-0 flex items-end p-6 z-20">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">{article.title}</h3>
                    <p className="text-pink-300 font-medium">{article.readTime}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 z-20">
                  {categories3.find(cat => cat.id === article.category)?.name}
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                      <span className="text-gray-500">Article Image</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <p className="text-gray-600 mb-6">{article.description}</p>
                
                <div className="flex items-center justify-between">
                  <a href="/blogs" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Read Full Article
                  </a>
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl p-8 text-white shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Enjoy the Finest Pleasure to your doorstep with call girl Service in Noida</h3>
                <p className="mb-6">
                  Delhi Girl is best at those who like pure sensual magic right to your door in Noida. Our call girls come with charisma dripping with their grin, the self-belief in their walk and an erotic vulnerability that adjoins your area when she walks in. It can be a passionate, intimate affair, leisurely and erotic, fun and games, rendezvous, a blend of all these or some combination of all these — these friends know how to mould the night to your requirements. Each motion, each word, each touch, seems to be purposeful, alluring, and designed to drag you further into the realm of pleasure.                </p>
                
                <a href="/call-girls-in-noida" className="inline-block px-6 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Read Full Story
                </a>
              </div>
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src='/Webpimages/cda1687d-1464-4b62-9549-2dd04a5cbb05.webp'
                  alt='{hotel.name}'
                  fill                                        
                  className="object-cover object-center"     
                  priority={false}                            
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div> */}
      {/* ///theme difference 5 star hotel section */}
      {/* <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent mb-4">
            Our 5-Star Hotel Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world's most exclusive luxury hotels and resorts, each offering unparalleled service and unforgettable experiences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                activeHotel === hotel.id ? "ring-4 ring-amber-500" : ""
              }`}
              onClick={() => setActiveHotel(activeHotel === hotel.id ? null : hotel.id)}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <div className="absolute top-4 right-4 z-20 flex items-center bg-amber-500 text-white px-3 py-1 rounded-full">
                  <FaStar className="mr-1" />
                  <span className="font-semibold">{hotel.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <p className="text-sm">{hotel.location}</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-full h-full flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{hotel.description}</p>
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
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">{hotel.price}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                  <div className="flex space-x-2">
                    {hotel.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="mt-6 block text-center w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all">
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-16 bg-gradient-to-r from-amber-700 to-amber-900 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800/30 to-amber-900/30 z-10"></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h3 className="text-2xl font-bold">Luxury Experience Package</h3>
                <p className="mt-2 max-w-md">Book 3 nights and receive complimentary spa treatments, airport transfers, and dining credits</p>
              </div>

              <div className="bg-gradient-to-br from-amber-300 to-amber-500 w-full h-full flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
            </div>

            <div className="p-8 text-white">
              <div className="flex items-center mb-4">
                <FaStar className="text-amber-300 mr-1" />
                <FaStar className="text-amber-300 mr-1" />
                <FaStar className="text-amber-300 mr-1" />
                <FaStar className="text-amber-300 mr-1" />
                <FaStar className="text-amber-300 mr-1" />
                <span className="ml-2 font-semibold">Premium Collection</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Exclusive Benefits for Our Guests</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  Complimentary airport transfers in luxury vehicles
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  24/7 personal concierge service
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  Access to exclusive members-only lounges
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  Priority reservations at Michelin-star restaurants
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  Spa credits for all bookings of 3+ nights
                </li>
              </ul>
              
              <div className="flex space-x-4">
                <a href="/cheap-call-girls-in-delhi" className="px-6 py-3 bg-white text-amber-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Explore Packages
                </a>
                <a href="https://api.whatsapp.com/send?phone=918826482370" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Concierge
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div> */}
      {/* end 5 star hotel */}
      {/* //// */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Book the Best call girl Service in Delhi Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The luxurious beauty, cozy romance and sexually charged dates are designed to experience memorable nights.
            </p>
          </motion.div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {locations.map((location, i) => (
              <motion.a
                key={i}
                href={getLocationHref(location)}
                className="block bg-red-800 text-white font-semibold text-lg py-4 rounded-xl shadow-md hover:bg-red-700 transition duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {location}
              </motion.a>
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
