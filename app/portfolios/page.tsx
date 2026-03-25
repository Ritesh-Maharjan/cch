import { getPortfolios } from "@/lib/wordpress";
import Header from "../components/layout/Header";
import PortfolioList from "../components/section/PortfolioList";

const page = async () => {
  const data = await getPortfolios();
  return (
    <div className="bg-[#194B75] min-h-screen w-screen pt-0.5">
      <section className="mx-4 max-w-312.5 xl:mx-auto z-10 relative">
        <Header />
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

export default page;
