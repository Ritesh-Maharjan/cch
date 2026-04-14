import { notFound } from "next/navigation";
import Image from "next/image";
import BackgroundSection from "../../components/layout/BackgroundSection";
import PortfolioBackgroundCarousel from "../../components/section/PortfolioBackgroundCarousel";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import ContactSingle from "@/app/components/section/ContactSingle";
import { getPortfolioBySlug, getPortfolios } from "@/lib/wordpress";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    return { title: "Portfolio not found" };
  }

  const ogImage =
    portfolio._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    portfolio.acf?.cover_image;

  return {
    title: portfolio.title.rendered,
    description: portfolio.acf.description,
    openGraph: {
      title: portfolio.title.rendered,
      description: portfolio.excerpt.rendered.replace(/<[^>]*>/g, ""),
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
  };
}

export default async function PortfolioPage({ params }: PageProps) {
  const { slug } = await params;
  const [portfolio, allPortfolios] = await Promise.all([
    getPortfolioBySlug(slug),
    getPortfolios(),
  ]);

  if (!portfolio) {
    notFound();
  }

  const featuredImage =
    portfolio?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    portfolio?.acf?.cover_image ||
    "";

  return (
    <>
      <BackgroundSection variant="gradient" className="py-20">
        <div className=" mx-auto">
          <h1 className="mt-40 w-full max-w-7xl text-4xl md:text-5xl font-bold mb-6">
            {portfolio.title.rendered}
          </h1>

          {featuredImage ? (
            <div className="pt-8 lg:pb-12 w-full">
              <div className="relative w-full max-w-7xl h-56 sm:h-72 md:h-96 mx-auto overflow-hidden rounded-lg">
                <Image
                  src={featuredImage}
                  alt={portfolio.title.rendered}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 1200px"
                  priority
                />
              </div>
            </div>
          ) : null}

          <div className="pt-8 lg:pt-25 space-y-4 w-full max-w-7xl mx-auto flex lg:flex-row flex-col gap-12 mb-40">
            <div>
              <Image
                src={portfolio.acf?.project_logo || ""}
                alt={portfolio.title.rendered + " logo"}
                width={400}
                height={400}
                className="mb-4 mx-auto"
              />
              <div className="lg:pl-7.5 mx-12 space-y-4">
                <p>
                  <strong>Region:</strong> {portfolio.acf?.region}
                </p>
                <p>
                  <strong>Industry:</strong> {portfolio.acf?.industry}
                </p>
                <p>
                  <strong>Year:</strong> {portfolio.acf?.year}
                </p>
                <Link href="/" className="text-blue-500 hover:underline">
                  <Button variant="secondary" className="w-40">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:pl-12 lg:border-l border-black lg:flex lg:items-center">
              <div className="space-y-6 text-lg text-white">
                {(portfolio.acf?.description || "")
                  .split(/\r?\n\r?\n/)
                  .filter((chunk: string) => chunk.trim().length > 0)
                  .map((chunk: string, i: number) => (
                    <p key={i}>{chunk}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <PortfolioBackgroundCarousel items={allPortfolios} />
      </BackgroundSection>
      <ContactSingle />
    </>
  );
}
