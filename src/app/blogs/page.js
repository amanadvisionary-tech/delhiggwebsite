import Blogs from "./Blogs";

export const metadata = {
  title: "Blog - Tips, Guides & Updates | Delhi Girl",
  description:
    "Delhi Girl blog covering Delhi, Gurgaon, Noida & Aerocity — practical guides and updates on premium escort service. Read the latest posts now.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog - Tips, Guides & Updates | Delhi Girl",
    description:
      "Delhi Girl blog covering Delhi, Gurgaon, Noida & Aerocity — practical guides and updates on premium escort service. Read the latest posts now.",
    url: "/blogs",
    type: "website",
  },
};

export default function Page() {
  return <Blogs />;
}
