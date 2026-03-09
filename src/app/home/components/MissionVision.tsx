"use client"

import Image from "next/image"
import Section from "@/src/components/common/Section"
import Paragraph from "@/src/components/common/Paragraph"
import Heading from "@/src/components/common/Heading"

const data = [

    {
        id: 1,
        title: "Vision",
        description:
            "Our vision is to become the most trusted dental clinic in Anna Nagar and Chennai, known for delivering high-quality dental treatments, patient comfort, and innovative dental solutions including dental implants, orthodontic treatment, and cosmetic dentistry.",
    },
    {
        id: 2,
        title: "Mission",
        description:
            "At Dental Planet, our mission is to redefine dental care by combining advanced technology, preventive dentistry, and compassionate treatment to create healthier smiles for every patient. We aim to provide comfortable, ethical, and personalized dental solutions that focus not only on treating dental problems but also on promoting long-term oral health and confidence. Our commitment is to make quality dental care accessible while ensuring every patient experiences a safe, gentle, and positive dental journey.",
    },
]

export default function MissionVision() {
    return (
        <div className="relative ">


            <div className=" text-white flex justify-center items-center py-10 sm:min-h-[calc(100vh-96px)] relative ">


                <div className="absolute right-0 top-0 w-full sm:w-1/3 h-full pointer-events-none">

                    {/* IMAGE */}
                    <Image
                        src="/missionvision/missionvision.webp"
                        alt="Dental Planet"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                    />

                    {/* SMOOTH GRADIENT */}

                </div>

                <div className="hidden sm:block absolute inset-0 bg-linear-to-r from-dark from-70% to-washed-black/60 to-100% " />
                <div className="block sm:hidden absolute inset-0 bg-linear-to-r from-dark/100  to-washed-black/90 " />

                {/* BACKGROUND IMAGE (optional like your previous design) */}
                <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 pointer-events-none ">
                    <Image
                        src="/design/dental-planet.png"
                        alt="Dental Planet"
                        fill
                        loading="lazy"
                        className="object-contain object-bottom"
                        sizes="100vw"
                    />
                </div>

                {/* CONTENT */}
                <Section >

                    <div className="lg:space-y-8">

                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-8  pb-10"
                            >

                                {/* LEFT TITLE */}
                                <div className="md:min-w-45">
                                    <Heading
                                        level={6}
                                        className="text-light font-semibold"
                                    >
                                        {item.title}
                                    </Heading>
                                </div>

                                {/* RIGHT TEXT */}
                                <div className="flex-1">
                                    <Paragraph
                                        size="base"
                                        className="text-light font-light leading-relaxed "
                                    >
                                        {item.description}
                                    </Paragraph>
                                </div>

                            </div>
                        ))}

                    </div>

                </Section>
            </div>
        </div>
    )
}