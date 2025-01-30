// 'use client';

// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// // Product Type
// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount: number;
//   badge?: string;
//   image?: { asset?: { url?: string } }; // Make image and its properties optional
//   category: { _id: string; title: string };
//   description: string;
//   inventory: number;
//   tags: string[];
// };

// const ProductSanity = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data: Product[] = await client.fetch(`*[_type == "products"]{
//           _id,
//           title,
//           price,
//           priceWithoutDiscount,
//           badge,
//           "image": image.asset->url,
//           category->{_id, title},
//           description,
//           inventory,
//           tags
//         }`);
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);
  

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div className="grid grid-cols-3 gap-4 p-4">
//       {products.map((item) => (
//         <div key={item._id} className="border p-4">
//            {/* Check if image URL exists */}
//            {item.image?.asset?.url ? (
//               <Image
//                 src={item.image.asset.url}
//                 alt={item.title}
//                 width={200}
//                 height={200}
//                 className="object-cover"
//               />
//             ) : (
//               <div className="bg-gray-200 w-[200px] h-[200px] flex items-center justify-center">
//                 <p className="text-gray-500">No Image Available</p>
//               </div>
//             )}
//           <Link href={`/products/${item._id}`}>
//           <p className="font-bold">{item.title}</p>
//           <p className="text-gray-500">{item.description}</p>
//           <p className="text-green-600">${item.price}</p>
           
//           </Link>
//           <p className="line-through text-red-500">${item.priceWithoutDiscount}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductSanity;