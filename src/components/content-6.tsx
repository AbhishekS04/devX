"use client";

import Link from "next/link";
import Tag from "@/components/Tag";
import Image from "next/image";

export default function CommunitySection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <Tag className="mb-7">MEMBERS</Tag>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                        Built by the <span className="text-lime-400">Community</span> <br /> for the Community
                    </h2>

                    <p className="mt-6">
                        Join hands with us to build and grow together as a
                        community.
                    </p>
                </div>
                <div className="mx-auto mt-12 flex max-w-lg flex-wrap justify-center gap-3">
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Abhishek Singh"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/2.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/3.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/4.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/5.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/6.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/7.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/8.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/9.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                    <Link
                        href="https://github.com/meschacirung"
                        target="_blank"
                        title="Méschac Irung"
                        className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
                    >
                        <Image
                            alt="John Doe"
                            src="https://randomuser.me/api/portraits/men/10.jpg"
                            loading="lazy"
                            width={120}
                            height={120}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
