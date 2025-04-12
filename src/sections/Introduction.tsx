"use client";

import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = ` Building a developer community where innovation thrives, free from complexity and barriers, empowering creators to collaborate and grow.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    // Replace useEffect with useMotionValueEvent for better practice
    useMotionValueEvent(wordIndex, "change", (latest) => {
        setCurrentWord(latest);
    });

    return (
        <section id="introduction" className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing Authority</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creativity deserves a better community</span>{" "}
                        <span className="text-white/15">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >
                                    {` ${word}`}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            {" "}
                            That&apos;s why we created Authority
                        </span>
                    </div>
                </div>

                {/* Adjusted height for proper scroll effect on all screens */}
                <div className="h-[250vh] md:h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
