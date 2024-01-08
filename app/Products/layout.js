import Link from "next/link";

export default function productLayout({ children }) {
    return (
      <div>
           <Link href="/Products" className='inline-block text-orange-400 p-4 font-bold hover:underline'>All Products{">"}</Link>
            <div>{children}</div>
      </div>
    )
  }