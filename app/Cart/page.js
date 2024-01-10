import Link from 'next/link';
import React from 'react'

const page = () => {
    let cartcount = 1;
    return (

        <div className='m-5 px-20'>

            {cartcount > 0 ? (
                <>
                    <div>
                        <h2 className='text-4xl semibold'>Cart Items:{cartcount}</h2>
                        <button className='text-orange-400 font-bold mt-2 hover:text-red-600'>
                            Clear all  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </button>
                    </div> 

                       

                </>
            ) : (<>
                <h2 className='text-4xl font-semibold'>
                    Your shopping cart is empty !
                </h2>
                <Link href="/Products" className='text-xl mt-1 text-orange-400 underline'>shope here</Link>

            </>)}
            {

                cartcount > 0 && (
                    <>
                    <div className='flex justify-between border rounded-md my-2 mt-3 p-4 items-center bg-white hover:shadow-lg '>

                        <Link href="/Products/P1" className='flex flex-row flex-wrap'>
                            <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/f/f/s-tsrt-catalog-03-kajaru-original-imagqktmfsngyvsg.jpeg?q=70' className='h-24 w-24'></img>
                            <p className='text-fontbold text-xl ml-2 mt-5 '>T Shirt</p>
                        </Link>


                        <div className='flex items-center gap-5'>
                            <div className='flex items-center  gap-3'>
                                <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />

                                    </svg>
                                </button>
                                <p className='font-semibold text-xl'>0</p>
                                <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>


                                </button>

                            </div>
                            <p>X<span className='text-xl font-semibold'>999</span></p>
                            <button className='text-orange-500 hover:text-red-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />

                                </svg>
                            </button>


                        </div>
                     

                    </div>
                    <div className='flex flex-col items-end  border-t py-4 mt-8'>
                                <p className='text-xl '>
                                    total <spna className="font-bold text-green-500">999</spna>

                                </p>
                                <button  className=' mt-4 py-2 px-6 bg-orange-500          text-white hover:cursor-pointer hover:bg-red-600 rounded-md '>Checkout</button>
 
                          </div>
                    </>
                )
            }

        </div>
    )
}

export default page
