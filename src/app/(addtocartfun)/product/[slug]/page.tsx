'use client'
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../Redux/features/cartSlice";


let stars = [<FaStar key={0}/>,<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>]

function SlugPage({ params }: { params: { slug: string } }) {

  const products= useSelector((state:any)=>state.product)
  const items: any = products.find((item:any) => item.slug === params.slug);

  // if (!items) return <p>Product not found</p>;
  const dispatch = useDispatch();
  const [cartitem,setcartitem] = useState(
    {
    id:items.id,
    title:items.title,
    image:items.image,
    slug:items.slug,
    price:items.price,
    size:items.size,
    color:items.color[0],
    qty:items.qty,
    discount:items.discont,
    discrption:items.discrption
    }
)

 
 
  return (
    <div className="mt-36 px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Section - Product Images */}
      <div>
        {/* Main Image */}
        <Image
          src={items.image[0]}
          alt={items.title}
          width={500}
          height={500}
          className="rounded-lg object-cover w-full"
        />
        {/* Thumbnails */}
        <div className="flex gap-2 mt-4">
          {items.image.map((img: string, index: number) => (
            <Image
              key={index}
              src={items.image[1]}
              alt={items.title}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="col-span-2 flex flex-col gap-6">
        {/* Title, Price, Discount */}
        <div>
          <h1 className="text-3xl font-bold">{items.title}</h1>
          
          <p className="text-xl font-medium text-gray-700"> {items.discrption}</p>
          <p className="text-xl font-medium text-gray-700"> {items.stars}</p>
          <p className="text-xl font-medium text-gray-700">{cartitem.price * cartitem.qty}</p>
         

          {cartitem.discount && (
            <p className="text-sm font-semibold text-green-600">
              {cartitem.discount >0 && (cartitem.price-(cartitem.price*cartitem.discount)/100)*cartitem.qty}% OFF
            </p>
          )}
        <p className="text-gray-600">{items.discrption}</p>
        </div>

        {/* Description */}

        {/* Color Selection */}
        <div>
          <p className="font-medium">Available Colors:</p>
          <div className="flex gap-2 mt-2">
            {items.color.map((color:any, index:any) => (
              <button
                onClick={()=>setcartitem({...cartitem,color:items})}
                key={index}
                className={`w-[37px] h-[37px] rounded-full active:outline`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
            {/* <p>{cartitem.color}</p> */}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <p className="font-medium">Select Size:</p>
          <div className="flex gap-2 mt-2 ">
            {items.size.map((size:any, index:any) => (
              <button
              onClick={()=>setcartitem({...cartitem,size:items})}
                key={index}
                className="px-4 py-2 bg-gray-300 text-sm font-semibold rounded-lg active:outline"
              >
                {size}
              </button>
            ))}
            {/* <p>{cartitem.size}</p> */}

          </div>
        </div>

        {/* Quantity Increment/Decrement */}
        <div className="flex items-center gap-4">
          <button 
          onClick={()=>setcartitem({...cartitem,qty:cartitem.qty <= 1? 1 : --cartitem.qty})}
          className="p-2 bg-gray-200 rounded-full">
            <Minus />
          </button>
          <span className="text-lg font-medium">{cartitem.qty}</span>
          <button 
          onClick={(()=>setcartitem({...cartitem,qty:++cartitem.qty}))}
          
          className="p-2 bg-gray-200 rounded-full">
            <Plus />
          </button>
        </div>

        {/* Add to Cart Button */}
        <Button
        onClick={()=>dispatch(addtocart(cartitem))}
        >Add To Cart</Button>
      </div>
    </div>
  );
}

export default SlugPage;
