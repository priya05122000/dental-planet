"use client";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import Section from "@/src/components/common/Section";
import Image from "next/image";

const MissionVision = () => {
    return (
        <div className="bg-dark py-12 sm:py-16">
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col justify-between">

                        <div>
                            <Heading
                                level={4}
                                className="text-light uppercase tracking-wide mb-4"
                            >
                                Our Clinic
                            </Heading>

                            <Paragraph size="base" className="text-light max-w-md">
                                Modern treatments tailored to your unique needs ensure a
                                comfortable and satisfying dental experience.
                            </Paragraph>
                        </div>
                        <div className="space-y-4">
                            {/* Feature Box 1 */}
                            <div className="p-4 rounded border border-light/10">
                                <Paragraph size="lg" className="text-light font-semibold mb-2">
                                    Innovative Equipment
                                </Paragraph>
                                <Paragraph size="base" className="text-light">
                                    We use cutting-edge technology for diagnosis and treatment,
                                    ensuring a high standard of medical care.
                                </Paragraph>
                            </div>

                            {/* Feature Box 2 */}
                            <div className="p-4 rounded border border-light/10  ">
                                <Paragraph size="lg" className="text-light mb-2 font-semibold">
                                    Personalized Approach
                                </Paragraph>
                                <Paragraph size="base" className="text-light ">
                                    Customized treatment plans adapted to each patient’s needs.
                                </Paragraph>
                            </div>
                        </div>


                    </div>

                    {/* CENTER IMAGE */}
                    <div className="relative aspect-4/5 w-full overflow-hidden rounded">
                        <Image
                            src="/services/dental-clinic.webp"
                            alt="Clinic Interior"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-8">

                        <div>
                            <Heading level={6} className="text-light mb-4">
                                Expert Care
                            </Heading>
                            <Paragraph size="base" className="text-light mb-4 max-w-sm">
                                Our dedicated doctors continuously enhance their expertise to
                                bring you the highest standards of dental services.
                            </Paragraph>

                            <button className="bg-linear-to-r from-primary to-primary-light text-dark py-2 px-4 rounded cursor-pointer text-base font-semibold ">
                                Meet Our Team
                            </button>
                        </div>

                        <div className="relative aspect-square w-full overflow-hidden rounded">
                            <Image
                                src="/services/patient-having-dental-treatment-with-tool-patients-mouth-dentistry-improved-smile.jpg"
                                alt="Doctor Portrait"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
};

export default MissionVision;