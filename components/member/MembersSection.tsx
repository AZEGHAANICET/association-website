import {members} from "@/components/member/members.data";
import MemberCard from "./MemberCard";


export default function MembersSection(){


    return (

        <section id="bureau"
            className="
py-32
bg-gray-50
"
        >


            <div
                className="
max-w-7xl
mx-auto
px-6
"
            >


                <div
                    className="
text-center
"
                >

                    <p className="
text-orange-500
tracking-widest
uppercase
">
                        Notre équipe
                    </p>


                    <h2 className="
text-5xl
font-bold
mt-4
">
                        Le bureau exécutif
                    </h2>


                </div>



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
                        members.map(member=>(

                            <MemberCard
                                key={member.name}
                                member={member}
                            />

                        ))
                    }


                </div>


            </div>


        </section>

    )

}