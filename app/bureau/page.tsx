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
            <div className="flex-1 min-h-0 p-4">
                <BureauTree />
            </div>


        </div>
    );
}
