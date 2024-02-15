import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button';
export default function page() {
  return (
    <div className='flex justify-center items-center flex-col gap-[10px]'>
        <h1 className='text-[30px]'>Component1</h1>
        <Button variant="contained"><Link href="/component1/menu" className=' no-underline'>Menu</Link></Button>
    </div>
  )
}
