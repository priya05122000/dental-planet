"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
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
        text: `Restore missing teeth with advanced dental implants. Our implant specialists provide single tooth implants, full mouth dental implants, and long-lasting solutions for missing teeth.`,
    },
    {
        id: 2,
        service: "Root Canal Treatment",
        text: `Our painless root canal treatment helps save infected teeth and eliminate tooth pain effectively.`,
    },
    {
        id: 3,
        service: "Orthodontic Treatment & Braces",
        text: `Correct crooked teeth and alignment issues with braces, clear aligners, and modern orthodontic treatment.`,
    },
    {
        id: 4,
        service: "Cosmetic Dentistry & Smile Makeover",
        text: `Enhance your smile with teeth whitening, smile makeover treatment, and advanced cosmetic dental procedures.`,
    },
    {
        id: 5,
        service: "Teeth Cleaning & Preventive Care",
        text: `Maintain oral hygiene with professional teeth cleaning and preventive dental care.`,
    },
    {
        id: 6,
        service: "Pediatric Dentistry",
        text: `Our child-friendly dental clinic provides gentle dental care for children.`,
    },
    {
        id: 7,
        service: "Tooth Extraction & Wisdom Tooth Removal",
        text: `Safe and painless tooth extraction and wisdom tooth removal procedures.`,
    },
    {
        id: 8,
        service: "Gum Treatment",
        text: `Advanced gum treatment for bleeding gums and periodontal care.`,
    },
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

const ServiceTabs = ({
    services,
    activeIndex,
    onClick,
    tabRefs,
    containerRef,
}: any) => (
    <div ref={containerRef} className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 w-max">
            {services.map((item: any, index: number) => (
                <button
                    key={item.id}
                    ref={(el) => { tabRefs.current[index] = el }}
                    onClick={() => onClick(index)}
                    className={`px-2 py-0.5 border border-dark/10 rounded shadow-md whitespace-nowrap shrink-0 transition
          ${activeIndex === index
                            ? "bg-dark text-light"
                            : "bg-washed-black/12"
                        }`}
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
    </>
);

// ================= MAIN COMPONENT =================

export default function Services() {
    const swiperRef = useRef<SwiperType | null>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const tabsContainerRef = useRef<HTMLDivElement | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeArrow, setActiveArrow] = useState<"prev" | "next">("next");

    // Auto scroll active tab horizontally
    useEffect(() => {
        const container = tabsContainerRef.current;
        const activeTab = tabRefs.current[activeIndex];

        if (!container || !activeTab) return;

        const containerRect = container.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();

        const scrollLeft =
            container.scrollLeft + (tabRect.left - containerRect.left);

        container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });
    }, [activeIndex]);

    return (
        <div id="services" className="py-10 sm:py-16 bg-old-lace">
            <CenterSection>
                <SectionHeader />

                {/* Tabs */}
                <ServiceTabs
                    services={services}
                    activeIndex={activeIndex}
                    tabRefs={tabRefs}
                    containerRef={tabsContainerRef}
                    onClick={(index: number) =>
                        swiperRef.current?.slideToLoop(index)
                    }
                />

                {/* Swiper */}
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
                        loop
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        grabCursor
                        navigation={{
                            prevEl: ".services-prev",
                            nextEl: ".services-next",
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
                {/* <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            setActiveArrow("prev");
                            swiperRef.current?.slidePrev();
                        }}
                        // className="services-prev cursor-pointer p-2 rounded bg-washed-black/12 text-white"
                        className={`cursor-pointer p-2 rounded text-white transition
      ${activeArrow === "prev"
                                ? "bg-washed-black/58"
                                : "bg-washed-black/12"
                            }`}
                    >
                        <IoIosArrowBack />
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setActiveArrow("next");
                            swiperRef.current?.slideNext();
                        }}
                        className={`cursor-pointer p-2 rounded text-white transition
      ${activeArrow === "next"
                                ? "bg-washed-black/12"
                                : "bg-washed-black/58"
                            }`}
                    >
                        <IoIosArrowForward />
                    </button>
                </div> */}

                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            setActiveArrow("prev");
                            swiperRef.current?.slidePrev();
                        }}
                        className={`cursor-pointer p-2 rounded text-light transition
      ${activeArrow === "prev"
                                ? "bg-washed-black/58"
                                : "bg-washed-black/12"
                            }`}
                    >
                        <IoIosArrowBack />
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setActiveArrow("next");
                            swiperRef.current?.slideNext();
                        }}
                        className={`cursor-pointer p-2 rounded text-light transition
      ${activeArrow === "next"
                                ? "bg-washed-black/58"
                                : "bg-washed-black/12"
                            }`}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </CenterSection>
        </div>
    );
}