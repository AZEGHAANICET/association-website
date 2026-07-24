export default function AboutContent(){


    return (

        <div
            className="
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-2
gap-16
items-center
"
        >


            <div>


                <p
                    className="
text-orange-500
uppercase
tracking-widest
"
                >
                    Notre histoire
                </p>


                <h2
                    className="
mt-5
text-5xl
font-bold
text-gray-900
"
                >

                    Une communauté,
                    un héritage,
                    un avenir

                </h2>


                <p
                    className="
mt-8
text-gray-600
leading-relaxed
"
                >

                    L'association des anciens étudiants de Belabo
                    Promo 2013 est une communauté destinée à
                    maintenir les liens entre anciens étudiants,
                    favoriser l'entraide et construire des projets
                    ayant un impact durable.

                </p>


            </div>



            <div
                className="
relative
"
            >

                <img
                    src="/about/group.jpg"
                    alt="Association"
                    className="
rounded-3xl
shadow-xl
"
                />


            </div>


        </div>

    )

}