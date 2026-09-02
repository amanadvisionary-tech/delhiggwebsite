import Servic from "./Servic";

export const metadata = {
  title: "Call Girl Service in Delhi | Verified & Discreet",
  description: "Book verified call girls in Delhi for hotel & home visits across Delhi NCR. Discreet WhatsApp booking, pay after you meet, same-day availability.",
  alternates: { canonical: "/delhi-call-girl-service" },
  // Reference list only — Google has ignored this tag for ranking since 2009.
  // Kept here so it's easy to see the target keyword set for backlink/anchor-text planning.
  keywords: [
    "Call Girl Service in Delhi",
    "Delhi Call Girl Service WhatsApp",
    "Verified Call Girls Delhi NCR",
    "Same Day Call Girl Service Delhi",
    "Call Girl Service near Aerocity",
    "24x7 Call Girl Service Delhi",
  ],
  openGraph: {
    title: "Call Girl Service in Delhi | Verified & Discreet",
    description: "Book verified call girls in Delhi for hotel & home visits across Delhi NCR. Discreet WhatsApp booking, pay after you meet, same-day availability.",
    images: ["/Webpimages/JwMarriott_CP.webp"],
    type: "website",
  },

};
export default function page() {
  return <Servic />;
}
