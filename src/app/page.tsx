import FontShowcase from '@/components/Fonts'
import Hero from '@/components/Hero'
import React from 'react'
import Brands from './brands/page'
import ProductSanity from '@/components/ProductSanity'
import CategoiesSanity from '@/components/CategoriesSanity'
import Product from './(addtocartfun)/product/page' 
import Link from 'next/link'


const Home = () => {
  return (
    <div>
      <Hero/>
      <FontShowcase/>
      <Brands/>
      <Product/>
      <p className='text-center m-8 font-bold text-green-300'>
        <Link href={'/two'}>Next Page</Link>
      </p>
      {/* <ProductSanity/>
      <CategoiesSanity/> */}
    </div>
  )
}

export default Home