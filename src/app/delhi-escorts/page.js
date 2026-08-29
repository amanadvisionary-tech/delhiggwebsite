import Delhi from "./Delhi";

export const metadata = {
  title: "Delhi Escort | Single Girl for Travel & Private Events",
  description: "Hire an elegant Delhi escort for dinner dates, parties & overnight stays. Fluent English, verified identity, safe companionship. Book 24×7 via WhatsApp or call.",
  alternates: { canonical: "/delhi-escorts" },
  openGraph: {
    title: "Delhi Escort | Single Girl for Travel & Private Events",
    description: "Hire an elegant Delhi escort for dinner dates, parties & overnight stays. Fluent English, verified identity, safe companionship. Book 24×7 via WhatsApp or call.",
    images: ["/Webpimages/JwMarriott_CP.webp"], 
    type: "website",
  },
  
};
export default function page() {
  return (
    <Delhi
      title="Delhi Escort — Elegant Companion for Travel & Private Events"
      subtitle="Hire a fluent-English, verified Delhi escort for dinner dates, parties & overnight stays — safe companionship, booked 24×7."
    />
  );
}
