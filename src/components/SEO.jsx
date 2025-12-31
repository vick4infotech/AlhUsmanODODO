import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/images/ododo-portrait.jpg"
}) {
  const siteName = "Governor Ahmed Usman Ododo";
  const baseTitle = `${siteName} | Kogi State`;

  const origin =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "";
  const canonical = origin ? `${origin}${path}` : path;
  const ogImage = origin ? `${origin}${image}` : image;

  const finalTitle = title ? `${title} | ${siteName}` : baseTitle;
  const finalDescription =
    description ||
    "Official political portfolio and achievement showcase for His Excellency Alhaji Ahmed Usman Ododo, Executive Governor of Kogi State, Nigeria.";

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
