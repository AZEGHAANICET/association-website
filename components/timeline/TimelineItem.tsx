interface Props{

    item:{
        year:string;
        title:string;
        description:string;
    }

}


export default function TimelineItem({item}:Props){


    return (

        <div
            className="
grid
md:grid-cols-[150px_1fr]
gap-8
items-center
"
        >


            <div
                className="
text-4xl
font-bold
text-orange-400
"
            >
                {item.year}
            </div>



            <div
                className="
bg-white/10
rounded-2xl
p-8
"
            >

                <h3
                    className="
text-2xl
font-bold
"
                >
                    {item.title}
                </h3>


                <p
                    className="
mt-3
text-gray-300
"
                >
                    {item.description}
                </p>


            </div>


        </div>

    )

}