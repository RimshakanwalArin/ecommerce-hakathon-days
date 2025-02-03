'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../app/(addtocartfun)/Redux/features/searchSlice';
import { RootState } from '../app/(addtocartfun)/Redux/store';
import Products from '@/app/utils/Mock';
import { Product } from '@/app/product/types'; 
import Image from 'next/image';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const { query, results } = useSelector((state: RootState) => state.search);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (query) {
      const filteredProducts = Products.filter((product: Product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(setSearchResults(filteredProducts));
    } else {
      dispatch(setSearchResults([]));
    }
  }, [query, dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setSearchQuery(value));
  };

  return (
    <div className="p-4">
      <label htmlFor="search" className="block text-gray-700 font-medium">
        Search Products:
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={handleSearch}
        className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
      />
      {results.length > 0 && (
        <ul className="mt-2 border rounded-md bg-white shadow-lg p-2">
          {results.map((product) => (
            <li key={product.id} className="flex items-center gap-3 border-b last:border-none p-2">
              <Image
                src={product.image?.[0] || '/placeholder.png'}
                alt={product.title}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <span className="block font-semibold">{product.title}</span>
                <span className="text-gray-600">${product.price.toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
