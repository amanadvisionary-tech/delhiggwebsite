import HotelEscorts from "./HotelEscorts";

export const metadata = {
  title: "Hotel Escorts in Delhi - 5-Star Incall, Verified | Delhi Girl",
  description: "Hotel escorts in Delhi for 5-star & business hotels across every NCR location — verified profiles, room-level discretion, pay after you meet. Chat now!",
  alternates: { canonical: "/hotel-escorts-in-delhi" },
  // Reference list only — Google has ignored this tag for ranking since 2009.
  // Kept here so it's easy to see the target keyword set for backlink/anchor-text planning.
  keywords: [
    "Hotel Escorts in Delhi",
    "5 Star Hotel Call Girls Delhi",
    "Hotel Call Girl Service Delhi",
    "Incall Escorts in Delhi",
    "Hotel Escorts near Aerocity",
    "Business Hotel Escorts Delhi",
    "Verified Hotel Escorts Delhi NCR",
    "Book Hotel Escort WhatsApp",
    "24x7 Hotel Escorts Delhi",
  ],
  openGraph: {
    title: "Hotel Escorts in Delhi - 5-Star Incall, Verified | Delhi Girl",
    description: "Hotel escorts in Delhi for 5-star & business hotels across every NCR location — verified profiles, room-level discretion, pay after you meet. Chat now!",
    images: ["/Webpimages/Model2.webp"],
    type: "website",
  },
};

export default function page() {
  return <HotelEscorts />;
}
