import { MetadataRoute } from "next";
import { getPortfolios } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolios = await getPortfolios();

  const portfolioUrls = portfolios.map((p) => ({
    url: `https://cchinvestments.ca/portfolios/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://cchinvestments.ca",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cchinvestments.ca/portfolios",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...portfolioUrls,
  ];
}
