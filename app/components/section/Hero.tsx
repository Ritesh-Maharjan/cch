import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative flex-1 px-4 flex items-center h-full w-full max-w-312.5 mx-auto">
      <div className="max-w-150 flex flex-col gap-8 md:gap-12">
        <h1 className="text-4xl md:text-5xl md:leading-15 font-semibold font-heading ">
          FUNDING SOLUTIONS BUILT ON TRUST
        </h1>
        <Button variant="secondary" className="w-fit">Learn More</Button>
      </div>
    
        <Image className="absolute bottom-0 -right-1/2 sm:-right-1/3 xl:-right-1/4 opacity-60 w-150 h-70 lg:w-150 lg:h-100" height={360} width={420} src="/logo.png" alt="" />
    </section>
  );
};

export default Hero;
