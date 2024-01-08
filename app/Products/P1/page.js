import Addtocart from '@/app/Components/Addtocart'
import Sharebtn from '@/app/Components/Sharebtn'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex justify-around items-center flex-wrap'>
        <div className='w-80 h-80'>
          <img src='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-80'/>
        </div>

          <div className=' flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white'>
            <h2 className='text-3xl font-semibold'>Coding Shirt</h2>
            <div className='flex pt-2 gap-2'>
              {/* icon */}
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lime-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


            <span className='font-semibold'>In Stock</span>
            |
            <Sharebtn/>
            </div>
            <div className='mt-4 border-t pt-4 '>
              <p2 className='text-gray-500 '>Price:</p2>
              <p2 className='text-xl font-semibold'>3000</p2>
              <Addtocart/>

            </div>


          </div>
          

      </div>
      <p className='mt-8 text-2xl'>
        This will contain product description
      </p>

    </div>
  )
}

export default page
