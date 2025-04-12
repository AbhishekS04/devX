"use client";

import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What is Authority?",
        answer: "Authority is a platform where developers can connect, share knowledge, and collaborate on projects to grow together.",
    },
    {
        question: "Is Authority free to use?",
        answer: "Yes, Authority is completely free to use. Our mission is to make learning and collaboration accessible to everyone.",
    },
    {
        question: "How can I contribute to Authority?",
        answer: "You can contribute by sharing your knowledge through posts, answering questions, joining discussions, and collaborating on community-driven projects.",
    },
    {
        question: "How does Authority ensure a positive environment?",
        answer: "We have clear community guidelines and active moderation to make sure Authority stays respectful, inclusive, and supportive for everyone.",
    },
    {
        question: "Can I access Authority on mobile devices?",
        answer: "Yes, Authority is designed to be fully responsive and works great on mobile devices. You can connect with the community from anywhere.",
    },
    {
        question: "How do I report inappropriate content?",
        answer: "If you see any inappropriate content, you can report it using the reporting feature available on each post or comment. Additionally, if possible, share a screenshot and post it in the report group within the community for quicker resolution.",
    },
    {
        question: "How can I stay updated with the latest news and features?",
        answer: "You can follow our blog and subscribe to our newsletter to get the latest updates, news, and features directly in your inbox.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <section id="faqs" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center">
                    Questions? we&apos;ve got{" "}
                    <span className="text-lime-400">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() =>
                                    setSelectedIndex((prevIndex) =>
                                        prevIndex === faqIndex ? -1 : faqIndex
                                    )
                                }
                            >
                                <h3 className="font-medium">{faq.question}</h3>
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
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex && "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>

                            <AnimatePresence initial={false}>
    {selectedIndex === faqIndex && (
        <motion.div
            key="answer"
            initial={{ height: 0, marginTop: 0 }}
            animate={{ height: "auto", marginTop: 24 }}
            exit={{ height: 0, marginTop: 0 }}
            className={twMerge("overflow-hidden")}
        >
            {/* Ensure <p> is not wrapping any block-level elements */}
            <div className="text-white/50">{faq.answer}
            </div>
        </motion.div>
    )}
</AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
