import React from "react";
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from "react";
// import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";
const Course = () => {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res= await axios.get("http://localhost:5001/book")
        // console.log(res.data)
        //setBook(res.data)
        const filterbook = res.data.filter((data) => data.price===0);
        setBook(filterbook)
      } catch (error) {
        console.log(error)
      }
      
    }
    getBook();
  }, [])
  
//   console.log(filterdata);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-2xl pb-2">Free Course</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {
                book.map((item)=>(
                    <Card item={item} key={item.id}/>
                ))
            }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Course;
