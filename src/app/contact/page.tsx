/**
 * Contact page
 */

import { SquigglyLine } from "@/components/SquigglyLine";

export default function Contact() {
    return (
        <>
            <section className="w-[90%] text-[1.3rem] max-w-[60rem] mt-[8rem] pb-[4rem] mx-auto">
                <div>
                    <h2 className="text-[2.5rem] font-bold">Get in touch</h2>
                    <p className="">
                        Do you have an exciting project? Let's talk!
                    </p>

                    <SquigglyLine />

                    <div className="mt-[2rem]">
                        <p>
                            You can reach me anytime at{" "}
                            <span className="border-b-2 cursor-pointer border-[#f59e0b] font-bold">
                                danieludechukwu117@gmail.com
                            </span>
                        </p>
                        <p>
                            As a backup option, you can{" "}
                            <span className="border-b-2 cursor-pointer border-[#f59e0b] font-bold">
                                DM me on X
                            </span>
                        </p>

                        <p>I usually respond right away on business days.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
