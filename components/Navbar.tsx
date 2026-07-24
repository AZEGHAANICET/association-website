"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";


type SectionColor = "blue" | "orange" | "purple";


interface NavLink {
    label: string;
    href: string;
    section: string;
    color: SectionColor;
}



const NAV_LINKS: NavLink[] = [

    {
        label: "Missions",
        href: "#missions",
        section: "missions",
        color: "blue",
    },

    {
        label: "Bureau",
        href: "#bureau",
        section: "bureau",
        color: "orange",
    },

    {
        label: "Evenements",
        href: "#events",
        section: "events",
        color: "purple",
    },

];



const COLORS = {

    blue:{
        text:"text-blue-600",
        underline:"bg-blue-600",
    },

    orange:{
        text:"text-orange-500",
        underline:"bg-orange-500",
    },

    purple:{
        text:"text-purple-600",
        underline:"bg-purple-600",
    },

} as const;





export default function Navbar(){


    const [scrolled,setScrolled] = useState(false);

    const [menuOpen,setMenuOpen] = useState(false);

    const [activeSection,setActiveSection] = useState("home");


    const reduceMotion = useReducedMotion();





    /*
    ==========================
    NAVBAR SCROLL
    ==========================
    */


    useEffect(()=>{


        const handleScroll=()=>{

            setScrolled(
                window.scrollY > 20
            );

        };


        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive:true
            }
        );


        return ()=>{

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    },[]);







    /*
    ==========================
    ACTIVE SECTION OBSERVER
    ==========================
    */


    useEffect(()=>{


        const sections =
            document.querySelectorAll(
                "section[id]"
            );



        const observer =
            new IntersectionObserver(

                (entries)=>{


                    const visible =
                        entries

                            .filter(
                                entry=>entry.isIntersecting
                            )

                            .sort(
                                (a,b)=>
                                    b.intersectionRatio -
                                    a.intersectionRatio
                            )[0];



                    if(visible){


                        setActiveSection(
                            visible.target.id
                        );


                    }


                },

                {
                    threshold:[
                        0.3,
                        0.5,
                        0.7
                    ]
                }

            );



        sections.forEach(section=>{

            observer.observe(section);

        });



        return ()=>{

            observer.disconnect();

        };


    },[]);








    /*
    ==========================
    CLOSE MOBILE ON RESIZE
    ==========================
    */


    useEffect(()=>{


        const handleResize=()=>{


            if(window.innerWidth >=768){

                setMenuOpen(false);

            }


        };


        window.addEventListener(
            "resize",
            handleResize
        );


        return ()=>{

            window.removeEventListener(
                "resize",
                handleResize
            );

        };


    },[]);






    return (

        <motion.header


            animate={{

                width:
                    scrolled
                        ?
                        "92%"
                        :
                        "100%",


                y:
                    scrolled
                        ?
                        12
                        :
                        0,

            }}


            transition={

                reduceMotion

                    ?

                    {
                        duration:0
                    }

                    :

                    {
                        duration:0.35,
                        ease:"easeOut"
                    }

            }


            className="
            fixed
            top-0
            left-1/2
            z-50
            -translate-x-1/2
            "

        >




            <div


                className={`
                
                mx-auto
                flex
                h-16
                max-w-7xl
                items-center
                justify-between
                px-6
                transition-all
                duration-300


                ${
                    scrolled

                        ?

                        `
                    rounded-full
                    border
                    border-white/40
                    bg-white/60
                    backdrop-blur-xl
                    shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                    `

                        :

                        `
                    bg-transparent
                    `

                }

                `}


            >





                {/* LOGO */}



                <a
                    href="/"
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >


                    <div

                        className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        font-bold
                        text-white
                        "

                    >

                        L

                    </div>



                    <span

                        className="
                        text-sm
                        font-semibold
                        tracking-tight
                        text-neutral-900
                        "

                    >

                        Assec Lybel

                    </span>



                </a>









                {/* DESKTOP MENU */}




                <nav

                    className="
                    hidden
                    md:flex
                    items-center
                    gap-10
                    "

                >



                    {
                        NAV_LINKS.map(link=>{


                            const active =
                                activeSection === link.section;



                            return (

                                <a

                                    key={link.label}

                                    href={link.href}



                                    className={`

                                group
                                relative
                                py-1
                                text-[13px]
                                font-medium
                                uppercase
                                tracking-[0.08em]
                                transition


                                ${
                                        active

                                            ?

                                            COLORS[link.color].text

                                            :

                                            `
                                    text-neutral-500
                                    hover:text-black
                                    `

                                    }


                                `}

                                >


                                    {link.label}



                                    <span

                                        className={`

                                    absolute
                                    -bottom-1
                                    left-0
                                    h-[2px]
                                    transition-all
                                    duration-300


                                    ${
                                            active

                                                ?

                                                "w-full"

                                                :

                                                "w-0"

                                        }


                                    ${COLORS[link.color].underline}


                                    `}

                                    />


                                </a>


                            );


                        })

                    }



                </nav>









                {/* CONTACT */}




                <a

                    href="#contact"

                    className="
                    hidden
                    sm:flex
                    rounded-full
                    bg-black
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:-translate-y-1
                    "

                >

                    Contact

                </a>







                {/* MOBILE BUTTON */}



                <button

                    onClick={()=>setMenuOpen(!menuOpen)}

                    className="
                    flex
                    md:hidden
                    "

                >

                    {
                        menuOpen

                            ?

                            <X size={22}/>

                            :

                            <Menu size={22}/>

                    }

                </button>





            </div>









            {/* MOBILE MENU */}



            <AnimatePresence mode="wait">


                {
                    menuOpen &&


                    <motion.nav

                        key="mobile-menu"


                        initial={{
                            opacity:0,
                            y:-10
                        }}


                        animate={{
                            opacity:1,
                            y:0
                        }}


                        exit={{
                            opacity:0,
                            y:-10
                        }}


                        transition={{
                            duration:0.2
                        }}


                        className="
                    mt-3
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white/90
                    p-4
                    backdrop-blur-xl
                    md:hidden
                    "

                    >


                        {
                            NAV_LINKS.map(link=>(


                                <a

                                    key={link.label}

                                    href={link.href}

                                    onClick={()=>setMenuOpen(false)}

                                    className="
                            block
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-neutral-700
                            transition
                            hover:bg-neutral-100
                            "

                                >

                                    {link.label}


                                </a>


                            ))

                        }



                    </motion.nav>


                }


            </AnimatePresence>



        </motion.header>

    );

}