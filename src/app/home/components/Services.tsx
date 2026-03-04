"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import CenterSection from "@/src/components/common/CenterSection";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const services = [
    {
        id: 1,
        name: "Dr. Samantha Jones",
        service: "Orthodontics",
        subtext: `Comprehensive orthodontic solutions designed to correct misaligned teeth and improve bite function.`,
        text: `We offer advanced orthodontic treatments including metal braces and clear aligners.
Our goal is to properly align teeth and improve overall jaw function.
Each treatment plan is customized to ensure long-term comfort and stability.`,
    },
    {
        id: 2,
        name: "Dr. Michael Lee",
        service: "Gum Treatment",
        subtext: `Advanced periodontal care focused on maintaining healthy gums and preventing disease.`,
        text: `Our gum treatments target infection and inflammation at an early stage.
We use deep cleaning and modern laser techniques for effective results.
Healthy gums are essential for strong teeth and overall oral wellness.`,
    },
    {
        id: 3,
        name: "Dr. David Smith",
        service: "Oral Surgery",
        subtext: `Safe and minimally invasive surgical procedures performed with precision.`,
        text: `We perform wisdom tooth removals and minor oral surgeries with utmost care.
Modern equipment ensures accuracy and faster recovery time.
Patient safety and comfort remain our highest priorities.`,
    },
    {
        id: 4,
        name: "Dr. Emily Carter",
        service: "Root Canal Treatment",
        subtext: `Modern and painless root canal procedures to preserve natural teeth.`,
        text: `Root canal treatment removes infection while saving your natural tooth.
We use advanced rotary systems for precise and pain-free procedures.
Early treatment helps prevent further dental complications.`,
    },
    {
        id: 5,
        name: "Dr. Daniel Brown",
        service: "Dental Implants",
        subtext: `Permanent and durable tooth replacement solutions for missing teeth.`,
        text: `Dental implants restore both appearance and chewing function.
They are designed to look and feel like natural teeth.
Our implant procedures ensure strength, stability, and long-term success.`,
    },
    {
        id: 6,
        name: "Dr. Olivia Wilson",
        service: "Cosmetic Dentistry",
        subtext: `Personalized cosmetic treatments to enhance smile aesthetics.`,
        text: `We offer teeth whitening, veneers, and complete smile makeovers.
Our cosmetic treatments improve confidence and facial harmony.
Every procedure is tailored to match your unique smile goals.`,
    },
];

export default function Services() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="py-10 sm:py-16 bg-old-lace">
            <CenterSection>
                <div className="mb-8">
                    <Heading level={4} className="text-dark tracking-widest  mb-2">
                        Services
                    </Heading>
                    <Paragraph size="lg" className="text-dark uppercase font-bold tracking-widest max-w-2xl">
                        Professional teeth cleaning
                    </Paragraph>
                </div>

                {/* Avatar Navigation */}
                <div className="flex items-stretch gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                    {services.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => swiperRef.current?.slideToLoop(index)}
                            className={`relative px-2 py-0.5 border border-dark/10 rounded shadow-md cursor-pointer transition-all duration-300 snap-start whitespace-nowrap ${activeIndex === index
                                    ? "bg-dark text-light"
                                    : "bg-washed-black/12"
                                }`}
                        >
                            <Paragraph size="sm">{item.service}</Paragraph>
                        </button>
                    ))}

                </div>
                {/* Swiper */}
                <div className=" my-10  sm:flex ">
                    <div className="flex sm:justify-center mb-4 sm:mb-0">
                        {/* Name + Role */}
                        <div className="flex w-56 text-dark rounded">
                            <Paragraph className=" text-primary">
                                &#9679;  {services[activeIndex].service}
                            </Paragraph>
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                        loop={true}   // ✅ ADD THIS
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false, // keeps autoplay after arrow click
                        }}
                        grabCursor={true}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // IMPORTANT
                    >
                        {services.map((item) => (
                            <SwiperSlide key={item.id}>

                                <Paragraph size="xl" className="text-dark font-semibold mb-2 tracking-wide leading-snug">
                                    {item.text}
                                </Paragraph>
                                <Paragraph size="base" className="text-dark ">
                                    {item.subtext}
                                </Paragraph>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
                <div className="flex justify-end gap-2">
                    <button className="custom-prev cursor-pointer  p-2 flex items-center justify-center rounded bg-washed-black/12 text-white transition">
                        <IoIosArrowBack />
                    </button>

                    <button className="custom-next text-white cursor-pointer p-2 flex items-center justify-center rounded  bg-washed-black/58  transition">
                        <IoIosArrowForward />
                    </button>
                </div>
            </CenterSection>

        </div>
    );
}