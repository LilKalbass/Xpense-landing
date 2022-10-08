import React, {useState} from 'react';
import {pricing} from '../data';

import {HiCheck, HiOutlineArrowNarrowRight} from "react-icons/hi";

const Pricing = () => {
  const [index, setIndex] = useState(0);
  return (
    <section id = "_pricing" className = "section">
      <div className = "container mx-auto">
          <h2 className = "h2 mb-10 lg:mb-20 text-center" data-aos = "fade-up" data-aos-delay = "200">{pricing.title}</h2>
          <div className = "flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-8">
              {pricing.cards.map((card, cardIndex) => {
                  return (
                    <div key = {cardIndex} data-aos = "zoom-out-down" data-aos-delay = {card.delay}>
                        <div onClick={() => setIndex(cardIndex)}
                             className = {`${index === cardIndex ? "bg-accent shadow-2xl" : "border border-grey"}
                                          w-[350px] h-[475px] rounded-2xl p-10 cursor-pointer transition-all shadow-xl lg:shadow-2xl`}>
                            <div className = "mb-4">
                                <img src = {card.icon} alt = "card_img"/>
                            </div>
                            <div className = "text-3xl mb-6 font-light">{card.title}</div>
                            <div className = "flex flex-col gap-y-1.5 mb-6">
                                {card.services.map((service, serviceIndex) => {
                                    return (
                                        <div className = "flex items-center gap-x-3" key = {serviceIndex}>
                                            <HiCheck className = "text-green-500"/>
                                            <div>{service.name}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className = "mb-10">
                                <div>
                                    <span className = "text-2xl font-extrabold">{card.price}/</span>
                                    <span className = "text-xl text-black font-light">year</span>
                                </div>
                                <div className = "text-base text-black font-light">{card.userAmount}</div>
                            </div>
                            <button className = {`${index === cardIndex ? 
                                "bg-black text-white hover:bg-accentHover" : "border border-accent text-accent"}
                                 btn btn-sm space-x-2`}>
                                <span>{card.btnText}</span>
                                <HiOutlineArrowNarrowRight/>
                            </button>
                        </div>
                    </div>
                  );
              })}
          </div>
      </div>
    </section>
  );
};

export default Pricing;
