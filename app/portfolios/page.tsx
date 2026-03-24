import { getPortfolios } from "@/lib/wordpress";
import Header from "../components/layout/Header";
import Image from "next/image";

const page = async () => {
  const data = await getPortfolios();
  return (
    <div className="bg-[#194B75] min-h-screen w-screen pt-0.5">
      <section className="min-mx-4 max-w-312.5 mx-auto">
        <Header />
        <div className="mt-20 mb-6 flex flex-col gap-10">
          <h1 className="font-heading text-xl font-bold">Capital Portfolio</h1>
          <p className="text-5xl font-light">Partners in Performance</p>
        </div>
      </section>

      <section className="flex flex-col">
        {data.map((el) => (
          <div className="border-2 group hover:text-black hover:bg-white transition-all duration-500 delay-100 ease-in min-h-60 flex gap-20" key={el.id}>
            <div className="relative w-113 h-auto shrink-0 overflow-hidden">
              <Image
                className="object-cover grayscale-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 delay-200 ease-in"
                src={el.acf.cover_image}
                alt={`${el.title.rendered}`}
                fill
              />
              {/* <Image className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block" src={el.acf.project_logo} alt="Logo" height={150} width={150} /> */}
            </div>
            <div className="self-center flex flex-col gap-4">
              <h2 className="text-2xl font-heading transition-all duration-500 delay-100">{el.title.rendered}</h2>
              <p className="w-[70ch] transition-all duration-500 delay-100">{el.acf.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
