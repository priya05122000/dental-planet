"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Paragraph from "@/src/components/common/Paragraph";
import Heading from "@/src/components/common/Heading";

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
                <div className="bg-off-white">

                    {/* Top Text */}
                    <div className="h-40 px-4 lg:px-12 items-center flex">
                        {/* {renderText(
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti adipisci similique nobis!",
                        )} */}
                        <div>
                            <Heading
                                level={4}
                                className="text-dark tracking-wide mb-2"
                            >
                                Case Study
                            </Heading>
                            <Paragraph size="lg" className="text-dark uppercase font-bold tracking-widest max-w-2xl">
                                Professional teeth cleaning
                            </Paragraph>
                        </div>

                    </div>

                    {/* Text + Image */}
                    <div className="grid grid-cols-3">
                        <div className="h-40 bg-primary flex items-center">
                            {renderText(
                                "Professional teeth cleaning",
                                "text-dark"
                            )}
                        </div>
                        <div className="h-40 col-span-2 relative overflow-hidden">
                            {renderImage("/doctors/1.jpg")}

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
                        <div className="h-80 col-span-2">
                            {renderImage("/doctors/smiling-woman-dentist-chair.jpg")}
                        </div>

                        <div>
                            <div className="h-40 relative overflow-hidden">
                                {renderImage("/doctors/female-doctor.jpg")}

                                <motion.div
                                    initial={{ width: "100%" }}
                                    whileInView={{ width: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 h-full bg-primary"
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className="h-40 relative overflow-hidden">
                                {renderImage("/doctors/portrait-man-doctor.jpg")}

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

                {/* ---------- RIGHT SIDE ---------- */}
                <div className="flex flex-col">

                    {/* Large Image with Overlay */}
                    <div className="h-120 w-full relative overflow-hidden">
                        {renderImage(
                            "/doctors/close-up-female-1.jpg",
                            "w-full h-full object-cover"
                        )}

                        <div className="absolute bottom-0 w-full flex justify-start">
                            <div className="relative overflow-hidden h-40 w-2/3  bg-dark">

                                {renderImage("/doctors/before_after.webp")}

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

                    {/* Text + Image */}
                    <div className="grid grid-cols-3">
                        <div className="h-40 col-span-2 bg-dark text-light flex items-center">
                            {renderText(
                                "Professional teeth cleaning.",
                            )}
                        </div>
                        <div className="h-40 relative overflow-hidden">
                            {renderImage("/doctors/before_after.webp")}

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
            </div>

            {/* ===================== BOTTOM GRID ===================== */}
            <div className="grid grid-cols-3">
                <div className="h-40 bg-off-white flex items-center">
                    {renderText(
                        " Professional teeth cleaning.",
                        "text-dark"
                    )}
                </div>

                <div className="h-40 relative overflow-hidden">
                    {renderImage("/doctors/doctor-holds-prosthesis.jpg")}
                    <motion.div
                        initial={{ width: "100%" }}
                        whileInView={{ width: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-0 right-0 h-full bg-primary"
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="h-40 bg-old-lace flex items-center">
                    {renderText(
                        "Professional teeth cleaning.",
                        "text-primary"
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;