"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Paragraph from "@/src/components/common/Paragraph";
import Heading from "@/src/components/common/Heading";
import Head from "next/head";

const CaseStudy = () => {
    /* ---------------------------------- */
    /* Reusable Image Block */
    /* ---------------------------------- */
    const renderImage = (
        src: string,
        className: string = "w-full h-full object-cover object-top max-w-full"
    ) => (
        <Image
            src={src}
            width={500}
            height={500}
            alt="doctor"
            className={className}
        />
    );

    /* ---------------------------------- */
    /* Reusable Text Block */
    /* ---------------------------------- */
    const renderText = (
        text: string,
        className: string = ""
    ) => (
        <Paragraph size="lg" className={`p-4 ${className}`}>
            {text}
        </Paragraph>
    );

    return (
        <div className="w-full overflow-x-hidden">
            {/* ===================== TOP GRID ===================== */}
            <div id="case-studies" className="grid grid-cols-1 lg:grid-cols-2">
                {/* ---------- LEFT SIDE ---------- */}
                <div className="bg-dark">

                    {/* Top Text */}
                    <div className="h-48 px-4 lg:px-12 items-center flex">
                        {/* {renderText(
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti adipisci similique nobis!",
                        )} */}
                        <div>
                            <Heading
                                level={4}
                                className="text-light tracking-wide mb-2"
                            >
                                Case Study
                            </Heading>
                            <Paragraph size="lg" className="text-light uppercase font-bold tracking-widest max-w-2xl">
                                Professional teeth cleaning
                            </Paragraph>
                        </div>
                    </div>

                    {/* Text + Image */}
                    <div className="grid grid-cols-3">
                        <div className="h-48 font-bold flex items-center relative">
                            {/* {renderText(
                                "Lorem ipsum dolor, sit amet ",
                                "text-dark"
                            )} */}
                            {renderImage("/casestudy/14.jpeg")}
                            <div className="absolute inset-0 bg-saffron/80 backdrop-blur-xs"></div>
                            <Paragraph size="xl" className="absolute inset-0 p-4 flex items-center"> Lorem ipsum dolor, sit amet</Paragraph>
                        </div>
                        <div className="h-48 col-span-2 relative overflow-hidden">
                            {/* {renderImage("/casestudy/12.jpeg")} */}
                            {renderImage("/casestudy/17.jpeg")}


                            <motion.div
                                initial={{ width: "100%" }}
                                whileInView={{ width: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute top-0 right-0 h-full bg-dark"
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>

                    {/* Big Image + Small Stack */}
                    <div className="grid grid-cols-3">
                        <div className="h-96 col-span-2">
                            {renderImage("/casestudy/11.jpeg")}
                        </div>

                        <div>
                            <div className="h-48 relative overflow-hidden">
                                {renderImage("/casestudy/4.png")}

                                <motion.div
                                    initial={{ width: "100%" }}
                                    whileInView={{ width: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 h-full bg-primary-light"
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className="h-48 relative overflow-hidden">
                                {renderImage("/casestudy/10.webp")}

                                <motion.div
                                    initial={{ width: "100%" }}
                                    whileInView={{ width: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 h-full bg-old-lace"
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------- RIGHT SIDE ---------- */}
                <div className="hidden sm:flex flex-col">
                    <div className="h-144 w-full relative overflow-hidden">
                        {renderImage(
                            "/casestudy/9.png",
                            "w-full h-full object-cover"
                        )}
                        <div className="absolute bottom-0 w-full flex justify-start">
                            <div className="relative overflow-hidden h-48 w-2/3">
                                {renderImage("/casestudy/12.jpeg")}
                                <motion.div
                                    initial={{ width: "100%" }}
                                    whileInView={{ width: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 h-full bg-primary"
                                    style={{ width: "100%" }}
                                />

                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3">
                        {/* <div className="h-48 col-span-2 bg-dark text-light flex items-center">
                            {renderText(
                                "A modern dental clinic dedicated to providing advanced, comfortable, and painless dental care for patients of all ages.",
                            )}
                        </div> */}

                        <div className="h-48 col-span-2  flex items-center relative">
                            {/* {renderText(
                                "Lorem ipsum dolor, sit amet ",
                                "text-dark"
                            )} */}
                            {renderImage("/casestudy/13.png")}
                            <div className="absolute inset-0 bg-dark/80 backdrop-blur-xs"></div>
                            <Paragraph size="lg" className={`absolute text-light inset-0 p-4 flex items-center `}>
                                A modern dental clinic dedicated to providing advanced, comfortable, and painless dental care for patients of all ages.
                            </Paragraph>
                        </div>
                        <div className="h-48 relative overflow-hidden">
                            {renderImage("/casestudy/3.webp")}

                            <motion.div
                                initial={{ width: "100%" }}
                                whileInView={{ width: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute top-0 right-0 h-full bg-primary-light"
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===================== BOTTOM GRID ===================== */}
            <div className="grid grid-cols-3">
                {/* <div className="h-48 bg-off-white flex items-center">

                    <Heading level={3} className="p-4 hidden sm:block">
                        Your Trusted Dentist.
                    </Heading>
                    <Heading level={5} className="p-4 block sm:hidden">
                        Your Trusted Dentist.
                    </Heading>
                </div> */}

                <div className="h-48  flex items-center relative">
                    {/* {renderText(
                                "Lorem ipsum dolor, sit amet ",
                                "text-dark"
                            )} */}
                    {renderImage("/casestudy/16.jpg")}
                    <div className="absolute inset-0 bg-old-lace/80 backdrop-blur-xs"></div>
                    <div className="absolute text-dark">
                        <Heading level={3} className="p-4 hidden sm:block">
                            Your Trusted Dentist.
                        </Heading>
                        <Heading level={5} className="p-4 block sm:hidden">
                            Your Trusted Dentist.
                        </Heading>
                    </div>

                </div>

                <div className="h-48 relative overflow-hidden">
                    {/* {renderImage("/casestudy/8.webp")} */}
                    {renderImage("/casestudy/15.jpeg")}
                    <motion.div
                        initial={{ width: "100%" }}
                        whileInView={{ width: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-0 right-0 h-full bg-saffron"
                        style={{ width: "100%" }}
                    />
                </div>

                {/* <div className="h-48 bg-old-lace flex items-center">
                    {renderText(
                        "Lorem ipsum dolor, sit amet consectetur adipisicing ",
                        "text-primary"
                    )}
                </div> */}

                <div className="h-48  flex items-center relative">
                    {/* {renderText(
                                "Lorem ipsum dolor, sit amet ",
                                "text-dark"
                            )} */}
                    {renderImage("/casestudy/18.jpg")}
                    <div className="absolute inset-0 bg-old-lace/80 backdrop-blur-xs"></div>
                    <Heading level={6} className={`absolute text-primary inset-0 p-4 flex items-center `}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                    </Heading>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;