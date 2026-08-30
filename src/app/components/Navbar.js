"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const pathname = usePathname();

  // On blog post pages always show solid navbar
  const isBlogPost = pathname?.startsWith("/blog/");

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Services = [
    { name: "Foreigner Staff", href: "/russian-escorts-in-delhi" },
    { name: "Air Hostess", href: "/air-hostess-escorts-in-delhi" },
    { name: "Independent Profile", href: "/independent-escorts-in-delhi" },
    // { name: "Russian Model", href: "/Category/Russianmodels" },
    { name: "High Profile", href: "/high-profile-escorts-in-delhi" },
    // { name: "Spa Staff", href: "/Category/spastaff" },
    { name: "College Girl", href: "/collage-call-girls-in-delhi" },
    
  ];
  const Locations = [
    { name: "Delhi Escorts", href: "/delhi-escorts" },
    { name: "Gurugram Escorts", href: "/call-girls-in-gurgaon" },
    { name: "Noida Escorts", href: "/call-girls-in-noida"},
    { name: "Aerocity Escorts", href: "/aerocity-escorts" },
    { name: "Connaught Place Escorts", href: "/call-girls-in-connaught-place" },
    { name: "Mahipalpur Escorts", href: "/call-girls-in-mahipalpur" },
    { name: "Dwarka Escorts", href: "/call-girls-in-dwarka" },
    { name: "Lajpat Nagar Escorts", href: "/call-girls-in-lajpat-nagar" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all ${
        isBlogPost || isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Delhi Girls
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-pink-600 transition">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-pink-600 transition">
            About us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              href="/model-call-girls-in-delhi" // <-- यहां तू default category page ka route दे
              className="flex items-center gap-1 hover:text-pink-600 transition"
            >
              Categories <ChevronDown className="w-4 h-4" />
            </Link>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 bg-white rounded-xl shadow-lg p-4 space-y-2 w-56"
                >
                  {Services.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block text-gray-700 hover:text-pink-600 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/cheap-call-girls-in-delhi" className="hover:text-pink-600 transition">
            Pricing
          </Link>
          <Link href="/blogs" className="hover:text-pink-600 transition">
            Blog
          </Link>
          <Link href="/delhi-call-girl-service" className="hover:text-pink-600 transition">
            Services
          </Link>
          

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsLocationsOpen(true)}
            onMouseLeave={() => setIsLocationsOpen(false)}
          >
            <Link 
              href="/escort-service-in-delhi" // <-- यहां तू default category page ka route दे
              className="flex items-center gap-1 hover:text-pink-600 transition"
            >
              Locations <ChevronDown className="w-4 h-4" />
            </Link>
            <AnimatePresence>
              {isLocationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 bg-white rounded-xl shadow-lg p-4 space-y-2 w-56"
                >
                  {Locations.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block text-gray-700 hover:text-pink-600 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/contact-us" className="hover:text-pink-600 transition">
            Contact us
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4 ml-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/918826482370"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 text-lg"
            >
              <FaWhatsapp />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>
                About us
              </Link>

              {/* Services inside mobile */}
              <div>
                <Link 
                  href="/model-call-girls-in-delhi" // <-- यहां भी default page का route दे
                  className="flex items-center gap-1 w-full text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories <ChevronDown className="w-4 h-4" />
                </Link>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {Services.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              
              <Link href="/cheap-call-girls-in-delhi" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/blogs" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/delhi-call-girl-service" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/escort-service-in-delhi" onClick={() => setIsMenuOpen(false)}>
                Locations
              </Link>
              <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                Contact us
              </Link>

              {/* Social */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 text-lg"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/918826482370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 text-lg"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
