"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutScrollAnimation() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.defaults({
                ease: "none",
                duration: 2.5,
            });

            const tl = gsap
                .timeline({ paused: true })
                .from("#boom", {
                    scaleX: 0,
                    scaleY: 0,
                    rotation: -270,
                    duration: 50,
                    ease: "elastic",
                })
                .from("#lisa", {
                    xPercent: 100,
                    duration: 30,
                })
                .from("#philipp", {
                    xPercent: -100,
                    duration: 60,
                });

            ScrollTrigger.create({
                animation: tl,
                trigger: sectionRef.current,
                start: "top top",
                end: "+=2900",
                scrub: true,
                pin: true,

                onLeave: (self) => {
                    self.scroll(self.start);
                    self.disable();
                    self.animation?.progress(1);
                },

                onLeaveBack: (self) => {
                    self.scroll(self.start);
                    self.enable();
                    self.animation?.progress(0);
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* Top Section */}
            <section className="h-[500px] bg-red-500 flex flex-col items-center justify-center text-white">
                <p>Keep scrolling</p>
                <span className="animate-bounce text-2xl mt-2">↓</span>
            </section>

            {/* About Section */}
            <section
                ref={sectionRef}
                id="about"
                className="relative overflow-hidden h-screen min-h-[400px] px-[5%] py-10 bg-black text-white text-center"
            >
                <h2 className="text-3xl font-bold mb-4">Find out who we are</h2>
                <p>Keep scrolling</p>
                <span className="animate-bounce text-2xl mt-2 block">↓</span>

                <div className="flex justify-center items-center w-full p-5 relative">
                    {/* Boom Image */}
                    <Image
                        id="boom"
                        src="https://picsum.photos/id/237/200/300"
                        alt="boom"
                        width={150}
                        height={200}
                        className="absolute"
                    />

                    {/* Philipp */}
                    <div className="relative w-1/2 h-[300px]">
                        <div
                            id="philipp"
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <div
                                className="w-[200px] h-[200px] bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url(https://picsum.photos/id/237/200/300)",
                                }}
                            />
                            <h3 className="mt-2">Philipp</h3>
                        </div>
                    </div>

                    {/* Lisa */}
                    <div className="relative w-1/2 h-[300px]">
                        <div
                            id="lisa"
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <div
                                className="w-[200px] h-[200px] bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url(https://picsum.photos/id/237/200/300)",
                                }}
                            />
                            <h3 className="mt-2">Lisa</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacer */}
            <section className="h-screen bg-orange-500"></section>
        </>
    );
}