import { client } from '@/sanity/lib/client';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const DataFetch = async () => {
  const query = await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      price,
      discountPercentage,
      "imageUrl": image.asset->url
    }`
  );
  console.log(query);

  return (
    <div className="grid grid-cols-1 bg-sky-50 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {query.map((product: any) => {
        return (
          <div
            key={product._id}
            className="border rounded-lg bg-blue-100 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image
              src={urlFor(product.imageUrl).url()}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h1 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-gray-600">
                <span className="font-semibold text-black">${product.price}</span>
              </p>
              <p className="text-sm text-red-500">
                Save {product.discountPercentage}%!
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataFetch;
