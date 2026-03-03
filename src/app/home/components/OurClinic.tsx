"use client";

import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import Image from "next/image";

const OurClinic = () => {
    return (
        <div className=" ">
            <div>

                <div className="flex flex-col lg:flex-row gap-10 items-stretch">

                    {/* LEFT COLUMN (40%) */}
                    <div className="lg:w-[40%] flex flex-col justify-center px-0 md:px-4 lg:px-12">

                        {/* Top Content */}
                        <div>
                            <Heading
                                level={4}
                                className="text-dark tracking-wide mb-2"
                            >
                                Our Clinic
                            </Heading>

                            <Paragraph size="lg" className="text-dark uppercase font-bold tracking-widest max-w-2xl">
                                Professional teeth cleaning
                            </Paragraph>
                        </div>

                        {/* Feature Boxes */}

                        <div className="mt-10 transition space-y-8  ">

                            <Paragraph size="base" className="">
                                Orthodontics is a specialized branch of dentistry focused on diagnosing, preventing, and treating misaligned teeth and jaws (malocclusions) to improve oral function, health, and facial aesthetics.

                            </Paragraph>
                            <Paragraph size="base" className="">
                                Orthodontics is a specialized branch of dentistry focused on diagnosing, preventing, and treating misaligned teeth and jaws (malocclusions) to improve oral function, health, and facial aesthetics.

                            </Paragraph>
                        </div>

                    </div>

                    {/* RIGHT IMAGE (60%) */}
                    <div className="relative lg:w-[60%] aspect-4/3 overflow-hidden  shadow-lg">
                        <Image
                            src="/clinic/clinic.webp"
                            alt="Clinic Interior"
                            fill
                            className="object-cover  transition duration-700"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            priority
                        />
                    </div>

                </div>

            </div>
        </div>


    );
};

export default OurClinic;