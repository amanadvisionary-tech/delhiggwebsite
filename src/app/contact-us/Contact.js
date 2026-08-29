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
    console.log(formData);
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <main className="bg-neutral-950 text-white">
      
      {/* HERO SECTION */}
      <section
  className="relative py-28 bg-cover bg-center"
  style={{
    backgroundImage: "url('/Webpimages/download27.webp')",
  }}
>
  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 bg-black/70"></div> */}

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
      Contact <span className="text-purple-400">Delhi Girl</span>
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
      Begin your luxury wellness journey with Delhi Girl. 
      Reach out to us for bookings, enquiries, or personalized spa experiences across Delhi NCR.
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
              At delhigirl.in, we believe true relaxation begins with a simple conversation.
              Whether you are looking for a premium body massage, couple spa therapy, or 
              stress-relief treatment in Delhi, our team is always here to assist you with care,
              discretion, and professionalism.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Our luxury spa services are designed for individuals who value privacy, hygiene,
              and world-class wellness experiences. From the moment you contact Delhi Girl, you
              will experience personalized attention and expert guidance.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Clients across Delhi NCR trust Delhi Girl for premium spa services delivered in 
              a calm, soothing, and luxurious environment. We understand your wellness needs 
              and help you choose therapies that truly rejuvenate your body and mind.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
              Why Contact Delhi Girl?
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Easy spa appointment booking</li>
              <li>✔ Luxury spa services in Delhi NCR</li>
              <li>✔ Professional and trained therapists</li>
              <li>✔ Complete privacy and confidentiality</li>
              <li>✔ Clean, hygienic & premium environment</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-6">
              No matter your query, our team ensures fast responses and transparent communication.
              Contact us today and take the first step towards relaxation.
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
                className="w-full px-5 py-4 bg-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-5 py-4 bg-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 bg-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 bg-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-400 to-yellow-500 text-black font-semibold text-lg hover:opacity-90 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER INFO */}
      <section className="bg-black py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-400 leading-relaxed">
            Delhi Girl operates across premium locations in Delhi NCR, offering 
            world-class spa and massage services. Contact us anytime to experience 
            luxury, relaxation, and wellness like never before.
          </p>

          <p className="mt-6 text-purple-400 font-semibold">
            ✨ Relax • Refresh • Rejuvenate with Delhi Girl ✨
          </p>
        </div>
      </section>

    </main>
  );
}
