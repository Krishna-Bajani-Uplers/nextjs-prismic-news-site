import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { GiAstronautHelmet } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Layout ({children}){
    return (
        <div>
            <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
                <Link href="/" className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
                    Home
                </Link>

                <div className="flex items-center w-1/3 text-lg">
                    <input type="text" className="bg-transparent border-b w-full border-white outline-none" />
                    <FiSearch className="-ml-8 text-2xl hover:text-red-600 cursor-pointer" />
                </div>   

                <div className="flex items-center text-2xl">
                    <AiOutlineBell className="mr-2 cursor-pointer hover:text-red-600" />
                    <AiOutlineUser className="mr-2 cursor-pointer hover:text-red-600" />
                </div>             
            </div>  

            <div className="px-2 md:px-24 bg-white flex border-b border-black">
                <Link href="/" className="mr-10 text-xl mt-5 px-5 border-b border-transparent hover:border-black">Home</Link>
                <Link href="/politics" className="mr-10 text-xl mt-5 px-5 border-b border-transparent hover:border-black">Politics</Link>
                <Link href="/business" className="mr-10 text-xl mt-5 px-5 border-b border-transparent hover:border-black">Business</Link>
                <Link href="/sports" className="mr-10 text-xl mt-5 px-5 border-b border-transparent hover:border-black">Sports</Link>
            </div>         

            {
                children
            }

            <div className="bg-black text-white text-xl py-10 px-24 flex flex-col">
                <div>
                    <a href="/" className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
                        <GiAstronautHelmet className="inline text-4xl mr-4" /> Channel 21
                    </a>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 mt-10 max-w-3xl">
                    <h5>Careers</h5>
                    <h5>About Us</h5>
                    <h5>API</h5>
                    <h5>Media</h5>
                    <h5>Contact Us</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Partners</h5>
                    <h5>Vision</h5>
                    <h5>Project VisQ</h5>
                </div>

                <div className="my-10 text-sm max-w-2xl">
                Channel 21 is a open-media intiative by Xmedia Gcorp, US ® and is
                registered as not for profit organization. All rights reserved. &copy;
                &nbsp; {new Date().getFullYear()}
                </div>
            </div>
        </div>
    )
}