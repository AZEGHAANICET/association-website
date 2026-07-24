import TimelineItem from "./TimelineItem";


const timeline=[

    {
        year:"2013",
        title:"Création de la promotion",
        description:"Naissance du groupe des anciens étudiants."
    },


    {
        year:"2020",
        title:"Premiers projets",
        description:"Développement des initiatives communautaires."
    },


    {
        year:"2026",
        title:"Association officielle",
        description:"Une nouvelle vision pour le futur."
    }

];


export default function TimelineSection(){


    return (

        <section
            className="
py-32 bg-black
                bg-[size:40px_40px] bg-[linear-gradient(rgb(0_0_0_/_0.2)_1px,transparent_1px),linear-gradient(90deg,rgb(0_255_0_/_0.2)_1px,transparent_1px)]

text-white
"
        >


            <div
                className="
max-w-5xl
mx-auto
px-6
"
            >


                <h2
                    className="
text-5xl
font-bold
text-center
"
                >
                    Notre parcours
                </h2>



                <div
                    className="
mt-20
space-y-12
"
                >


                    {
                        timeline.map(item=>(

                            <TimelineItem
                                key={item.year}
                                item={item}
                            />

                        ))
                    }


                </div>


            </div>


        </section>

    )

}