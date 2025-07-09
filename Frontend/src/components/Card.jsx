import React from "react";

const Card = ({item}) => {
    // console.log(item)
  return (
    <div className="mt-12 my-3 p-4">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-1000 dark:bg-gray-800 dark:text-white border border-black">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>
            {item.title}
          </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Rs.{item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-xl border-[2px] hover:bg-pink-600 hover:text-white duration-500">Buy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
