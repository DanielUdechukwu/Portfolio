/**
 * Project page
 */

import { SquigglyLine } from "@/components/SquigglyLine";
import Image from "next/image";
import Link from "next/link";

interface ProjectTypes {
    id: number;
    name: string;
    image: string;
    category: string;
    challenge: string;
    solution: string;
    technologies: string[];
    projectUrl: string;
}

export default function Projects() {
    const projects: ProjectTypes[] = [
        {
            id: 1,
            name: "NeuraFlow Dashboard",
            image: "/images/project1.png",
            category: "Web-App",
            challenge:
                "Users needed real-time insights from complex data streams but existing solutions were cluttered and slow, leading to poor decision-making and user frustration.",
            solution:
                "Designed an AI-powered dashboard with intelligent data prioritization, custom visualization widgets, and predictive analytics that adapts to user behavior patterns.",
            technologies: ["React Native", "AI/ML", "Real-time", "Data Viz"],
            projectUrl: "https://asteriskrd.tech",
        },
        {
            id: 2,
            name: "HoloShop Commerce",
            image: "/images/project2.png",
            category: "E-commerce",
            challenge:
                "Traditional e-commerce platforms couldn't showcase products effectively, resulting in high cart abandonment rates and low customer confidence in purchases.",
            solution:
                "Built an immersive 3D product visualization platform with AR try-before-buy features, intelligent recommendations, and seamless checkout experience. Lorem Lorem Lorem Lorem",
            technologies: ["React", "Three.js", "AR/VR", "WebGL"],
            projectUrl: "https://avantlush.com",
        },
    ];

    return (
        <>
            <section className="w-[90%] text-[1.3rem] max-w-[60rem] mt-[8rem] pb-[4rem] mx-auto">
                <div>
                    <h1 className="text-[2.5rem] font-bold">My Projects</h1>
                    <h3>
                        A collection of Web applications and development
                        projects showcasing my expertise in the React ecosystem
                        and full-stack development.
                    </h3>
                    <SquigglyLine />

                    <div className="grid grid-cols-2 gap-[2rem] mt-[4rem]">
                        {projects.map((items) => {
                            const {
                                id,
                                name,
                                category,
                                image,
                                challenge,
                                solution,
                                technologies,
                                projectUrl,
                            } = items;

                            return (
                                <div
                                    key={id}
                                    className="inter CARD group hover:scale-99 duration-500 transition-transform flex h-full flex-col rounded-[0.75rem] border-2 border-[#FFFFFF]/10"
                                >
                                    <div className="relative w-full rounded-[0.75rem]">
                                        <Image
                                            src={image}
                                            width={1448}
                                            height={1448}
                                            alt="Case study 1"
                                            className="h-[16rem] w-full rounded-t-[0.75rem]"
                                        />

                                        <div className="absolute top-[0.813rem] flex w-full items-center justify-between px-[1.1rem]">
                                            <p className="flex h-[1.7rem] items-center rounded-full border-2 border-[#3C83F6]/60 bg-[#3C83F6]/20 px-[0.7rem] text-[0.75rem] font-bold text-[#3C83F6]">
                                                {category}
                                            </p>

                                            <Link
                                                href={projectUrl}
                                                className="flex h-[2.188rem] group-hover:border-[#F59E0B] transition-all ease-in-out duration-500 w-[2.188rem] items-center justify-center rounded-full border-2 border-[#3C83F6]/60 bg-[#3C83F6]/20"
                                            >
                                                <svg
                                                    width="64"
                                                    height="64"
                                                    viewBox="0 0 64 64"
                                                    fill="none"
                                                    className="h-[1.3rem] text-[#477EEE] group-hover:text-[#F59E0B] transition-all ease-in-out duration-500 w-[1.3rem]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M20 44L44 20M44 20H24M44 20V40"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="h-full rounded-b-[0.75rem] bg-[#06031B] px-[1.3rem] py-[1.3rem] text-left">
                                        <h3 className="text-[1.5rem] font-bold">
                                            {name}
                                        </h3>

                                        <div className="mt-[1.5rem]">
                                            <div>
                                                <h3 className="text-[0.875rem] font-bold text-[#60E6FB] uppercase">
                                                    Challenge
                                                </h3>
                                                <p className="mt-[0.5rem] text-[0.938rem] font-normal text-[#A1A1AA]">
                                                    {challenge}
                                                </p>
                                            </div>

                                            <div className="mt-[1rem]">
                                                <h3 className="text-[0.875rem] font-bold text-[#BF83FC] uppercase">
                                                    Solution
                                                </h3>
                                                <p className="mt-[0.5rem] text-[0.938rem] font-normal text-[#A1A1AA]">
                                                    {solution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-[1rem]">
                                            <h3 className="text-[0.875rem] font-bold text-[#BF83FC] uppercase">
                                                Project Stack
                                            </h3>
                                            <div className="mt-2 flex flex-wrap items-center gap-[.3rem]">
                                                {technologies.map(
                                                    (tech, index) => {
                                                        return (
                                                            <p
                                                                key={index}
                                                                className="flex h-[1.7rem] items-center rounded-full border-2 border-[#27272A]/50 bg-[#27272A]/20 px-[0.7rem] text-[0.75rem] font-bold text-[#A1A1AA]"
                                                            >
                                                                {tech}
                                                            </p>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
