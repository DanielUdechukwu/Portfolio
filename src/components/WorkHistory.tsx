/**
 * Work history component
 */

// import Image from "next/image";

interface WorkExperience {
    id: number;
    role: string;
    company: string;
    location: string;
    type: string;
    period: string;
    description: string[];
    isActive?: boolean;
}

const workHistory: WorkExperience[] = [
    {
        id: 1,
        role: "Lead Front-end Engineer",
        company: "Propbar",
        location: "United Kingdom",
        type: "Full-Time",
        period: "Mar 2023 - Present",
        isActive: true,
        description: [
            "Led the front-end work from the project inception.",
            "Maintained a browser extension, widget and web application as a monorepo.",
            "Architected a highly complex real-estate map service.",
            "Implemented a sophisticated data grid of property comparables.",
        ],
    },
    {
        id: 2,
        role: "Senior Front-end Engineer",
        company: "LaiqDB",
        location: "United States",
        type: "Contract",
        period: "Jun 2022 - Feb 2023",
        isActive: false,
        description: [
            "Was solving complex problems using the latest Web Standards.",
            "Architected the product's front-end structure.",
            "Accomplished the development of sophisticated UI components.",
            "Developed the open-source component library.",
            "Crafted responsive marketing landing pages.",
        ],
    },
];

export default function WorkHistory() {
    return (
        <>
            <section>
                <h1 className="text-[2.5rem] font-bold mt-[4rem]">
                    Work History
                </h1>
                <p>
                    Below you will find a summary of my past employment
                    experience. Additionally, if you require, you can{" "}
                    <span className="cursor-pointer border-b-2 border-[#f59e0b]">
                        download my resume.
                    </span>
                </p>

                <section className="mt-[3rem]">
                    <div className="min-h-screen">
                        <div className="relative border-l-2 border-gray-700 ml-[1rem]">
                            {workHistory.map((items) => {
                                const {
                                    id,
                                    role,
                                    company,
                                    location,
                                    type,
                                    period,
                                    isActive,
                                    description,
                                } = items;

                                return (
                                    <div
                                        key={id}
                                        className={`relative pl-8 ${
                                            id === workHistory.length
                                                ? "pb-1"
                                                : "pb-12"
                                        }`}
                                    >
                                        {/* Timeline Dot */}
                                        <span
                                            className={`absolute left-[-0.55rem] top-[0.45rem] w-[1rem] h-[1rem] rounded-full bg-[#f59e0b] ${
                                                id === 1
                                                    ? "ring-[.5rem] ring-[#f59e0b]/60"
                                                    : ""
                                            }`}
                                        ></span>

                                        <div>
                                            <h3 className="text-white font-semibold text-[1.5rem] leading-[1.8rem]">
                                                {role}
                                            </h3>

                                            <p className="text-white/80 text-[1.2rem] font-medium mt-1">
                                                {company} • {location} • {type}
                                            </p>
                                            <p className="text-white/70 text-[1rem] font-medium mt-1">
                                                {period}
                                            </p>
                                            <ul className="list-disc text-white/90 text-[1.3rem] mt-3 pl-[2rem]">
                                                {description.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="leading-relaxed"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
