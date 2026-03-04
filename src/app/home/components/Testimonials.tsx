"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import CenterSection from "@/src/components/common/CenterSection";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxStarFilled } from "react-icons/rx";
import Image from "next/image";
import Span from "@/src/components/common/Span";

const testimonials = [
  {
    id: 1,
    name: "Dr. Samantha Jones",
    role: "Senior Orthodontist",
    service: "Orthodontics",
    image: "doctors/doctor-holds-prosthesis.jpg",
    text: `“Dental Planet is a very clean dental clinic with friendly staff. The dentist explained my root canal treatment clearly and made the procedure completely painless.”
`,
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    role: "Periodontist",
    service: "Gum Treatment",
    image: "doctors/portrait-man-doctor.jpg",
    text: `“I visited Dental Planet for teeth whitening and the results were amazing. Highly recommend this professional dental care clinic in Anna Nagar.”`,
  },
  {
    id: 3,
    name: "Dr. David Smith",
    role: "Oral Surgeon",
    service: "Oral Surgery",
    image: "doctors/female-doctor.jpg",
    text: `“The dentist was very gentle with my child. This is truly a child-friendly dental clinic with caring doctors and hygienic treatment.”`,
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div id="testimonials" className="py-10 sm:py-16 bg-off-white">
      <CenterSection>
        <div className="mb-8">
          <Heading
            level={4}
            className="text-dark tracking-wide text-center mb-4"
          >
            Testimonials
          </Heading>
          <Paragraph
            size="lg"
            className="text-dark uppercase font-bold tracking-widest text-center max-w-2xl mx-auto"
          >
            Professional teeth cleaning
          </Paragraph>
        </div>

        {/* Swiper */}
        <div className=" my-10  ">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false, // keeps autoplay after arrow click
            }}
            grabCursor={true}
            navigation={{
              prevEl: ".test-prev",
              nextEl: ".test-next",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // IMPORTANT
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <Paragraph
                  size="lg"
                  className="max-w-2xl lg:max-w-3xl mx-auto text-dark text-center  tracking-wide leading-snug"
                >
                  {item.text}
                </Paragraph>
                <div className="sm:hidden flex-col items-center justify-center flex">
                  <Paragraph
                    size="base"
                    className="text-primary font-bold mt-4"
                  >
                    {item.name}
                  </Paragraph>
                  <Span className="text-gray-500 text-xs mt-1">
                    {item.role}
                  </Span>
                </div>
                <Paragraph
                  size="xl"
                  className="text-gold my-3 sm:my-6 flex gap-1 justify-center"
                >
                  {[...Array(5)].map((_, index) => (
                    <RxStarFilled key={index} />
                  ))}
                </Paragraph>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-4 ">
            {/* Name + Role */}

            {/* Avatar Navigation */}
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              {(isMobile ? testimonials.slice(0, 6) : testimonials).map(
                (item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <motion.button
                      key={item.id}
                      layout
                      onClick={() => swiperRef.current?.slideToLoop(index)}
                      className={`flex items-center overflow-hidden
          ${isActive ? "bg-black border-2 border-primary" : "bg-transparent"}
          h-10 sm:h-14 cursor-pointer`}
                      transition={{
                        layout: { duration: 0.45, ease: "easeInOut" },
                      }}
                    >
                      {/* Image */}
                      <motion.div
                        layout
                        className={`relative shrink-0 overflow-hidden
            ${isActive ? "w-10 h-10 sm:w-14 sm:h-14 md:border-r-2 border-primary" : "w-10 h-10 sm:w-14 sm:h-14"}
          `}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Text */}
                      {isActive && (
                        <motion.div
                          layout
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="px-4 text-left md:block hidden"
                        >
                          <Span className="text-white">{item.name}</Span>
                          <Span className="text-gray-400 block text-xs">
                            {item.role}
                          </Span>
                        </motion.div>
                      )}
                    </motion.button>
                  );
                },
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <button type="button"
            className="test-prev cursor-pointer  p-2 flex items-center justify-center rounded bg-washed-black/12 text-white transition">
            <IoIosArrowBack />
          </button>

          <button type="button"
            className="test-next text-white cursor-pointer p-2 flex items-center justify-center rounded  bg-primary  transition">
            <IoIosArrowForward />
          </button>
        </div>
      </CenterSection>
    </div>
  );
}
