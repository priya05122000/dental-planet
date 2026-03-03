import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ToastContainer } from "react-toastify";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const abcSans = localFont({
  src: [
    {
      path: "./fonts/abcsans-light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/abcsans-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/abcsans-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dental Planet",
  description: "Professional Dental Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={abcSans.className}>
      <body className="antialiased">

        <ToastContainer position="top-right" autoClose={3000} theme="light" />

        <Navbar />
        {children}
        <Footer />


      </body>
    </html>
  );
}