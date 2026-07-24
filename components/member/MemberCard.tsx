import MemberSocials from "@/components/member/MemberSocial";
import {Member} from "@/components/types/member";


interface Props {

    member: Member;

}



export default function MemberCard({
                                       member
                                   }:Props){


    return (

        <article
            className="
group
bg-white
rounded-3xl
overflow-hidden

hover:shadow-xl
transition-all
duration-500
shadow-[10px_10px_0px_rgba(255,0,0,0.2)]
"
        >



            <div
                className="
aspect-square
overflow-hidden
"
            >


                <img
                    src={member.image}
                    alt={member.name}
                    className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"
                />


            </div>




            <div
                className="
p-6
"
            >


                <h3
                    className="
text-xl
font-bold
text-gray-900
"
                >
                    {member.name}
                </h3>



                <p
                    className="
mt-2
text-orange-500
font-medium
"
                >
                    {member.role}
                </p>



                <p
                    className="
mt-2
text-sm
text-gray-500
"
                >
                    {member.profession}
                </p>



                <MemberSocials
                    linkedin={member.linkedin}
                    facebook={member.facebook}
                    youtube={member.youtube}
                />



            </div>


        </article>

    )

}