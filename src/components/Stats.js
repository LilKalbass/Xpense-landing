import React from 'react';
import {stats} from '../data';

import {HiOutlineChevronDown} from 'react-icons/hi';

const Stats = () => {
  return (
      <section className = "section bg-stat bg-cover bg-left-top">
        <div className = "max-w-[1340px] mx-auto px-8">
          <div className = "max-w-[920px] mx-auto text-center mb-6">
            <h2 className = "h2 text-white mb-4" data-aos = "fade-up" data-aos-delay = "200">{stats.title}</h2>
            <p className = "text-2xl lg:text-4xl text-white" data-aos = "fade-up" data-aos-delay = "300">{stats.subtitle}</p>
          </div>
          <div className = "flex justify-between items-center">
            <img className = "hidden lg:flex" src = {stats.img1} data-aos = "zoom-out-right" data-aos-delay = "700"/>
            <button className = "btn btn-md btn-white lg:text-xl gap-x-3 mx-auto"
                    data-aos = "fade-up" data-aos-delay = "400">
              {stats.btnText}
              <HiOutlineChevronDown/>
            </button>
            <img className= "hidden lg:flex" src={stats.img2} data-aos = "zoom-out-left" data-aos-delay = "700"/>
          </div>
        </div>
      </section>
  );
};

export default Stats;