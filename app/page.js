"use client"
import React from 'react'
import Navbar_1 from './Components/Navbar_1'
import Afternavbar from './Components/Afternavbar'
import ProductCard from './Components/ProductCard'
import Link from 'next/link'
//import {ShoppingCartIcon} from '@heroicons/react/24/Outline'

const page = () => {
  return (
    <>

      <Navbar_1/>
      <Afternavbar/>
      <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
      <Link href="/Products/P1" className='inline-block text-orange-400 p-4 font-bold hover:underline'>View All{">"}</Link>

      
    </>
  )
}

export default page
