"use client"

import Image from "next/image"
import { motion } from "motion/react"
import Heading from "@/src/components/common/Heading"
import Paragraph from "@/src/components/common/Paragraph"
import Section from "@/src/components/common/Section"
import CenterSection from "@/src/components/common/CenterSection"

const images = [
    "/doctors/smiling-woman-dentist-chair.jpg",
    "/clinic/clinic.webp",
    "/clinic/clinic.webp",
    "/doctors/before_after.webp",
    "/doctors/smiling-woman-dentist-chair.jpg",
]

export default function InstagramClient() {
    return (


        <section className="bg-old-lace py-20">

            <Section>
                <div className="grid sm:grid-cols-2 mb-10">
                    <div >
                        <Heading
                            level={4}
                            className="text-dark tracking-wide mb-4"
                        >
                            Instagram
                        </Heading>
                        <Paragraph
                            size="lg"
                            className="text-dark uppercase font-bold tracking-widest max-w-2xl mx-auto"
                        >
                            Professional teeth cleaning
                        </Paragraph>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <Paragraph size="base" className="">
                            Orthodontics is a specialized branch of dentistry focused on diagnosing, preventing, and treating misaligned teeth and jaws (malocclusions) to improve oral function, health, and facial aesthetics.

                        </Paragraph>
                        <Paragraph size="base" className="">
                            Orthodontics is a specialized branch of dentistry focused on diagnosing, preventing, and treating misaligned teeth and jaws (malocclusions) to improve oral function, health, and facial aesthetics.

                        </Paragraph>
                    </div>
                </div>


                <div className=" grid grid-cols-2 sm:grid-cols-3 gap-6">

                    {/* LEFT SIDE */}
                    <div className="col-span-2 flex flex-col gap-6">

                        {/* ROW 1 */}
                        <div className="flex gap-6 h-65">
                            <motion.div
                                animate={{ flex: [6, 4, 5, 6] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative rounded overflow-hidden"
                            >
                                <Image src={images[0]} alt="" fill className="object-cover object-top" />
                            </motion.div>

                            <motion.div
                                animate={{ flex: [4, 6, 5, 4] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative rounded overflow-hidden"
                            >
                                <Image src={images[1]} alt="" fill className="object-cover object-top" />
                            </motion.div>
                        </div>

                        {/* ROW 2 */}
                        <div className="flex gap-6 h-65">
                            <motion.div
                                animate={{ flex: [5, 6, 4, 5] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                className="relative rounded overflow-hidden"
                            >
                                <Image src={images[2]} alt="" fill className="object-cover object-top" />
                            </motion.div>

                            <motion.div
                                animate={{ flex: [5, 4, 6, 5] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                className="relative rounded overflow-hidden"
                            >
                                <Image src={images[3]} alt="" fill className="object-cover object-top" />
                            </motion.div>
                        </div>

                    </div>

                    {/* RIGHT SIDE TALL IMAGE */}
                    <motion.div
                        animate={{ scale: [1, 0.9, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative rounded overflow-hidden"
                    >
                        <Image
                            src={images[4]}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                </div>
            </Section>
        </section>
    )
}