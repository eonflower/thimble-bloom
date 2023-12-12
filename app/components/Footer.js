import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="w-full static bottom-0 z-10 mt-24 flex py-2 border-t-2 border-t-dark-surface-200 bg-dark-surface-200">
            
            <div className="w-screen flex justify-between divide-x divide-secondary-100">
                <div className="w-50 flex justify-evenly py-4 px-4">
                    <p>
                        <a 
                        className="transition duration-200 ease-in-out hover:text-gray-300" 
                        href="https://www.instagram.com/thimblebloomthreads/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaInstagram style={{color: "#f2f2f2"}}/>
                        </a>
                    </p>
                    <p>
                        <a 
                        className="transition duration-200 ease-in-out hover:text-gray-300" 
                        href="https://www.facebook.com/thimblebloomthreads/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaFacebook style={{color: "#f2f2f2"}}/>
                        </a>
                    </p>
                    <p>
                        <a 
                        className="transition duration-200 ease-in-out hover:text-gray-300" 
                        href="https://twitter.com/thimblebloom" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaTwitter style={{color: "#f2f2f2"}}/>
                        </a>
                    </p>
                </div>
                <div className="w-50 flex justify-evenly py-4 px-4 text-xs">
                    <p className="text-right">© 2023 Thimble Bloom | All Rights Reserved </p>
                </div>
            </div>
            
        </div>
    )
}