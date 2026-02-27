"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon, FaBookOpen } from "react-icons/fa";
import { useLenis } from "lenis/react";
import Image from "next/image";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Career", href: "#career" },
    { name: "Projects", href: "#projects" },
];

export default function Header() {
    const [theme, setTheme] = useState("light");
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lenis = useLenis();

    // Load saved theme (Next safe)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);



    // Hide header on scroll down
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollY = window.scrollY;

    //         if (currentScrollY > lastScrollY && currentScrollY > 80) {
    //             setShowHeader(false);
    //         } else {
    //             setShowHeader(true);
    //         }

    //         setLastScrollY(currentScrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll, { passive: true });
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [lastScrollY]);

    const handleScrollTo = (id: string) => {
        if (lenis) {
            lenis.scrollTo(id);
        }
        setIsMobileMenuOpen(false);
    };

    /* ---------------- Animations ---------------- */

    const menuVariants: Variants = {
        open: {
            clipPath: "circle(1200px at 90% 5%)",
            transition: { type: "spring", stiffness: 20 },
        },
        closed: {
            clipPath: "circle(20px at 90% 5%)",
            transition: { type: "spring", stiffness: 400, damping: 40 },
        },
    };

    const listVariants: Variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    const itemVariants: Variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 50, opacity: 0 },
    };

    return (

        <AnimatePresence>
            {showHeader && (
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
                >

                    <div
                        className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto rounded
            bg-light/10 backdrop-blur-sm
            flex items-center justify-between px-6 py-3 transition-all"
                    >
                        {/* Logo */}
                        <button
                            onClick={() => handleScrollTo("#hero")}
                            className="text-xl font-bold text-light "
                        >
                            <div className="flex items-center ">
                                <Image
                                    src="/logo/dental_planet.webp"
                                    alt="Dental Planet Logo"
                                    width={200}
                                    height={200}
                                    className="w-1/2 h-full"
                                />
                            </div>
                        </button>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex flex-1 justify-center">
                            <ul className="flex space-x-6">
                                {navItems.map((item) => (
                                    <li
                                        key={item.name}
                                        className="relative group text-sm font-medium text-light"
                                    >
                                        <button
                                            onClick={() => handleScrollTo(item.href)}
                                            className="hover:text-primary cursor-pointer  transition"
                                        >
                                            {item.name}
                                        </button>


                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <button className="bg-linear-to-r from-primary to-primary-light text-dark py-2 px-4 rounded cursor-pointer text-base font-semibold hidden md:flex">
                            Book Appointment
                        </button>


                        {/* Theme Toggle */}
                        {/* <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="hidden md:flex p-2 rounded-full hover:bg-pink-500/20 transition"
                        >
                            {theme === "dark" ? (
                                <FaMoon className="text-light " />
                            ) : (
                                <FaSun className="text-light " />
                            )}
                        </button> */}

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden text-light "
                        >
                            <FaBars size={22} />
                        </button>
                    </div>


                    {/* ---------------- Mobile Sidebar ---------------- */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={menuVariants}
                                className="fixed inset-0 z-40 bg-white dark:bg-black md:hidden flex flex-col items-center justify-center"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="absolute top-8 right-8 text-light "
                                >
                                    <FaTimes size={28} />
                                </button>

                                <motion.ul
                                    variants={listVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="flex flex-col space-y-8 text-center"
                                >
                                    {navItems.map((item) => (
                                        <motion.li
                                            key={item.name}
                                            variants={itemVariants}
                                        >
                                            <button
                                                onClick={() => handleScrollTo(item.href)}
                                                className="text-3xl font-bold text-light "
                                            >
                                                {item.name}
                                            </button>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.header>
            )
            }
        </AnimatePresence >

    );
}