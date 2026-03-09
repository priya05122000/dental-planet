"use client"

import Image from "next/image"
import { motion } from "motion/react"
import Heading from "@/src/components/common/Heading"
import Paragraph from "@/src/components/common/Paragraph"
import Section from "@/src/components/common/Section"

const images = [
  "/smiling-woman-dentist-chair.webp",
  "/clinic/clinic.webp",
  "/clinic/clinic.webp",
  "/before_after.webp",
  "/smiling-woman-dentist-chair.webp",
]

/* Reusable Image with Blend Overlay */
function BlendImage({ src, objectPosition = "object-cover" }: { src: string; objectPosition?: string }) {
  return (
    <div className="relative w-full h-full rounded overflow-hidden p-1">
      {/* Blurred Background */}
      <Image
        src={src}
        alt=""
        fill
        className="object-cover blur-3xl scale-125"
      />

      {/* Overlay Color */}
      <div className="absolute inset-0 bg-primary mix-blend-overlay"></div>

      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt=""
          fill
          className={`${objectPosition} rounded`}
        />
      </div>
    </div>
  )
}

export default function InstagramClient() {
  return (
    <section className="bg-old-lace py-10 sm:py-16">
      <Section>
        {/* Heading */}
        <div className="grid sm:grid-cols-2 mb-10">
          <div>
            <Heading level={4} className="text-dark tracking-widest mb-4">
              Instagram
            </Heading>

            <Paragraph
              size="lg"
              className="text-dark uppercase font-bold tracking-widest max-w-2xl"
            >
              Lorem ipsum dolor sit amet.
            </Paragraph>
          </div>

          <div className="mt-4 sm:mt-0">
            <Paragraph size="xl" className="font-semibold">
              Stay connected with the latest updates from Dental Planet on Instagram.
              Explore helpful dental tips, patient smile transformations, oral health
              awareness posts, and updates about our advanced treatments.
            </Paragraph>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

          {/* LEFT SIDE */}
          <div className="col-span-2 flex flex-col gap-2 sm:gap-4">

            {/* ROW 1 */}
            <div className="flex gap-2 sm:gap-4 h-65">
              <motion.div
                animate={{ flex: [6, 4, 5, 6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="h-full"
              >
                <BlendImage src={images[0]} />
              </motion.div>

              <motion.div
                animate={{ flex: [4, 6, 5, 4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="h-full"
              >
                <BlendImage src={images[1]} objectPosition="object-cover object-top" />
              </motion.div>
            </div>

            {/* ROW 2 */}
            <div className="flex gap-2 sm:gap-4 h-65">
              <motion.div
                animate={{ flex: [5, 6, 4, 5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="h-full"
              >
                <BlendImage src={images[2]} objectPosition="object-cover object-top" />
              </motion.div>

              <motion.div
                animate={{ flex: [5, 4, 6, 5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="h-full"
              >
                <BlendImage src={images[3]} objectPosition="object-cover object-top" />
              </motion.div>
            </div>

          </div>

          {/* RIGHT SIDE TALL IMAGE */}
          <motion.div
            animate={{ scale: [1, 0.96, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded overflow-hidden hidden sm:block"
          >
            <BlendImage src={images[4]} />
          </motion.div>

        </div>
      </Section>
    </section>
  )
}