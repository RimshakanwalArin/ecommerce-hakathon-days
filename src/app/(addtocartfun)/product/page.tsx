'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";


 
let stars = [<FaStar key={0}/>,<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>]


const Product = () => {
const products= useSelector((state:any)=>state.product)


  return (
    <div className="mt-36 px-4">
      <div className='m-11'>
      <h1 className='text-center items-center text-2xl font-bold text-green-900 '>
        Best Product
      </h1>
      

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col items-center border p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            {/* Image Section */}
            <Link href={`/product/${item.slug}`}>
            <Image
              src={item.image[0]}
              alt={item.title}
              width={200}
              height={200}
              className="rounded-lg"
              />
              </Link>
            {/* Star */}
            <p className="flex justify-start items-center text-green-400">{stars}</p>

            {/* Content Section */}
            <div className="text-center mt-4">
              {/* Title */}
              <h1 className="text-lg font-bold md:text-xl">{item.title}</h1>

              {/* Price and Discount */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                <p className="text-lg text-gray-800 font-medium">${item.price}</p>
                {item.discount && (
                  <p className="text-sm text-green-600 font-semibold">
                    {item.discount}% OFF
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;