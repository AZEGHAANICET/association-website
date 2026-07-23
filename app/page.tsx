import BureauTree from "@/components/bureau/BureauTree";

export default function Home() {
    return (
        <div
            className="
                h-screen
                flex
                flex-col
                bg-white
                bg-[linear-gradient(rgb(255_0_0_/_0.15)_1px,transparent_1px),linear-gradient(90deg,rgb(0_255_0_/_0.15)_1px,transparent_1px)]
                bg-[size:40px_40px]

            "
        >


            <div className=" mt-22">

<h1 className="text-5xl text-center font-bold
">Asso <span className="text-orange-400">Belabo</span></h1>
       <p>
           <div
               className="
    relative
    overflow-hidden
    max-w-4xl
    mx-auto
    p-10
    bg-white
    shadow-xl
    border
    border-gray-100
  "
           >

               {/* Effet lumineux orange */}
               <div
                   className="
      absolute
      -top-20
      -right-20
      h-60
      w-60
      bg-orange-400/20
      blur-3xl
    "
               />

               {/* Effet lumineux bleu */}
               <div
                   className="
      absolute
      -bottom-20
      -left-20
      h-60
      w-60
      bg-blue-500/20
      blur-3xl
    "
               />


               <div className="relative z-10">

                   <p
                       className="
        text-lg
        leading-8
        text-gray-700
      "
                   >

                       Nous sommes une communauté de{" "}

                       <span
                           className="
          font-semibold
          text-orange-500
        "
                       >
        jeunes professionnels passionnés
      </span>

                       , issus de différents domaines d’expertise.


                       À travers notre expérience, notre parcours et notre ouverture d’esprit,
                       nous souhaitons accompagner les élèves du{" "}


                       <span
                           className="
          font-semibold
          text-blue-600
        "
                       >
        Lycée de Bélabo
      </span>


                       dans la construction de leur avenir professionnel.


                       <br/><br/>


                       Notre ambition est de transmettre notre{" "}


                       <span
                           className="
          font-semibold
          text-orange-500
        "
                       >
        savoir-faire
      </span>


                       et notre{" "}


                       <span
                           className="
          font-semibold
          text-blue-600
        "
                       >
        savoir-être
      </span>


                       afin de les aider à faire des choix de carrière éclairés,
                       développer leur confiance et révéler leur potentiel.


                   </p>

               </div>

           </div>
       </p>

            </div>

        </div>
    );
}
