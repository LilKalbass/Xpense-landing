import React from 'react';
import Cards from './Cards';
import {product} from '../data';

const Product = () => {
  return(
      <section className = "section">
        <div className = "container mx-auto">
          <div className= "flex flex-col lg:flex-row items-center mb-10 lg:mb-20">
            <h2 className = "text-6xl lg:text-8xl mb-6 font-bold" data-aos = "fade-up" data-aos-delay = "300">{product.title}</h2>
            <p className = "lead lg:max-w-[350px]" data-aos = "fade-up" data-aos-delay = "300">{product.subtitle}</p>
          </div>
          <Cards/>
        </div>
      </section>
  );
};

export default Product;
