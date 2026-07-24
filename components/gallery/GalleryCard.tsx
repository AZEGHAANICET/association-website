import {GalleryItem} from "./gallery.data";


interface Props{

    item:GalleryItem;

}



export default function GalleryCard({
                                        item
                                    }:Props){


    return (

        <div
            className="
group
relative
overflow-hidden
rounded-3xl
h-80
"
        >


            <img
                src={item.image}
                alt={item.title}
                className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"
            />



            {/* Overlay */}

            <div
                className="
absolute
inset-0
bg-gradient-to-t
from-black/70
via-transparent
opacity-0
group-hover:opacity-100
transition
"
            />



            <div
                className="
absolute
bottom-6
left-6
text-white
translate-y-5
group-hover:translate-y-0
transition
"
            >


                <p
                    className="
text-sm
text-orange-300
"
                >
                    {item.category}
                </p>


                <h3
                    className="
text-2xl
font-bold
"
                >
                    {item.title}
                </h3>


            </div>


        </div>

    )

}