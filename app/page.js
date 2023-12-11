import Image from "next/image";
import headerImg from "/app/assets/images/header.jpg";

export default function Home() {
return (
    <div className="w-full h-screen relative">
    <Image
        className="absolute opacity-70"
        layout="fill"
        objectFit="cover"
        src={headerImg}
        alt=""
    />
    <h1 className="absolute inset-x-0 mt-16 flex items-center justify-center bg-black bg-opacity-70 rounded-xl text-white font-thin tracking-widest w-56 h-12 my-auto mx-auto">
        Hand Crafted Goods
    </h1>
    </div>
);
}
