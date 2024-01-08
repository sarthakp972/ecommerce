import Link from "next/link";
import Navbar_1 from "../Components/Navbar_1";

export default function productLayout({ children }) {
    return (
      <div>
        <Navbar_1/>
           <Link href="/Products" className='inline-block text-orange-400 p-4 font-bold hover:underline'>All Products{">"}</Link>
            <div>{children}</div>
      </div>
    )
  }