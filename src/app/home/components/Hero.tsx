import Heading from "@/src/components/common/Heading"
import Paragraph from "@/src/components/common/Paragraph"
import Image from "next/image"

const Hero = () => {

    const stats = [
        { value: "500+", label: "Customer" },
        { value: "20+", label: "Customer" },
        { value: "50+", label: "Customer" },
    ]
    return (
        <div className="h-screen">
            <div className="grid grid-cols-3 h-full">

                {/* LEFT SIDE */}
                {/* LEFT SIDE */}
                <div className="bg-black h-full px-0 md:px-4 lg:px-12 grid grid-rows-2">

                    {/* Top Half (Empty) */}
                    <div></div>

                    {/* Bottom Half (Content) */}
                    <div className="bg-amber-300  mb-10 sm:mb-16 flex flex-col justify-between">

                        {/* Text */}
                        <Paragraph className="text-dark">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptate a molestias, praesentium inventore unde quia.
                        </Paragraph>

                        {/* Stats */}
                        <div className="border border-light/20 bg-amber-900 rounded p-4 flex justify-between">
                            {stats.map((item, index) => (
                                <div key={index}>
                                    <Heading level={4} className="text-dark tracking-wider">
                                        {item.value}
                                    </Heading>
                                    <Paragraph className="text-dark tracking-wide">
                                        {item.label}
                                    </Paragraph>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:col-span-2 h-full">
                    <div className="relative h-full  shadow-lg">
                        <Image
                            src="/hero/Group-1.png"
                            alt="Clinic Interior"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            priority
                        />

                        <Image
                            src="/design/bannerteeth.png"
                            alt="Dental Planet Logo"
                            width={250}
                            height={250}
                            className="absolute left-3 bottom-1/12 -translate-x-1/2  pointer-events-none "
                            priority
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero