

import Hero from "@/components/hero/Hero";

import AboutSection from "@/components/about/AboutSection";

import StatsSection from "@/components/about/AboutStats";

import MembersSection from "@/components/member/MembersSection";

import EventsSection from "@/components/events/EventSection";

import TimelineSection from "@/components/timeline/TimelineSection";

import GallerySection from "@/components/gallery/GallerySection";

import ContactSection from "@/components/contact/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Home(){


    return (

        <>

            <Navbar/>


            <main className="scroll-smooth
                snap-y
                snap-mandatory">


                <Hero/>


                <StatsSection/>


                <AboutSection/>


                <MembersSection/>


                <EventsSection/>


                <TimelineSection/>


                <GallerySection/>


                <ContactSection/>
                <Footer/>

            </main>





        </>

    )

}