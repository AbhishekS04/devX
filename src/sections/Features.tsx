"use client";
import React from "react";

import Tag from "@/components/Tag";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/admin1.jpg";
import avatar11 from "@/assets/images/admin11.png";
import avatar111 from "@/assets/images/admin111.jpg";
import avatar4 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Open Source Projects",
    "Code Collaboration",
    "Developer Forums",
    "Real-time Debugging",
    "Knowledge Sharing",
    "Community Events",
    "Mentorship Programs",
];

export default function Features() {
    return (
        <section id="features" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Key Points</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    When knowledge meets{" "}
                    <span className="text-lime-400">good brain&apos;s</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3  md:grid-cols-4 gap-8">
                    <FeatureCard
                        title="Community Admins"
                        description="Meet the dedicated admins who ensure seamless collaboration, foster innovation, and build a thriving developer community."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center gap-2">
                            {/* Avatar 1 */}
                            <a
                                href="https://github.com/Shovon0004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group/avatar1 z-40"
                            >
                                <Avatar>
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={avatar1}
                                            alt="Admin 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </Avatar>
                                <span
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-1 text-sm text-indigo-300 
            bg-white/10 backdrop-blur-md rounded-full opacity-0 translate-y-2 
            group-hover/avatar1:opacity-100 group-hover/avatar1:translate-y-0 
            transition duration-300 delay-100 whitespace-nowrap shadow-md"
                                >
                                    💭 Shovon Haldar
                                </span>
                            </a>

                            {/* Avatar 2 */}
                            <a
                                href="https://github.com/AbhishekS04"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group/avatar2 -ml-6 z-30"
                            >
                                <Avatar className="border-lime-500">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={avatar11}
                                            alt="Admin 2"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </Avatar>
                                <span
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-1 text-sm text-lime-300 
            bg-white/10 backdrop-blur-md rounded-full opacity-0 translate-y-2 
            group-hover/avatar2:opacity-100 group-hover/avatar2:translate-y-0 
            transition duration-300 delay-200 whitespace-nowrap shadow-md"
                                >
                                    💭 Abhishek Singh
                                </span>
                            </a>

                            {/* Avatar 3 */}
                            <a
                                href="https://github.com/Snehasish321"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group/avatar3 -ml-6 z-20"
                            >
                                <Avatar className="border-amber-500">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={avatar111}
                                            alt="Admin 3"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </Avatar>
                                <span
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-1 text-sm text-amber-300 
            bg-white/10 backdrop-blur-md rounded-full opacity-0 translate-y-2 
            group-hover/avatar3:opacity-100 group-hover/avatar3:translate-y-0 
            transition duration-300 delay-300 whitespace-nowrap shadow-md"
                                >
                                    💭 Snehasish Mondal
                                </span>
                            </a>

                            {/* Avatar 4 */}
                            <a
                                href="https://"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group/avatar4 -ml-6"
                            >
                                <Avatar className="transition-all duration-300 border-transparent group-hover/avatar4:border-green-500">
                                    <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative overflow-hidden transition-all duration-300">
                                        {/* Avatar Image */}
                                        <Image
                                            src={avatar4}
                                            alt="Ashwin Santiago"
                                            className="absolute size-full rounded-full opacity-0 group-hover/avatar4:opacity-100 object-cover transition-opacity duration-300"
                                        />

                                        {/* Three Dots */}
                                        <div className="flex gap-1 z-10 transition-opacity duration-300 group-hover/avatar4:opacity-0">
                                            {Array.from({ length: 3 }).map(
                                                (_, i) => (
                                                    <span
                                                        key={i}
                                                        className="size-1.5 rounded-full bg-white inline-flex"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </Avatar>

                                {/* Name Tooltip */}
                                <span
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-1 text-sm text-cyan-300 
        bg-white/10 backdrop-blur-md rounded-full opacity-0 translate-y-2 
        group-hover/avatar4:opacity-100 group-hover/avatar4:translate-y-0 
        transition duration-300 delay-400 whitespace-nowrap shadow-md"
                                >
                                    💭 Not Selected
                                </span>
                            </a>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title=" community"
                        description=" Fostering collaboration and engagement through
        interactive discussions, shared resources, and
        real-time feedback."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <div className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center relative">
                                Empowering you{" "}
                                <span className="text-6xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent relative inline-block">
                                    <span>to grow</span>

                                    {/* ✨ Fixed Video Overlay */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-40 sm:w-60 md:w-72 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500">
                                        <video
                                            src="/assets/gif-incredible.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full rounded-2xl shadow-2xl"
                                        />
                                    </div>
                                </span>{" "}
                                with us
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Shortcut"
                        description="Keyboard quick action to delete your problem"
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 ">
                                ctrl
                            </Key>
                            <Key className=" outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1  delay-150">
                                a
                            </Key>
                            <Key className=" outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">
                                del
                            </Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 py-1.5 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
