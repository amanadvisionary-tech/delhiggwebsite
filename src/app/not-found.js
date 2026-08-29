import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6 py-28">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-extrabold text-purple-400 mb-4">404</h1>
        <p className="text-xl font-semibold mb-2">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 font-medium hover:border-purple-400 hover:text-purple-400 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
