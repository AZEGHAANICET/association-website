import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {

    return (
        <section
            className="
            relative
            min-h-screen
            overflow-hidden
            flex
            items-center
            justify-center
            bg-[#faf8f3]    snap-start
                    scroll-mt-24
            "
        >

            <HeroBackground />

            <HeroContent />

        </section>
    );
}