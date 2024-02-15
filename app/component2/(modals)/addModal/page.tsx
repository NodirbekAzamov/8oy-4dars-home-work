import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
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
    cars: Array<CardType>;
    setCars: React.Dispatch<React.SetStateAction<CardType[]>>
    item: CardType | null;
}

const AddModal: React.FC<Car> = ({ open, toggle, setCars, item, cars }) => {
    const [name, setName] = useState<string>("")
    const [color, setColor] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [position, setPosition] = useState<string>("")
    const [year, setYear] = useState<string>("")

    useEffect(()=>{
        if(item) {
            setName(item.name)
            setColor(item.color)
            setPrice(item.price)
            setPosition(item.position)
            setYear(item.year)
        }else {
            setName("")
            setColor("")
            setPrice("")
            setPosition("")
            setYear("")
        }
    }, [item])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let payload: CardType = {
            id: cars.length + 1,
            name: name,
            color: color,
            price: price,
            position: position,
            year: year,
        }

        if (item !== null) {
            const car_map = cars?.map((el) => {
                if (el.id === item.id) {
                    return {
                        ...el,
                        name: name,
                        color: color,
                        price: price,
                        position: position,
                        year: year,
                    }
                }
                return el

            })
            setCars(car_map)
        } else {
            setCars([...cars, payload])
        }
        toggle()
    }
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h4>Add Card</h4>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id='form'>
                    <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} defaultValue={name} className='form-control my-1' />
                    <input type="text" placeholder='color' onChange={(e) => setColor(e.target.value)} defaultValue={color} className='form-control my-1' />
                    <input type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)} defaultValue={price} className='form-control my-1' />
                    <input type="text" placeholder='pasition' onChange={(e) => setPosition(e.target.value)} defaultValue={position} className='form-control my-1' />
                    <input type="text" placeholder='year' onChange={(e) => setYear(e.target.value)} defaultValue={year} className='form-control my-1' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form' className='btn btn-success'>save</button>
            </ModalFooter>
        </Modal>
    )
}

export default AddModal