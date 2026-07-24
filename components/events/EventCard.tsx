import { CalendarDays, MapPin } from "lucide-react";
import { Event } from "./types";


interface Props {

    event: Event;

}



export default function EventCard({
                                      event
                                  }: Props){


    return (

        <article

            className="
group
relative
overflow-hidden
rounded-3xl
bg-white
shadow-sm
hover:shadow-xl
transition-all
duration-500
"

        >


            {/* Image */}

            <div
                className="
relative
h-72
overflow-hidden
"
            >

                <img

                    src={event.image}

                    alt={event.title}

                    className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

                />


                <div

                    className="
absolute
top-5
left-5
px-4
py-2
rounded-full
bg-white/90
text-sm
font-medium
text-orange-500
"

                >

                    {event.category}

                </div>


            </div>



            {/* Content */}

            <div
                className="
p-7
"
            >


                <h3

                    className="
text-2xl
font-bold
text-gray-900
"

                >

                    {event.title}

                </h3>



                <p

                    className="
mt-3
text-gray-500
leading-relaxed
"

                >

                    {event.description}

                </p>



                <div

                    className="
mt-6
space-y-3
text-sm
text-gray-600
"

                >


                    <div

                        className="
flex
items-center
gap-3
"

                    >

                        <CalendarDays
                            size={18}
                            className="text-orange-500"
                        />


                        <span>

{event.date}

</span>


                    </div>




                    <div

                        className="
flex
items-center
gap-3
"

                    >

                        <MapPin
                            size={18}
                            className="text-blue-600"
                        />


                        <span>

{event.location}

</span>


                    </div>


                </div>



                <button

                    className="
mt-7
text-orange-500
font-semibold
hover:underline
"

                >

                    Voir détails →

                </button>



            </div>



        </article>

    )

}