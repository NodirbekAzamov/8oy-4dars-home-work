import Link from 'next/link'
import React from 'react'
export default function SideBra() {
  return (
    <div className=' bg-zinc-400 h-[100vh] '>
        <div className='flex flex-col justify-center gap-[80px] items-center pt-[200px]'>
            <Link href="/component1/menu/products" className=' no-underline w-[80%] text-center py-[8px] border-[1px] border-[blue] rounded-[15px] hover:bg-blue-700 hover:text-[#fff] transition-[0.5s]'>Products</Link>
            <Link href="/component1/menu/cabinet" className=' no-underline w-[80%] text-center py-[8px] border-[1px] border-[blue] rounded-[15px] hover:bg-blue-700 hover:text-[#fff] transition-[0.5s]'>cabinet</Link>
        </div>
    </div>
  )
}
