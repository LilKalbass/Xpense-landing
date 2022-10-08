import React from 'react';
import {hero} from '../data';

import {HiOutlineChevronDown} from 'react-icons/hi';

const Hero = () => {
  const {title, subtitle, btnText, compText, image} = hero;
  return (
      <section id = "_home" className = "min-h-[900px] py-12">
          <div className = "container mx-auto flex justify-center items-center min-h-[900px]">
              <div className = "flex justify-center items-center text-center flex-col gap-y-8 lg:gap-y-0 lg:gap-x-8 lg:flex-row lg:text-left">
                  {/*    text   */}
                  <div className = "flex-1">
                      <h1 className = "title mb-2 lg:mb-6"
                          data-aos = "fade-down" data-aos-delay = "500">{title}</h1>
                      <p className = "lead mb-4 lg:mb-12"
                         data-aos = "fade-down" data-aos-delay = "600">{subtitle}</p>
                      {/*   btn & comp text    */}
                      <div className = "flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-4"
                           data-aos = "fade-down" data-aos-delay = "700">
                          <button className = "btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4">{btnText}<HiOutlineChevronDown/></button>
                          <span className = "text-light lg:lead lg:mb-0">{compText}</span>
                      </div>
                  </div>
                  <div className = "flex-1"
                       data-aos = "fade-up-right" data-aos-delay = "500">
                      <img src={image} alt = "hero_img"/>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Hero;
