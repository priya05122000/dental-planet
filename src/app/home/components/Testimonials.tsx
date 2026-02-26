"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import Image from "next/image";
import CenterSection from "@/src/components/common/CenterSection";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import Span from "@/src/components/common/Span";

const testimonials = [
    {
        id: 1,
        name: "Samantha Jones",
        role: "CFO at BrightPath",
        image: "/testimonials/avatar.webp",
        text: `Advisory has completely transformed the way I manage my finances.
    With its intuitive interface and powerful features, I now have better control
    and visibility into my expenses and investments. Highly recommend it!`,
    },
    {
        id: 2,
        name: "Michael Lee",
        role: "Entrepreneur",
        image: "/testimonials/avatar.webp",
        text: `Amazing platform. Clean interface and powerful tools.
    It changed how I handle business finances.`,
    },
    {
        id: 3,
        name: "David Smith",
        role: "Startup Founder",
        image: "/testimonials/avatar.webp",
        text: `Best financial management experience I've had so far.
    Highly professional and reliable.`,
    },
];

export default function Testimonials() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="py-10 sm:py-16">
            <CenterSection>
                <div className="mb-8">
                    <Heading level={4} className="text-dark tracking-wide text-center mb-4 uppercase">
                        Testimonials
                    </Heading>
                    <Paragraph size="base" className="text-dark text-center max-w-2xl mx-auto">
                        We are here to help you. Please feel free to contact us if you have any questions or concerns.
                    </Paragraph>
                </div>
                <div className="bg-dark/5 rounded p-10 text-center shadow-md">
                    {/* Swiper */}
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        grabCursor={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className="mb-8"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Paragraph size="lg" className="text-dark font-medium mb-2">
                                    “{item.text}”
                                </Paragraph>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center gap-4 ">
                        {/* Name + Role */}
                        <div className="flex items-center bg-linear-to-r from-primary to-primary-light w-52 text-dark py-2 px-2 rounded">
                            <button
                                key={testimonials[activeIndex].id}
                                onClick={() => swiperRef.current?.slideTo(activeIndex)}
                                className={`relative w-10 h-10 rounded-full overflow-hidden  transition-all duration-300 $`}
                            >
                                <Image
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    fill
                                    sizes="48px"
                                    className="object-cover"
                                />
                            </button>
                            <div className="text-left ml-2">
                                <Paragraph size="sm" className="font-semibold text-dark">
                                    {testimonials[activeIndex].name}
                                </Paragraph>
                                <Span className=" text-light">
                                    {testimonials[activeIndex].role}
                                </Span>
                            </div>

                        </div>
                        {/* Avatar Navigation */}
                        <div className="flex justify-center items-center gap-2 ">
                            {testimonials.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => swiperRef.current?.slideTo(index)}
                                    className={`relative w-12 h-12 cursor-pointer rounded-full overflow-hidden border-2 transition-all duration-300 ${activeIndex === index
                                        ? "border-primary "
                                        : "border-transparent "
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </CenterSection>

        </div>
    );
}