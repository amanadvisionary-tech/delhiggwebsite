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
  "/call-girls-in-mahipalpur",
  "/call-girls-in-dwarka",
  "/call-girls-in-lajpat-nagar",
  "/privacy-policy",
  "/terms-of-service",
  "/discretion-policy",
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
