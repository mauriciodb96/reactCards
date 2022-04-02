import React from "react";
import Card from "./card";
import img1 from '../img/code.jpg'
import img2 from '../img/coding.jpg'
import img3 from '../img/js coffee.png'

import './cards.css'

const cards = [
  {
    id:1,
    title: 'Web development',
    image: img2
  },
  {
    id:2,
    title: 'Code',
    image: img1
  },
  {
    id:3,
    title: 'JavaScript',
    image: img3
  }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center ">
      <div className="row col-md-12">
        {
          cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <Card title={card.title} imgURL={card.image}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
