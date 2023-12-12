import Image from "next/image";
import bgImg from "/app/assets/images/bg.jpg";

export default function Home() {
return (
    <div className="w-full h-screen relative">
    <Image
        className="absolute mt-24 z-0 h-screen object-cover"
        src={bgImg}
        alt=""
    />
    <h1 className="absolute z-10 inset-x-0 mt-48 flex items-center justify-center bg-black bg-opacity-75 rounded-xl text-white font-thin tracking-widest w-56 h-12 mx-auto">
        Hand Crafted Goods
    </h1>
    </div>
);
}
