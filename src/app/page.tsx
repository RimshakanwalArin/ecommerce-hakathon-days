import FontShowcase from '@/components/Fonts'
import Hero from '@/components/Hero'
import React from 'react'
import Brands from './brands/page'
import ProductSanity from '@/components/ProductSanity'
import CategoiesSanity from '@/components/CategoriesSanity'
import Product from './(addtocartfun)/product/page'


const Home = () => {
  return (
    <div>
      <Hero/>
      <FontShowcase/>
      <Brands/>
      <Product/>
      <ProductSanity/>
      <CategoiesSanity/>
    </div>
  )
}

export default Home