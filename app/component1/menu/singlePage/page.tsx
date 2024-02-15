"use client"
import React, { useEffect, useState } from 'react'
// import img from "@/assets/img1.jpg"
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
type TypeCard = {
  id: number,
  title: string,
  desc: string,
  price: string,
  img: string,
}
export default function SimglePage() {
  const query = useSearchParams()
  const id = query.get('id')
  const [products, setProducts] = useState<Array<TypeCard>>([])
  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`).then((res) => {
      setProducts([{ ...res?.data }])
    })
  }, [])

  return (
    <div>
      <div className='flex justify-center items-center flex-col gap-[20px] w-[100%] h-[100vh]'>
        <h1 className='text-center '>Single Product</h1>
        {
          products?.map((item, index) => {
            return <div className='flex gap-[20px] w-[700px] h-[400px] border p-[10px] bg-[#ff0000bd]'>
              <div className='w-[50%]  '>
                <Image src={item.img} alt='img' width={500} height={500} className='w-[100%] h-[100%] object-cover' />
              </div>
              <div className='w-[50%] bg-sky-500 p-[15px]'>
                <h4>Name: <span className='text-[#c3ff43]'>{item.title}</span></h4>
                <h4>Price: <span className='text-[#c3ff43]'>{item.price}</span></h4>
                <h5>Description :</h5>
                <hr />
                <p><span className='text-[#c3ff43]'>{item.desc}</span></p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
