import CenterSection from '@/src/components/common/CenterSection'
import Section from '@/src/components/common/Section'
import Image from 'next/image'
import React from 'react'

const Doctors = () => {
    return (
        <div className='py-10 sm:py-16'>
            <CenterSection>
                <div className='grid grid-cols-2'>
                    <div className='bg-dark/10 p-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti adipisci similique nobis! Officiis quod quo magni molestias similique pariatur nemo ad iure alias maiores, odio accusantium mollitia tempora. Maiores?
                    </div>
                    <div className='bg-primary-light p-4'>
        
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti adipisci similique nobis! Officiis quod quo magni molestias similique pariatur nemo ad iure alias maiores, odio accusantium mollitia tempora. Maiores?
                    </div>
                </div>
                <div className='grid grid-cols-2 relative min-h-200'>
                    <div>
                        <div className='flex'>
                            <div className='bg-primary/10  h-32 w-1/3 '>
                                <Image
                                    src="/doctors/doctor-holds-prosthesis.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='bg-primary/10 p-4 h-32 w-2/3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non!
                            </div>
                        </div>

                        <div className='relative'>
                            <Image
                                src="/doctors/smiling-woman-dentist-chair.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className='w-full h-full object-cover'
                            />

                        </div>
                    </div>

                    <div className='h-full'>
                        <Image
                            src="/doctors/close-up-female-1.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute top-32 w-1/2 left-1/3'>

                        <div className='flex'>
                            <div className='bg-primary/10  h-32 w-1/3 '>
                                <Image
                                    src="/doctors/portrait-man-doctor.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='bg-primary p-4 h-32 w-2/3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non!
                            </div>
                        </div>

                    </div>
                    <div className='absolute top-64 w-1/2 left-1/3'>
                        <div className='flex'>
                            <div className='bg-primary/10  h-32 w-1/3 '>
                                <Image
                                    src="/doctors/female-doctor.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='bg-primary p-4 h-32 w-2/3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non!
                            </div>
                        </div>

                    </div>
                    <div className='absolute top-96 w-1/2 right-1/3'>
                        <div className='flex'>
                            <div className='bg-primary/10  h-32 w-1/3 '>
                                <Image
                                    src="/doctors/doctor-with-his-arms.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='bg-primary p-4 h-32 w-2/3'>
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
