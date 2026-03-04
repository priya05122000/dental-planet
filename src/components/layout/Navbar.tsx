"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { useSmoothScroll } from "@/src/hooks/useSmoothScroll";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About us", href: "#about" },
  { name: "Casestudy", href: "#case-studies" },
  { name: "Contact us", href: "#contact" },
];

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const { scrollToSection } = useSmoothScroll();

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };
  /* ---------------- Animations ---------------- */

  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1200px at 100% 0%)",
      transition: { type: "spring", stiffness: 20 },
    },
    closed: {
      clipPath: "circle(0px at 100% 0%)",
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
          className={`fixed top-0 left-0 right-0 px-0 sm:px-2 lg:px-0 z-50 flex justify-center  transition-all duration-300 ${scrolled ? "bg-dark shadow-lg py-2" : "bg-transparent py-2 lg:py-4"
            }`}
        >
          <div
            className="w-full px-6 sm:px-4 lg:px-12  rounded

            flex items-center justify-between py-2 transition-all"
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
                  className=" h-full cursor-pointer"
                />
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {/* Desktop Nav */}
              <nav>
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

              <button className="bg-linear-to-r from-primary to-primary-light text-light py-2 px-4 rounded cursor-pointer text-sm lg:text-base font-normal hidden lg:flex" onClick={() => handleScrollTo("#appointment-form")}>
                Book Appointment
              </button>
            </div>

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
              className="lg:hidden text-light "
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
                className="fixed inset-0 z-40 bg-white dark:bg-dark lg:hidden flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-4 text-light "
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
                    <motion.li key={item.name} variants={itemVariants}>
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
      )}
    </AnimatePresence>
  );
}
