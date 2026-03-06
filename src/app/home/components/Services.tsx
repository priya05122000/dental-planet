"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import CenterSection from "@/src/components/common/CenterSection";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// ================= DATA =================

const services = [
    {
        id: 1,
        service: "Dental Implants",
        text: `Restore your smile with advanced dental implant solutions. Dental implants are a strong and long-lasting option to replace missing teeth and improve both function and appearance.`,
        subtext: `Our specialists offer single tooth implants and full mouth dental implants using modern techniques. These treatments help restore chewing ability and support a natural-looking smile.`
    },
    {
        id: 2,
        service: "Root Canal Treatment",
        text: `Our painless root canal treatment helps save infected teeth and relieve severe tooth pain. This procedure removes infection from inside the tooth and protects it from further damage.`,
        subtext: `With advanced techniques and careful care, our team assures a comfortable treatment while restoring the strength and function of your natural tooth.`
    },
    {
        id: 3,
        service: "Orthodontic Treatment & Braces",
        text: `Correct crooked teeth and bite problems with advanced orthodontic care. We offer braces, clear aligners, and modern treatment options to gently move teeth into the right position.`,
        subtext: `Our orthodontic treatments help improve your smile, improve oral health, and create proper teeth alignment for long-term comfort.
`
    },
    {
        id: 4,
        service: "Cosmetic Dentistry & Smile Makeover",
        text: `Transform your smile with modern cosmetic dentistry treatments. From teeth whitening and veneers to complete smile makeover procedures, we help improve the appearance of your teeth and create a confident smile.`,
        subtext: `Our smile makeover solutions are customised to create a natural and balanced smile.`,
    },
    {
        id: 5,
        service: "Teeth Cleaning & Preventive Care",
        text: `Maintain good oral hygiene with professional teeth cleaning and preventive dental care. Our treatments help remove plaque, tartar, and stains while protecting your teeth and gums from future problems.`,
        subtext: `Regular dental check-ups and cleanings help prevent cavities, gum disease, and bad breath while keeping your smile healthy and fresh.`
    },
    {
        id: 6,
        service: "Pediatric Dentistry",
        text: `Healthy smiles start early. Our pediatric dentistry services are designed to care for children’s teeth from infancy through their growing years.`,
        subtext: `We offer gentle check-ups, cavity treatment, fluoride care, and preventive guidance in a child-friendly environment to help kids develop strong and healthy teeth.`
    },
    {
        id: 7,
        service: "Tooth Extraction & Wisdom Tooth Removal",
        text: `Safe and comfortable tooth extraction for teeth that are severely damaged, infected, or causing pain. Our dental team carefully evaluates the condition of the tooth and recommends the best treatment to protect your oral health.`,
        subtext: `We also provide professional wisdom tooth removal for impacted or painful wisdom teeth that may cause swelling, infection, or crowding.`
    },
    {
        id: 8,
        service: "Gum Treatment",
        text: `Healthy gums are the foundation of a healthy smile. At our clinic we provide advanced gum treatment to control bleeding gums and manage periodontal issues. Our care focuses on removing infection, reducing inflammation, and protecting the supporting tissues of your teeth.`,
        subtext: `With modern techniques and gentle care, we help restore gum health and prevent further damage, so you can maintain strong teeth and a confident smile.
`,
    },
];

// ================= HEADER =================

const SectionHeader = () => (
    <div className="mb-8">
        <Heading level={4} className="text-dark tracking-widest mb-2">
            Our Dental Services
        </Heading>

        <Paragraph
            size="lg"
            className="text-dark uppercase font-bold tracking-widest max-w-2xl"
        >
            Comprehensive Dental Care for Your Whole Family
        </Paragraph>
    </div>
);

// ================= SERVICE TABS =================

const ServiceTabs = ({
    services,
    activeIndex,
    onClick,
    tabRefs,
    containerRef,
}: any) => (
    <div ref={containerRef} className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 w-max">
            {services.map((item: any, index: number) => (
                <button
                    key={item.id}
                    ref={(el) => { tabRefs.current[index] = el }}
                    onClick={() => onClick(index)}
                    className={`px-2 py-0.5 border border-dark/10 rounded shadow-md whitespace-nowrap shrink-0 transition
          ${activeIndex === index
                            ? "bg-dark text-light"
                            : "bg-washed-black/12"
                        }`}
                >
                    <Paragraph size="sm">{item.service}</Paragraph>
                </button>
            ))}
        </div>
    </div>
);

// ================= SERVICE CONTENT =================

const ServiceContent = ({ item }: any) => (
    <div className="">
        <Paragraph
            size="xl"
            className="text-dark font-semibold mb-2 tracking-wider leading-snug"
        >
            {item.text}
        </Paragraph>
        <Paragraph
            size="base"
            className="text-dark  tracking-wider leading-snug"
        >
            {item.subtext}
        </Paragraph>
    </div>
);

// ================= MAIN COMPONENT =================

export default function Services() {
    const swiperRef = useRef<SwiperType | null>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const tabsContainerRef = useRef<HTMLDivElement | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeArrow, setActiveArrow] = useState<"prev" | "next">("next");

    // Auto scroll active tab horizontally
    useEffect(() => {
        const container = tabsContainerRef.current;
        const activeTab = tabRefs.current[activeIndex];

        if (!container || !activeTab) return;

        const containerRect = container.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();

        const scrollLeft =
            container.scrollLeft + (tabRect.left - containerRect.left);

        container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });
    }, [activeIndex]);

    return (
        <div id="services" className="py-10 sm:flex justify-center items-center sm:py-16 min-h-screen sm:min-h-0 xl:h-[calc(100vh-96px)] bg-old-lace relative overflow-hidden">
            <CenterSection>
                <SectionHeader />

                {/* Tabs */}
                <ServiceTabs
                    services={services}
                    activeIndex={activeIndex}
                    tabRefs={tabRefs}
                    containerRef={tabsContainerRef}
                    onClick={(index: number) =>
                        swiperRef.current?.slideToLoop(index)
                    }
                />

                {/* Swiper */}
                <div className="my-10 sm:flex gap-8">
                    {/* Service Name */}
                    <div className="flex sm:justify-center mb-4 sm:mb-0 h-12 items-center">
                        <div className="flex w-56 text-dark rounded">
                            <Paragraph className="text-primary line-clamp-2">
                                &#9642; {services[activeIndex].service}
                            </Paragraph>
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        grabCursor
                        navigation={{
                            prevEl: ".services-prev",
                            nextEl: ".services-next",
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) =>
                            setActiveIndex(swiper.realIndex)
                        }
                    >
                        {services.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="h-full">
                                    <ServiceContent item={item} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>



                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            setActiveArrow("prev");
                            swiperRef.current?.slidePrev();
                        }}
                        className={`cursor-pointer p-2 rounded text-light transition
      ${activeArrow === "prev"
                                ? "bg-washed-black/58"
                                : "bg-washed-black/12"
                            }`}
                    >
                        <IoIosArrowBack />
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setActiveArrow("next");
                            swiperRef.current?.slideNext();
                        }}
                        className={`cursor-pointer p-2 rounded text-light transition
      ${activeArrow === "next"
                                ? "bg-washed-black/58"
                                : "bg-washed-black/12"
                            }`}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </CenterSection>
        </div>
    );
}