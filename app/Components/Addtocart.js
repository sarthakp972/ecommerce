"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';



const Addtocart = () => {
  const handlecart = () => {
    toast.success('item added to cart')
    //    console.log("hello")
  }
  return (
    <div>
      <button onClick={handlecart} className='w-full mt-4 py-2 px-6 bg-orange-500 text-white hover:cursor-pointer hover:bg-red-600 '>Add To Cart</button>
      <Toaster />
    </div>
  )
}

export default Addtocart
