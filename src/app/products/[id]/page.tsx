// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';

// // Product Type
// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount: number;
//   image: { asset: { url: string } };
//   description: string;
// };

// const getProductById = async (_id: string): Promise<Product | null> => {
//   try {
//     const data: Product[] = await client.fetch(
//       `*[_type == "products" && _id == $_id]{
//         _id,
//         title,
//         price,
//         priceWithoutDiscount,
//         "image": image.asset->url,
//         description
//       }`,
//       { _id }
//     );
//     return data[0] || null;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// };

// const IdProduct = async ({ params }: { params: { _id: string } }) => {
//   const product = await getProductById(params._id);

//   if (!product) {
//     return <p className="mt-36">Product not found</p>;
//   }

//   return (
//     <div className="mt-36 p-4">
//       <h1 className="text-2xl font-bold">{product.title}</h1>
//       <Image src={product.image.asset.url} alt={product.title} width={300} height={300} />
//       <p className="text-gray-600">{product.description}</p>
//       <p className="text-green-600 text-xl">${product.price}</p>
//       <p className="line-through text-red-500">${product.priceWithoutDiscount}</p>
//     </div>
//   );
// };

// export default IdProduct;
