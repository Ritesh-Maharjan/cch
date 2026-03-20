import Image from "next/image";

const Approach = () => {
  return (
    <section className=" bg-[#194B75] min-h-screen w-screen grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-14">
      <div className="relative">
        <Image className="object-cover" src="/aproach-bg.webp" alt="" fill />
      </div>

      <div className="max-w-125 row-start-2 md:row-start-1 md:col-start-2 py-24 px-4 flex flex-col gap-6 md:gap-12">
        <span className="text-xl w-fit rounded-full font-heading font-bold">
          Our Approach
        </span>
        <h2 className="flex flex-col w-fit text-2xl lg:text-4xl font-extralight leading-8 md:leading-15">
          Partners in Performance
        </h2>
        <p>
          We provide strategic equity investments designed to fuel sustainable
          growth and lasting partnerships. Rooted in principled decision-making,
          our mission is to provide exclusive access to aligned capital
          strategies that deliver a competitive advantage.We provide strategic
          equity investments designed to fuel sustainable growth and lasting
          partnerships. Rooted in principled decision-making, our
        </p>
      </div>
    </section>
  );
};

export default Approach;
