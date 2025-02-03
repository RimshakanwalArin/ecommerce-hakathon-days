"use client"
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SearchBar from "./SearchBar";
import { IoIosSearch } from "react-icons/io";



const SHEET_SIDES = [ "right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className=" gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} >
          <SheetTrigger asChild className="lg:hidden">
            <TiThMenu className="text-2xl "/>
          </SheetTrigger >
          <SheetContent side={side}>
            <SheetHeader>
              
            </SheetHeader>
             {/* navigation bar */}
             <ul>
             <li className=" grid grid-cols-1 space-y-5 place-items-start text-white">   
                   <Link href={`/`}>Home</Link>
                    <Link href={"/product"}>Products</Link>
                    <Link href={"/brands"}>Brands</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>contact</Link>
                </li>
                 <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[300px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full "> <IoIosSearch className="text-xl hidden lg:block " /> 
                                {/* <input   placeholder={`Search for products...`}  className="bg-[#F0F0F0] outline-none  w-full h-full rounded-full ml-2 hidden lg:block"/> */}
                                <SearchBar/>
                                </div>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
      

    </div>
  )
}