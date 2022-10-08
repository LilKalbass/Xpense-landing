import React, {useState} from 'react';
import {product} from '../data';

import ArrowImg from '../assets/img/product/cards/arrow.svg'

const Cards = () => {
  const [index, setIndex] = useState(0);
  return (
      <>
        <div className = "flex flex-col lg:flex-row gap-y-8 lg:gap-x-8">
          {product.cards.map((card, cardIndex) => {
            return (
                <div key = {cardIndex} data-aos = "zoom-out-down" data-aos-delay = {card.delay}>
                  <div onClick={() => setIndex(cardIndex)}
                       className = {`${index === cardIndex ? "bg-accent hover:drop-shadow-2xl" : "border border-grey"}
                                   w-[350px] h-[375px] shadow-xl lg:shadow-2xl flex flex-col justify-center items-center
                                   mx-auto p-16 text-center rounded-2xl cursor-pointer transition-all`}>
                    <div>
                      <img className = "mb-6" src = {card.icon} alt = "product_img"/>
                    </div>
                      <div className = "mb-3 text-[30px] font-normal">{card.title}</div>
                      <p className = "mb-6 font-light">{card.subtitle}</p>
                      {index === cardIndex && <img className = "w-[15%]" src = {ArrowImg} alt = "product_arrow_img"/>}
                  </div>
                </div>
            )
          })}
        </div>
      </>
  );
};

export default Cards;
