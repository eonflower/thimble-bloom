import Link from "next/link";

export default function Navbar() {
return (
    <div className="w-full flex justify-between bg-red-950 py-4">
        <Link href="/" className="transition duration-200 ease-in-out hover:text-gray-300">
            <h1 className="flex pl-4">Thimble Bloom</h1>
        </Link>
        <div>
        <Link href="/about" className="pr-4 transition duration-200 ease-in-out hover:text-gray-300 text-xs">
            about
        </Link>
        <Link href="/shop" className="pr-4 transition duration-200 ease-in-out hover:text-gray-300 text-xs">
            shop
        </Link>
        </div>
    {/* <input className="flex text-black rounded-lg pl-2 mr-2 w-32" type="text" placeholder="Search" /> */}
    </div>
);
}
