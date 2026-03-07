"use client";

/* ================= IMPORTS ================= */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";

import { GoArrowUpLeft } from "react-icons/go";
import CenterSection from "@/src/components/common/CenterSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



/* ================= DATA ================= */

const doctors = [
    {
        id: 1,
        name: "Dr.Arjun Mehta",
        role: "Orthodontist",
        degree: "Dentist (OBD)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/doctors/doctor1.webp",
    },
    {
        id: 2,
        name: "Dr.Priya Sharma",
        role: "Pediatric Dentist",
        degree: "Dentist (MDS)",
        description: "Specialized dental care for children and teenagers.",
        image: "/doctors/doctor2.webp",
    },
    {
        id: 3,
        name: "Dr.Rahul Verma",
        role: "Cosmetic Dentist",
        degree: "Dentist (BDS)",
        description: "Smile designing and aesthetic dental treatments.",
        image: "/doctors/doctor3.webp",
    },
    {
        id: 4,
        name: "Dr.Kavya Iyer",
        role: "Oral Surgeon",
        degree: "Dentist (OMS)",
        description: "Expert in advanced surgical procedures.",
        image: "/doctors/doctor4.webp",
    },
];



/* ================= SMALL GRID CARD ================= */

const DoctorCard = ({ doctor, active, onClick }: any) => {
    return (
        <div
            onClick={onClick}
            className={`relative  aspect-square overflow-hidden shadow-lg rounded cursor-pointer transition-all duration-300
      ${active ? "ring-2 ring-primary " : "opacity-80 hover:opacity-100"}`}
        >
            <Image
                src={doctor.image}
                alt=""
                fill
                className="object-cover object-top"
            />

            <div className="absolute bottom-0 right-0 ">
                <div className="bg-linear-to-b from-primary/60 to-primary-light/60 backdrop-blur-3xl p-2 text-light">
                    <GoArrowUpLeft />
                </div>
            </div>
        </div>
    );
};



/* ================= MAIN COMPONENT ================= */

export default function Dentist() {

    /* ---------- REFS ---------- */

    const sectionRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
    const isClickScrolling = useRef(false);


    /* ---------- STATE ---------- */

    const [activeIndex, setActiveIndex] = useState(0);



    /* ================= ACTIVATE SLIDE ================= */

    const activate = (index: number) => {

        setActiveIndex(index);

        textRefs.current.forEach((el, i) => {
            gsap.to(el, {
                opacity: i === index ? 1 : 0,
                y: i === index ? 0 : 50,
                duration: 0.4,
            });
        });

        imageRefs.current.forEach((el, i) => {
            gsap.to(el, {
                opacity: i === index ? 1 : 0,
                y: i === index ? 0 : 80,
                duration: 0.4,
            });
        });
    };



    /* ================= THUMBNAIL CLICK SCROLL ================= */

    const handleScroll = (index: number) => {

        if (!scrollTriggerRef.current) return;

        const trigger = scrollTriggerRef.current;
        const total = doctors.length;

        const progress = index / (total - 1);

        const scrollPosition =
            trigger.start + progress * (trigger.end - trigger.start);

        isClickScrolling.current = true;

        activate(index);

        gsap.to(window, {
            scrollTo: scrollPosition,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => {
                isClickScrolling.current = false;
            },
        });
    };



    /* ================= GSAP SCROLL LOGIC ================= */

    useEffect(() => {

        const ctx = gsap.context(() => {

            /* INITIAL STATES */

            gsap.set(textRefs.current, { opacity: 0, y: 50 });
            gsap.set(imageRefs.current, { opacity: 0, y: 80 });

            gsap.set(textRefs.current[0], { opacity: 1, y: 0 });
            gsap.set(imageRefs.current[0], { opacity: 1, y: 0 });



            /* SECTION TRIGGERS */

            doctors.forEach((_, i) => {

                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: `${i * 100}% top`,
                    end: `${(i + 1) * 100}% top`,
                    scrub: true,
                    anticipatePin: 1,

                    onEnter: () => {
                        if (!isClickScrolling.current) activate(i);
                    },

                    onEnterBack: () => {
                        if (!isClickScrolling.current) activate(i);
                    },
                });

            });



            /* PINNING */

            scrollTriggerRef.current = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top-=96 top",
                end: "+=300%",
                pin: true,
                scrub: true,
            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);




    /* ================= RENDER ================= */

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[calc(100vh-96px)] sm:h-[calc(100vh-96px)] bg-dark text-light px-6 sm:px-4 py-10 flex flex-col gap-8"
        >

            {/* ================= SECTION TITLE ================= */}

            <div className="text-light text-center">

                <Heading level={4} className="tracking-widest mb-2">
                    Doctors
                </Heading>

                <Paragraph
                    size="lg"
                    className="uppercase font-bold tracking-widest max-w-2xl mx-auto"
                >
                    Meet Our Team
                </Paragraph>

            </div>



            {/* ================= MAIN GRID ================= */}

            <div className="max-w-full sm:flex-1 sm:max-w-2xl md:max-w-3xl mx-auto px-0 md:px-4 lg:px-12 xl:px-1 grid grid-cols-[1.2fr_1fr] sm:grid-cols-2 gap-6 w-full py-1  h-full overflow-hidden">



                {/* ================= IMAGE SIDE ================= */}

                <div className="relative rounded  w-full h-full shadow-lg ">

                    {doctors.map((doc, i) => (
                        <div
                            key={i}
                            ref={(el) => { imageRefs.current[i] = el as HTMLImageElement }}
                            className="absolute inset-0 w-full h-full"
                            style={{ opacity: i === 0 ? 1 : 0 }}
                        >

                            {/* IMAGE */}

                            <img
                                src={doc.image}
                                className="absolute inset-0 w-full h-full object-cover rounded object-top border border-light"
                            />

                            {/* NAME OVERLAY */}

                            <div className="absolute top-1/5 rounded  p-2  w-16 sm:w-56 text-wrap right-0 -translate-y-1/2 translate-x-1/2 pointer-events-none z-10">

                                <Heading level={5} className="font-bold tracking-widest">
                                    {doc.name}
                                </Heading>

                            </div>

                        </div>
                    ))}



                </div>



                {/* ================= TEXT SIDE ================= */}

                <div className="relative h-full ">

                    {doctors.map((doc, i) => (
                        <div
                            key={i}
                            ref={(el) => { textRefs.current[i] = el }}
                            className="absolute bottom-0 inset-0 flex flex-col justify-end sm:justify-center"
                            style={{ opacity: i === 0 ? 1 : 0 }}
                        >

                            <div className="max-w-xs ml-auto">

                                <div className="mb-4">

                                    <Paragraph size="lg" className="font-bold tracking-widest">
                                        {doc.role}
                                    </Paragraph>

                                    <Paragraph size="sm" className="tracking-widest">
                                        {doc.degree}
                                    </Paragraph>

                                </div>

                                <Paragraph size="base" className="hidden sm:block">
                                    {doc.description}
                                </Paragraph>
                                <Paragraph size="sm">
                                    {doc.description}
                                </Paragraph>

                            </div>

                        </div>
                    ))}



                    {/* ================= THUMBNAILS ================= */}

                    <div className="absolute bottom-0 left-0 w-full hidden sm:block">

                        <div className="grid grid-cols-4 gap-4">

                            {doctors.map((doctor, index) => (
                                <DoctorCard
                                    key={index}
                                    doctor={doctor}
                                    active={activeIndex === index}
                                    onClick={() => handleScroll(index)}
                                />
                            ))}

                        </div>

                    </div>


                </div>
            </div>

            <div className="col-span-2 block sm:hidden mt-4">
                <div className="grid grid-cols-4 gap-4">

                    {doctors.map((doctor, index) => (
                        <DoctorCard
                            key={index}
                            doctor={doctor}
                            active={activeIndex === index}
                            onClick={() => handleScroll(index)}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}