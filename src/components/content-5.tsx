"use client";

import { Zap, Trophy, Smile, Cpu } from "lucide-react";
import Tag from "@/components/Tag";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "/achievements/a5.jpeg",
        link: "https://www.linkedin.com/posts/arpita-das-6642a2290_smartindiahackathon2024-agridrive-innovation-activity-7274709928026513408-T4tr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbhorUBdyCtxLneygLEHLvUHrNb60Hjxd4",
    },
    {
        src: "/achievements/a2.jpeg",
        link: "https://www.linkedin.com/posts/samriddhi-sinha-555768280_medtech-medtechhackathon-hackthefuture-activity-7316369435496222721-GLW-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbhorUBdyCtxLneygLEHLvUHrNb60Hjxd4",
    },
    {
        src: "/achievements/a3.jpg",
        link: "https://www.linkedin.com/posts/shovon-halder-5ab775266_hello-guys-i-know-this-isnt-recent-activity-7302433390618677250-sxzZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbhorUBdyCtxLneygLEHLvUHrNb60Hjxd4",
    },
    {
        src: "/achievements/a4.jpeg",
        link: "https://www.linkedin.com/posts/baibhab-adhikari-3380bb297_aipowered-resumescreening-techinnovation-activity-7306205913701367808-pIU8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbhorUBdyCtxLneygLEHLvUHrNb60Hjxd4",
    },
];

export default function ContentSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovering, setHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleImageClick = () => {
        const link = images[currentIndex].link;
        window.open(link, "_blank");
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section id="moments" className="py-24 md:py-32">
            <div className="flex justify-center mb-6">
                <Tag>Moments</Tag>
            </div>

            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">
                        Celebrating the
                        <span className="text-lime-400"> achievements</span> of
                        our community members.
                    </h2>
                    <p>
                        Our community is thriving with incredible
                        accomplishments from groundbreaking projects to
                        innovative solutions, showcasing the talent and
                        dedication of our members.
                    </p>
                </div>

                {/* Carousel with hover popup */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden max-w-full md:max-w-5xl lg:max-w-4xl mx-auto">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={images[currentIndex].src}
                            className="w-full h-full relative group cursor-pointer"
                            onClick={handleImageClick}
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            onMouseMove={handleMouseMove}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={images[currentIndex].src}
                                alt={`Slide ${currentIndex + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                width={1920} // Replace with the actual width of your image
                                height={1080} // Replace with the actual height of your image
                            />

                            <AnimatePresence>
                                {hovering && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}
                                        style={{
                                            top: cursorPosition.y + 20, // Offset the text 20px below the cursor
                                            left: cursorPosition.x,
                                            transform: "translate(-50%, 0)", // Center horizontally, no vertical shift
                                        }}
                                        className="absolute bg-white/20 text-black text-sm px-4 py-1 rounded-lg backdrop-blur-md shadow-md pointer-events-none"
                                    >
                                        Tap to view
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-neutral/20 hover:bg-white/40 text-black backdrop-blur-md p-2 rounded-full transition-all duration-300 shadow-lg w-10 h-10 flex items-center justify-center hover:-translate-x-1"
                        aria-label="Previous"
                        style={{ fontSize: "1.5rem", fontWeight: "bold" }} // Adjusted size and weight
                    >
                        &#8592;
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-neutral/20 hover:bg-white/40 text-black backdrop-blur-md p-2 rounded-full transition-all duration-300 shadow-lg w-10 h-10 flex items-center justify-center hover:translate-x-1"
                        aria-label="Next"
                        style={{ fontSize: "1.5rem", fontWeight: "bold" }} // Adjusted size and weight
                    >
                        &#8594;
                    </button>
                </div>

                {/* Features Section */}
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    {[
                        {
                            icon: <Zap className="text-lime-400" />,
                            title: "Innovative Projects",
                            desc: "Showcasing groundbreaking projects developed by our talented community members.",
                        },
                        {
                            icon: <Trophy className="text-lime-400" />,
                            title: "Award-Winning Solutions",
                            desc: "Celebrating solutions that have earned recognition and accolades in the tech world.",
                        },
                        {
                            icon: <Smile className="text-lime-400" />,
                            title: "Community Impact",
                            desc: "Highlighting contributions that have made a positive impact on the developer community.",
                        },
                        {
                            icon: <Cpu className="text-lime-400" />,
                            title: "AI Innovations",
                            desc: "Featuring cutting-edge AI advancements driven by our community's creativity.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex items-center gap-2">
                                {item.icon}
                                <h3 className="text-sm font-medium">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
