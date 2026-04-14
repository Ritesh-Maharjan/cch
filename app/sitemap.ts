import { MetadataRoute } from "next";
import { getPortfolios } from "@/lib/wordpress";
import { SITE_URL } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolios = await getPortfolios();

  const portfolioUrls = portfolios.map((p) => ({
    url: `${SITE_URL}/portfolios/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/portfolios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...portfolioUrls,
  ];
}
