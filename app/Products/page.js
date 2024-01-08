import React from 'react'
import ProductCard from '../Components/ProductCard'

const Products = () => {
  return (
    <>
    <div className='grid my-4 mx-12 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 '>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     </div>

    </>
  )
}

export default Products  
