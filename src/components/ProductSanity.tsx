import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

const ProductSanity = async () => {
  const data = await client.fetch(`*[_type == 'products']`)

  return (
    <div>
       <div className='m-11'>
      <h1 className='text-center items-center text-2xl font-bold text-green-900 '>
        Sanity Product
      </h1>
      <p className='text-center items-center text-lg text-green-900 '>Templet_8</p>

      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      
      {data.map((item: any) => (
        <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
          <Image
            src={urlFor(item.image).url()}
            alt={item.title}
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
          <p className="text-center text-lg font-semibold py-4 px-2">{item.title}</p>
        </div>
      ))}
    </div>
    </div>

  )
}

export default ProductSanity
