"use client"

import CenterSection from '@/src/components/common/CenterSection'
import Heading from '@/src/components/common/Heading'
import Paragraph from '@/src/components/common/Paragraph'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowUpLeft } from 'react-icons/go'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Span from '@/src/components/common/Span'

gsap.registerPlugin(ScrollTrigger)

const Doctors = () => {

    const pinRef = useRef<HTMLDivElement>(null)


    const sectionRef = useRef<HTMLDivElement>(null)
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

    const imageRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    const swiperRef = useRef<SwiperType | null>(null);

    const doctors = [
        {
            id: 1,
            name: "Dr.Arjun Mehta",
            role: "Orthodontist",
            degree: "Dentist (OBD)",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "/doctors/doctor1.jpg",
        },
        {
            id: 2,
            name: "Dr.Priya Sharma",
            role: "Pediatric Dentist",
            degree: "Dentist (MDS)",
            description: "Specialized dental care for children and teenagers.",
            image: "/doctors/doctor2.jpg",
        },
        {
            id: 3,
            name: "Dr.Rahul Verma",
            role: "Cosmetic Dentist",
            degree: "Dentist (BDS)",
            description: "Smile designing and aesthetic dental treatments.",
            image: "/doctors/doctor3.jpg",
        },
        {
            id: 4,
            name: "Dr.Kavya Iyer",
            role: "Oral Surgeon",
            degree: "Dentist (OMS)",
            description: "Expert in advanced surgical procedures.",
            image: "/doctors/doctor4.jpg",
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (window.innerWidth < 1024) return  // disable GSAP on mobile

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

    // 🔥 ANIMATION WHEN INDEX CHANGES
    useEffect(() => {
        if (window.innerWidth < 1024) return

        const tl = gsap.timeline()

        tl.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.12 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        )

        tl.fromTo(
            textRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out"
            },
            "-=0.7"
        )

    }, [activeIndex])

    return (
        <div className=' bg-dark'>

            <CenterSection >
                <div className=''>
                    <div ref={sectionRef} className="h-screen hidden lg:block px-6 sm:px-8 lg:px-16 xl:px-20">
                        <div className=' flex flex-col h-full py-10 sm:py-16 '>
                            <div className='flex flex-col justify-between h-full gap-10'>
                                {/* Heading */}
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

                                <div className='grid lg:grid-cols-2 flex-1 gap-10   rounded-lg'>

                                    {/* LEFT IMAGE */}
                                    <div
                                        ref={imageRef}
                                        className=" relative h-full overflow-hidden shadow-lg border border-light rounded will-change-transform"
                                    >
                                        <Image
                                            key={activeIndex}
                                            src={doctors[activeIndex].image}
                                            alt="Doctor"
                                            fill
                                            className="object-cover object-top transition-transform duration-700"
                                        />
                                    </div>


                                    {/* RIGHT CONTENT */}
                                    <div className="flex flex-col justify-between  text-white">

                                        <div ref={textRef} className="flex-1 flex items-center relative">


                                            <div className='max-w-xs ml-auto'>

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


                                            <div className='absolute top-1/2 w-56 -left-8 -translate-y-1/2 -translate-x-1/2 pointer-events-none'>
                                                <Heading level={4} className='font-bold tracking-widest'>
                                                    {doctors[activeIndex].name}
                                                </Heading>
                                            </div>

                                        </div>


                                        {/* SMALL GRID */}
                                        <div className="grid grid-cols-4 gap-4 mt-6">
                                            {doctors.map((doctor, index) => (
                                                <div
                                                    key={index}

                                                    onClick={() => {

                                                        if (!scrollTriggerRef.current) return

                                                        const trigger = scrollTriggerRef.current
                                                        const total = doctors.length

                                                        const progress = index / (total - 1)

                                                        const scrollPosition =
                                                            trigger.start + progress * (trigger.end - trigger.start)

                                                        window.scrollTo(0, scrollPosition)

                                                        trigger.update()

                                                    }}
                                                    className={`relative aspect-square overflow-hidden shadow-lg rounded cursor-pointer transition-all duration-300
                                    ${activeIndex === index
                                                            ? "ring-1 ring-primary"
                                                            : "opacity-70 hover:opacity-100"
                                                        }`}
                                                >

                                                    <Image
                                                        src={doctor.image}
                                                        alt=""
                                                        fill
                                                        className="object-cover object-top"
                                                    />

                                                    <div className='absolute bottom-0 right-0'>
                                                        <div
                                                            className='bg-linear-to-b text-xl from-primary to-primary-light p-2 text-light'


                                                        >
                                                            <GoArrowUpLeft />
                                                        </div>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

                <div className='block lg:hidden py-10 sm:py-16'>
                    <div className="mb-8 text-center text-light">
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


                    {/* Swiper */}
                    <div className=" sm:flex ">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            slidesPerView={1}
                            loop
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            grabCursor
                            navigation={{
                                prevEl: ".custom-prev",
                                nextEl: ".custom-next",
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        >
                            {doctors.map((item) => (
                                <SwiperSlide key={item.id} className="h-full">
                                    <div className="flex flex-col items-center justify-center h-full text-center gap-3">
                                        {/* IMAGE */}
                                        <div className="h-36 w-36">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={200}
                                                height={200}
                                                className="object-cover object-top h-full w-full rounded"
                                            />
                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex flex-col items-center">
                                            <Paragraph
                                                size="xl"
                                                className="text-light font-semibold mb-1 tracking-wide leading-snug"
                                            >
                                                {item.name}
                                            </Paragraph>

                                            <Paragraph size="base" className="text-light">
                                                {item.role}
                                            </Paragraph>

                                            <Paragraph size="base" className="text-light">
                                                {item.degree}
                                            </Paragraph>

                                            <Paragraph size="base" className="text-light">
                                                {item.description}
                                            </Paragraph>
                                        </div>


                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>

                    {/* Avatar Navigation */}
                    <div className="flex justify-center items-center gap-2 sm:gap-3 my-8">
                        {doctors.map(
                            (item, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => swiperRef.current?.slideToLoop(index)}
                                        className={`flex items-center overflow-hidden
          ${isActive ? "bg-black border-2 border-primary" : "bg-transparent"}
           cursor-pointer`}
                                    >
                                        {/* Image */}
                                        <div
                                            className={`relative shrink-0 overflow-hidden h-14 w-14
            ${isActive ? " md:border-r-2 border-primary" : ""}
          `}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>

                                        {/* Text */}
                                        {isActive && (
                                            <div

                                                className="px-4 text-left md:block hidden"
                                            >
                                                <Span className="text-white">{item.name}</Span>
                                                <Span className="text-gray-400 block text-xs">
                                                    {item.role}
                                                </Span>
                                            </div>
                                        )}
                                    </button>
                                );
                            },
                        )}
                    </div>
                    <div className="flex justify-center gap-2">
                        <button className="custom-prev cursor-pointer  p-2 flex items-center justify-center rounded bg-light/20 text-white transition">
                            <IoIosArrowBack />
                        </button>

                        <button className="custom-next text-white cursor-pointer p-2 flex items-center justify-center rounded  bg-primary  transition">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </CenterSection>
        </div>
    )
}

export default Doctors