
import Link from 'next/link'
import React from 'react'
// import {ShoppingCartIcon} from '@heroicons/react/24/Outline'



const Navbar_1 = () => {
  return (
    <nav className='bg-white font-bold p-2 flex justify-between'>
      <Link href="/" className=' text-orange-400 text-3xl '>Sarthak Store</Link>

      <Link  href="/Cart" className="text-orange-400 hover:text-red-600 hover:cursor-pointer" >
        {/* Cart_logo */}
        <span > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 inline-block ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>

        </span>
       
        <span> Cart(0)  </span>

      </Link>




    </nav>
  )
}

export default Navbar_1
