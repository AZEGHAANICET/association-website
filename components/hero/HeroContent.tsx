import HeroBadge from "./HeroBadge";
import HeroActions from "./HeroActions";


export default function HeroContent(){

    return (

        <div
            className="
            relative
            z-10
            max-w-5xl
            mx-auto
            px-6
            text-center
            "
        >


            <HeroBadge />


            <h1
                className="
                mt-8
                text-4xl
                md:text-6xl
                lg:text-7xl
                font-bold
                tracking-tight
                leading-tight
                text-gray-900
                "
            >

                Association des


                <span
                    className="
                    block
                    text-orange-500
                    "
                >
                    Anciens étudiants
                </span>


                <span
                    className="
                    block
                    "
                >
                    de Belabo
                </span>


                <span
                    className="
                    block
                    text-blue-600
                    "
                >
                    Promo 2013
                </span>


            </h1>



            <p
                className="
                mt-8
                max-w-2xl
                mx-auto
                text-lg
                md:text-xl
                text-gray-600
                leading-relaxed
                "
            >

                Faites de vos études une oeuvre d'art.
                Construisons ensemble un héritage durable
                pour les générations futures.

            </p>



            <HeroActions />


        </div>

    );
}