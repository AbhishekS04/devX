"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="flex items-center justify-between p-2 md:px-4">
                            {/* Left: Logo */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => (window.location.href = "/")}
                                    className="flex items-center"
                                >
                                    <Image
                                        src={logoImage}
                                        alt="Layers logo"
                                        className="h-9 w-auto"
                                    />
                                </button>
                            </div>

                            {/* Center: Nav Links */}
                            <nav className="hidden md:flex gap-6 font-medium justify-center flex-1 text-white">
                                {navLinks.map((link) => (
                                    <a
                                        href={link.href}
                                        key={link.label}
                                        className="hover:text-lime-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>

                            {/* Right: Button */}
                            <div className="flex items-center gap-4">
                                {/* Hamburger for mobile */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>

                                <InteractiveHoverButton
                                    onClick={() =>
                                        window.open(
                                            "https://discord.gg/NWtruVZxu4",
                                            "_blank"
                                        )
                                    }
                                    className="hidden md:inline-flex items-center bg-neutral-900/70 hover:bg-neutral-900/50 rounded-full border border-lime-400 text-lime-400 hover:text-black transition-colors"
                                >
                                    Join Now
                                </InteractiveHoverButton>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className="hover:text-lime-400 transition-colors duration-300"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <InteractiveHoverButton
                                            onClick={() =>
                                                window.open(
                                                    "https://discord.gg/NWtruVZxu4",
                                                    "_blank"
                                                )
                                            }
                                            className="items-center bg-neutral-900/70 hover:bg-neutral-900/50 rounded-full border border-lime-400 text-lime-400 hover:text-black transition-colors"
                                        >
                                            Join Now
                                        </InteractiveHoverButton>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Spacer to avoid content hiding behind fixed navbar */}
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px] "></div>
        </>
    );
}
