"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const data = [
    {
        title: "Values",
        description:
            "Our values define how we serve patients with compassion, integrity, and excellence in dental care.",
    },
    {
        title: "Vision",
        description:
            "To become the most trusted and advanced dental healthcare provider in the region.",
    },
    {
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

    useEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            const sections = contentRefs.current

            timelineRef.current = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${sections.length * 100}%`,
                    scrub: true,
                    pin: true,
                    snap: 1 / (sections.length - 1),
                },
            })

            // Animate each section
            sections.forEach((section, i) => {
                if (i !== 0) {
                    timelineRef.current?.fromTo(
                        section,
                        { opacity: 0, y: 100 },
                        { opacity: 1, y: 0, duration: 1 },
                        i
                    )
                }
            })

            // Update active index
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: `+=${sections.length * 100}%`,
                onUpdate: (self) => {
                    const index = Math.round(
                        self.progress * (sections.length - 1)
                    )
                    setActiveIndex(index)
                },
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

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
        <section
            ref={containerRef}
            className="h-screen bg-black text-white flex items-center"
        >
            {/* LEFT SIDE STATIC NAV */}
            <div className="w-1/3 pl-16 space-y-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`cursor-pointer transition-all duration-300 ${activeIndex === index
                                ? "opacity-100 text-white"
                                : "opacity-40 text-gray-400"
                            }`}
                    >
                        {item.title}
                    </div>
                ))}
            </div>

            {/* RIGHT SIDE CONTENT */}
            {/* RIGHT SIDE CONTENT */}
            <div className="w-2/3 relative h-60 flex items-center overflow-hidden">
                {data.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (!el) return
                            contentRefs.current[index] = el
                        }}
                        className="absolute inset-0 flex flex-col justify-center"
                        style={{ opacity: index === 0 ? 1 : 0 }}
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
        </section>
    )
}