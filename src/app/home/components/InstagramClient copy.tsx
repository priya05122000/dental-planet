"use client";

import Heading from "@/src/components/common/Heading";
import Paragraph from "@/src/components/common/Paragraph";
import Section from "@/src/components/common/Section";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

/* ---------------------------------------------
   TYPES
---------------------------------------------- */
type MediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

type InstagramPost = {
    id: string;
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    media_type: MediaType;
    caption?: string;
    timestamp?: string;
};

/* ---------------------------------------------
   MEDIA RENDER
---------------------------------------------- */
const InstagramMedia = ({ post }: { post: InstagramPost }) => {
    if (post.media_type === "VIDEO") {
        return (
            <video
                src={post.media_url}
                poster={post.thumbnail_url}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-inherit"
            />
        );
    }

    return (
        <Image
            src={post.media_url}
            alt="Instagram post image"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover rounded-inherit"
        />
    );
};

/* ---------------------------------------------
   DATE FORMAT
---------------------------------------------- */
const formatDate = (dateString?: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

/* ---------------------------------------------
   CARD
---------------------------------------------- */
const InstagramCard = ({
    post,
    className,
}: {
    post?: InstagramPost;
    className: string;
}) => {
    if (!post) return null;

    return (
        <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} group relative overflow-hidden`}
        >
            <div className="absolute inset-0">
                <InstagramMedia post={post} />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-(--dark-blue) from-0% to-transparent to-20%" />

            <div className="absolute bottom-0 left-0 right-0 p-3 text-white z-10">
                <span className="text-xs block">
                    {formatDate(post.timestamp)}
                </span>
            </div>
        </a>
    );
};

/* ---------------------------------------------
   MAIN COMPONENT
---------------------------------------------- */
const InstagramClient = () => {

    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);

    /* 🔥 FETCH FROM SERVERLESS API */
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("/api/instagram");
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                console.error("Instagram fetch failed", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const latestPosts = posts.slice(0, 6);

    if (loading) return null;

    return (
        <Section>
            <div className="py-10 sm:py-16 lg:py-20">

                <div className="flex flex-col items-center text-center">
                    <Heading level={4} className="text-dark uppercase">
                        Instagram Feed
                    </Heading>
                    <Paragraph size="base" className=" mt-4 max-w-2xl text-dark">
                        Showcasing quality fabrication, smart design, and durable performance.
                    </Paragraph>
                </div>

                {/* DESKTOP */}
                <div className="sm:flex hidden flex-row items-center justify-center mt-10 gap-2 md:gap-6 w-full overflow-hidden">

                    <InstagramCard post={latestPosts[0]} className="relative h-28 md:h-52 lg:h-72 xl:h-92 w-[23%] rounded-lg" />

                    <div className="flex flex-col gap-2 md:gap-6 flex-1 w-full">

                        <div className="flex flex-row items-end gap-2 md:gap-6">
                            <InstagramCard post={latestPosts[1]} className="relative h-24 md:h-40 lg:h-52 xl:h-72 w-[30%] rounded-lg" />
                            <InstagramCard post={latestPosts[2]} className="relative h-32 md:h-56 lg:h-72 xl:h-96 w-[30%] rounded-lg" />
                            <InstagramCard post={latestPosts[3]} className="relative h-28 md:h-44 lg:h-60 xl:h-80 w-[30%] rounded-lg" />
                        </div>

                        <div className="flex flex-row gap-2 md:gap-6">
                            <InstagramCard post={latestPosts[4]} className="relative h-20 md:h-40 lg:h-52 xl:h-64 w-[43%] rounded-lg" />
                            <InstagramCard post={latestPosts[5]} className="relative h-16 md:h-32 lg:h-36 xl:h-52 w-[32%] rounded-lg" />
                        </div>

                    </div>
                </div>

                {/* MOBILE */}
                <div className="flex sm:hidden flex-row items-center justify-center mt-10 gap-2 w-full overflow-hidden">

                    <div className="flex flex-row gap-2 w-full">

                        <div className="flex flex-col w-full items-end gap-2">
                            <InstagramCard post={latestPosts[0]} className="relative h-48 w-full rounded-lg" />
                            <InstagramCard post={latestPosts[1]} className="relative h-48 w-full rounded-lg" />
                            <InstagramCard post={latestPosts[2]} className="relative h-48 w-full rounded-lg" />
                        </div>

                        <div className="flex flex-col w-full mt-10 gap-2">
                            <InstagramCard post={latestPosts[3]} className="relative h-48 w-full rounded-lg" />
                            <InstagramCard post={latestPosts[4]} className="relative h-48 w-full rounded-lg" />
                            <InstagramCard post={latestPosts[5]} className="relative h-48 w-full rounded-lg" />
                        </div>

                    </div>
                </div>

                <div className="flex justify-end mt-6  hover:underline">
                    <Link
                        href="https://www.instagram.com/pmf.world/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    >
                        Instagram <BsArrowRight />
                    </Link>
                </div>

            </div>
        </Section>
    );
};

export default InstagramClient;