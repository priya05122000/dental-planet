"use client"

import CenterSection from '@/src/components/common/CenterSection'
import Heading from '@/src/components/common/Heading'
import Paragraph from '@/src/components/common/Paragraph'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowUpLeft } from 'react-icons/go'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Doctors = () => {

    const sectionRef = useRef<HTMLDivElement>(null)
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

    const doctors = [
        {
            name: "Dr.Arjun Mehta",
            role: "Orthodontist",
            degree: "Dentist (OBD)",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "/doctors/doctor1.jpg",
        },
        {
            name: "Dr.Priya Sharma",
            role: "Pediatric Dentist",
            degree: "Dentist (MDS)",
            description: "Specialized dental care for children and teenagers.",
            image: "/doctors/doctor2.jpg",
        },
        {
            name: "Dr.Rahul Verma",
            role: "Cosmetic Dentist",
            degree: "Dentist (BDS)",
            description: "Smile designing and aesthetic dental treatments.",
            image: "/doctors/doctor3.jpg",
        },
        {
            name: "Dr.Kavya Iyer",
            role: "Oral Surgeon",
            degree: "Dentist (OMS)",
            description: "Expert in advanced surgical procedures.",
            image: "/doctors/doctor4.jpg",
        },

    ]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const total = doctors.length

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${window.innerHeight * total}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                const index = Math.min(
                    total - 1,
                    Math.floor(self.progress * total)
                )
                setActiveIndex(index)
            }
        })
        scrollTriggerRef.current = trigger

        return () => trigger.kill()
    }, [])

    // const smallDoctors = doctors.slice(1)

    const smallDoctors = doctors

    return (
        <div className='py-10 sm:py-16 bg-dark'>
            <CenterSection>

                {/* Heading */}
                <div className="mb-12 text-light text-center">
                    <Heading level={4} className="tracking-wide mb-2">
                        Doctors
                    </Heading>
                    <Paragraph
                        size="lg"
                        className="uppercase font-bold tracking-widest max-w-2xl mx-auto"
                    >
                        Professional teeth cleaning
                    </Paragraph>

                </div>

                {/* === PINNED SECTION === */}
                <div ref={sectionRef} className='grid lg:grid-cols-2  gap-10 '>

                    {/* LEFT SIDE */}
                    <div className="relative aspect-3/4  overflow-hidden shadow-lg border border-light rounded">
                        <Image
                            key={activeIndex}
                            src={doctors[activeIndex].image}
                            alt="Doctor"
                            fill
                            className="object-cover transition-opacity duration-500"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col justify-between gap-8 text-white ">

                        {/* Top Changing Content */}
                        <div className="  text-justify relative  flex-1">
                            <div className=' h-full flex  items-center'>
                                <div className='max-w-xs ml-auto  '>
                                    <div className="mb-4">
                                        <Paragraph size='lg' className='font-bold tracking-widest'>
                                            {doctors[activeIndex].role}
                                        </Paragraph>

                                        <Paragraph size='sm' className='tracking-widest'>
                                            {doctors[activeIndex].degree}
                                        </Paragraph>
                                    </div>

                                    <Paragraph size='base'>
                                        {doctors[activeIndex].description}
                                    </Paragraph>
                                </div>
                            </div>



                            {/* Background Title */}
                            <div className='absolute top-1/2 w-56 -left-8 -translate-y-1/2 -translate-x-1/2  pointer-events-none'>
                                <Heading level={4} className='font-bold tracking-widest '>
                                    {doctors[activeIndex].name}
                                </Heading>
                            </div>
                        </div>

                        {/* Bottom Small Grid (Pinned Below Content) */}
                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 '>
                            {smallDoctors.map((doctor, index) => (
                                <div
                                    key={index}
                                    // onClick={() => setActiveIndex(index)}

                                    className={`relative aspect-square overflow-hidden shadow-lg rounded cursor-pointer transition-all duration-300
            ${activeIndex === index ? "ring-1 ring-primary " : "opacity-70 hover:opacity-100"}`}
                                >
                                    <Image
                                        src={doctor.image}
                                        alt={`Doctor ${index + 1}`}
                                        fill
                                        className="object-cover object-top transition duration-700"
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                    />

                                    <div className='absolute bottom-0 right-0'>
                                        <div className='bg-linear-to-b text-xl from-primary to-primary-light p-2 text-light' onClick={() => {
                                            if (!scrollTriggerRef.current) return

                                            const trigger = scrollTriggerRef.current
                                            const total = doctors.length

                                            // divide properly by total - 1
                                            const progress = index / (total - 1)

                                            const scrollPosition =
                                                trigger.start + progress * (trigger.end - trigger.start)

                                            window.scrollTo(0, scrollPosition)
                                            trigger.update()

                                        }}>
                                            <GoArrowUpLeft />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </CenterSection>
        </div>
    )
}

export default Doctors