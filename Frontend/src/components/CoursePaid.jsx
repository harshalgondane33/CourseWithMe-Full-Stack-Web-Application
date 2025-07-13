import React, { useState,useEffect } from 'react'
// import list from '../../public/list.json'
import Card from './Card'
import axios from 'axios'
import { getBook } from '../../../Backend/controller/book.controller'
const CoursePaid = () => {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res= await axios.get("http://localhost:5001/book")
        // console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
      
    }
    getBook();
  }, [])
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>
                All Courses
            </h1>
            <p className='mt-12'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus atque inventore eum tenetur fuga vel harum, eveniet dolores quis quae, in culpa neque. Dicta deleniti cumque incidunt similique magnam?
            </p>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
                book.map((item)=>(
                    <Card key={item.id} item={item}></Card>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default CoursePaid
