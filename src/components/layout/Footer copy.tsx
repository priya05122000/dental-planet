"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "../common/Section";
import Paragraph from "../common/Paragraph";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <Section>
                <footer className="pt-10 sm:pt-16 pb-6 space-y-4">

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-20 ">

                        {/* LEFT SIDE (Small) */}
                        <div className="md:col-span-2">
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

                                {/* Short Description */}
                                <Paragraph className="max-w-xs">
                                    Advanced dental care with modern technology and expert doctors.
                                </Paragraph>
                            </div>




                        </div>

                        {/* RIGHT SIDE (Large) */}
                        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Quick Links */}
                            <div>
                                <Paragraph size="sm" className="text-primary font-semibold mb-2 uppercase ">
                                    Quick Links
                                </Paragraph>
                                <ul className="space-y-1 text-body text-base">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            {/* Services */}
                            <div>
                                <Paragraph size="sm" className="text-primary font-semibold mb-2 uppercase ">
                                    Our Services
                                </Paragraph>
                                <ul className="space-y-1 text-body text-base">
                                    <li>Teeth Whitening</li>
                                    <li>Root Canal Treatment</li>
                                    <li>Dental Implants</li>
                                    <li>Braces & Aligners</li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <Paragraph size="sm" className="text-primary font-semibold mb-4 uppercase">
                                    Contact Us
                                </Paragraph>
                                <ul className="space-y-1 text-body text-base">
                                    <li>📍 Ranipet, Tamil Nadu</li>
                                    <li>📞 +91 98765 43210</li>
                                    <li>✉️ info@dentalplanet.com</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-20 ">
                        <div className="md:col-span-2">
                            {/* Google Map */}
                            <div className="rounded overflow-hidden">
                                <iframe
                                    id="inlineFrameExample"
                                    title="Inline Frame Example"
                                    width="100%"
                                    height="300"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik">
                                </iframe>
                            </div>
                        </div>

                        {/* RIGHT SIDE (Large) */}
                        <div className="md:col-span-3 grid grid-cols-1  gap-8">
                            <div className="max-w-md flex justify-between flex-col">
                                <div className="">
                                    {/* Contact Info */}
                                    <div className="mb-4">
                                        <Paragraph size="sm" className="text-primary font-semibold mb-2 uppercase">
                                            Contact Us
                                        </Paragraph>
                                        <ul className="space-y-1 text-base lg:text-lg font-semibold">
                                            <li className="flex items-center gap-2"><IoCall className="text-primary-light" /> +91 98765 43210</li>
                                            <li className="flex items-center gap-2"><MdEmail className="text-primary-light" /> info@dentalplanet.com</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <Paragraph size="sm" className="text-primary font-semibold mb-2 uppercase">
                                            Address
                                        </Paragraph>
                                        <Paragraph size="base">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</Paragraph>
                                    </div>
                                </div>


                                <div>
                                    <button className="bg-linear-to-r from-primary to-primary-light text-dark py-2 px-4 rounded cursor-pointer text-base font-semibold ">
                                        Book Appointment
                                    </button>
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
        </div>
    );
};

export default Footer;