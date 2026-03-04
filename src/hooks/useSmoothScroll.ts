"use client";

import { useLenis } from "lenis/react";

export const useSmoothScroll = () => {
    const lenis = useLenis();

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id) as HTMLElement | null;

        if (element && lenis) {
            lenis.scrollTo(element, {
                offset: -80,
                duration: 1.2,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
            });
        }
    };

    return { scrollToSection };
};