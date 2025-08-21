/**
 * Footer component
 */

export default function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className="py-[1.5rem] border-t border-[#94a3b8]/50">
                <div className="w-[95%] mx-auto flex items-center justify-between">
                    {/* <Image
                        src="/icons/copyright.png"
                        width={24}
                        height={24}
                        alt="copyright icon"
                    /> */}

                    <div className="flex items-center gap-[.4rem]">
                        <span className="font-bold text-[1.5rem]">©</span>

                        {year}

                        <p className="text-[.9rem]">
                            Built by Daniel Udechukwu
                        </p>
                    </div>

                    <div className="flex items-center gap-[1.5rem]">
                        <p className="font-medium text-[1rem] cursor-pointer">
                            Uses
                        </p>
                        <p className="font-medium text-[1rem] cursor-pointer">
                            Tech Stack
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
