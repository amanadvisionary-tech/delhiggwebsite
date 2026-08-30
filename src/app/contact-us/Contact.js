"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New enquiry from delhigirl.in:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || "Not provided"}\nMessage: ${formData.message || "Not provided"}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918826482370&text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="bg-neutral-950 text-white">
      
      {/* HERO SECTION */}
      <section
  className="relative py-28 bg-cover bg-center"
  style={{
    backgroundImage: "url('/Webpimages/hotel-lounge-chandelier.webp')",
  }}
>
  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 bg-black/70"></div> */}

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
      Contact <span className="text-purple-400">Delhi Girl</span>
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
      Have a question, a booking request, or need help choosing the right companion?
      Message us and we&apos;ll get back to you quickly, anywhere across Delhi NCR.
    </p>
  </div>
</section>


      {/* CONTENT SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Get in Touch With Us
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              At delhigirl.in, every booking starts with a simple conversation. Whether you&apos;re
              planning a hotel visit, a dinner date, or need help picking the right companion for
              your evening, our team is here to help — quickly, discreetly, and without pressure.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              We keep every enquiry private. From your first message to the moment your companion
              arrives, the same standard of discretion applies — no unnecessary questions, no
              details shared beyond what&apos;s needed to confirm the booking.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Clients across Delhi NCR reach out to us because bookings are straightforward and
              response times are fast. Tell us your area and preferred time on WhatsApp, and
              we&apos;ll take it from there.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              Why Contact Delhi Girl?
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Fast response on WhatsApp</li>
              <li>✔ Verified companions across Delhi NCR</li>
              <li>✔ Complete privacy and discretion</li>
              <li>✔ No advance payment required</li>
              <li>✔ Support for first-time and repeat clients</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-6">
              No matter your query, our team ensures fast responses and transparent communication.
              Contact us today and get a verified companion confirmed within minutes.
            </p>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-neutral-900 rounded-3xl p-10 shadow-2xl border border-neutral-800">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                className="w-full px-5 py-4 bg-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                className="w-full px-5 py-4 bg-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                className="w-full px-5 py-4 bg-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                className="w-full px-5 py-4 bg-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-400 to-yellow-500 text-black font-semibold text-lg hover:opacity-90 transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER INFO */}
      <section className="bg-black py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-400 leading-relaxed">
            Delhi Girl operates across Aerocity, Connaught Place, Dwarka, Mahipalpur, Lajpat Nagar,
            Noida, and Gurgaon. Message us anytime — most enquiries get a reply within minutes.
          </p>

          <p className="mt-6 text-purple-400 font-semibold">
            ✨ Fast • Discreet • Verified — Book with Delhi Girl ✨
          </p>
        </div>
      </section>

    </main>
  );
}
