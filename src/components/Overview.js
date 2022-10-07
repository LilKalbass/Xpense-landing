import React from 'react';
import {overview} from '../data';

const Overview = () => {
  return (
      <section className = "min-h-[300px] lg:min-h-[700px] bg-overview bg-cover bg-left-top pt-24 round">
        <div className = "container mx-auto flex justify-end overflow-hidden">
          <img src = {overview.productImg} alt = "overview_img"
               data-aos = "fade-up" data-aos-offset = "100"/>
        </div>
      </section>
  );
};

export default Overview;
