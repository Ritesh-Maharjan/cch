import Image from "next/image";
import ContactForm from "../ui/ContactForm";

const ContactSingle = () => {
    return (
        <section className="bg-[#194B75] w-full flex justify-center min-h-screen items-center md:py-20 relative">
            <Image
                className="object-cover"
                src="/contact-bg.webp"
                alt="building"
                fill
            />

            <ContactForm className={"z-10 bg-[#194B75] w-full p-10 max-w-150 flex flex-col gap-4"} />
        </section>
    );
};

export default ContactSingle;
