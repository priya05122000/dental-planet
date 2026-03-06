"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import { useSmoothScroll } from "@/src/hooks/useSmoothScroll";

/* ===========================
   ODOMETER
=========================== */

const OdometerNumber = ({ value }: { value: number }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        let animated = false;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    const digitHeight =
                        el.querySelector(".digit-span")?.clientHeight || 24;

                    value
                        .toString()
                        .split("")
                        .forEach((digit, i) => {
                            const column = el.children[i]?.querySelector(
                                ".digit-column"
                            ) as HTMLElement | null;

                            if (!column) return;

                            gsap.set(column, { y: 0 });

                            gsap.to(column, {
                                y: -Number(digit) * digitHeight,
                                duration: 2,
                                delay: i * 0.15,
                                ease: "power2.inOut",
                            });
                        });

                    observer.disconnect();
                }
            },
            { threshold: 0.6 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [value]);

    return (
        <div
            ref={wrapperRef}
            className="flex overflow-hidden tabular-nums leading-none"
        >
            {value
                .toString()
                .split("")
                .map((_, i) => (
                    <div key={i} className="h-[1em] overflow-hidden">
                        <div className="digit-column flex flex-col">
                            {Array.from({ length: 10 }, (_, n) => (
                                <span
                                    key={n}
                                    className="digit-span block h-[1em]"
                                >
                                    {n}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
};

/* ===========================
   HERO
=========================== */

const Hero = () => {


    const stats = [
        { value: 2200, label: "Treatments" },
        { value: 9, label: "Staffs" },
        { value: 3547, label: "Happy Patients" },
    ];

    const { scrollToSection } = useSmoothScroll();

    const handleScrollTo = (id: string) => {
        scrollToSection(id);
    };

    return (
        <section id="hero" className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">

                {/* LEFT SIDE */}
                <div className="bg-dark px-6 lg:px-12 py-12 md:py-0 grid md:grid-rows-[1fr_1.5fr] order-2 sm:order-1">

                    {/* Empty top (desktop only spacing) */}
                    <div className="hidden md:block" />

                    {/* Content */}
                    <div className="flex flex-col justify-between gap-10 relative">

                        {/* Text Content */}
                        <div>
                            <Paragraph
                                size="lg"
                                className="uppercase   leading-loose text-light/50 tracking-[0.8rem] sm:tracking-[1.2rem] "
                            >
                                Complete <br /> Dental <br /> Care
                            </Paragraph>

                            <Paragraph
                                size="xl"
                                className="text-light mt-2 mb-6"
                            >
                                by experienced dentists
                            </Paragraph>

                            <button className="inline-flex bg-linear-to-r from-primary to-primary-light text-light py-2 px-4 rounded text-sm lg:text-base cursor-pointer font-normal" onClick={() => handleScrollTo("#appointment-form")}>
                                Book Appointment
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="sm:mb-10 border z-10 border-light/20 rounded  p-2 xl:p-4 flex flex-row justify-between gap-10 xl:gap-16 md:absolute md:bottom-0 ">

                            {stats.map((item, i) => (
                                <div key={i}>
                                    <Heading
                                        level={4}
                                        className="text-light flex items-baseline"
                                    >
                                        <OdometerNumber value={item.value} />
                                        <span className="ml-1">+</span>
                                    </Heading>

                                    <Paragraph className="text-light/80">
                                        {item.label}
                                    </Paragraph>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative md:col-span-2 min-h-[60vh] md:min-h-full order-1 sm:order-2">
                    <Image
                        src="/hero/hero.webp"
                        alt="Clinic Interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        priority
                    />

                    <Image
                        src="/design/bannerteeth.png"
                        alt="Dental Planet Logo"
                        width={400}
                        height={400}
                        className="absolute opacity-50 -right-10 sm:left-5 -bottom-10 sm:bottom-16
  w-36 md:w-40 lg:w-48 xl:w-64
  -translate-x-1/2 translate-y-1/2 sm:translate-y-0
  pointer-events-none"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;