import BureauTree from "@/components/bureau/BureauTree";

export default function Home() {
    return (
        <div
            className="
                h-screen
                flex
                flex-col
                bg-white
                bg-[linear-gradient(rgb(255_0_0_/_0.1)_1px,transparent_1px),linear-gradient(90deg,rgb(0_255_0_/_0.1)_1px,transparent_1px)]
                bg-[size:40px_40px]

            "
        >
            <div className=" mt-22">
                <div className="w-[300px] md:w-[400px] mx-auto flex-col items-center justify-center">

                    <h1 className="text-2xl font-bold md:text-3xl  w-[calc(100%_-_2rem)]  md:w-full mx-auto text-center -tracking-wider text-black ">Association des <span className="text-orange-400 text-3xl md:text-4xl">Anciens étudiants de Belabo </span>Promo 2013</h1>
                    <p className="text-center mt-12 px-2  font-thin tracking-wider bg-blue-600 text-3xl text-white py-2 shadow-[10px_10px_0px_rgba(255,0,0,0.2)]">Faites de vos études une oeuvre d'art</p>
                </div>
            </div>

        </div>
    );
}
