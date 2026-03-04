"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Section from "@/src/components/common/Section"
import type { Swiper as SwiperType } from "swiper";
import Paragraph from "@/src/components/common/Paragraph"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

gsap.registerPlugin(ScrollTrigger)

const data = [
    {
        id: 1,
        title: "Values",
        description:
            "Our values define how we serve patients with compassion, integrity, and excellence in dental care.",
    },
    {
        id: 2,
        title: "Vision",
        description:
            "To become the most trusted and advanced dental healthcare provider in the region.",
    },
    {
        id: 3,
        title: "Mission",
        description:
            "Deliver high-quality dental treatment using modern technology and patient-first approach.",
    },
]

export default function MissionVision() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const contentRefs = useRef<HTMLDivElement[]>([])
    const timelineRef = useRef<gsap.core.Timeline | null>(null)

    const [activeIndex, setActiveIndex] = useState(0)

    const swiperRef = useRef<SwiperType | null>(null);

    const leftRefs = useRef<HTMLDivElement[]>([])
    useEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            const sections = contentRefs.current

            // Initial state
            gsap.set(sections, { autoAlpha: 0, y: 50 })
            gsap.set(sections[0], { autoAlpha: 1, y: 0 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${sections.length * 100}%`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        // prevent auto change on page load
                        if (self.progress < 0.05) {
                            setActiveIndex(0)
                            return
                        }

                        const index = Math.min(
                            sections.length - 1,
                            Math.floor(self.progress * sections.length)
                        )

                        setActiveIndex(index)
                    }
                },
            })

            sections.forEach((section, i) => {
                if (i === 0) return

                // Step 1 → Hide previous completely
                tl.to(sections[i - 1], {
                    autoAlpha: 0,
                    y: -50,
                    duration: 0.5,
                })

                // Step 2 → Then show next
                tl.fromTo(
                    section,
                    { autoAlpha: 0, y: 50 },
                    { autoAlpha: 1, y: 0, duration: 0.5 }
                )
            })

            timelineRef.current = tl
        }, containerRef)

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
            ctx.revert()
        }
    }, [])

    useEffect(() => {
        const items = leftRefs.current

        items.forEach((el, i) => {
            if (i === activeIndex) {
                gsap.to(el, {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    color: "#ffffff",
                })
            } else {
                gsap.to(el, {
                    opacity: 0.4,
                    x: -10,
                    duration: 0.4,
                    color: "#9ca3af",
                })
            }
        })
    }, [activeIndex])

    // Manual navigation click
    const handleClick = (index: number) => {
        if (!timelineRef.current?.scrollTrigger) return

        const trigger = timelineRef.current.scrollTrigger
        const total = data.length - 1
        const progress = index / total

        const scrollTo =
            trigger.start +
            progress * (trigger.end - trigger.start)

        trigger.scroll(scrollTo)
    }

    return (
        <>
            <section
                ref={containerRef}
                className="h-screen hidden  bg-dark text-white sm:flex items-center relative overflow-hidden"
            >
                {/* LEFT SIDE NAV */}
                <div className="w-1/3 pl-16 space-y-6 relative z-10 ">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (!el) return
                                leftRefs.current[index] = el
                            }}
                            onClick={() => handleClick(index)}
                            className="cursor-pointer"
                        >
                            {item.title}
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="w-2/3  relative z-10 h-60 flex items-center overflow-hidden">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (!el) return
                                contentRefs.current[index] = el
                            }}
                            className="absolute inset-0 flex flex-col justify-center"
                        >
                            <h2 className="text-4xl font-bold mb-4">
                                {item.title}
                            </h2>
                            <p className="max-w-md text-gray-300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* BOTTOM BACKGROUND IMAGE */}
                <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 pointer-events-none z-0">
                    <Image
                        src="/design/dental-planet.png"
                        alt="Dental Planet"
                        fill
                        className="object-contain object-bottom "
                        sizes="100vw"
                        priority
                    />
                </div>
            </section>

            <Section className="bg-dark py-10 relative block sm:hidden">
                {/* Avatar Navigation */}
                <div className="flex items-stretch gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                    {data.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => swiperRef.current?.slideToLoop(index)}
                            className={`relative py-0.5 border border-dark/10 rounded shadow-md cursor-pointer transition-all duration-300 snap-start whitespace-nowrap ${activeIndex === index
                                ? " text-primary"
                                : "text-light "
                                }`}
                        >
                            <Paragraph size="sm">{item.title}</Paragraph>
                        </button>
                    ))}

                </div>
                {/* Swiper */}
                <div className=" my-10  sm:flex ">


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
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>

                                {/* <Paragraph size="xl" className="text-primary font-semibold  mb-2 tracking-wide leading-snug">
                                    {item.title}
                                </Paragraph> */}
                                <Paragraph size="base" className="text-light  mb-2 tracking-wide leading-snug">
                                    {item.description}
                                </Paragraph>

                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
                <div className="flex justify-end gap-2">
                    <button className="custom-prev cursor-pointer  p-2 flex items-center justify-center rounded bg-washed-black/58 text-white transition">
                        <IoIosArrowBack />
                    </button>

                    <button className="custom-next text-white cursor-pointer p-2 flex items-center justify-center rounded  bg-primary  transition">
                        <IoIosArrowForward />
                    </button>
                </div>

                {/* BOTTOM IMAGE */}
                <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 pointer-events-none z-0">
                    <Image
                        src="/design/dental-planet.png"
                        alt="Dental Planet"
                        fill
                        className="object-contain object-bottom"
                        sizes="100vw"
                        priority
                    />
                </div>
            </Section>
        </>


    )
}