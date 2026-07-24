import { Play } from "lucide-react";


export default function HeroActions(){

    return (

        <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
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
                font-semibold
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
                hover:shadow-xl
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

    );
}