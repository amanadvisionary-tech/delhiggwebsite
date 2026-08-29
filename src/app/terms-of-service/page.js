export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for using the Delhi Girl website and booking enquiries.",
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-28">
        <h1 className="text-4xl font-extrabold mb-8">Terms of Service</h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          By using this website you agree to the following terms. Please read them carefully
          before making an enquiry or booking.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Eligibility</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          This website and the services referenced on it are intended only for adults aged 18
          years or older. By using this site you confirm that you meet this requirement.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Use of the Website</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Content on this website is provided for informational purposes to help you make an
          enquiry. We reserve the right to update, correct, or remove content at any time without
          prior notice.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Enquiries &amp; Bookings</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          All bookings are subject to confirmation via WhatsApp, Telegram, or phone. Final terms,
          pricing, and availability are confirmed directly with our team at the time of enquiry.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Limitation of Liability</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We make reasonable efforts to keep information on this site accurate and up to date but
          do not guarantee that all content is error-free at all times.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Contact</h2>
        <p className="text-gray-300 leading-relaxed">
          Questions about these terms can be sent via our{" "}
          <a href="/contact-us" className="text-purple-400 underline">Contact Us</a> page.
        </p>
      </section>
    </main>
  );
}
