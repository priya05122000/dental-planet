"use client";

import CenterSection from "@/src/components/common/CenterSection";
import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import Image from "next/image";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";

const NAME_REGEX = /^[A-Za-z.\s]+$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX =
    /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,63})@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const MESSAGE_REGEX = /^[A-Za-z0-9\s.,!?'"()\-]{0,300}$/;

export default function AppointmentForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });

    const sanitize = {
        name: (value: string) => value.replace(/[^A-Za-z.\s]/g, ""),
        mobile: (value: string) =>
            value.replace(/\D/g, "").slice(0, 10).replace(/^[^6-9]+/, ""),
        email: (value: string) =>
            value.replace(/[^a-zA-Z0-9@._-]/g, "").replace(/(@.*)@/g, "$1"),
        message: (value: string) =>
            value.replace(/[^A-Za-z0-9\s.,!?'"()\-]/g, "").slice(0, 300),
    };

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: sanitize[field](value),
        }));
    };

    const validate = (): string | null => {
        if (!form.name.trim()) return "Name is required";
        if (!NAME_REGEX.test(form.name)) return "Invalid name format";

        if (!form.mobile.trim()) return "Mobile is required";
        if (!MOBILE_REGEX.test(form.mobile))
            return "Mobile must start with 6-9 and contain 10 digits";

        if (form.email && !EMAIL_REGEX.test(form.email))
            return "Invalid email format";

        if (form.message && !MESSAGE_REGEX.test(form.message))
            return "Invalid message format";

        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading) return;

        const error = validate();
        if (error) {
            toast.error(error);
            return;
        }

        if (!executeRecaptcha) {
            toast.error("Captcha not ready. Please refresh.");
            return;
        }

        try {
            setLoading(true);

            const token = await executeRecaptcha("appointment_submit");

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, token }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Submission failed");
            }

            toast.success("Appointment Booked successfully 🎉");

            setForm({
                name: "",
                mobile: "",
                email: "",
                message: "",
            });
        } catch (err: any) {
            toast.error(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="appointment-form" className="bg-old-lace py-20 sm:py-24 lg:py-28 relative overflow-hidden">

            {/* Decorative teeth image */}
            <Image
                src="/design/teeth.webp"
                alt="Dental Decoration"
                width={200}
                height={200}
                className="absolute right-0 -bottom-15 sm:top-1/3 w-28 sm:w-32 md:w-40 lg:w-56 pointer-events-none z-0"
                priority
            />

            {/* Content */}
            <div className="relative z-10">
                <CenterSection>

                    <div className="mb-10 text-center">
                        <Heading level={4} className="text-dark tracking-wide mb-2">
                            Make an Appointment
                        </Heading>

                        <Paragraph
                            size="lg"
                            className="text-dark uppercase font-bold tracking-widest max-w-2xl mx-auto"
                        >
                            Professional teeth cleaning
                        </Paragraph>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        autoComplete="off"
                        className="space-y-4 max-w-4xl mx-auto"
                    >

                        <div className="grid gap-4 sm:grid-cols-3 text-base">

                            <input
                                type="text"
                                placeholder="Name *"
                                value={form.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className="rounded border border-dark/20 px-3 py-2 w-full focus:outline-none"
                            />

                            <div className="flex">
                                <span className="rounded-tl rounded-bl border-y border-l border-dark/20 px-3 py-2 flex items-center">
                                    +91
                                </span>

                                <input
                                    type="tel"
                                    placeholder="Mobile *"
                                    inputMode="numeric"
                                    value={form.mobile}
                                    onChange={(e) => handleChange("mobile", e.target.value)}
                                    className="rounded-tr rounded-br border border-dark/20 px-3 py-2 w-full focus:outline-none"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Email"
                                value={form.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="rounded border border-dark/20 px-3 py-2 w-full focus:outline-none"
                            />
                        </div>

                        <textarea
                            placeholder="Message"
                            value={form.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            className="rounded border border-dark/20 px-3 py-2 w-full focus:outline-none"
                        />

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-linear-to-r from-primary to-primary-light text-light py-2 px-4 rounded  disabled:opacity-50 disabled:cursor-not-allowed font-normal text-sm lg:text-base"
                            >
                                {loading ? "Booking..." : "Book Appointment"}
                            </button>
                        </div>

                    </form>
                </CenterSection>
            </div>

        </div>
    );
}