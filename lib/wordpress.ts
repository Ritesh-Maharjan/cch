import { ENDPOINTS, REVALIDATE_TIME } from "./constants";

export interface PortfolioItem {
  slug: string;
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  acf: {
    project_logo: string;
    region: string;
    industry: string;
    year: number;
    description: string;
    cover_image: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

export async function getPortfolios(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch(`${ENDPOINTS.PORTFOLIO}?_embed`, {
      next: { revalidate: REVALIDATE_TIME },
    });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch portfolios: ${res.status} ${res.statusText}`,
      );
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    throw error;
  }
}

export async function getPortfolioBySlug(
  slug: string,
): Promise<PortfolioItem | null> {
  try {
    const res = await fetch(ENDPOINTS.PORTFOLIO_BY_SLUG(slug), {
      next: { revalidate: REVALIDATE_TIME },
    });
    if (res.status === 404) return null;
    if (!res.ok) {
      throw new Error(
        `Failed to fetch portfolio "${slug}": ${res.status} ${res.statusText}`,
      );
    }
    const data: PortfolioItem[] = await res.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error fetching portfolio by slug:", error);
    throw error;
  }
}
