"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // X (Twitter rebrand)

const footerLinks = [
  { icon: FaGithub, href: "https://github.com/AbhishekS04" },
  { icon: SiX, href: "https://twitter.com/_abhishek2304" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/abhishek-singh-045312292" },
  { icon: FaInstagram, href: "https://instagram.com/_.abhishek2310" },
  { icon: FaDiscord, href: "https://discord.gg/AznSv6mh" },
];

export const Footer = () => {
  return (
    <footer className="relative z-10">
      <div className="container">
        <div className="flex flex-col items-center gap-8 py-6 md:flex-row md:justify-between">
          <div className="text-white/40 text-sm">&copy; 2025. All rights reserved.</div>

          <nav className="flex gap-10 sm:gap-10 md:gap-16 lg:gap-20">
            {footerLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-400 transition duration-300 transform hover:scale-110"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
