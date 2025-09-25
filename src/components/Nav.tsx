/**
 * Navigation
 */

import Image from "next/image";
import Link from "next/link";

interface NavTypes {
    id: number;
    navItem: string;
    path: string;
}

export default function Navigation() {
    const navItems: NavTypes[] = [
        {
            id: 1,
            navItem: "Resume",
            path: "/resume",
        },
        {
            id: 2,
            navItem: "Contact",
            path: "/contact",
        },
        {
            id: 3,
            navItem: "Projects",
            path: "/projects",
        },
    ];

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
                    {navItems.map((items) => {
                        const { id, navItem, path } = items;

                        return (
                            <Link key={id} href={path}>
                                <p className="font-bold cursor-pointer">
                                    {navItem}
                                </p>
                            </Link>
                        );
                    })}

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
