import { notFound } from "next/navigation";
import Image from "next/image";
import BackgroundSection from "../../components/layout/BackgroundSection";
import PortfolioBackgroundCarousel from "../../components/section/PortfolioBackgroundCarousel"; 

type PageProps = {
    params: Promise<{ slug: string }>;
};

async function fetchPortfolio(slug: string) {
    const url =
        "https://mediumaquamarine-partridge-477378.hostingersite.com/wp-json/wp/v2/portfolio?_embed&slug=" +
        encodeURIComponent(slug);

    const res = await fetch(url, {
        next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

export default async function PortfolioPage({ params }: PageProps) {
    const { slug } = await params;
    const portfolio = await fetchPortfolio(slug);

    if (!portfolio) {
        notFound();
    }

    const featuredImage =
        portfolio?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        portfolio?.acf?.cover_image ||
        "";

    return (
        <BackgroundSection variant="gradient" className="py-20">
            <div className=" mx-auto">
                <h1 className=" max-w-7xl text-4xl md:text-5xl font-bold mb-6">
                    {portfolio.title.rendered}
                </h1>


                {featuredImage ? (
                    <div className="mb-8 max-w-4xl mx-auto">
                        <Image
                            src={featuredImage}
                            alt={portfolio.title.rendered}
                            width={1200}
                            height={600}
                            className="rounded-lg"
                        />
                    </div>
                ) : null}

                <div className="space-y-4 w-full flex flex-row gap-12">
                    <div>
                        <p>
                            <strong>Region:</strong> {portfolio.acf?.region}
                        </p>
                        <p>
                            <strong>Industry:</strong> {portfolio.acf?.industry}
                        </p>
                        <p>
                            <strong>Year:</strong> {portfolio.acf?.year}
                        </p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-700 mb-8">
                            {portfolio.acf?.description}
                        </p>
                    </div>
                </div>
            </div>  
            <PortfolioBackgroundCarousel />
        </BackgroundSection>
    );
}