export default function HeroBackground(){

    return (
        <>
            {/* Orange light */}
            <div
                className="
                absolute
                -top-40
                -right-40
                h-[600px]
                w-[600px]
                rounded-full
                bg-orange-300/40
                blur-3xl
                "
            />


            {/* Blue light */}
            <div
                className="
                absolute
                -bottom-40
                -left-40
                h-[500px]
                w-[500px]
                rounded-full
                bg-blue-300/40
                blur-3xl
                "
            />


            {/* Soft grid */}

            <div
                className="
                absolute
                inset-0
                bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),
                linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
                bg-[size:45px_45px]
                "
            />

        </>
    );
}