"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "../common/Section";
import Paragraph from "../common/Paragraph";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div id="contact" className="bg-dark text-light">
            <Section>
                <footer className="pt-10 sm:pt-16 pb-6 space-y-4">

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-16 ">

                        {/* LEFT SIDE (Small) */}
                        <div className="">
                            <div className="mb-8">
                                {/* Logo */}
                                <div className="flex items-center mb-4">
                                    <Image
                                        src="/logo/dental_planet.webp"
                                        alt="Dental Planet Logo"
                                        width={200}
                                        height={200}
                                        className="w-1/2 h-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE (Large) */}
                        <div className="">

                            {/* Short Description */}
                            <Paragraph className="">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore placeat laborum assumenda eaque incidunt non sequi deserunt ex. Officiis, aspernatur?
                            </Paragraph>

                            <div className="mt-4">

                                <ul className="space-y-1.5 text-body text-sm">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/services">Doctor</Link></li>
                                    <li><Link href="/contact">Services</Link></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
                        <div >
                            {/* Google Map */}
                            <div className="rounded overflow-hidden h-full">
                                <iframe
                                    id="inlineFrameExample"
                                    title="Inline Frame Example"
                                    width="100%"
                                    height="100%"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik">
                                </iframe>
                            </div>
                        </div>

                        {/* RIGHT SIDE (Large) */}
                        <div className=" grid grid-cols-1  gap-8">
                            <div className="max-w-md flex justify-between flex-col">
                                <div className="space-y-4">
                                    {/* Contact Info */}
                                    <div>
                                        <Paragraph size="xl" className="tracking-widest text-primary font-medium mb-2 ">
                                            Contact
                                        </Paragraph>
                                        <ul className="space-y-1 ">
                                            <li className="flex items-center gap-2 text-base lg:text-lg font-semibold"><IoCall className="text-primary-light" /> +91 98765 43210</li>
                                            <li className="flex items-center gap-2 text-base lg:text-lg font-semibold"><MdEmail className="text-primary-light" /> info@dentalplanet.com</li>
                                            <li className="flex items-start gap-2"><MdLocationPin className="text-primary-light text-base lg:text-lg font-semibold" /> <Paragraph size="sm">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</Paragraph></li>
                                        </ul>
                                    </div>

                                    <div >
                                        <Paragraph
                                            size="xl"
                                            className="tracking-widest text-primary font-medium mb-3"
                                        >
                                            Opening Hours
                                        </Paragraph>

                                        <ul className="space-y-2">
                                            <li className="flex justify-between text-light">
                                                <Paragraph size="sm">Monday - Friday</Paragraph>
                                                <Paragraph size="sm" className="font-medium">
                                                    9:00 AM - 8:00 PM
                                                </Paragraph>
                                            </li>

                                            <li className="flex justify-between text-light">
                                                <Paragraph size="sm">Saturday</Paragraph>
                                                <Paragraph size="sm" className="font-medium">
                                                    10:00 AM - 6:00 PM
                                                </Paragraph>
                                            </li>

                                            <li className="flex justify-between text-light">
                                                <Paragraph size="sm">Sunday</Paragraph>
                                                <Paragraph size="sm" className="font-medium text-red-500">
                                                    Closed
                                                </Paragraph>
                                            </li>
                                        </ul>
                                    </div>

                                    <button className="bg-linear-to-r from-primary to-primary-light text-dark py-2 px-4 rounded cursor-pointer text-base font-semibold ">
                                        Book Appointment
                                    </button>

                                    <div className="flex items-center gap-2">
                                        <Paragraph size="sm" className="font-medium">
                                            Follow Us :
                                        </Paragraph>

                                        <div className="flex items-center gap-2 text-primary text-base">
                                            <FaInstagram className="cursor-pointer hover:text-primary-light transition" />
                                            <FaFacebookF className="cursor-pointer hover:text-primary-light transition" />
                                            <FaYoutube className="cursor-pointer hover:text-primary-light transition" />
                                            <FaXTwitter className="cursor-pointer hover:text-primary-light transition" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-light/10 mt-10 pt-6 text-center text-sm text-body">
                        &copy; {new Date().getFullYear()} Dental Planet. All Rights Reserved.
                    </div>

                </footer>
            </Section>
        </div >
    );
};

export default Footer;