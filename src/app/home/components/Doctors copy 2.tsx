"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://plus.unsplash.com/premium_photo-1674458852390-ac22d6c502d7?q=40&w=1000",
    "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?q=40&w=1000",
    "https://images.unsplash.com/photo-1512988442538-a42600ac4634?q=40&w=1000",
];

const ScrollImageSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const imgs = gsap.utils.toArray<HTMLImageElement>(".left-image");

            const itemHeight = 400;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    scrub: true,
                },
            });

            imgs.forEach((img, i) => {
                if (imgs[i + 1]) {
                    tl.to(img, { opacity: 0, duration: 0.5 })
                        .to(imgs[i + 1], { opacity: 1, duration: 0.5 }, "<")
                        .to(
                            contentRef.current,
                            { y: -(itemHeight * (i + 1)), ease: "none" },
                            "<"
                        );
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full">

            {/* SECTION */}
            <div
                ref={containerRef}
                className="flex h-screen items-center justify-center gap-20"
            >

                {/* LEFT IMAGE */}
                <div className="relative w-[400px] h-[400px] overflow-hidden">

                    {images.map((src, i) => (
                        <Image
                            key={i}
                            src={src}
                            alt=""
                            fill
                            className={`left-image absolute object-cover transition-opacity duration-500 ${i === 0 ? "opacity-100" : "opacity-50"
                                }`}
                        />
                    ))}

                </div>

                {/* RIGHT CONTENT */}
                <div className="relative w-[400px] h-[400px] overflow-hidden border">

                    {/* SCROLL CONTENT */}
                    <div ref={contentRef} className="pb-24">

                        {[1, 2, 3].map((num) => (
                            <div
                                key={num}
                                className="h-[400px] flex items-center justify-center text-[80px] font-bold"
                            >
                                Content {num}
                            </div>
                        ))}

                    </div>

                    {/* THUMBNAILS */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">

                        {images.map((src, i) => (
                            <div
                                key={i}
                                className="relative w-[60px] h-[60px] overflow-hidden rounded border border-white"
                            >
                                <Image
                                    src={src}
                                    alt=""
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
};

export default ScrollImageSection;