"use client";

import Image from "next/image";

export default function ImageStack() {
    return (
        <div className="relative w-[200px] h-[100px] md:w-[300px] h-[200px]">

            {/* Brouillard arrière */}
            <div
                className="
          absolute
          inset-[-80px]
          bg-orange-400/30
          blur-[100px]
          rounded-full
          animate-pulse
        "
            />


            {/* Image 1 */}
            <div
                className="
          absolute
          inset-0
          rotate-[-12deg]
          transition-all
          duration-700
          hover:-translate-y-5
        "
            >
                <div
                    className="
            relative
            w-full
            h-full
            overflow-hidden
            rounded-2xl
            shadow-2xl
          "
                >
                    <Image
                        src="/lybel1.png"
                        alt="image1"
                        fill
                        className="
              object-cover
            "
                    />
                </div>
            </div>



            {/* Image 2 principale */}
            <div
                className="
          group
          absolute
          inset-0
          rotate-[5deg]
          z-30

          transition-all
          duration-700
          ease-out

          hover:-translate-y-24
          hover:rotate-0
          hover:scale-110
          hover:z-50
        "
            >

                {/* Glow autour de l'image */}
                <div
                    className="
            absolute
            inset-[-30px]
            bg-gradient-to-r
            from-orange-400/40
            via-yellow-300/20
            to-transparent
            blur-3xl
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
          "
                />


                <div
                    className="
            relative
            w-full
            h-full
            overflow-hidden
            rounded-2xl
            shadow-2xl
          "
                >

                    <Image
                        src="/lybel2.png"
                        alt="image2"
                        fill
                        className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
                    />

                    {/* Brouillard sur l'image */}
                    <div
                        className="
              absolute
              inset-0
              bg-gradient-to-t
              from-white/20
              via-transparent
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity
            "
                    />

                </div>

            </div>




            {/* Image 3 */}
            <div
                className="
          absolute
          inset-0
          rotate-[15deg]
          z-10
          transition-all
          duration-700
        "
            >

                <div
                    className="
            relative
            w-full
            h-full
            overflow-hidden
            rounded-2xl
            shadow-xl
          "
                >

                    <Image
                        src="/image3.jpg"
                        alt="image3"
                        fill
                        className="object-cover"
                    />

                </div>

            </div>



            {/* Particules/brouillard flottant */}
            <div
                className="
          absolute
          -top-20
          left-10
          w-40
          h-40
          bg-white/20
          blur-3xl
          rounded-full
          animate-[float_6s_ease-in-out_infinite]
        "
            />

        </div>
    );
}