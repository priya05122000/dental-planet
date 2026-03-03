"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import CenterSection from "@/src/components/common/CenterSection";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxStarFilled } from "react-icons/rx";
import Image from "next/image";
import Span from "@/src/components/common/Span";

const testimonials = [
    {
        id: 1,
        name: "Dr. Samantha Jones",
        role: "Senior Orthodontist",
        service: "Orthodontics",
        image: "/images/doctors/doctor-1.jpg",
        text: `We offer advanced orthodontic treatments including metal braces and clear aligners.
Our goal is to properly align teeth and improve overall jaw function.
Each treatment plan is customized to ensure long-term comfort and stability.`,
    },
    {
        id: 2,
        name: "Dr. Michael Lee",
        role: "Periodontist",
        service: "Gum Treatment",
        image: "/images/doctors/doctor-2.jpg",
        text: `Our gum treatments target infection and inflammation at an early stage.
We use deep cleaning and modern laser techniques for effective results.
Healthy gums are essential for strong teeth and overall oral wellness.`,
    },
    {
        id: 3,
        name: "Dr. David Smith",
        role: "Oral Surgeon",
        service: "Oral Surgery",
        image: "/images/doctors/doctor-3.jpg",
        text: `We perform wisdom tooth removals and minor oral surgeries with utmost care.
Modern equipment ensures accuracy and faster recovery time.
Patient safety and comfort remain our highest priorities.`,
    },
    {
        id: 4,
        name: "Dr. Emily Carter",
        role: "Endodontist",
        service: "Root Canal Treatment",
        image: "/images/doctors/doctor-4.jpg",
        text: `Root canal treatment removes infection while saving your natural tooth.
We use advanced rotary systems for precise and pain-free procedures.
Early treatment helps prevent further dental complications.`,
    },
    {
        id: 5,
        name: "Dr. Daniel Brown",
        role: "Implant Specialist",
        service: "Dental Implants",
        image: "/images/doctors/doctor-5.jpg",
        text: `Dental implants restore both appearance and chewing function.
They are designed to look and feel like natural teeth.
Our implant procedures ensure strength, stability, and long-term success.`,
    },
    {
        id: 6,
        name: "Dr. Olivia Wilson",
        role: "Cosmetic Dentist",
        service: "Cosmetic Dentistry",
        image: "/images/doctors/doctor-6.jpg",
        text: `We offer teeth whitening, veneers, and complete smile makeovers.
Our cosmetic treatments improve confidence and facial harmony.
Every procedure is tailored to match your unique smile goals.`,
    },
];

export default function Testimonials() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="py-10 sm:py-16 bg-off-white">
            <CenterSection>
                <div className="mb-8">
                    <Heading level={4} className="text-dark tracking-wide text-center mb-4">
                        Testimonials
                    </Heading>
                    <Paragraph size="lg" className="text-dark uppercase font-bold tracking-widest text-center max-w-2xl mx-auto">
                        Professional teeth cleaning
                    </Paragraph>
                </div>


                {/* Swiper */}
                <div className=" my-10  ">


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
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>

                                <Paragraph size="lg" className="max-w-3xl mx-auto text-dark   tracking-wide leading-snug">
                                    {item.text}
                                </Paragraph>
                                <Paragraph size="xl" className="text-gold my-6 flex gap-1 justify-center">
                                    {[...Array(5)].map((_, index) => (
                                        <RxStarFilled key={index} />
                                    ))}

                                </Paragraph>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-center gap-4 ">
                        {/* Name + Role */}

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
                <div className="flex justify-center gap-2">
                    <button className="custom-prev cursor-pointer  p-2 flex items-center justify-center rounded bg-washed-black/12 text-white transition">
                        <IoIosArrowBack />
                    </button>

                    <button className="custom-next text-white cursor-pointer p-2 flex items-center justify-center rounded  bg-primary  transition">
                        <IoIosArrowForward />
                    </button>
                </div>
            </CenterSection>

        </div>
    );
}