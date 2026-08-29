'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import { FaHotel, FaHome, FaBuilding } from "react-icons/fa";
import { Check, Shield, Clock,  Hotel, CreditCard, MessageCircle, UserCheck } from 'lucide-react';
import { HiLocationMarker } from "react-icons/hi";

export default function CTASection() {
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
const features = [
  { id: 1, title: 'Expertise', desc: 'We leverage over 15 years of experience to deliver high-quality, tailored solutions for every client.', color: 'from-yellow-100 to-yellow-50', dot: 'bg-yellow-400' },
  { id: 2, title: 'Custom Solutions', desc: 'Each solution is personalized, ensuring your business gets the exact tools it needs to succeed.', color: 'from-violet-100 to-violet-50', dot: 'bg-violet-500' },
  { id: 3, title: 'Customer-Focused', desc: 'We prioritize your satisfaction and aim to exceed your expectations in every project we take on.', color: 'from-pink-100 to-pink-50', dot: 'bg-pink-400' },
  { id: 4, title: 'Innovation', desc: 'We stay ahead of the curve, implementing the latest technologies to keep your business on the cutting edge.', color: 'from-sky-100 to-sky-50', dot: 'bg-sky-500' },
  { id: 5, title: 'Flexibility', desc: 'We understand that businesses change, and we offer solutions that can adapt to your evolving needs.', color: 'from-green-100 to-green-50', dot: 'bg-green-400' },
  { id: 6, title: 'Quality Commitment', desc: 'We are committed to delivering solutions that meet the highest standards of quality, ensuring long-term success.', color: 'from-rose-100 to-rose-50', dot: 'bg-rose-400' },
]
  return (
    <>
    {/* content */}
                   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

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

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/@stepsister_videos_2025_hd • Milkshake Website Builder.jpeg"  // ⭐ apni image yaha lagao
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
                    {/* next section */}
                    {/* cont */}
                                        <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
                                          <div className="max-w-7xl w-full">
                                            <div className="relative">
                                              {/* Main content card */}
                                              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
                                                
                                                {/* Gradient header stripe */}
                                                {/* <div className="relative h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"></div> */}
                                                
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
                                                  
                                                  {/* Text Content */}
                                                  <div className="space-y-6 lg:pr-8">
                                                    <div>
                                                      <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-600 text-sm font-medium mb-4">
                                                        Featured Content
                                                      </span>
                                                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                                        Modern Design with <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stunning Gradient</span> Effects
                                                      </h1>
                                                    </div>
                                                    
                                                    <div className="space-y-4 text-gray-600 leading-relaxed">
                                                      <p>
                                                        Welcome to our modern content section, designed with a captivating purple-to-pink gradient theme. 
                                                        This design leverages Next.js and Tailwind CSS to create a visually stunning and performant user 
                                                        experience. The gradient flow from purple-600 to pink-600 creates a dynamic visual hierarchy that 
                                                        guides the users attention through the content.
                                                      </p>   
                                                      <p>
                                                        The implementation uses Tailwinds gradient utilities for a subtle yet engaging effect. Notice how 
                                                        the gradient accents create depth without overwhelming the content. This approach ensures readability 
                                                        while maintaining visual appeal.
                                                      </p>                          
                                                      <p>
                                                        Responsive design is built in with mobile-first breakpoints. The layout adapts seamlessly from 
                                                        mobile to desktop, with the image and text reordering naturally. The clean white background ensures 
                                                        the content remains the focal point while gradient elements provide visual interest.
                                                      </p>                               
                                                      <p>
                                                        This component demonstrates how to effectively use color gradients in modern web design. The 
                                                        purple-pink combination evokes creativity, innovation, and energy - perfect for technology, 
                                                        design, or creative industry applications.
                                                      </p>
                                                    </div>
                                                    
                                                    <div className="flex flex-wrap gap-4 pt-4">
                                                      <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                                                        Learn More
                                                      </button>
                                                      <button className="px-6 py-3 rounded-xl bg-transparent text-gray-700 font-semibold border border-gray-300 hover:border-purple-400 hover:text-purple-700 transition-all duration-300">
                                                        View Examples
                                                      </button>
                                                    </div>
                                                    
                                                    {/* Stats */}
                                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                                      <div className="text-center">
                                                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">98%</div>
                                                        <div className="text-sm text-gray-500">Satisfaction</div>
                                                      </div>
                                                      <div className="text-center">
                                                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
                                                        <div className="text-sm text-gray-500">Support</div>
                                                      </div>
                                                      <div className="text-center">
                                                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5.0</div>
                                                        <div className="text-sm text-gray-500">Rating</div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  
                                                  {/* Image Section */}
                                                  <div className="relative flex items-center justify-center lg:justify-end">
                                                    <div className="relative w-full max-w-md">
                                                      {/* Main image container */}
                                                      <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                                                        <div className="aspect-video relative bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                                                          {/* Placeholder image - replace with your actual image */}
                                                          <div className="text-center p-8">
                                                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                                              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                              </svg>
                                                            </div>
                                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Content</h3>
                                                            <p className="text-gray-600">Replace with your image</p>
                                                            <p className="text-sm text-purple-600 mt-4">Recommended: 800×600px</p>
                                                          </div>
                                                        </div>
                                                        {/* Image caption with gradient */}
                                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 p-3">
                                                          <p className="text-white text-sm font-medium text-center">Modern gradient design</p>
                                                        </div>
                                                      </div>
                                                      {/* Gradient accent element */}
                                                      <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                        NEW
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                {/* Footer with subtle gradient */}
                                                <div className="px-8 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-gray-200">
                                                  <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
                                                    <div>Gradient Content Section • Built with Next.js & Tailwind</div>
                                                    <div className="flex space-x-4">
                                                      <a href="#" className="hover:text-purple-600 transition-colors font-medium">Share</a>
                                                      <a href="#" className="hover:text-pink-600 transition-colors font-medium">Save</a>
                                                      <a href="#" className="hover:text-purple-600 transition-colors font-medium">Export</a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* next */}
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
    {/* nexrt section */}
    {/* iCON LOCATION */}
                <section className="py-24 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                      className="text-center mb-20 relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Decorative Tag */}
                      <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-5 py-2 rounded-full mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse"></div>
                        <span className="text-purple-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
                      </motion.div>
                      
                      {/* Heading */}
                      <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        Premium{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          Hotel Outlets
                        </span>
                      </motion.h2>
                      
                      {/* Subheading */}
                      <motion.p
                        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        Discover our exclusive spa outlets at top luxury hotels across the city
                      </motion.p>
                      
                      {/* Decorative line */}
                      <motion.div
                        className="flex justify-center mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </motion.div>
                    </motion.div>
    
                    {/* Outlets Grid */}
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                      {outlets.map((outlet, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: true, amount: 0.2 }}
                          whileHover={{ 
                            y: -10,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                          }}
                          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-purple-100 relative overflow-hidden group"
                        >
                          {/* Rating Ribbon */}
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3 fill-white" />
                            <span>{outlet.rating}</span>
                          </div>
                          
                          {/* Icon */}
                          <div className="flex justify-center mb-6">
                            <div className="relative">
                              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-full shadow-inner group-hover:shadow-md transition-all duration-300">
                                {outlet.icon}
                              </div>
                              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                          </div>
    
                          {/* Hotel Name */}
                          <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                            {outlet.name}
                          </h3>
                          
                          {/* Tag */}
                          <div className="inline-block bg-purple-50 border border-purple-200 text-purple-700 text-xs px-3 py-1 rounded-full mb-4">
                            {outlet.tag}
                          </div>
    
                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {outlet.desc}
                          </p>
                          
                          {/* Decorative line */}
                          <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent w-3/4 mx-auto group-hover:via-pink-400 transition-colors duration-300"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>
                {/* END iCON LOCATION */}
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
                      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group h-[550px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                          loading="lazy"
                          src="/images/6637.jpg"
                          alt="Luxury Spa Experience"
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
                          The{" "}
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                            Ultimate Spa Journey
                            <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full"></div>
                          </span>
                        </h2>
                      </div>
                
                      {/* Enhanced Content with modern list */}
                      <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                        <p>
                          At <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Delhi Body Spa</strong>, 
                          every treatment is designed to be more than just a service—it&apos;s an 
                          experience. Our luxurious spa is a haven for those seeking tranquility, 
                          where elegant interiors blend seamlessly with calming aromas and soothing 
                          melodies.
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
                        </div>
                
                        <p>
                          With skilled foreign therapists and expert techniques, our treatments merge ancient healing 
                          traditions with modern relaxation methods. Step into a world of indulgence, let go of your worries, 
                          and embrace the true essence of wellness.
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
                          href="#contact"
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
                {/* 5-Star Hotel Service */}
                      <section className="py-16 px-4 md:px-8 bg-gray-900/50">
                        <div className="max-w-7xl mx-auto">
                          <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 mb-4">
                              <Hotel className="w-8 h-8 text-gold-400" />
                              <h2 className="text-3xl md:text-4xl font-bold">Premium 5-Star Hotel Escort Service</h2>
                            </div>
                            <p className="text-gray-400 max-w-3xl mx-auto">
                              Luxury companionship matching the elegance of Delhi&apos;s finest hotels
                            </p>
                          </div>
                
                          <div className="grid md:grid-cols-3 gap-8">
                            {[
                              {
                                hotel: 'The Leela Palace',
                                desc: 'Elite companions blending seamlessly with royal ambiance',
                                color: 'from-emerald-500 to-teal-400'
                              },
                              {
                                hotel: 'JW Marriott',
                                desc: 'Professional escorts for business travelers',
                                color: 'from-blue-500 to-cyan-400'
                              },
                              {
                                hotel: 'Taj Palace & Oberoi',
                                desc: 'Premium service for discerning clients',
                                color: 'from-purple-500 to-pink-400'
                              }
                            ].map((item, idx) => (
                              <div key={idx} className="group">
                                <div className={`bg-gradient-to-br ${item.color} p-0.5 rounded-2xl`}>
                                  <div className="bg-gray-900 rounded-2xl p-6 h-full">
                                    <h3 className="text-xl font-bold mb-3">{item.hotel}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>
                      {/* Features Grid */}
                            <section className="py-16 px-4 md:px-8 bg-gray-900/50">
                              <div className="max-w-7xl mx-auto">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {[
                                    {
                                      title: 'Verified Profiles',
                                      desc: 'Only real, professional profiles with authentic photos',
                                      icon: '✅'
                                    },
                                    {
                                      title: '100% Privacy',
                                      desc: 'Complete confidentiality and discreet coordination',
                                      icon: '🔒'
                                    },
                                    {
                                      title: '24/7 Availability',
                                      desc: 'Round-the-clock service across Delhi NCR',
                                      icon: '⏰'
                                    },
                                    {
                                      title: 'Hotel Etiquette',
                                      desc: 'Trained escorts familiar with 5-star hotel protocols',
                                      icon: '⭐'
                                    },
                                    {
                                      title: 'Business Focus',
                                      desc: 'Ideal for corporate clients and travelers',
                                      icon: '💼'
                                    },
                                    {
                                      title: 'Multiple Categories',
                                      desc: 'From celebrity models to Russian companions',
                                      icon: '👥'
                                    }
                                  ].map((feature, idx) => (
                                    <div key={idx} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all group">
                                      <div className="text-2xl mb-4">{feature.icon}</div>
                                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                      <p className="text-gray-400">{feature.desc}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </section>
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
    </>
    
  );
}
