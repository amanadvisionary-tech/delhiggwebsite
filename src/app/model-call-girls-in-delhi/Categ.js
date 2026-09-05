"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiMail, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { AnimatePresence } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
import { FaUniversity,  FaInstagram, } from "react-icons/fa";
import { Check, Shield, Clock, Star, Hotel, CreditCard, MessageCircle, UserCheck } from 'lucide-react';

export default function Category() {
  const categories2 = [
    {
      icon: <FaUniversity className="text-pink-500 text-4xl" />,
      title: "Independent College Girl",
      desc: "College girls who go independent are light, friendly, youthful, and seem refreshing and easygoing. They are natural talkers, gentle in their speech, well-groomed, and have innocent flair, not trying so hard. These girls are the best choice when the client is seeking that relaxing no-pressure atmosphere. They are friendly in nature, have a smile on their faces, and exude a calm persona that instantly puts them at ease. Their ease of use has rendered them very popular amongst first-time users and business travellers who need easy and pleasant company.",
      href: "/collage-call-girls-in-delhi",
    },
    {
      icon: <FaCrown className="text-red-500 text-4xl" />,
      title: "Russian Escort",
      desc: "The Russian escorts are characterized by perfect grooming, composed nature and of course, warm companionship. They have a global appeal that instantly elevates the experience to a higher level as a high-quality and relaxing one. They are soft-spoken, elegant, and polite, thus making them perfect with clients who desire peaceful and high-quality company within the 5-star hotels. You can be a traveller, a business guest or a person who wants to find a perfect mix of friendliness, composedness, and comfort, and upon that, Russian escorts can be considered a perfect choice.",
      href: "/russian-escorts-in-delhi",
    },
    {
      icon: <FaInstagram className="text-purple-500 text-4xl" />,
      title: "Celebrity Escort",
      desc: "The ideal match to men seeking premium high-profile companionship is celebrity escorts who provide them with their preferred treat. These models have a charismatic image, a beautiful appearance, and a sophisticated yet soft conversational style, which are fitting for a luxury setting. It is either a late-night hotel outing, an outing to a lounge, or a restaurant dinner; celebrity escorts are sophisticated and warm at the same time, making the experience unforgettable. It feels elevated at all times with their personality and elegance.",
      href: "/high-profile-escorts-in-delhi",
    },
    {
      icon: <FaPlane className="text-blue-500 text-4xl" />,
      title: "Air Hostess Escort",
      desc: "The air hostesses are equipped with natural hospitality training, good manners and a well-polished outlook. Their gentle manner, low-pitched voice, and refined hotel etiquette suit corporate customers and high-end hotel visits. Having international exposure and high standards of grooming, they know how to create a serene atmosphere in which the client feels relaxed and well looked after. The air hostess escort adds grace and warmth that makes the whole experience smooth and relaxing.",
      href: "/air-hostess-escorts-in-delhi",
    },
  ];
  {/* staff showcase */}
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
      image: '/Webpimages/modelg.webp', // Placeholder image path
    },
    {
      id: 2,
      name: 'Alex Johnson',
      role: 'TV Personality',
      category: 'celebrity',
      description: 'Alex Johnson is a confident and stylish TV personality with a charming presence. She knows how to connect easily and make every moment enjoyable. If you are looking for a celebrity call Girls in Delhi with class, confidence, and elegance, Alex offers premium companionship for parties, events, and private meetings with full discretion.',
      image: '/Webpimages/7170.webp', // Placeholder image pathss
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Marketing Student',
      category: 'college',
      description: 'Emma Wilson is a smart and confident marketing student with a friendly and positive nature. She is well-spoken and easy to connect with, making her a great choice for relaxed companionship. If you are looking for a Delhi college girl with a modern mindset and classy presence, Emma offers a comfortable and discreet experience.',
      image: '/Webpimages/Cindy.webp', // Placeholder image path
    },
    {
      id: 4,
      name: 'Isabella Rossi',
      role: 'International Model',
      category: 'foreign',
      description: 'Isabella Rossi is a stunning international model with a confident personality and elegant style. She carries herself with grace and knows how to make every meeting special. If you are looking for a foreign call Girls in Delhi with premium looks and classy companionship, Isabella offers a luxurious and discreet experience.',
      image: '/Webpimages/Evie Lee Mikomin.webp', // Placeholder image path
    },
    {
      id: 5,
      name: 'Olivia Chen',
      role: 'Corporate Executive',
      category: 'highprofile',
      description: 'Olivia Chen is a smart and confident corporate executive with a polished personality. She understands professionalism, good conversation, and classy company. If you are looking for a high profile call Girls in Delhi for business dinners, meetings, or private time, Olivia offers premium companionship with complete discretion and comfort.',
      image: '/Webpimages/172420-8871.webp',
    },
    {
      id: 6,
      name: 'Mia Thompson',
      role: 'First Class Hostess',
      category: 'airhostess',
      description: 'Mia Thompson is a well-groomed and elegant first class hostess with a calm and confident personality. She knows how to make people feel comfortable with her polite nature and smooth conversation. If you are looking for an airhostess call Girls in Delhi who offers premium companionship with class and discretion, Mia is a perfect choice.',
      image: '/Webpimages/imagee.webp', // Placeholder image path
    },
    {
      id: 7,
      name: 'Chloe Williams',
      role: 'Film Actress',
      category: 'celebrity',
      description: 'Chloe Williams is a graceful film actress with a strong screen presence and elegant personality. She is confident, well-mannered, and knows how to carry herself with style. If you are looking for a celebrity call Girls in Delhi who offers premium companionship for events, parties, or private meetings, Chloe brings class, charm, and complete discretion.',
      image: '/Webpimages/model.webp', // Placeholder image path
    },
    {
      id: 8,
      name: 'Ava Garcia',
      role: 'Engineering Student',
      category: 'college',
      description: 'Ava Garcia is a smart and confident engineering student with a friendly and calm personality. She is well-spoken and easy to connect with. If you are looking for a college girl call Girls in Delhi who offers comfortable companionship with privacy and respect, Ava is a great choice.',
      image: '/Webpimages/MODEL (1).webp', // Placeholder image path
    },
  ];
    const filteredStaff = activeCategory === 'all' 
      ? staffMembers 
      : staffMembers.filter(member => member.category === activeCategory);
      {/* End Staff Showcase */}
      {/* pricing */}
          const [selectedDuration, setSelectedDuration] = useState('session'); // 'session', 'two', 'night'
        
        const pricingPlans = [
    {
      id: 'independent',
      title: 'Independent Model',
      icon: <FaStar className="text-pink-500" />,
      description: 'Easygoing, natural companionship',
      color: 'from-pink-500 to-rose-500',
      pricing: {
        session: '5k',
        two: '10k',
        night: '15k'
      },
      features: [ 'Delhi Local Profiles', 'Verified Photos', 'Girlfriend Experience', 'Pay After You Meet']
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
      features: ['5-Star Hotel Friendly', 'Girlfriend Experience', 'Verified Profile', 'Discreet Booking']
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
      features: ['5-Star Hotel Friendly', 'High Profile Airhostess', 'Girlfriend Experience', 'Discreet Booking']
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
      features: ['5-Star Hotel Friendly', 'Foreign Staff', 'Girlfriend Experience', 'Discreet Booking']
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
      features: ['5-Star Hotel Friendly', 'Insta Model', 'Girlfriend Experience', 'Celebrity Profile']
    }
  ];
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
                question: 'Are the model call girls the same as shown in the photos?',
                answer: 'Yes. Every profile is verified before it goes live, so the person who arrives is the same one you see in the photos — no last-minute swaps.',
                category: 'account',
              },
              {
                id: 2,
                question: 'Do I need to pay in advance to book a model escort in Delhi?',
                answer: 'No. Pay after you meet is standard — confirm your booking on WhatsApp and settle payment once your companion has arrived.',
                category: 'payments',
              },
              {
                id: 3,
                question: 'Can I change my booking time after confirming?',
                answer: 'Yes, message us on WhatsApp as early as you can and we will adjust the time, subject to your companion\'s availability.',
                category: 'booking',
              },
              {
                id: 4,
                question: 'How do I cancel a booking?',
                answer: 'Just message us on WhatsApp before your scheduled time. Since payment only happens after you meet, there is nothing to refund if you cancel in advance.',
                category: 'booking',
              },
              {
                id: 5,
                question: 'Do you cover 5-star hotels across Delhi for these bookings?',
                answer: 'Yes, our model escorts are experienced with 5-star hotel check-ins across Delhi and NCR, and arrive discreetly regardless of the property.',
                category: 'services',
              },
              {
                id: 6,
                question: 'Is booking a model call girl in Delhi discreet?',
                answer: 'Yes. Every booking is handled privately over WhatsApp, and your details are never shared.',
                category: 'account',
              },
              {
                id: 7,
                question: 'What safety measures do you have in place?',
                answer: 'Every companion is identity-verified before being listed, and bookings are confirmed only through WhatsApp with minimal details required.',
                category: 'services',
              },
              {
                id: 8,
                question: 'Do you have model call girls available near Aerocity or Connaught Place?',
                answer: 'Yes, model escorts are available across Delhi NCR including Aerocity, Connaught Place, Dwarka, and Gurgaon — same booking process wherever you are.',
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
              const services1= [
  {
    title: "Sensual Hotel Accomplice.",
    description:
      "You get into your hotel room, and the mood changes the moment she walks in - cool confidence, warmth, easy charisma. She is sitting nearby, knows your mood, and allows the chemistry to develop. The touch of her sweet voice, her gentle movements, and the close atmosphere transform your room into an intimate and slow-burning escape.",
    image: "/Webpimages/smiling.webp", // Add your image path here
  },
  {
    title: "Elegant Dinner Date with Hidden Heat",
    description:
      "She’s the woman who turns heads the moment she enters. A composed smile, such a friendly expression, such a gentle coquettishness that you find yourself minding all night. It could be a fine-dining or a low-tone lounge; she leans out just far enough to make your thoughts very warm and almost perilous.",
    image: "/Webpimages/Evie Lee Mikomin (1).webp", // Add your image path here
  },
  {
    title: "Late-Night Warmth & Intimate Vibes",
    description:
      "Descending onto the city like warmth in the middle of the night, she comes with a slow, calming energy. She is very reassuring but exceptionally seductive. She sits nearby, speaks gently and allows the night to pass at your speed - creating a silence that is so addictive.",
    image: "/Webpimages/mmm.webp", // Add your image path here
  },
  {
    title: "Corporate Travel Companion with Hidden Seduction",
    description:
      "She conducts herself gracefully before the world, though there is warmth about her voice that is reserved just for you. Her presence is your secret indulgence of the travelling or of long residence, caresses, mute laughter, and an electricity that boils only a little under the skin, eager to be shut out with you behind the door.",
    image: "/Webpimages/housewife.webp", // Add your image path here
  },
  {
    title: "Party & Celebration Companion",
    description:
      "She fills the room with life, and she is very confident, playful, and teasing. Her light touches, unobtrusive gaze and open energy ensure that you are glued to her. Regardless of being hosts or guests, she can create that type of tension that will be remembered even way after the party is over.",
    image: "/Webpimages/Cindy.webp", // Add your image path here
  },
  {
    title: " Independent Friendly Companion",
    description:
      "She comes, easy-smiling, easy-going, that light flirtation that is not made, but which is natural. The warmth of an independent girl has another effect, personal, close,and  real. The dialogue is effortless, the chemistry is built up and you find yourself in a room that is a bit warmer, softer and is all yours.",
    image: "/Webpimages/model1.webp", // Add your image path here
  },
  
  // Add more categories as needed
];
  return (
    <main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.delhigirl.in/" },
            { "@type": "ListItem", position: 2, name: "Model Call Girls in Delhi", item: "https://www.delhigirl.in/model-call-girls-in-delhi" },
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
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 min-h-[400px] md:min-h-[600px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Use `fill` and `object-cover` (no layout/objectFit) + sizes for responsive loading */}
        <Image
          src="/Webpimages/bannermodel.webp"
          alt="Model call girls service in Delhi"
          fill
          className="object-cover w-full h-full opacity-90"
          quality={90}
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
        />
        {/* Optional subtle overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-800/50" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white py-2 px-6 rounded-full text-sm font-semibold border border-white/30">
              {/* ...badge svg and text... */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Verified Profiles, Same-Day Booking
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
              Model Call Girls in Delhi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                — Verified &amp; High-Profile
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/90 max-w-lg">
              Premium companionship with well-dressed, soft-spoken model escorts in Delhi who make every meeting feel charming, comfortable, and warm. Book verified model call girls with hassle-free WhatsApp booking, business-like etiquette, and full privacy — suitable for corporate clients and high-end travellers alike.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4">
              {/* ...features... */}
            </div>

            {/* CTA Button */}
            <a
              href="https://api.whatsapp.com/send?phone=918826482370"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 bg-white text-purple-900 hover:bg-gray-100 font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
            >
              Book Now
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* Stats Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl max-w-md ml-auto">
            {/* ...stats content... */}
          </div>
        </div>
      </div>
    </div>
        {/* end banner */}
        <section className="bg-gradient-to-r from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our High Profile Escort Categories to Hire Call Girls
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories2.map((cat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm">{cat.desc}</p>
              <Link href={cat.href} className="mt-4 inline-block text-purple-600 font-medium text-sm hover:underline">
                View {cat.title} Profiles →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* Service */}
        <div className="max-w-6xl mx-auto space-y-6">
      {services1.map((service, index) => (
        <div key={index} className="flex items-start space-x-4 p-4 border-b border-gray-300">
          <div className="w-14 h-14 flex-shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
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
                    Our Models Team Of Call Girls in Delhi
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Professional, tested, and well-groomed call girls who are willing to provide friendly and reassuring company in 5-star hotels.
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
            <section className="bg-gradient-to-r from-amber-50 to-white py-12 sm:py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Text column */}
        <div className="lg:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            <span className="block">Hire Call Girls</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">in Delhi At</span>
            <span className="block text-pink-600">No Advance Payment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 sm:mt-6 text-gray-600 max-w-xl leading-relaxed text-sm sm:text-base"
          >
           Easy booking with pay-on-arrival convenience crafted for privacy, comfort, and smooth client coordination.
          </motion.p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 items-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://api.whatsapp.com/send?phone=918826482370"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full font-medium shadow-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm sm:text-base"
            >
              Book A Session
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 bg-white"
            >
              View Properties
            </motion.button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500 mt-2" />
              <div>
                <h4 className="font-semibold text-gray-800">Expert Therapists</h4>
                <p className="text-sm text-gray-500">Secure Your Booking – Pay Only After Escort Arrival</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-pink-500 mt-2" />
              <div>
                <h4 className="font-semibold text-gray-800">Luxurious Setting</h4>
                <p className="text-sm text-gray-500">Guaranteed Privacy With No Pre-Booking Charges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-lg relative">
            {/* big tilted card */}
            <motion.div
              initial={{ rotate: 6, scale: 0.98, y: -10, opacity: 0 }}
              whileInView={{ rotate: 2, scale: 1, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white"
              style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src='/Webpimages/Model2.webp' alt="Model call girl in Delhi" fill style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>

            {/* small overlapping card - hidden on small screens */}
            <motion.div
              initial={{ rotate: -8, x: -24, y: 30, opacity: 0 }}
              whileInView={{ rotate: -4, x: -8, y: 8, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="hidden sm:block absolute left-0 bottom-0 transform -translate-x-8 translate-y-6 rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white w-56 sm:w-64 md:w-72 lg:w-80"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src='/Webpimages/download331.webp' alt="Model call girl profile in Delhi" fill style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>

            {/* subtle background highlight - smaller on mobile */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center items-center">
              <div className="w-44 h-44 sm:w-72 sm:h-72 rounded-full blur-3xl opacity-60 bg-gradient-to-r from-purple-300 to-pink-300"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative footer wave */}
      <div className="mt-8 sm:mt-12">
        <svg viewBox="0 0 1200 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,0 C300,100 900,-60 1200,50 L1200,80 L0,80 Z" fill="#fff" opacity="0.8"></path>
        </svg>
      </div>
    </section>
        {/* content section  */}
        <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#fefaf6] to-[#fdf9f5] overflow-hidden">
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50/80 to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-200/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-200/20 blur-3xl animate-pulse-slow"></div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Image - Enhanced with modern frame */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group h-[750px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  loading="lazy"
                  src="/Webpimages/download (17).webp"
                  alt="Model call girls in Delhi"
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
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-300/20 blur-2xl"
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
                  Get the{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                    Best Russian Call Girls in Delhi
                    <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full"></div>
                  </span>
                </h2>
              </div>
        
              {/* Enhanced Content with modern list */}
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>
                   <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"></strong>, 
                  Russian escorts are reputed to be very elegant in look, spa-touch in behaviour and peaceful and friendly company. Delhi Girl offers you an elite selection of Russian call girls in Delhi, with clean grooming, gentle communication, and a naturally warm atmosphere. Their global flair, good etiquette and soft demeanour enable them to suit well in hotel stays, corporate clients and business travellers who would desire a relaxing business-like experience.
                </p>
                
                <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                  <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Our Specialties
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Russian Escorts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Delhi College girl</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Thai Girl</span>
                    </li>
                  </ul>
                </div>
        
                <p>
                  You need a fashionable dinner partner, or a calming factor after work, or an escort who knows how to behave in luxury; our Russian girls will fit well in the high-class lifestyle in Delhi. They uphold international hygiene standards, demonstrate respectful behaviour, and make each session feel smooth and high-end. Browse the approved profiles, book immediately, and have the advantage of a warm welcome from a Russian model next to you.
                </p>
              </div>
        
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/about-us"
                  className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="absolute -inset-10 bg-gradient-to-r from-white/20 via-white/5 to-white/20 transform rotate-12 group-hover:animate-shine"></div>
                  </div>
                  <span className="relative z-10 flex items-center">
                    Explore More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </motion.a>
        
                <motion.a
                  href="https://api.whatsapp.com/send?phone=918826482370"
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
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
        {/* end content section   */}
        {/* pricing */}
                 <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
                      >
                        Get an Affordable Package And Premium Call Girls in Delhi
                      </motion.h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        You can enjoy high luxury company at reasonable charges with clean, well-groomed and confirmed call girls at the best hotels in Delhi.
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
                          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                            selectedDuration === option.id
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
                          className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group ${
                            plan.id === 'celebrity' ? 'ring-2 ring-purple-500 ring-offset-4' : ''
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
                              href={`https://api.whatsapp.com/send?phone=918826482370&text=${encodeURIComponent(`Hi, I'd like to book the ${plan.title} package (₹${plan.pricing[selectedDuration]}).`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`mt-6 block text-center w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                                plan.id === 'celebrity'
                                  ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800'
                                  : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300'
                              }`}
                            >
                              Select Package
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
                            <h3 className="text-2xl font-bold mb-4">Get Guaranteed Booking for Call Girls in Delhi</h3>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Real time verification of profiles.</li>
                              <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> No misunderstandings, definite schedules, fluent co-ordination.</li>
                              <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> First-hand access to the best escorts in Delhi.</li>
                              <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Private and secure booking every time</li>
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
            {/* 300 content section */}
            <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fefaf6] to-[#fdf9f5] relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50 to-transparent opacity-70"></div>
              <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-100/30 blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-200/30 blur-3xl"></div>
            
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
                      alt="Book model call girls in Delhi"
                      fill
                      sizes="100vw"
                      style={{ objectFit: "cover" }}
                      className="rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Floating Accent Circle */}
                    <motion.div
                      className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-300/20 blur-2xl"
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
                    Book Night Time{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      With Celebrity Call Girls in Delhi
                    </span>
                  </h2>
            
                  {/* Long Content */}
                  <div className="text-gray-600 text-lg leading-relaxed space-y-5 mb-8">
                    <p>
                       <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"></strong>, 
                      Relish the allure of celebrity escorts of high profile whose demeanour is fashionable, behaviour subtle and their personality polished. These friends would offer the right combination of sophistication and cordiality, and your evening would be smooth and enjoyable. Our celebrity call girls are best suited to late-night stays, after-parties, business trips, and holiday visits at the luxurious hotel as they understand how to establish a tranquil atmosphere with organic interaction and cosy energy.
                    </p>
                    <p>
                     Celebrity escorts have a very large number of clients seeking their high-end appearance: well-kept, confident, and emotionally stable. They are quick to pick up your vibe, be it quiet chatting, easy moments and cold feet companionship. They are well-groomed, professionally dressed, and perfectly suited to the environment of a 5-star hotel.
                    </p>
                    <p>
                      
You want to find a late-night company that is relaxing, respectful and luxurious, our celebrity call girls will make sure you have a comforting and high-end experience throughout.

                    </p>
                  </div>
            
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/about-us"
                      className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-90 transition-all"></div>
                      <span className="relative z-10">Explore More</span>
                    </a>
            
                    <a
                      href="https://api.whatsapp.com/send?phone=918826482370"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-full font-medium border-2 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-purple-50 transition-colors relative overflow-hidden group"
                    >
                      <span className="relative z-10">Book Appointment</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>
            {/* end 300 content section  */}
             {/* content */}
                   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Experience Luxury Like Never Before
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Step into a world of comfort, elegance, and unforgettable hospitality.
            Designed for premium travellers, these luxury spaces combine world-class
            amenities with breathtaking views and exceptional service.
          </p>
        </div> */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/Webpimages/write me 👇 tap link.webp"
              alt="Celebrity-style model call girl in Delhi"
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
              Date Celebrity Models By Choosing Our Call Girls in Delhi
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              It is no longer a far-fetched dream to date a celebrity-like model when you decide on Delhi Girl. Our celebrity escorts have a luxurious feel about them, gorgeous looks, fine grooming and a graceful and assured manner that will appeal to the elegant feel of Delhi. These are the women who can hold the space with grace and dignity, maintain the conversation and make it interesting, and make the atmosphere warm and beautifully written.
            </p>
             <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you are at a luxurious party, staying at a 5-star hotel, or want a low-key evening, celebrity call girls will make any moment special with their elegant touch. They are always ideal with clients who are sensitive to style, use delicate communication and behave with respect, hence do not appreciate a chaotic atmosphere.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              All the models are proven, well-chosen and prepared to fit well in high-end surroundings without difficulties. You have an individual who knows luxury etiquette, acts professionally and fits your energy naturally.
Our celebrity escorts are the ideal choice to those clients who desire exclusivity, confidence and a high-end companion who does not strive too hard to impress them. Their presence makes your evening easier and fuller and more meaningful as soon as they step into your house.

            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                Verified Profile
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                High Profile Models
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                24/7 Availability
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                Private &amp; Discreet
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-2xl font-bold text-purple-600">₹25,000</p>
              <a
                href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20book%20a%20celebrity-style%20model%20call%20girl%20in%20Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-medium shadow-md hover:opacity-90 transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

      </div>
                    </section>
                    {/* section */}
    <section className="relative bg-white py-24 px-4 md:px-10 overflow-hidden">

  {/* Soft Gradient Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-pink-500/20 rounded-full blur-[120px]" />
    <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-pink-700 bg-pink-50 rounded-full">
        Premium Escort Service in Delhi
      </span>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
        Book Escort Service in Delhi
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
          No Compromise, Only Satisfaction
        </span>
      </h2>

      {/* Content Card */}
      <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
        <p>
          Delhi Girl is convinced in rendering companionship which is real, cozy,
          and especially rewarding without any formalities and complications.
          Choosing our escort service in Delhi ensures a hassle-free, high-quality
          experience with verified profiles, classy behaviour, and complete privacy.
        </p>

        <p>
          No corners are cut — every escort is selected based on courtesy, emotional
          composure, and natural attractiveness. Whether you are a weary traveller,
          a businessman seeking relaxation, or someone looking for peaceful personal
          time, our service adapts effortlessly to your mood.
        </p>

        <p>
          We maintain hotel etiquette, smooth communication, and a simple booking
          process to keep your experience comfortable and stress-free. From
          independent escorts to celebrity-style models and Russian companions,
          each presence brings warmth that makes your time memorable.
        </p>

        <p>
          We believe in clarity and trust — real profiles, personal booking,
          pay-on-arrival, and genuine company. Every booking with Delhi Girl is not
          just a service, but a refined experience designed around your comfort.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-5">
        <a
          href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20book%20a%20model%20call%20girl%20in%20Delhi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-9 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold text-lg shadow-xl hover:scale-[1.03] transition"
        >
          Book Now
        </a>

        <a
          href="#profiles"
          className="px-9 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold text-lg hover:bg-gray-100 transition"
        >
          View Profiles
        </a>
      </div>
    </div>

    {/* RIGHT TRUST CARD */}
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Why Choose Delhi Girl?
      </h3>

      <ul className="space-y-6">
        {[
          "100% Real & Verified Profiles",
          "Complete Privacy & Discretion",
          "Pay-on-Arrival Facility",
          "Hotel & Home Etiquette Maintained",
          "Simple, Personal Booking Process",
        ].map((item, index) => (
          <li key={index} className="flex gap-4">
            <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600"></span>
            <span className="text-gray-700 text-base md:text-lg">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100">
        <p className="text-gray-700 text-sm leading-relaxed">
          Trusted by clients who value comfort, honesty, and refined companionship.
          Delhi Girl focuses on long-term trust, not shortcuts.
        </p>
      </div>
    </div>

  </div>
</section>

    {/* content */}
                            <section className="bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
                  <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-pink-100/40 blur-3xl"></div>
                
                  <div className="max-w-[95%] mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                      <motion.div
                        className="inline-flex items-center gap-2 bg-purple-100/60 border border-purple-200 px-5 py-2 rounded-full mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse"></div>
                        <span className="text-purple-700 font-medium tracking-wider">
                          PREMIUM EXPERIENCE
                        </span>
                      </motion.div>
                
                      <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        Get Premium Escort{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                         Service in Delhi at a 5-Star Hotel
                        </span>
                      </motion.h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                    </div>
                
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                      {/* Left Image & Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 relative"
                      >
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl z-10">
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-1 rounded-2xl">
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                                <Image
                                  src="/Webpimages/download34.webp"
                                  alt="Premium Body Spa"
                                  fill
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                  className="object-cover rounded-xl"
                                />
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                                  Most Popular
                                </div>
                              </div>
                
                              <div className="mt-6">
                                <div className="flex justify-between items-start">
                                  <h3 className="text-2xl font-bold text-gray-800">
                                    Premium Body Spa
                                  </h3>
                                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                                    ₹1999 First Visit
                                  </div>
                                </div>
                
                                <ul className="mt-4 space-y-2">
                                  {[
                                    "Couple Massage",
                                    "Jacuzzi Bath",
                                    "Private Room",
                                    "Oil & Cream Massage",
                                    "Aromatherapy",
                                  ].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                      <span className="text-purple-600 mr-2">✓</span>
                                      <span className="text-gray-700">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                
                                <a
                                  href="https://t.me/Tanuspa"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg mt-6"
                                >
                                  <FaTelegram className="text-xl mr-3" />
                                  Join Telegram Channel
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-100 rounded-full z-0 blur-xl"></div>
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-pink-100 rounded-full z-0 blur-lg"></div>
                      </motion.div>
                
                      {/* Right Text Content */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2"
                      >
                        <div className="max-w-lg">
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                             Our high-end escorts will be a touch of soft hospitality that will match well with the luxury hotels of Delhi. The presence of these call girls is very warm and calm, and they can make you relax after hard days of work or travelling. Their cleanliness, courtesy and mild conversation make you relaxed immediately.
                          </p>
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            You can be in rooms of The Leela, JW Marriott, Taj Palace, and The Oberoi, and all our escorts fit in that elite mood. They come unobtrusively, are gentlemanly towards the hotels and form a relaxing companion experience.
                            Business visitors, frequent travellers, and other clients believe our 5-star hotel escort service to be reliable, have checked profiles, and also find the company to be good companions. It is neat, high-quality, and ideal for quiet evenings or to spend the night.

                          </p>
                
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                              {
                                icon: "★",
                                title: "5-Star Hotels",
                                desc: "The Leela, JW Marriott & more",
                              },
                              {
                                icon: "✓",
                                title: "Verified Profiles",
                                desc: "Same person as the photos",
                              },
                              {
                                icon: "🤝",
                                title: "Pay After You Meet",
                                desc: "No advance payment",
                              },
                              {
                                icon: "🔒",
                                title: "Fully Discreet",
                                desc: "Privacy guaranteed",
                              },
                            ].map((f, i) => (
                              <div
                                key={i}
                                className="bg-white p-4 rounded-xl shadow-sm border border-purple-50 hover:shadow-md transition-all"
                              >
                                <div className="text-purple-600 text-2xl mb-2">{f.icon}</div>
                                <h4 className="font-medium text-gray-800">{f.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <a
                              href="#profiles"
                              className="flex-1 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition-all"
                            >
                              View Profiles
                            </a>

                            <a
                              href="https://api.whatsapp.com/send?phone=918826482370&text=Hi%2C%20I%27d%20like%20to%20book%20a%20model%20call%20girl%20in%20Delhi"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center bg-gradient-to-r from-pink-500 to-purple-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition-all"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </section>
                            {/* end content */}
                    {/* sectionss */}
                    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Delhi Girl As the Best Centre for Verified Escort Service?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our companionship is clean, reliable, and professional and supported by years of trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Check className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verified & Real Escort Profiles.</h3>
                  <p className="text-gray-400">Only real, professional and hygienic profiles are posted. No fake photos, no surprises.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">100% Privacy & Safe Coordination</h3>
                  <p className="text-gray-400">Your details remain private. Escorts come in the background without attracting attention.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pay-on-Arrival in Comfort to Clients</h3>
                  <p className="text-gray-400">We allow the clients to check the arrival of the escort in advance to pay.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Veteran Escorts who have Hotel Etiquette.</h3>
                  <p className="text-gray-400">Veteran Escorts who have Hotel Etiquette.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Availability of Escort 24/7 in NCR, Delhi</h3>
                  <p className="text-gray-400">Escorts are available 24 hours a day, whether late at night or early in the morning.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ideal Business Traveller, Corporate Clients.</h3>
                  <p className="text-gray-400">Serious, relaxed, and cool companionship, aimed at the high-profile clients.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
              <ul className="space-y-4">
                {['Real verified profiles', 'Pay on arrival only', '5-star hotel etiquette', 
                  'Professional companions', 'Safe & secure coordination', 'Immediate response'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* Booking Process */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Book Late Night Escort Service in Delhi Without an Advance?
            </h2>
            <p className="text-gray-400">Our easy, safe and pay-on-arrival system ensures your privacy is maintained.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Favourite Escort.',
                desc: 'Swipe through verified profiles by appearance, vibe and personality. Select the girl who suits your comfort.',
                icon: <UserCheck className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Share Hotel Details & Timing',
                desc: 'Give your address and the time of the day. Escorts are safe and secure around high-end hotels.',
                icon: <MessageCircle className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Obtain Anonymous Online Verification.',
                desc: 'We verify the profile, schedule, and arrival time on a private basis - then no prior notice is required.',
                icon: <Shield className="w-8 h-8" />
              },
              {
                step: '04',
                title: 'Pay after Escort Receives',
                desc: 'Your call girl comes very subtly. Only after she arrives at your hotel will payment be made.',
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

      

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-900/30 via-purple-900/30 to-blue-900/30 rounded-3xl p-12 backdrop-blur-sm border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Premium Call Girls in Delhi For Best Moment
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Simple, select your preferred profile and have that warm and comfortable companionship that is tailored to your comfort. Individual booking, certified escorts and hassle-free coordination ensured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#profiles"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-lg hover:opacity-90 transition-all"
              >
                Browse Verified Profiles
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918826482370"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 border border-gray-600 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all text-white text-center"
              >
                Contact for Booking
              </a>
            </div>
            <p className="text-gray-500 mt-6 text-sm">
              * Strictly for adults only. All services are legal and consensual.
            </p>
          </div>
        </div>
      </section>
    </div>
    
            
                
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
                                
                                <div
                                  className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ${
                                    openQuestion === faq.id ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                                  }`}
                                >
                                  <div className="pt-2 border-t border-gray-100">
                                    {faq.answer}
                                  </div>
                                </div>
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
    </main>
  );
}