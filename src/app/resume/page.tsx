/**
 * Resume page
 */

import { SquigglyLine } from "@/components/SquigglyLine";
import WorkHistory from "@/components/WorkHistory";
import Image from "next/image";

interface Skill {
    id: number;
    skill: string;
    iconUrl: string;
    slug: string;
}

const skills: Skill[] = [
    {
        id: 1,
        skill: "Next.js",
        iconUrl: "/icons/nextjs.svg",
        slug: "nextjs",
    },
    {
        id: 2,
        skill: "React",
        iconUrl: "/icons/react.svg",
        slug: "react",
    },
    {
        id: 3,
        skill: "JavaScript",
        iconUrl: "/icons/javascript.svg",
        slug: "javascript",
    },
    {
        id: 4,
        skill: "TypeScript",
        iconUrl: "/icons/typescript.svg",
        slug: "typescript",
    },
    {
        id: 5,
        skill: "Tailwind CSS",
        iconUrl: "/icons/tailwindcss.svg",
        slug: "tailwindcss",
    },
    {
        id: 6,
        skill: "Bootstrap",
        iconUrl: "/icons/bootstrap.svg",
        slug: "bootstrap",
    },
    {
        id: 7,
        skill: "Git",
        iconUrl: "/icons/git.svg",
        slug: "git",
    },
    {
        id: 8,
        skill: "GitHub",
        iconUrl: "/icons/github.svg",
        slug: "github",
    },
    {
        id: 9,
        skill: "Markdown",
        iconUrl: "/icons/markdown.svg",
        slug: "markdown",
    },
    {
        id: 10,
        skill: "Linux",
        iconUrl: "/icons/linux.svg",
        slug: "linux",
    },
];

export default function Resume() {
    return (
        <>
            <section className="w-[90%] max-w-[60rem] pb-[4rem] text-[1.5rem] mx-auto">
                <div className="w-[90%]">
                    <h2 className="text-[2.5rem] font-bold">My Resume/CV</h2>
                    <p className="mt-[1rem] ">
                        {/* eslint-disable-next-line */}
                        I'm a highly skilled full-stack engineer with more than
                        8 years of experience in building web applications. On
                        this page, you can learn more about my knowledge stack
                        and my previous work experience.
                    </p>

                    <SquigglyLine />
                </div>

                {/* Skills */}

                <div className="w-[90%]">
                    <h2 className="text-[2.5rem] font-bold mt-[4rem]">
                        Skills
                    </h2>
                    <p>
                        Here are the frameworks, libraries, services and
                        runtimes I have experience with. This is not a complete
                        {/* eslint-disable-next-line */}
                        list! I'm constantly gaining new skills, and hence it
                        can be a little bit outdated.
                    </p>

                    <ul className="mt-[3rem] flex items-center gap-[1rem] flex-wrap">
                        {skills.map((skills) => {
                            const { id, skill, iconUrl, slug } = skills;

                            return (
                                <li
                                    key={id}
                                    className="flex items-center gap-[.8rem] text-[1rem] font-medium"
                                >
                                    <Image
                                        src={iconUrl}
                                        width={32}
                                        height={32}
                                        alt={`${slug} Image`}
                                    />{" "}
                                    {skill}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Work History */}

                <div className="mt-[3rem]">
                    <WorkHistory />
                </div>
            </section>
        </>
    );
}
