import CenterSection from '@/src/components/common/CenterSection'
import Section from '@/src/components/common/Section'
import Image from 'next/image'
import React from 'react'

const Doctors = () => {
    return (
        <div className='py-10 sm:py-16'>
            <CenterSection>

                {/* Top Text Grid */}
                <div className='grid grid-cols-2 h-32 '>
                    <div className=' p-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe deleniti adipisci similique nobis! Officiis quod quo
                        magni molestias similique pariatur nemo ad iure alias maiores.
                    </div>
                    <div className='flex'>

                        <div className='bg-primary-light p-4 h-full w-2/3 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non!
                        </div>
                        <div className='bg-primary w-1/3 h-full flex  text-center justify-center items-center p-4'>
                            Lorem ipsum dolor sit
                        </div>
                    </div>
                </div>

                {/* Image + Cards Grid */}
                <div className='grid grid-cols-2 relative '>

                    {/* LEFT SIDE */}
                    <div className='h-full flex flex-col'>

                        {/* Small top card */}
                        <div className='flex '>
                            <div className=' h-32 w-1/3'>
                                <Image
                                    src="/doctors/doctor-holds-prosthesis.jpg"
                                    width={500}
                                    height={500}
                                    alt="doctor"
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='bg-dark text-light p-4 h-32 w-[calc(100%-33.33%)]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non!
                            </div>
                        </div>

                        {/* Big middle image (auto stretch) */}
                        <div className='relative flex-1'>
                            <Image
                                src="/doctors/smiling-woman-dentist-chair.jpg"
                                width={500}
                                height={500}
                                alt="dentist"
                                className='w-full h-full object-cover'
                            />
                        </div>

                    </div>

                    {/* RIGHT SIDE BIG IMAGE */}
                    <div className='h-128 '>
                        <Image
                            src="/doctors/close-up-female-1.jpg"
                            width={500}
                            height={500}
                            alt="close up"
                            className='w-full h-full object-cover'
                        />
                    </div>

                    {/* FLOATING CARD 1 */}
                    <div className='absolute top-32 w-1/2 left-1/3'>
                        <div className='flex'>
                            <div className=' h-32 w-1/3'>
                                <Image
                                    src="/doctors/portrait-man-doctor.jpg"
                                    width={500}
                                    height={500}
                                    alt="doctor"
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='bg-primary-light p-4 h-32 w-2/3 text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non!
                            </div>
                        </div>
                    </div>

                    {/* FLOATING CARD 2 */}
                    <div className='absolute top-64 w-1/2 left-1/3'>
                        <div className='flex'>
                            <div className=' h-32 w-1/3'>
                                <Image
                                    src="/doctors/female-doctor.jpg"
                                    width={500}
                                    height={500}
                                    alt="doctor"
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='bg-dark p-4 h-32 w-2/3 text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non!
                            </div>
                        </div>
                    </div>

                    {/* FLOATING CARD 3 */}
                    <div className='absolute top-96 w-1/2 right-1/3'>
                        <div className='flex'>
                            <div className='bg-primary/10 h-32 w-1/3'>
                                <Image
                                    src="/doctors/doctor-with-his-arms.jpg"
                                    width={500}
                                    height={500}
                                    alt="doctor"
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='bg-primary p-4 h-32 w-2/3 text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non!
                            </div>
                        </div>
                    </div>

                </div>

            </CenterSection>
        </div>
    )
}

export default Doctors