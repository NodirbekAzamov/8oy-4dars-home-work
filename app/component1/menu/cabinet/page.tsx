import React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link';
export default function Cabinet() {
  return (
    <div>
      <h2>Cabinet</h2>
      <div className='flex gap-[20px]'>
        <Button variant="contained"><Link href="/component1/menu/cabinet/dashboard" className=' no-underline text-[#fff]'>dashboard</Link></Button>
      </div>
    </div>
  )
}