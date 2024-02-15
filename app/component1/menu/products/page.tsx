"use client"
import React, { ReactElement, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
// import img from "@/assets/img1.jpg"
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
type TypeCard = {
    id: number,
    title: string,
    desc: string,
    price: string,
    img: string,
}
export default function Products() {
    const [products, setProducts] = useState<Array<TypeCard>>([])
    useEffect(() => {
        axios.get("http://localhost:8000/products").then((res) => {
            setProducts(res?.data)
            console.log(res.data);

        })
    }, [])
    return (
        <div>
            <div className='my-[15px]'>
                <Button variant="contained" ><Link href="/component1/menu/products/settings" className=' no-underline text-[#fff] '>settings</Link></Button>
            </div>
            <h1 className='text-center my-[20px]'>Products</h1>
            <div className='flex flex-wrap justify-evenly gap-[10px] mt-[15px]'>
                {
                    products?.map((item, index) => {
                        return <div className='border-[2px] w-[30%] p-[10px]'>
                            <Image src={item.img} alt='img' width={500} height={500} className='w-[100%] object-cover hover:scale-[1.05] transition-[0.5s]' />
                            <h4 className='my-[10px]'>Name: {item.title}</h4>
                            <h5>Price: {item.price}</h5>
                            <Button variant="contained"><Link href={{ pathname: "/component1/menu/singlePage", query: { id: item.id } }} className=' no-underline text-[#fff]'>Learn More</Link></Button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
