import React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link';
export default function Settings() {
    return (
        <div>
            <h1>Settings</h1>
            <Button variant="contained"><Link href="/component1/menu/products/settings/details" className=' no-underline text-[#fff]'>Delails</Link></Button>
        </div>
    )
}
