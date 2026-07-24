import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,FaYoutube
} from "react-icons/fa";


interface Props {

    linkedin?: string;
    facebook?: string;
    youtube?: string;

}


export default function MemberSocials({
                                          linkedin,
                                          facebook,
                                          youtube
                                      }: Props){


    return (

        <div
            className="
flex
items-center
gap-3
mt-5
"
        >


            {
                linkedin && (

                    <a
                        href={linkedin}
                        target="_blank"
                        className="
h-9
w-9
rounded-full
flex
items-center
justify-center
bg-gray-100
text-gray-600
hover:bg-blue-600
hover:text-white
transition
"
                    >

                        <FaLinkedin size={18}/>

                    </a>

                )
            }



            {
                facebook && (

                    <a
                        href={facebook}
                        target="_blank"
                        className="
h-9
w-9
rounded-full
flex
items-center
justify-center
bg-gray-100
text-gray-600
hover:bg-blue-500
hover:text-white
transition
"
                    >

                        <FaFacebook size={18}/>

                    </a>

                )
            }



            {
                youtube && (

                    <a
                        href={youtube}
                        target="_blank"
                        className="
h-9
w-9
rounded-full
flex
items-center
justify-center
bg-gray-100
text-gray-600
hover:bg-red-500
hover:text-white
transition
"
                    >

                        <FaYoutube size={18}/>

                    </a>

                )
            }



        </div>

    )

}