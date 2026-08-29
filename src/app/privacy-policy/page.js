export const metadata = {
  title: "Privacy Policy",
  description: "Read the Delhi Girl privacy policy to understand what information we collect through this website and how it is used.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-28">
        <h1 className="text-4xl font-extrabold mb-8">Privacy Policy</h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          This Privacy Policy explains what information Delhi Girl (&quot;we&quot;, &quot;us&quot;) collects
          through this website, and how that information is used and protected.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Information We Collect</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          When you use our contact form or reach out via WhatsApp or Telegram, we may collect the
          name, phone number, email address, and message you choose to provide. We do not require
          you to create an account or provide payment details through this website.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">How We Use Information</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Information you submit is used only to respond to your enquiry and coordinate bookings.
          We do not sell or rent your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Cookies</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          This site may use basic cookies or similar technologies to keep the site functioning
          correctly and to understand overall site usage. You can disable cookies in your browser
          settings at any time.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-4">Contact</h2>
        <p className="text-gray-300 leading-relaxed">
          If you have questions about this policy, please reach us via the details on our{" "}
          <a href="/contact-us" className="text-purple-400 underline">Contact Us</a> page.
        </p>
      </section>
    </main>
  );
}
