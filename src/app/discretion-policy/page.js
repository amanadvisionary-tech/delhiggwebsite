export const metadata = {
  title: "Discretion Policy",
  description: "How Delhi Girl protects client privacy and confidentiality across every enquiry and booking.",
  alternates: {
    canonical: "/discretion-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DiscretionPolicyPage() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-28">
        <h1 className="text-4xl font-extrabold mb-8">Discretion Policy</h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          Client privacy is a core part of how we operate. This page explains the steps we take to
          keep every enquiry and booking confidential.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Confidential Communication</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          All enquiries made through WhatsApp, Telegram, or our contact form are handled privately
          by our team and are not shared with third parties.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Discreet Arrangements</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Booking details, hotel or location information, and personal details shared during an
          enquiry are used solely to coordinate the requested service.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Your Responsibility</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We encourage clients to communicate through the official contact channels listed on our{" "}
          <a href="/contact-us" className="text-purple-400 underline">Contact Us</a> page to keep
          all communication secure and verifiable.
        </p>
      </section>
    </main>
  );
}
