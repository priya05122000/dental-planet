"use client"

import Image from "next/image"
import { motion } from "motion/react"

const images = [
    "/doctors/doctor1.jpg",
    "/doctors/doctor2.jpg",
    "/doctors/doctor3.jpg",
    "/doctors/doctor4.jpg",
    "/doctors/doctor5.jpg",
]

export default function InstagramClient() {
    return (
        <section className="bg-old-lace py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="col-span-2 flex flex-col gap-6">

                    {/* ROW 1 */}
                    <div className="flex gap-6 h-65">
                        <motion.div
                            animate={{ flex: [6, 4, 5, 6] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative rounded-xl overflow-hidden"
                        >
                            <Image src={images[0]} alt="" fill className="object-cover object-top" />
                        </motion.div>

                        <motion.div
                            animate={{ flex: [4, 6, 5, 4] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative rounded-xl overflow-hidden"
                        >
                            <Image src={images[1]} alt="" fill className="object-cover object-top" />
                        </motion.div>
                    </div>

                    {/* ROW 2 */}
                    <div className="flex gap-6 h-65">
                        <motion.div
                            animate={{ flex: [5, 6, 4, 5] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="relative rounded-xl overflow-hidden"
                        >
                            <Image src={images[2]} alt="" fill className="object-cover object-top" />
                        </motion.div>

                        <motion.div
                            animate={{ flex: [5, 4, 6, 5] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="relative rounded-xl overflow-hidden"
                        >
                            <Image src={images[3]} alt="" fill className="object-cover object-top" />
                        </motion.div>
                    </div>

                </div>

                {/* RIGHT SIDE TALL IMAGE */}
                <motion.div
                    animate={{ scale: [1, 0.9, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative rounded-xl overflow-hidden"
                >
                    <Image
                        src={images[4]}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </motion.div>

            </div>
        </section>
    )
}