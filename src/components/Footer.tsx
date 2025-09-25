/**
 * Footer component
 */
import StackScroll from "./StackScroll";

export default function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className="py-4 sm:py-6 md:py-[1.5rem] border-t border-[#94a3b8]/50">
                <div className=" mx-auto px-4 sm:px-0">
                    {/* Desktop Layout - Side by Side */}
                    <div className="flex flex-wrap-reverse items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-2 md:gap-[.4rem]">
                            <span className="font-bold text-lg sm:text-xl md:text-[1.5rem]">
                                ©
                            </span>
                            <span className="text-sm sm:text-base">{year}</span>
                            <p className="text-xs sm:text-sm md:text-[.9rem]">
                                Built by Daniel Udechukwu
                            </p>
                        </div>
                        <div className="flex items-center gap-4 md:gap-[1.5rem]">
                            <p className="font-medium text-sm sm:text-base md:text-[1rem] cursor-pointer hover:text-accent transition-colors">
                                Uses
                            </p>
                            <p className="font-medium text-sm sm:text-base md:text-[1rem] cursor-pointer hover:text-accent transition-colors">
                                Tech Stack
                            </p>
                        </div>
                    </div>
                </div>
                {/* <StackScroll /> */}
            </footer>
        </>
    );
}
