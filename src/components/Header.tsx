"use client"

import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SheetSide } from "./Humburgur";
import Image from "next/image";

import { useSelector } from "react-redux";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

  
export default function Header() {
   const cart =  useSelector((state:any)=>state.cart)
    
     
  return (
     <header className="w-full fixed bg-white z-10 top-0  h-[60px] md:h-[90px] flex justify-between  pr-2 items-center max-w-screen-2xl mx -auto">
      {/* <SearchBar/> */}
           <div className="flex justify-center items-center rounded-2xl ">

            {/* logo */} 
           <Image src={'/suaad-logo.png'} alt="suad logo" width={70} height={70} 
           className="text-2xl md:text-4xl font-extrabold pl-2"/>
           
           </div>
            {/* navigation bar */}
            <ul className="hidden lg:block ">
                <li className="flex space-x-4 ml-4 mt-2 items-center ">
                    <Link href={`/`}>Home</Link>
                    <Link href={"/product"}>Products</Link>
                    <Link href={"/brands"}>Brands</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>contact</Link>
                </li>
            </ul>
            
 {/* Authentication Section */}
 
            {/* right */}
            <div className="ml-14 flex justify-center items-center">
                <div >
                {/* <SearchBar/> */}
                </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4 ">
            {/* <IoIosSearch className="text-xl  lg:hidden" /> */}
            <Link href={"/cart"} className="relative hidden lg:block"><IoCartOutline className="text-4xl  "/>
             {cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
             )
             }
            </Link>
            
               {/* <MdOutlineAccountCircle className="text-4xl hidden lg:block"/> */}

               <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" /> {/* ✅ Sign Up Button Added */}
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
            </div>
            <div className="flex items-center justify-center space-x-5 lg:hidden">
            <Link href={"/cart"} className="relative"><IoCartOutline className="text-4xl  "/>
            {cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
             )
             }
            </Link>   
            <SheetSide/>

            

            </div>
            
         {/* </div> */}
     </header>
  );
}