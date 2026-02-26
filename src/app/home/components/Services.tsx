"use client"
import React from "react";
import Heading from '@/src/components/common/Heading'
import Paragraph from '@/src/components/common/Paragraph'
import Section from '@/src/components/common/Section'
import Span from '@/src/components/common/Span';
import Image from 'next/image'
import { PiArrowUpRightBold } from 'react-icons/pi';

const servicesImages = [
    { id: 1, src: "/services/dental-clinic.webp" },
    { id: 2, src: "/services/dental-clinic.webp" },
    { id: 3, src: "/services/dental-clinic.webp" },
    { id: 4, src: "/services/dental-clinic.webp" },
    { id: 5, src: "/services/dental-clinic.webp" },
    { id: 6, src: "/services/dental-clinic.webp" },
];

const ServiceImage = ({ src, id, activeId, setActiveId }: { src: string, id: number, activeId: number | null, setActiveId: React.Dispatch<React.SetStateAction<number | null>> }) => {

    const active = activeId === id;

    return (
        <div className="relative aspect-square w-full overflow-hidden rounded">

            {/* Image */}
            <Image
                src={src}
                alt="Service"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={`object-cover transition-all duration-500 ${active ? "scale-105 blur-md" : ""
                    }`}
            />

            {/* FULL OVERLAY (Explanation) */}
            {active && (
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-start  p-6 transition-all duration-300"
                    onClick={() => setActiveId(null)}
                >
                    <Paragraph size="xl" className="text-light  font-semibold mb-2">
                        Service Name
                    </Paragraph>
                    <Span className="text-light ">
                        This service provides complete dental care with modern equipment
                        and expert professionals ensuring comfort and safety.
                    </Span>
                </div>
            )}

            {/* BOTTOM BAR (Default Only) */}
            {!active && (
                <div className="absolute bottom-0 w-full flex justify-between items-center  transition-all duration-300">
                    <div className='flex justify-between w-full p-2 gap-2 '>
                        <Span className="text-light font-semibold bg-dark/30 backdrop-blur-md rounded p-3 flex-1">Service Name</Span>

                        <button onClick={(e) => {
                            e.stopPropagation();
                            setActiveId(id);
                        }}
                            className="text-light cursor-pointer bg-dark/30 backdrop-blur-md p-3 flex rounded items-center"><PiArrowUpRightBold /></button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

const Services = () => {

    const [activeId, setActiveId] = React.useState<number | null>(null);

    return (
        <div className='bg-dark py-10 sm:py-16'>
            <Section>
                <div className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='max-w-sm'>
                            <Heading level={4} className='text-light uppercase tracking-wide mb-4'>Services</Heading>
                            <Paragraph className='text-light mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem quas perferendis nam inventore autem vel incidunt suscipit, dignissimos itaque.</Paragraph>
                            <button className="bg-linear-to-r from-primary to-primary-light text-dark py-2 px-4 rounded cursor-pointer text-base font-semibold ">
                                View All Services
                            </button>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            {servicesImages.slice(0, 2).map((item) => (
                                <ServiceImage key={item.id}
                                    id={item.id}
                                    src={item.src}
                                    activeId={activeId}
                                    setActiveId={setActiveId} />
                            ))}
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        {servicesImages.slice(2).map((item) => (
                            <ServiceImage key={item.id}
                                id={item.id}
                                src={item.src}
                                activeId={activeId}
                                setActiveId={setActiveId} />
                        ))}
                    </div>
                </div>
            </Section>
        </div>

    )
}

export default Services
