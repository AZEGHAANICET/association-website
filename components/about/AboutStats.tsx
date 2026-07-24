const stats = [
    {
        value: "13+",
        label: "Années d'histoire"
    },
    {
        value: "200+",
        label: "Membres"
    },
    {
        value: "30+",
        label: "Événements"
    },
    {
        value: "10+",
        label: "Projets réalisés"
    }
];


export default function StatsSection(){

    return (

        <section
            className="
py-24
bg-white
"
        >

            <div
                className="
max-w-6xl
mx-auto
px-6
grid
grid-cols-2
md:grid-cols-4
gap-8
"
            >


                {
                    stats.map(stat=>(

                        <div
                            key={stat.label}
                            className="
text-center font-thin tracking-wider bg-blue-600 text-3xl text-white py-2 shadow-[10px_10px_0px_rgba(255,0,0,0.2)]
"
                        >

                            <h3
                                className="
text-5xl
font-bold
text-white
"
                            >
                                {stat.value}
                            </h3>


                            <p
                                className="
mt-3
text-slate-50
"
                            >
                                {stat.label}
                            </p>


                        </div>

                    ))
                }


            </div>


        </section>

    )

}