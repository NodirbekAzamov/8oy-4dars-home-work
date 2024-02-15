"use client"
import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import AddModal from '../(modals)/addModal/page';
import DeleteModal from '../(modals)/deleteModal/page';
type CardType = {
  id: number,
  name: string,
  color: string,
  price: string,
  position: string,
  year: string
}
type editType  = CardType | null
export default function cardTable() {
  const [cars, setCars] = useState<CardType[]>([
    { id: 1, name: "Damas", color: "black", price: "$5000", position: "2", year: "2017" },
    { id: 2, name: "Nexia", color: "black", price: "$5000", position: "2", year: "2017" },
    { id: 3, name: "Tico", color: "black", price: "$5000", position: "2", year: "2017" },
  ])
  const [addModal, setAddModal] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [id, setId] = useState<number>()
  const [item, setItem] = useState<editType>(null)
  const openModal = () => {
    setAddModal(true)
  }
  const remove = (id: number) => {
    setDeleteModal(true)
    setId(id)
  }
  const toggle = () => {
    setAddModal(false)
    setDeleteModal(false)

  }
  const edit = (item:CardType) => {
    setItem(item)
    setAddModal(true)
  }
  return (
    <div className='w-[100%] h-[100vh] flex  flex-col items-center gap-[30px] mt-[20px]'>
      <AddModal open={addModal} toggle={toggle} cars={cars} setCars={setCars} item={item}/>
      <DeleteModal open={deleteModal} toggle={toggle} id={id} cars={cars} setCars={setCars} />
      <h1>Card Table</h1>
      <div className='row w-[100%] px-[200px]'>
        <div className="col">
          <button onClick={openModal} className='py-[5px] bg-[#95ff1c] px-[15px] rounded-[5px] my-[10px]'>add Card</button>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>№</th>
                <th>Name</th>
                <th>color</th>
                <th>price</th>
                <th>position</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cars?.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.price}</td>
                    <td>{item.position}</td>
                    <td>{item.year}</td>
                    <td>
                      <div className='flex justify-around'>
                        <CiEdit onClick={() => edit(item)} className='text-[25px] text-[#4ba9df] cursor-pointer' />
                        <MdDeleteForever onClick={() => remove(item.id)} className='text-[25px] text-[red] cursor-pointer' />
                      </div>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
