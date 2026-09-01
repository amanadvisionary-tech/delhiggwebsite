import HomeClient from "./HomeClient";

export const metadata = {
  title: "Delhi Girl — Call Girls & Escorts in Delhi NCR | Book Now",
  description: "Book verified call girls & escorts across Delhi, Aerocity, Gurgaon, Noida & Dwarka. Discreet 5-star hotel visits, pay after you meet. Chat on WhatsApp now.",
  alternates: { canonical: "/" },
  // Reference list only — Google has ignored this tag for ranking since 2009.
  // Kept here so it's easy to see the target keyword set for backlink/anchor-text planning.
  keywords: [
    "Call Girls in Delhi NCR",
    "Escort Service in Delhi",
    "Call Girls near Aerocity Delhi",
    "Independent Escorts in Delhi",
    "Verified Escorts in Delhi NCR",
    "Call Girls in Dwarka Delhi",
    "Call Girls in Connaught Place Delhi",
    "High Profile Escorts Delhi",
    "Book Call Girls Delhi WhatsApp",
    "Same Day Call Girl Booking Delhi",
  ],
  openGraph: {
    title: "Delhi Girl — Call Girls & Escorts in Delhi NCR | Book Now",
    description: "Book verified call girls & escorts across Delhi, Aerocity, Gurgaon, Noida & Dwarka. Discreet 5-star hotel visits, pay after you meet. Chat on WhatsApp now.",
    images: ["/Webpimages/JwMarriott_CP.webp"],
    type: "website",
  },

};
export default function page() {
  return <HomeClient />;
}
