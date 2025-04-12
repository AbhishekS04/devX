"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
// import { SpotlightButton } from "@/components/Spotlightbutton";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Hero() {
    return (
        <section id="home" className="py-24 overflow-x-clip relative">
            <BackgroundBeams className="absolute inset-0 -z-20" />

            {/* <BackgroundBeams className="absolute inset-0 -z-20 w-full h-full pointer-events-none" /> */}


            {/* 🌟 Softer & dimmer glowing ball above the heading */}

            <div
    className="absolute top-[15%] left-1/2 -translate-x-1/2 -z-10 w-[500px] h-[500px] rounded-full bg-lime-400 blur-[500px] opacity-0 animate-glowPulse pointer-events-none"
/>

            <div className="container relative">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-lime-400 to-lime-600 rounded-full text-neutral-950 font-bold">
                        ✨ 10+ active members
                    </div>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 text-white relative z-10">
                    Code Together <span className="text-lime-400">Grow</span>{" "}
                    Together
                </h1>

                <p className="text-center text-lg sm:text-xl text-white/70 mt-8 max-w-2xl mx-auto px-4 relative z-10">
                    Join a vibrant community of developers. Share knowledge,
                    build projects, and accelerate your growth.
                </p>
                <div className="px-4 sm:px-0">
                    <form className="flex flex-col sm:flex-row items-stretch gap-2 border border-white/15 rounded-full p-2 mt-8 max-w-md mx-auto bg-white/5 backdrop-blur-sm">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent text-white placeholder:text-white/40 px-4 py-2 w-full flex-1 rounded-full focus:outline-none focus:ring-0 border-none"
                        />

                        <InteractiveHoverButton
                            type="submit"
                            className="inline-flex items-center bg-transparent hover:bg-neutral-900/50 backdrop-blur-sm rounded-full border border-transparent text-lime-300 hover:text-black transition-colors"
                            aria-label="Sign up for Authority"
                        >
                            SUBSCRIBE
                            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1"></span>
                        </InteractiveHoverButton>
                    </form>
                </div>
            </div>
        </section>
    );
}
