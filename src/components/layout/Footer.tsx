"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "../common/Section";
import Paragraph from "../common/Paragraph";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSmoothScroll } from "@/src/hooks/useSmoothScroll";

const Footer = () => {


    const { scrollToSection } = useSmoothScroll();

    const handleScrollTo = (id: string) => {
        scrollToSection(id);
    };
    return (
        <div id="contact" className="bg-dark text-light">
            <Section>
                <footer className="pt-10 sm:pt-16 pb-6 space-y-8">

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
                                Dental Planet – Trusted dental clinic in Anna Nagar, Chennai offering expert dental treatments for healthy, confident smiles.
                            </Paragraph>

                            <div className="mt-8">
                                <ul className="space-y-1.5 text-body text-sm font-normal">

                                    <li>
                                        <button
                                            onClick={() => scrollToSection("#services")}
                                            className="hover:text-primary transition cursor-pointer"
                                        >
                                            Services
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            onClick={() => scrollToSection("#about")}
                                            className="hover:text-primary transition cursor-pointer"
                                        >
                                            About us
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            onClick={() => scrollToSection("#case-studies")}
                                            className="hover:text-primary transition cursor-pointer"
                                        >
                                            Casestudy
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            onClick={() => scrollToSection("#contact")}
                                            className="hover:text-primary transition cursor-pointer"
                                        >
                                            Contact us
                                        </button>
                                    </li>

                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
                        <div >
                            {/* Google Map */}
                            <div className="rounded overflow-hidden h-full">
                                {/* <iframe
                                    id="inlineFrameExample"
                                    title="Inline Frame Example"
                                    width="100%"
                                    height="100%"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik">
                                </iframe> */}

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.242049938548!2d80.2135763748434!3d13.08384038724194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265a003c7696f%3A0x87f5d079c1d60666!2sDENTAL%20PLANET!5e0!3m2!1sen!2sin!4v1772783889636!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* RIGHT SIDE (Large) */}
                        <div className=" grid grid-cols-1  gap-8">
                            <div className="max-w-md flex justify-between flex-col">
                                <div className="space-y-4">
                                    {/* Contact Info */}
                                    <div>
                                        <Paragraph size="xl" className=" text-primary  font-medium mb-2 " style={{ letterSpacing: ".3rem" }}>
                                            Contact
                                        </Paragraph>
                                        <ul className="space-y-1 ">
                                            <li className="flex items-center gap-2 text-sm">
                                                <IoCall className="text-primary-light w-5 h-5 shrink-0" />
                                                <a href="tel:+918551986619" className="hover:underline">
                                                    +918551986619
                                                </a>
                                            </li>

                                            <li className="flex items-start gap-2 mt-2">
                                                <MdLocationPin className="text-primary-light w-5 h-5 shrink-0 " />
                                                <Paragraph size="sm">
                                                    37, Easwaram, 3rd Cross St, Lapis lagoon, <br /> AA Block, Shanthi Colony,
                                                    Anna Nagar,<br /> Chennai, Tamil Nadu - 600040.
                                                </Paragraph>
                                            </li>
                                        </ul>
                                    </div>

                                    <div >
                                        <Paragraph size="xl" className=" text-primary font-medium mb-2 " style={{ letterSpacing: "0.3rem" }}>
                                            Opening Hours
                                        </Paragraph>

                                        <ul className="space-y-2">
                                            <li className="flex justify-between text-light">
                                                <Paragraph size="sm">Monday - Saturday</Paragraph>
                                                <Paragraph size="sm" className="font-medium">
                                                    10:00 AM - 8:00 PM
                                                </Paragraph>
                                            </li>

                                            <li className="flex justify-between text-light">
                                                <Paragraph size="sm">Sunday</Paragraph>
                                                <Paragraph size="sm" className="font-medium">
                                                    10:00 AM - 6:00 PM
                                                </Paragraph>
                                            </li>
                                            {/*
                                            <li className="flex justify-between text-light">
                                                <Paragraph size="sm">Sunday</Paragraph>
                                                <Paragraph size="sm" className="font-medium text-red-500">
                                                    Closed
                                                </Paragraph>
                                            </li> */}
                                        </ul>
                                    </div>

                                    <button className="bg-linear-to-r from-primary to-primary-light text-dark py-2 px-4 rounded cursor-pointer font-normal text-sm lg:text-base  " onClick={() => handleScrollTo("#appointment-form")}>
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