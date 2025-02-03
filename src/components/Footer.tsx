import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] relative p-7 md:px-12 w-full       h-full md:h-[400px] flex flex-col justify-start items-center ">
      <div className="w-full h-[60%] flex flex-col md:flex-row justify-between items-start mt-52 md:mt-20 border-b-2 pb-5">
        {/* Top Section */}
        <div className="w-full md:w-[40%] mt-5">
          {/* <h1 className="text-2xl md:text-3xl font-extrabold">Suaid</h1> */}
           <Image src={'/suaad-logo.png'} alt="suad logo" width={150} height={150} 
                     className="text-2xl md:text-4xl font-extrabold pl-2"/>
          <p className="mt-2 text-sm">
            We have perfume bottles your style and which you&apos;re proud to wear. From women to men.
          </p>
          <div className="flex space-x-2 mt-3">
            <FaTwitter className="text-xl" />
            <BsFacebook className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaSquareGithub className="text-xl" />
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full flex-wrap grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ">
          
         

          <div className="pl-52">
            <h2 className="text-xl font-semibold ">Help</h2>
            <ul className="space-y-1 text-gray-600">
            <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">contact</Link></li>
              <li><Link href="/faqs">Faqs</Link></li>
              {/* <li><Link href="/delivery">Delivery Details</Link></li> */}
              {/* <li><Link href="/terms">Terms & Conditions</Link></li> */}
              <li><Link href="/Privacy-Policy">Privacy Policy</Link></li>
            </ul>
          </div>
         <div>
         </div>
        </div>
      </div>
         <SearchBar/>
      <p className="text-xs mt-3 md:text-sm text-gray-600">
        Suad.co © {new Date().getFullYear()} Made by Rimsha Kanwal Arain, All Rights Reserved
      </p>
    </footer>
  );
}
