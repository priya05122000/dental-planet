"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Section from "@/src/components/common/Section"
import type { Swiper as SwiperType } from "swiper";
import Paragraph from "@/src/components/common/Paragraph"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Heading from "@/src/components/common/Heading"

gsap.registerPlugin(ScrollTrigger)

const data = [
    {
        id: 1,
        title: "Values",
        description: [
            {
                title: "Patient-Centered Care",
                text: "We prioritize patient comfort, safety, and personalized dental treatment."
            },
            {
                title: "Excellence in Dentistry",
                text: "We use modern technology and advanced procedures to deliver the best dental care."
            },
            {
                title: "Integrity & Trust",
                text: "We maintain transparency, honesty, and ethical practices in all treatments."
            },
        ]
    },
    {
        id: 2,
        title: "Vision",
        description:
            "Our vision is to become the most trusted dental clinic in Anna Nagar and Chennai, known for delivering high-quality dental treatments, patient comfort, and innovative dental solutions including dental implants, orthodontic treatment, and cosmetic dentistry.",
    },
    {
        id: 3,
        title: "Mission",
        description:
            "At Dental Planet, our mission is to redefine dental care by combining advanced technology, preventive dentistry, and compassionate treatment to create healthier smiles for every patient. We aim to provide comfortable, ethical, and personalized dental solutions that focus not only on treating dental problems but also on promoting long-term oral health and confidence. Our commitment is to make quality dental care accessible while ensuring every patient experiences a safe, gentle, and positive dental journey.",
    },
]

export default function MissionVision() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const contentRefs = useRef<HTMLDivElement[]>([])
    const timelineRef = useRef<gsap.core.Timeline | null>(null)
    const [activeArrow, setActiveArrow] = useState<"prev" | "next">("next");

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
                    end: () => "+=" + window.innerHeight * (sections.length - 1),

                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,

                    onUpdate: (self) => {
                        const index = Math.round(self.progress * (sections.length - 1))
                        setActiveIndex(index)
                    },

                    onEnterBack: (self) => {
                        // when scrolling up → disable pin
                        if (self.direction === -1) {
                            self.pin?.classList.remove("gsap-pin")
                        }
                    },

                    onEnter: (self) => {
                        // when scrolling down again → enable pin
                        if (self.direction === 1) {
                            ScrollTrigger.refresh()
                        }
                    }
                }
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

        // return () => {
        //     ScrollTrigger.getAll().forEach((t) => t.kill())
        //     ctx.revert()
        // }

        return () => {
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
                className="h-screen hidden bg-dark text-white sm:flex items-center relative overflow-hidden"            >
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
                <div className="w-2/3  relative z-10 h-72 flex items-center overflow-hidden">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (!el) return
                                contentRefs.current[index] = el
                            }}
                            className="absolute inset-0 flex flex-col justify-center max-w-4xl"
                        >
                            <Heading level={6} className="font-bold mb-4 text-light">
                                {item.title}
                            </Heading>
                            {item.title === "Values" && Array.isArray(item.description) ? (
                                <ul className="list-disc pl-5 text-light space-y-2">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>
                                            <Paragraph size="base">
                                                <span className="font-semibold">{desc.title}:</span> {desc.text}
                                            </Paragraph>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <Paragraph size="base" className="text-light mb-2 tracking-wide leading-snug">
                                    {item.description as string}
                                </Paragraph>
                            )}
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
                        modules={[Navigation]}
                        slidesPerView={1}
                        loop={true}   // ✅ ADD THIS

                        grabCursor={true}
                        navigation={{
                            prevEl: ".mv-prev",
                            nextEl: ".mv-next",
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // IMPORTANT
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>

                                {/* <Paragraph size="xl" className="text-primary font-semibold  mb-2 tracking-wide leading-snug">
                                    {item.title}
                                </Paragraph> */}
                                {item.title === "Values" && Array.isArray(item.description) ? (
                                    <ul className="list-disc pl-5 text-light space-y-2">
                                        {item.description.map((desc, i) => (
                                            <li key={i}>
                                                <div>
                                                    <Paragraph size="sm" className="text-justify">
                                                        <span className="font-semibold">{desc.title} :</span>
                                                    </Paragraph>
                                                    <Paragraph size="sm" className="px-2 text-justify font-light text-light mb-2 tracking-wide leading-snug">
                                                        {desc.text}
                                                    </Paragraph>
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <Paragraph size="sm" className="px-2 text-justify font-light text-light mb-2 tracking-wide leading-snug">
                                        {item.description as string}
                                    </Paragraph>
                                )}

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            setActiveArrow("prev");
                            swiperRef.current?.slidePrev();
                        }}
                        className={`cursor-pointer p-2 rounded text-light transition
      ${activeArrow === "prev"
                                ? "bg-primary"
                                : "bg-washed-black/58"
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
                                ? "bg-primary"
                                : "bg-washed-black/58"
                            }`}
                    >
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