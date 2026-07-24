import EventCard from "./EventCard";
import { events } from "./events.data";


export default function EventsSection(){


    return (

        <section id="events"

            className="
py-32
bg-gray-50    snap-start
                    scroll-mt-24
"

        >


            <div

                className="
max-w-7xl
mx-auto
px-6
"

            >


                {/* Header */}

                <div

                    className="
max-w-3xl
mx-auto
text-center
"

                >


                    <p

                        className="
uppercase
tracking-[0.3em]
text-orange-500
font-medium
"

                    >

                        Vie associative

                    </p>



                    <h2

                        className="
mt-5
text-4xl
md:text-5xl
font-bold
text-gray-900
"

                    >

                        Nos événements

                    </h2>



                    <p

                        className="
mt-6
text-gray-500
text-lg
"

                    >

                        Des moments forts qui renforcent
                        les liens entre les membres de notre communauté.

                    </p>


                </div>





                {/* Cards */}

                <div

                    className="
mt-16
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"

                >


                    {
                        events.map(event=>(

                            <EventCard

                                key={event.id}

                                event={event}

                            />

                        ))
                    }


                </div>



            </div>


        </section>

    )

}