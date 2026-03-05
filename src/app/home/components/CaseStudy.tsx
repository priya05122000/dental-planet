"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Paragraph from "@/src/components/common/Paragraph";
import Heading from "@/src/components/common/Heading";

/* ----------------------------- */
/* Reveal Animation Component */
/* ----------------------------- */
const Reveal = ({ color = "bg-old-lace" }: { color?: string }) => (
    <motion.div
        initial={{ width: "100%" }}
        whileInView={{ width: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`absolute top-0 right-0 h-full ${color}`}
        style={{ width: "100%" }}
    />
);

/* ----------------------------- */
/* Image Component */
/* ----------------------------- */
const Img = ({
    src,
    className = "object-cover object-center",
}: {
    src: string;
    className?: string;
}) => (
    <Image
        src={src}
        alt="doctor"
        width={600}
        height={600}
        className={`w-full h-full ${className}`}
    />
);

/* ----------------------------- */
/* Image with Reveal Animation */
/* ----------------------------- */
const RevealImage = ({
    src,
    color,
}: {
    src: string;
    color?: string;
}) => (
    <div className="relative overflow-hidden w-full h-full">
        <Img src={src} />
        <Reveal color={color} />
    </div>
);

/* ----------------------------- */
/* Overlay Text Component */
/* ----------------------------- */
const OverlayText = ({
    src,
    overlay,
    children,
}: {
    src: string;
    overlay: string;
    children: React.ReactNode;
}) => (
    <div className="relative flex items-center h-full">
        <Img src={src} />
        <div className={`absolute inset-0 ${overlay}`} />
        <div className="absolute inset-0 p-4 flex items-center">
            {children}
        </div>
    </div>
);

const CaseStudy = () => {
    return (
        <div className="w-full overflow-x-hidden">

            {/* ================= TOP GRID ================= */}
            <div id="case-studies" className="grid grid-cols-1 lg:grid-cols-2">

                {/* -------- LEFT -------- */}
                <div className="bg-dark">

                    {/* Title */}
                    <div className="h-48 px-4 lg:px-12 flex items-center">
                        <div>
                            <Heading level={4} className="text-light mb-2 tracking-wide">
                                Modern Dental Clinic
                            </Heading>

                            <Paragraph
                                size="lg"
                                className="text-light uppercase font-bold tracking-widest max-w-2xl"
                            >
                                Advanced dental technology
                            </Paragraph>
                        </div>
                    </div>

                    {/* Row */}
                    <div className="grid grid-cols-3">

                        <div className="h-48">
                            <OverlayText src="/casestudy/8.webp" overlay="bg-saffron/80 backdrop-blur-xs">
                                <Paragraph size="xl">
                                    Child-friendly dental care
                                </Paragraph>
                            </OverlayText>
                        </div>

                        <div className="h-48 col-span-2">
                            <RevealImage src="/casestudy/5.webp" />
                        </div>

                    </div>

                    {/* Big Image Section */}
                    <div className="grid grid-cols-3">

                        <div className="h-96 col-span-2">
                            <Img src="/casestudy/11.webp" />
                        </div>

                        <div>
                            <div className="h-48">
                                <RevealImage
                                    src="/casestudy/4.webp"
                                    color="bg-dark"
                                />
                            </div>

                            <div className="h-48">
                                <RevealImage
                                    src="/casestudy/6.webp"
                                    color="bg-old-lace"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* -------- RIGHT -------- */}
                <div className="hidden sm:flex flex-col">

                    <div className="h-144 w-full relative overflow-hidden">
                        <Img src="/casestudy/9.webp" className="object-cover" />

                        <div className="absolute bottom-0 w-full flex justify-start">
                            <div className="relative overflow-hidden h-48 w-2/3">
                                <Img src="/casestudy/12.webp" />
                                <Reveal color="bg-primary" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3">

                        <div className="h-48 col-span-2">
                            <OverlayText
                                src="/casestudy/1.webp"
                                overlay="bg-dark/80 backdrop-blur-xs"
                            >
                                <Paragraph size="lg" className="text-light">
                                    A modern dental clinic dedicated to providing advanced,
                                    comfortable and painless dental care for patients of all ages.
                                </Paragraph>
                            </OverlayText>
                        </div>

                        <div className="h-48">
                            <RevealImage
                                src="/casestudy/3.webp"
                                color="bg-primary-light"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* ================= BOTTOM GRID ================= */}
            <div className="grid grid-cols-3">

                <div className="h-48">
                    <OverlayText
                        src="/casestudy/10.webp"
                        overlay="bg-old-lace/80 backdrop-blur-xs"
                    >
                        <>
                            <Heading level={3} className="hidden sm:block text-dark">
                                Your Trusted Dentist.
                            </Heading>

                            <Heading level={5} className="block sm:hidden text-dark">
                                Your Trusted Dentist.
                            </Heading>
                        </>
                    </OverlayText>
                </div>

                <div className="h-48">
                    <RevealImage
                        src="/casestudy/2.webp"
                        color="bg-saffron"
                    />
                </div>

                <div className="h-48">
                    <OverlayText
                        src="/casestudy/7.webp"
                        overlay="bg-old-lace/80 backdrop-blur-xs"
                    >
                        <Heading level={6} className="text-primary ">
                            Gentle and painless dental treatment
                        </Heading>
                    </OverlayText>
                </div>

            </div>
        </div>
    );
};

export default CaseStudy;