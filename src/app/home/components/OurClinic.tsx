"use client";

import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import Image from "next/image";

const clinicDescription = [
    "At Dental Planet, we believe everyone deserves healthy teeth and a confident smile. Our clinic provides comprehensive dental care using advanced technology and modern treatment techniques.",

    "We focus on delivering comfortable, painless, and hygienic dental treatment for patients of all ages. Whether you need a routine dental checkup, tooth pain treatment, or a complete smile makeover, our dental specialists ensure personalized care for every patient. If you are searching for the best dentist in Anna Nagar or a modern dental clinic in Chennai, Dental Planet is here to help you achieve long-lasting dental health."
];

const OurClinic = () => {
    return (
        <section id="about" >

            <div className="flex flex-col lg:flex-row  items-stretch">

                {/* LEFT CONTENT */}
                <div className="lg:w-[40%] flex flex-col justify-center px-6 lg:px-12 pt-10 lg:py-12 xl:py-0 bg-saffron">

                    {/* Heading */}
                    <div>
                        <Heading level={4} className="text-dark tracking-widest mb-2">
                            About Us
                        </Heading>

                        <Paragraph
                            size="lg"
                            className="text-dark uppercase font-bold tracking-widest max-w-2xl"
                        >
                            Best Dental Clinic in Anna Nagar
                        </Paragraph>
                    </div>

                    {/* Description */}
                    <div className="my-10 space-y-8">
                        {clinicDescription.map((text, index) => (
                            <Paragraph key={index} size="base" className="text-justify">
                                {text}
                            </Paragraph>
                        ))}
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative lg:w-[60%] aspect-4/3 overflow-hidden  ">
                    <Image
                        src="/clinic/clinic.webp"
                        alt="Clinic Interior"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                    />

                    {/* Black Blur Overlay */}
                    <div className="absolute inset-0 bg-primary/50 backdrop-blur-3xl"></div>
                    <Image
                        src="/clinic/clinic.webp"
                        alt="Clinic Interior"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover absolute inset-0 p-3"
                    />
                </div>

            </div>

        </section>
    );
};

export default OurClinic;