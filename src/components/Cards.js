import React, { useState } from "react";
import ReactStars from "react-stars";
const Cards = () => {
  const [data, setData] = useState([
    {
      name: " Black Panther",
      rating: " 5",
      year: " 2013",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHewK7CkVROUSV6nDdO5Jg5qvyj4hsmTHcbp3QUw73faWUEnZxzeB8Xzy2LbRjavu-Hs&usqp=CAU",
    },
    {
      name: " Black Panther",
      rating: " 5",
      year: " 2013",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHewK7CkVROUSV6nDdO5Jg5qvyj4hsmTHcbp3QUw73faWUEnZxzeB8Xzy2LbRjavu-Hs&usqp=CAU",
    },
    {
      name: " Black Panther",
      rating: " 5",
      year: " 2013",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHewK7CkVROUSV6nDdO5Jg5qvyj4hsmTHcbp3QUw73faWUEnZxzeB8Xzy2LbRjavu-Hs&usqp=CAU",
    },
    {
      name: " Black Panther",
      rating: " 5",
      year: " 2013",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHewK7CkVROUSV6nDdO5Jg5qvyj4hsmTHcbp3QUw73faWUEnZxzeB8Xzy2LbRjavu-Hs&usqp=CAU",
    },
    {
      name: " Black Panther",
      rating: " 5",
      year: " 2013",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHewK7CkVROUSV6nDdO5Jg5qvyj4hsmTHcbp3QUw73faWUEnZxzeB8Xzy2LbRjavu-Hs&usqp=CAU",
    },
    {
      name: " Black Panther",
      rating: " 5",
      year: " 2013",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHewK7CkVROUSV6nDdO5Jg5qvyj4hsmTHcbp3QUw73faWUEnZxzeB8Xzy2LbRjavu-Hs&usqp=CAU",
    },
    {
      name: " Black Panther",
      rating: " 5",
      year: " 2013",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHewK7CkVROUSV6nDdO5Jg5qvyj4hsmTHcbp3QUw73faWUEnZxzeB8Xzy2LbRjavu-Hs&usqp=CAU",
    },
    {
      name: " Black Panther",
      rating: " 5",
      year: " 2013",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHewK7CkVROUSV6nDdO5Jg5qvyj4hsmTHcbp3QUw73faWUEnZxzeB8Xzy2LbRjavu-Hs&usqp=CAU",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div className="card p-2 shadow-lg font-medium hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500">
            <img className="h-72" src={e.img} alt="images" />
            <h1>
              <span classname="text-gray-500">Name:</span> {e.name}
            </h1>
            <h1 className="flex items-center">
              <span classname="text-gray-500 mr-1">Rating:</span>
              <ReactStars size={20} half={true} value={e.rating} edit={false} />
            </h1>
            <h1>
              <span classname="text-gray-500">Year:</span>
              {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
