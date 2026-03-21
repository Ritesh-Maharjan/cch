export const WORDPRESS_API_URL = "https://mediumaquamarine-partridge-477378.hostingersite.com/wp-json/wp/v2";

export const REVALIDATE_TIME = 3600; // 1 hour in seconds

export const ENDPOINTS = {
    PORTFOLIO: `${WORDPRESS_API_URL}/portfolio`,
    PORTFOLIO_BY_ID: (id: number) => `${WORDPRESS_API_URL}/portfolio/${id}`,
} as const;