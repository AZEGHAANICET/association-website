import { Play } from "lucide-react";

export default function Hero() {
    return (
        <section
            className="
            relative
            min-h-screen
            overflow-hidden
            flex
            items-center
            bg-[#faf8f3]
            "
        >

            {/* Background decoration */}

            <div
                className="
                absolute
                top-0
                right-0
                w-[600px]
                h-[600px]
                rounded-full
                bg-orange-200/40
                blur-3xl
                "
            />


            <div
                className="
                absolute
                bottom-0
                left-0
                w-[500px]
                h-[500px]
                rounded-full
                bg-blue-200/40
                blur-3xl
                "
            />



            <div
                className="
                relative
                z-10
                w-full
                px-6
                "
            >

                <div
                    className="
                    max-w-5xl
                    mx-auto
                    text-center
                    "
                >


                    {/* Small label */}

                    <span
                        className="
                        inline-flex
                        items-center
                        px-5
                        py-2
                        rounded-full
                        bg-white
                        shadow-sm
                        text-sm
                        font-medium
                        tracking-widest
                        text-gray-600
                        uppercase
                        "
                    >
                        Association des anciens étudiants
                    </span>




                    {/* Title */}

                    <h1
                        className="
                        mt-8
                        text-4xl
                        md:text-6xl
                        lg:text-7xl
                        font-semibold
                        tracking-tight
                        text-gray-900
                        leading-tight
                        "
                    >

                        Construisons ensemble

                        <span
                            className="
                            block
                            text-orange-500
                            "
                        >
                            l'héritage
                        </span>


                        <span
                            className="
                            block
                            "
                        >
                            de la Promo 2013
                        </span>


                    </h1>




                    {/* Original message */}

                    <p
                        className="
                        max-w-2xl
                        mx-auto
                        mt-8
                        text-lg
                        md:text-xl
                        text-gray-600
                        leading-relaxed
                        "
                    >
                        Faites de vos années d'études une oeuvre d'art
                        en créant des liens durables, en partageant nos
                        expériences et en construisant notre avenir.
                    </p>




                    {/* Actions */}

                    <div
                        className="
                        mt-10
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-center
                        gap-5
                        "
                    >


                        <button
                            className="
                            px-8
                            py-4
                            rounded-full
                            bg-orange-500
                            text-white
                            font-medium
                            shadow-lg
                            shadow-orange-500/20
                            hover:bg-orange-600
                            transition
                            "
                        >
                            Rejoindre l'association
                        </button>




                        <button
                            className="
                            flex
                            items-center
                            gap-3
                            px-6
                            py-4
                            rounded-full
                            bg-white
                            shadow-md
                            text-gray-700
                            hover:shadow-lg
                            transition
                            "
                        >

                            <Play
                                size={22}
                                fill="currentColor"
                                className="text-blue-600"
                            />

                            <span>
                                Un rien peut tout changer
                            </span>

                        </button>


                    </div>



                </div>


            </div>



        </section>
    );
}