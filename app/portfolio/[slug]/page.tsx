import { notFound } from "next/navigation";
import Image from "next/image";

async function fetchPortfolio(slug: string) {
    const res = await fetch(
        `https://mediumaquamarine-partridge-477378.hostingersite.com/wp-json/wp/v2/portfolio?slug=${slug}`
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();
    return data.length > 0 ? data[0] : null; // Return the first matching portfolio
}

export default async function PortfolioPage({ params }: { params: { slug: string } }) {
    const portfolio = await fetchPortfolio(params.slug);

    if (!portfolio) {
        notFound(); // Show a 404 page if the portfolio is not found
    }

    return (
        <section className="my-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {portfolio.title.rendered}
                </h1>
                <p className="text-lg text-gray-700 mb-8">{portfolio.acf.description}</p>
                <div className="mb-8">
                    <Image
                        src={portfolio.acf.cover_image}
                        alt={portfolio.title.rendered}
                        width={1200}
                        height={600}
                        className="rounded-lg"
                    />
                </div>
                <div className="space-y-4">
                    <p>
                        <strong>Region:</strong> {portfolio.acf.region}
                    </p>
                    <p>
                        <strong>Industry:</strong> {portfolio.acf.industry}
                    </p>
                    <p>
                        <strong>Year:</strong> {portfolio.acf.year}
                    </p>
                </div>
            </div>
        </section>
    );
}