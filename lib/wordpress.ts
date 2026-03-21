import { ENDPOINTS, REVALIDATE_TIME } from "./constants";

export interface PortfolioItem {
    id: number;
    title: {
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
}

export async function getPortfolios(): Promise<PortfolioItem[]> {
    try {
        const res = await fetch(`${ENDPOINTS.PORTFOLIO}?_embed`, {
            next: { revalidate: REVALIDATE_TIME },
        });
        if (!res.ok) throw new Error("Failed to fetch portfolios");
        return res.json();
    } catch (error) {
        console.error("Error fetching portfolios:", error);
        return [];
    }
}

export async function getPortfolioById(id: number): Promise<PortfolioItem | null> {
    try {
        const res = await fetch(`${ENDPOINTS.PORTFOLIO_BY_ID(id)}?_embed`, {
            next: { revalidate: REVALIDATE_TIME },
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Error fetching portfolio:", error);
        return null;
    }
}