"use client"

import CenterSection from '@/src/components/common/CenterSection'
import Heading from '@/src/components/common/Heading'
import Paragraph from '@/src/components/common/Paragraph'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowUpLeft } from 'react-icons/go'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from '@/src/components/common/Section'

gsap.registerPlugin(ScrollTrigger)

const Doctors = () => {

    const pinRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    const [activeIndex, setActiveIndex] = useState(0)

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


    useEffect(() => {

        const total = doctors.length

        const trigger = ScrollTrigger.create({
            trigger: pinRef.current,
            start: "top top",
            end: `+=${window.innerHeight * (total - 1)}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {

                const index = Math.round(self.progress * (total - 1))
                setActiveIndex(index)

            }
        })

        return () => trigger.kill()

    }, [])


    // smooth animation
    useEffect(() => {

        const tl = gsap.timeline()

        tl.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
        )

        tl.fromTo(
            textRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.4"
        )

    }, [activeIndex])


    return (

        <section id="doctor" className=' bg-dark'>
            <CenterSection>
                {/* PINNED FULL SCREEN */}
                <div ref={pinRef} className="h-screen ">

                    <div className=' flex flex-col h-full py-10 sm:py-16 '>
                        <div className='flex flex-col justify-between h-full gap-10'>
                            {/* heading */}
                            <div className=" text-light text-center ">

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


                            {/* DOCTOR SECTION (smaller height) */}
                            <div className="grid lg:grid-cols-2 flex-1 gap-10   rounded-lg">

                                {/* IMAGE */}
                                <div
                                    ref={imageRef}
                                    className="relative h-full overflow-hidden shadow-lg border border-light rounded"
                                >

                                    <Image
                                        key={activeIndex}
                                        src={doctors[activeIndex].image}
                                        alt="Doctor"
                                        fill
                                        className="object-cover object-top"
                                    />

                                </div>


                                {/* CONTENT */}
                                <div className="flex flex-col justify-between text-white">

                                    <div ref={textRef} className="flex-1 flex items-center relative">

                                        <div className="max-w-xs ml-auto">

                                            <Paragraph
                                                size="lg"
                                                className="font-bold tracking-widest mb-2"
                                            >
                                                {doctors[activeIndex].role}
                                            </Paragraph>

                                            <Paragraph size="sm" className="tracking-widest mb-4">
                                                {doctors[activeIndex].degree}
                                            </Paragraph>

                                            <Paragraph size="base">
                                                {doctors[activeIndex].description}
                                            </Paragraph>

                                        </div>


                                        <div className="absolute top-1/2 w-56 -left-8 -translate-y-1/2 -translate-x-1/2 pointer-events-none">

                                            <Heading level={4} className="font-bold tracking-widest">
                                                {doctors[activeIndex].name}
                                            </Heading>

                                        </div>

                                    </div>


                                    {/* THUMBNAILS */}
                                    <div className="grid grid-cols-4 gap-4 mt-6">

                                        {doctors.map((doctor, index) => (

                                            <div
                                                key={index}
                                                className={`relative aspect-square overflow-hidden rounded cursor-pointer transition-all
                    ${activeIndex === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"}
                    `}
                                            >

                                                <Image
                                                    src={doctor.image}
                                                    alt=""
                                                    fill
                                                    className="object-cover object-top"
                                                />

                                                <div className="absolute bottom-0 right-0 bg-linear-to-b from-primary to-primary-light text-light p-2">
                                                    <GoArrowUpLeft />
                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>


                </div>

            </CenterSection>

        </section>

    )
}

export default Doctors