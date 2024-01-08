import React from 'react'
import Link from 'next/link'

const ProductCard = () => {
    return (
        <div>
            {/* Card */}
            <div className='m-4 flex flex-wrap gap-2'>
                <Link href="/product/p1" className='w-full sm:w-64 h-60 rounded border border-gray-200 hover:cursor-pointer hover:shadow-2xl'>
                    <img src='' className='w-full h-36' />
                    <div className='flex justify-between flex-wrap'>
                        <div>
                            <h1 className='font-bold'>Coding shirt 1</h1>
                            <p className='w-60 truncate'>this is description very long very long</p>
                        </div>
                        <div className='text-green-500 font-bold py-2 '>2000</div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ProductCard
