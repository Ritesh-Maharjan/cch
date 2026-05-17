import { getPortfolios } from "@/lib/wordpress";
import PortfolioList from "../components/section/PortfolioList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolios",
  description: "Investment that we currently manage",
};

const PortfoliosPage = async () => {
  const data = await getPortfolios();
  return (
    <div className="bg-navy-mid min-h-screen w-screen pt-0.5">
      <section className="mx-4  xl:mx-auto z-10 relative">
        <div className="mt-20 mb-6 flex flex-col gap-10">
          <h1 className="font-heading text-lg md:text-xl font-bold">
            Capital Portfolio
          </h1>
          <p className="text-2xl md:text-5xl font-light">
            Partners in Performance
          </p>
        </div>
      </section>

      <PortfolioList data={data} />
    </div>
  );
};

export default PortfoliosPage;
