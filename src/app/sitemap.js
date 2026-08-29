const siteUrl = "https://www.delhigirl.in";

const routes = [
  "",
  "/about-us",
  "/contact-us",
  "/blogs",
  "/model-call-girls-in-delhi",
  "/model-call-girls-in-delhi/Russianmodels",
  "/russian-escorts-in-delhi",
  "/air-hostess-escorts-in-delhi",
  "/independent-escorts-in-delhi",
  "/high-profile-escorts-in-delhi",
  "/collage-call-girls-in-delhi",
  "/cheap-call-girls-in-delhi",
  "/delhi-call-girl-service",
  "/escort-service-in-delhi",
  "/delhi-escorts",
  "/call-girls-in-gurgaon",
  "/call-girls-in-noida",
  "/aerocity-escorts",
  "/call-girls-in-connaught-place",
  "/privacy-policy",
  "/terms-of-service",
  "/discretion-policy",
];

const blogPosts = [
  { id: 1, date: "2025-08-20" },
  { id: 2, date: "2025-08-16" },
  { id: 3, date: "2025-08-12" },
  { id: 4, date: "2025-08-05" },
  { id: 5, date: "2025-07-28" },
  { id: 6, date: "2025-07-21" },
  { id: 7, date: "2026-08-21" },
  { id: 8, date: "2026-08-22" },
];

export default function sitemap() {
  const lastModified = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
