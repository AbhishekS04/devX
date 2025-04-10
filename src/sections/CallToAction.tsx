'use client';
import { LinkPreview } from "@/components/link-preview";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        animation.current = animate(
          scope.current,
          { x: "-50%" },
          { duration: 30, ease: "linear", repeat: Infinity }
        );
      }, [animate, scope]);
      

    useEffect(() => {
        if (animation.current) {
            animation.current.speed = isHovered ? 0.5 : 1;
        }
    }, [isHovered]);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        if (isHovered) {
            window.addEventListener("mousemove", move);
        } else {
            window.removeEventListener("mousemove", move);
        }
        return () => window.removeEventListener("mousemove", move);
    }, [isHovered]);

    return (
        <section className="py-24">
            <LinkPreview url="https://github.com/Abhisheks04">
                <div className="overflow-x-clip p-4 flex relative">
                    <motion.div
                        ref={scope}
                        className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-16">
                                <span className="text-lime-400 text-7xl">&#10038;</span>
                                <span className="text-white group-hover:text-lime-400 transition-colors duration-300">
                                    Join Us Today
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {isHovered && (
                        <div
                            className="fixed z-50 px-3 py-1 text-white text-sm rounded-full backdrop-blur-md bg-white/10 pointer-events-none transition"
                            style={{
                                left: cursorPos.x + 8,
                                top: cursorPos.y + 20,
                            }}
                        >
                            yes please
                        </div>
                    )}
                </div>
            </LinkPreview>
        </section>
    );
}
