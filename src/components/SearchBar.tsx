'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../app/(addtocartfun)/Redux/features/searchSlice'
import { RootState } from '../app/(addtocartfun)/Redux/store';
import Products from '@/app/utils/Mock';
import { Product } from '../product/types'



const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const { query, results } = useSelector((state: RootState) => state.search);
  console.log(dispatch);
  
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
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={handleSearch}
      />
      <ul>
        {results.map((product) => (
          <li key={product.id}>
            <img src={product.image[0]} alt={product.title} width="50" />
            <span>{product.title}</span>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;