import GalleryCard from "./GalleryCard";
import {
    galleryItems
} from "./gallery.data";


export default function GallerySection(){


    return (

        <section
            className="
py-32
bg-white
"
        >


            <div
                className="
max-w-7xl
mx-auto
px-6
"
            >


                <h2
                    className="
text-center
text-5xl
font-bold
"
                >
                    Galerie
                </h2>



                <div
                    className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
mt-16
"
                >


                    {
                        galleryItems.map(item=>(

                            <GalleryCard
                                key={item.title}
                                item={item}
                            />

                        ))
                    }


                </div>


            </div>


        </section>

    )

}