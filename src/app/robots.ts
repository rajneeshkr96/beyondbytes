import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/","/post/*"],
        disallow: ["/me/*", "/profile/*","/adminstrative/*","/write/*"],
      },
    ],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  };
}