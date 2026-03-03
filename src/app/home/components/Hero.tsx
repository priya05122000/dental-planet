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
                <div className="bg-black h-full px-0 md:px-4 lg:px-12 flex items-end">
                    <div className="relative">


                        <div>

                        </div>
                        <div className="absolute bottom-10 z-10">
                            <div className="border rounded border-light/20 p-4 flex gap-10">

                                {stats.map((item, index) => (
                                    <div
                                        key={index}
                                        className=""
                                    >
                                        <Heading level={4} className="text-light font-bold tracking-widest">
                                            {item.value}
                                        </Heading>
                                        <Paragraph  className="text-light tracking-widest mt-2">
                                            {item.label}
                                        </Paragraph>
                                    </div>
                                ))}

                            </div>
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
                            className="absolute left-0 bottom-1/12 -translate-x-1/2  pointer-events-none "
                            priority
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero