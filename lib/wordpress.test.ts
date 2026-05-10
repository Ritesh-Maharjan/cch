import { describe, it, expect, vi, beforeEach } from "vitest";
import { getPortfolios, getPortfolioBySlug } from "./wordpress";

const mockPortfolio = {
  id: 1,
  slug: "test-portfolio",
  title: { rendered: "Test Portfolio" },
  excerpt: { rendered: "<p>Test excerpt</p>" },
  acf: {
    project_logo: "/logo.png",
    region: "Canada",
    industry: "Technology",
    year: 2023,
    description: "A test portfolio",
    cover_image: "/cover.jpg",
  },
};

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("getPortfolios", () => {
  it("returns array of portfolios on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([mockPortfolio]),
      }),
    );

    const result = await getPortfolios();
    expect(result).toEqual([mockPortfolio]);
  });

  it("throws when response is not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      }),
    );

    await expect(getPortfolios()).rejects.toThrow("Failed to fetch portfolios: 500 Internal Server Error");
  });
});

describe("getPortfolioBySlug", () => {
  it("returns the first portfolio when slug matches", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: () => Promise.resolve([mockPortfolio]),
      }),
    );

    const result = await getPortfolioBySlug("test-portfolio");
    expect(result).toEqual(mockPortfolio);
  });

  it("returns null when array is empty", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: () => Promise.resolve([]),
      }),
    );

    const result = await getPortfolioBySlug("nonexistent");
    expect(result).toBeNull();
  });

  it("returns null on 404", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        statusText: "Not Found",
      }),
    );

    const result = await getPortfolioBySlug("nonexistent");
    expect(result).toBeNull();
  });

  it("throws on non-ok responses other than 404", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      }),
    );

    await expect(getPortfolioBySlug("test-portfolio")).rejects.toThrow(
      'Failed to fetch portfolio "test-portfolio": 500 Internal Server Error',
    );
  });
});
