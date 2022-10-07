import React from 'react';
import {overview} from '../data';

const Brands = () => {
  return (
      <section className = "lg:bg-accent rounded-b-full py-9 lg:bg-overview lg:bg-cover lg:bg-bottom">
        <div className = "container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4">
            {overview.brands.map((item, index) => {
                return (
                    <div key = {item.image} data-aos = "fade-up-left" data-aos-delay = {item.delay} className = "ph:py-3 sm:py-0">
                        <img src = {item.image} alt = "brands_img"/>
                    </div>
                );
            })}
        </div>
      </section>
  );
};

export default Brands;
