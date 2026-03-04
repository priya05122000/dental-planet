"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import CenterSection from "@/src/components/common/CenterSection";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


// ================= DATA =================

const services = [
    {
        id: 1,
        service: "Dental Implants",
        text: `Restore missing teeth with advanced dental implants. Our implant specialists provide single tooth implants, full mouth dental implants, and long-lasting solutions for missing teeth.
`,
    },
    {
        id: 2,
        service: "Root Canal Treatment",
        text: `Our painless root canal treatment helps save infected teeth and eliminate tooth pain effectively.`,
    },
    {
        id: 3,
        service: "Orthodontic Treatment & Braces",
        text: `Correct crooked teeth and alignment issues with braces, clear aligners, and modern orthodontic treatment for both adults and teenagers.`,
    },
    {
        id: 4,
        service: "Cosmetic Dentistry & Smile Makeover",
        text: `Enhance your smile with teeth whitening, smile makeover treatment, and advanced cosmetic dental procedures.`,
    },
    {
        id: 5,
        service: "Teeth Cleaning & Preventive Care",
        text: `Maintain oral hygiene with professional teeth cleaning, dental checkups, and cavity prevention treatments.`,
    },
    {
        id: 6,
        service: "Pediatric Dentistry",
        text: `Our child-friendly dental clinic provides gentle dental care for children including cavity treatment, preventive care, and early orthodontic evaluation.`,
    },
    {
        id: 7,
        service: "Tooth Extraction & Wisdom Tooth Removal",
        text: `Safe and painless tooth extraction and wisdom tooth removal procedures performed by experienced dentists.`,
    },
    {
        id: 8,
        service: "Gum Treatment",
        text: `Advanced gum treatment for bleeding gums, gum infections, and periodontal care.`,
    }
];


// ================= HEADER =================

const SectionHeader = () => (
    <div className="mb-8">
        <Heading level={4} className="text-dark tracking-widest mb-2">
            Our Dental Services
        </Heading>

        <Paragraph
            size="lg"
            className="text-dark uppercase font-bold tracking-widest max-w-2xl"
        >
            Comprehensive Dental Care for Your Whole Family

        </Paragraph>
    </div>
);


// ================= SERVICE TABS =================

const ServiceTabs = ({ services, activeIndex, onClick }: any) => (
    <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 w-max">
            {services.map((item: any, index: number) => (
                <button
                    key={item.id}
                    onClick={() => onClick(index)}
                    className={`relative px-2 py-0.5 border border-dark/10 rounded shadow-md cursor-pointer transition-all duration-300 whitespace-nowrap shrink-0
          ${activeIndex === index ? "bg-dark text-light" : "bg-washed-black/12"}`}
                >
                    <Paragraph size="sm">{item.service}</Paragraph>
                </button>
            ))}
        </div>
    </div>
);


// ================= SERVICE CONTENT =================

const ServiceContent = ({ item }: any) => (
    <>
        <Paragraph
            size="xl"
            className="text-dark font-semibold mb-2 tracking-wide leading-snug"
        >
            {item.text}
        </Paragraph>

        <Paragraph size="base" className="text-dark">
            {item.subtext}
        </Paragraph>
    </>
);


// ================= MAIN COMPONENT =================

export default function Services() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id="services" className="py-10 sm:py-16 bg-old-lace">
            <CenterSection>

                <SectionHeader />

                {/* Tabs */}
                <ServiceTabs
                    services={services}
                    activeIndex={activeIndex}
                    onClick={(index: number) =>
                        swiperRef.current?.slideToLoop(index)
                    }
                />

                {/* Swiper Section */}
                <div className="my-10 sm:flex gap-8">

                    {/* Service Name */}
                    <div className="flex sm:justify-center mb-4 sm:mb-0">
                        <div className="flex w-56 text-dark rounded">
                            <Paragraph className="text-primary">
                                &#9642; {services[activeIndex].service}
                            </Paragraph>
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) =>
                            setActiveIndex(swiper.realIndex)
                        }
                    >
                        {services.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ServiceContent item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Navigation */}
                <div className="flex justify-end gap-2">
                    <button className="custom-prev cursor-pointer p-2 flex items-center justify-center rounded bg-washed-black/12 text-white transition">
                        <IoIosArrowBack />
                    </button>

                    <button className="custom-next text-white cursor-pointer p-2 flex items-center justify-center rounded bg-washed-black/58 transition">
                        <IoIosArrowForward />
                    </button>
                </div>

            </CenterSection>
        </div>
    );
}