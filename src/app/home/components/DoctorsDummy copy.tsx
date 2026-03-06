"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function DoctorsDummy() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLDivElement>(".left-card");
            const contents = gsap.utils.toArray<HTMLDivElement>(".doctor-content");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${doctors.length * 100}%`,
                    pin: true,
                    scrub: true,
                },
            });

            // initial states
            gsap.set(cards, {
                y: 80,
                scale: 0.9,
                opacity: 0,
            });

            gsap.set(cards[0], {
                y: 0,
                scale: 1,
                opacity: 1,
            });

            gsap.set(contents, {
                y: 40,
                opacity: 0,
            });

            gsap.set(contents[0], {
                y: 0,
                opacity: 1,
            });

            cards.forEach((card, i) => {
                if (cards[i + 1]) {

                    tl
                        // image out
                        .to(card, {
                            y: -60,
                            scale: 0.95,
                            opacity: 0,
                            duration: 0.6,
                            ease: "power2.out"
                        })

                        // image in
                        .to(
                            cards[i + 1],
                            {
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                duration: 0.6,
                                ease: "power2.out"
                            },
                            "<"
                        )

                        // content out
                        .to(
                            contents[i],
                            {
                                y: -20,
                                opacity: 0,
                                duration: 0.4,
                                ease: "power2.out"
                            },
                            "<"
                        )

                        // content in
                        .to(
                            contents[i + 1],
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.5,
                                ease: "power2.out"
                            },
                            "<0.2"
                        );

                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                className="flex h-screen items-center justify-center gap-20"
            >
                {/* LEFT IMAGE */}
                <div className="relative w-[400px] h-[400px] overflow-hidden">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="left-card absolute inset-0">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative w-[400px] h-[400px] overflow-hidden border">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="doctor-content absolute inset-0 flex flex-col justify-center gap-3 px-6"
                        >
                            <h3 className="text-2xl font-bold">{doctor.name}</h3>
                            <p className="text-primary font-medium">{doctor.role}</p>
                            <p className="text-sm text-gray-500">{doctor.degree}</p>
                            <p className="text-sm text-gray-700">{doctor.description}</p>
                        </div>
                    ))}

                    {/* THUMBNAILS */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                        {doctors.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="relative w-[60px] h-[60px] overflow-hidden rounded border"
                            >
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}