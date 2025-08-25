/**
 * Navigation
 */

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <>
            <nav className="w-[95%] uppercase mx-auto py-[1rem] items-center flex justify-between">
                <Link href="/">
                    <p className="text-[3rem] font-bold flex gap-[.5rem]">
                        {/* eslint-disable-next-line */}
                        <span className="text-accent">//</span>DU
                    </p>
                </Link>

                <div className="flex items-center gap-[2rem]">
                    <Link href="/resume">
                        <p className="font-bold cursor-pointer">Resume</p>
                    </Link>

                    <Link href="/projects">
                        <p className="font-bold cursor-pointer">Projects</p>
                    </Link>

                    <Link href="/contact">
                        <p className="font-bold cursor-pointer">Contact</p>
                    </Link>

                    <section className="flex items-center gap-[1.5rem]">
                        <Image
                            src="/icons/x.svg"
                            width={32}
                            height={32}
                            alt="Social Icon"
                            className="w-[1.5rem] cursor-pointer"
                        />
                        <Image
                            src="/icons/linkedin.svg"
                            width={32}
                            height={32}
                            alt="Social Icon"
                            className="w-[1.5rem] cursor-pointer"
                        />
                    </section>
                </div>
            </nav>
        </>
    );
}
