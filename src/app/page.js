import HomeClient from "./HomeClient";

export const metadata = {
  title: "Delhi Girl – Premium Escort Service in Delhi | Trusted Companions",
  description: "Delhi Girl offers premium escort service in Delhi with verified companions across hotels, homes, Gurgaon, Noida, and Aerocity. Book discreetly.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Delhi Girl – Premium Escort Service in Delhi | Trusted Companions",
    description: "Delhi Girl offers premium escort service in Delhi with verified companions across hotels, homes, Gurgaon, Noida, and Aerocity. Book discreetly.",
    images: ["/Webpimages/JwMarriott_CP.webp"], 
    type: "website",
  },
  
};
export default function page() {
  return <HomeClient />;
}
