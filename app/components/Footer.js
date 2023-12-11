import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full static bottom-0 text-xs flex py-1 bg-black">
            
            <div className="w-screen flex justify-between divide-x divide-red-800">
                <div className="flex gap-8 py-4 px-8">
                    <a className="transition duration-200 ease-in-out hover:text-gray-300" href="https://www.instagram.com/thimblebloomthreads/" target="_blank" rel="noopener noreferrer"> instagram </a>
                    <a className="transition duration-200 ease-in-out hover:text-gray-300" href="https://www.facebook.com/thimblebloomthreads/" target="_blank" rel="noopener noreferrer"> facebook </a>
                    <a className="transition duration-200 ease-in-out hover:text-gray-300" href="https://twitter.com/thimblebloom" target="_blank" rel="noopener noreferrer"> twitter</a>
                </div>
                <div>
                    <p className="text-right px-8 py-4 ">© 2023 Thimble Bloom Threads</p>
                </div>
            </div>
            
        </div>
    )
}