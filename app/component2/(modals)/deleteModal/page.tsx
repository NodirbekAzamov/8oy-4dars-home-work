import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Image from 'next/image';
import img from "../../../../assets/delete_img.png"
type CardType = {
    id: number,
    name: string,
    color: string,
    price: string,
    position: string,
    year: string
}

interface Car {
    open: boolean;
    toggle: () => void
    id: number | undefined;
    cars: Array<CardType>;
    setCars: React.Dispatch<React.SetStateAction<CardType[]>>
}
const DeleteModal: React.FC<Car> = ({ open, toggle, id, setCars, cars }) => {
    const remove = () => {
       const filtered = cars.filter((item) => item.id !== id);
       setCars(filtered)
       toggle()
    }
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalBody className='flex flex-col items-center'>
                <Image src={img} alt='img' className='w-[200px] h-[200px]' />
                <h4> Are you sure you want to delete</h4>
            </ModalBody>
            <ModalFooter>
                <button onClick={toggle} className='text-[25px] text-[#4ba9df] cursor-pointer' >No</button>
                <button onClick={remove} className='text-[25px] text-[red] cursor-pointer' >Yes</button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteModal