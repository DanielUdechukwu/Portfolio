import { SquigglyLine } from "@/components/SquigglyLine";

export default function Home() {
    return (
        <>
            <section className="w-full flex flex-col items-center justify-center min-h-[80vh] text-2xl font-medium">
                <div className="w-[90%] max-w-[60rem] mx-auto">
                    <div>
                        <h2 className="text-[2.5rem] font-bold">
                            Hey, I&apos;m{" "}
                            <span className="text-accent">
                                Daniel Udechukwu
                            </span>
                            !
                        </h2>

                        <p className="w-[70%] text-[1.3rem] leading-[2rem] mt-[1rem]">
                            A freelance full-stack engineer based in Abuja,
                            Nigeria. I specialize in developing applications
                            using the React Ecosystem. Currently, I&apos;m
                            volunteering as the lead front-end developer at{" "}
                            <span className="underline">AsteriskRD</span>.
                        </p>
                    </div>

                    <SquigglyLine />

                    <div className="mt-[2rem]">
                        <p>Find me on</p>

                        <div className="flex items-center gap-[3rem] mt-[1rem]">
                            <div>
                                {/* <Image
                                    src=""
                                    width={24}
                                    height={24}
                                    alt="social icon"
                                /> */}
                                <p>Twitter</p>
                            </div>
                            <div>
                                {/* <Image
                                    src=""
                                    width={24}
                                    height={24}
                                    alt="social icon"
                                /> */}
                                <p>GitHub</p>
                            </div>
                            <div>
                                {/* <Image
                                    src=""
                                    width={24}
                                    height={24}
                                    alt="social icon"
                                /> */}
                                <p>Linkedin</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[2rem]">
                        <p>Contact</p>

                        <p className="mt-[1rem]">
                            You can reach me anytime at{" "}
                            <span className="border-b-2 border-[#f59e0b]">
                                danieludechukwu117@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
