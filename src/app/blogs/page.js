import Blogs from "./Blogs";

export const metadata = {
  title: "Blog | Delhi Girl – Tips, Guides & Updates",
  description:
    "Read the Delhi Girl blog for guides, tips, and updates on premium escort service across Delhi, Gurgaon, Noida, and Aerocity.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | Delhi Girl – Tips, Guides & Updates",
    description:
      "Read the Delhi Girl blog for guides, tips, and updates on premium escort service across Delhi, Gurgaon, Noida, and Aerocity.",
    url: "/blogs",
    type: "website",
  },
};

export default function Page() {
  return <Blogs />;
}
