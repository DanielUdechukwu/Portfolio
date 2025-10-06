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
}

const workHistory: WorkExperience[] = [
    {
        id: 1,
        role: "Lead Frontend Developer",
        company: "AsteriskRD",
        location: "Canada (Remote)",
        type: "Internship",
        period: "Feb 2024 - May 2024",
        description: [
            "Led frontend development initiatives for the company website from inception to deployment.",
            "Optimized website performance, resulting in improved load times and user experience.",
            "Established frontend architecture and coding standards for the development team.",
            "Collaborated with designers and backend developers to deliver seamless user interfaces.",
            "Mentored junior developers and conducted code reviews to maintain quality standards.",
        ],
    },
    {
        id: 2,
        role: "DevOps Engineer",
        company: "Hasob Integrated Services",
        location: "Nigeria",
        type: "Full-Time",
        period: "Feb 2025 - Present",
        description: [
            "Manage and maintain company servers and applications across local and cloud infrastructure.",
            "Deploy and orchestrate containerized applications using Kubernetes clusters.",
            "Implement CI/CD pipelines to streamline deployment processes and improve system reliability.",
            "Monitor system performance and optimize infrastructure for scalability and security.",
            "Collaborate with development teams to ensure smooth application deployment and operations.",
        ],
    },
    {
        id: 3,
        role: "Frontend Developer & Community Manager",
        company: "AsteriskRD",
        location: "Canada (Remote)",
        type: "Volunteer",
        period: "Aug 2025 - Present",
        description: [
            "Develop and maintain frontend features for company projects using modern web technologies.",
            "Mentor interns and junior developers, providing guidance on best practices and technical skills.",
            "Manage developer community initiatives, fostering collaboration and knowledge sharing.",
            "Coordinate onboarding processes and create learning resources for new team members.",
        ],
    },
    {
        id: 4,
        role: "Frontend Developer",
        company: "Winter Developers",
        location: "Nigeria",
        type: "Contract",
        period: "Sept 2024 - Jan 2025",
        description: [
            "Collaborated in a 5-person development team to build a custom e-commerce platform for men's fashion retail.",
            "Developed responsive product pages, shopping cart functionality, and checkout processes.",
            "Implemented user authentication and account management features.",
            "Ensured cross-browser compatibility and mobile responsiveness across the application.",
            "Worked closely with the client to gather requirements and deliver solutions that met business objectives.",
        ],
    },
];

export default function WorkHistory() {
    return (
        <>
            <section className="w-full">
                <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mt-8 sm:mt-12 md:mt-[4rem] leading-tight">
                    Work History
                </h1>
                <p className="text-sm sm:text-base md:text-[1.5rem] leading-relaxed sm:leading-relaxed md:leading-normal mt-4 md:mt-[1rem]">
                    Below you will find a summary of my past employment
                    experience. Additionally, if you require, you can{" "}
                    <a
                        href="/files/daniel_resume.pdf"
                        download
                        className="cursor-pointer border-b-2 border-[#f59e0b] hover:border-[#d97706] transition-colors"
                    >
                        download my resume.
                    </a>
                </p>

                <section className="mt-6 sm:mt-8 md:mt-[3rem]">
                    <div className="w-full">
                        <div className="relative border-l-2 border-gray-700 ml-2 sm:ml-4 md:ml-[1rem]">
                            {workHistory.map((items) => {
                                const {
                                    id,
                                    role,
                                    company,
                                    location,
                                    type,
                                    period,
                                    description,
                                } = items;

                                return (
                                    <div
                                        key={id}
                                        className={`relative pl-4 sm:pl-6 md:pl-8 ${
                                            id === workHistory.length
                                                ? "pb-1"
                                                : "pb-8 sm:pb-10 md:pb-12"
                                        }`}
                                    >
                                        {/* Timeline Dot */}
                                        <span
                                            className={`absolute left-[-0.44rem] sm:left-[-0.45rem] md:left-[-0.55rem] top-[0.3rem] sm:top-[0.4rem] md:top-[0.45rem] w-[0.75rem] h-[0.75rem] sm:w-[0.875rem] sm:h-[0.875rem] md:w-[1rem] md:h-[1rem] rounded-full bg-[#f59e0b] ${
                                                id === 1
                                                    ? "ring-4 sm:ring-[0.375rem] md:ring-[.5rem] ring-[#f59e0b]/60"
                                                    : ""
                                            }`}
                                        ></span>

                                        <div className="space-y-2 sm:space-y-3 md:space-y-1">
                                            <h3 className="text-white font-semibold text-lg sm:text-xl md:text-[1.5rem] leading-tight sm:leading-relaxed md:leading-[1.8rem]">
                                                {role}
                                            </h3>

                                            {/* Company Info - Stack on mobile, inline on larger screens */}
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                                                <p className="text-white/80 text-sm sm:text-base md:text-[1.2rem] font-medium">
                                                    {company}
                                                </p>
                                                <span className="hidden sm:inline text-white/80 text-sm sm:text-base md:text-[1.2rem] font-medium mx-2">
                                                    •
                                                </span>
                                                <p className="text-white/80 text-sm sm:text-base md:text-[1.2rem] font-medium">
                                                    {location}
                                                </p>
                                                <span className="hidden sm:inline text-white/80 text-sm sm:text-base md:text-[1.2rem] font-medium mx-2">
                                                    •
                                                </span>
                                                <p className="text-white/80 text-sm sm:text-base md:text-[1.2rem] font-medium">
                                                    {type}
                                                </p>
                                            </div>

                                            <p className="text-white/70 text-xs sm:text-sm md:text-[1rem] font-medium">
                                                {period}
                                            </p>

                                            <ul className="list-disc text-white/90 text-sm sm:text-base md:text-[1.3rem] mt-3 sm:mt-4 md:mt-3 pl-4 sm:pl-6 md:pl-[2rem] space-y-2 sm:space-y-2 md:space-y-1">
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
