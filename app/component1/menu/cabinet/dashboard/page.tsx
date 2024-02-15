import React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link';
export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Button variant="contained"><Link href="/component1/menu/cabinet/dashboard/balance" className=' no-underline text-[#fff]'>Balance</Link></Button>
        </div>
    )
}
