import React from 'react';
import {features} from '../data';

const Feature3 = () => {
  return (
      <section id = "_features" className = "section">
        <div className = "container mx-auto">
          <div className = "flex flex-col lg:flex-row lg:items-center lg:gap-x-20 gap-y-12">
            <div className = "flex-1"
                 data-aos = "fade-down-right" data-aos-offset = "300">
              <div className = "preTitle">{features.feature3.preTitle}</div>
              <h2 className = "title">{features.feature3.title}</h2>
              <p className = "lead">{features.feature3.subtitle}</p>
              <button className = "btn-link flex items-center gap-x-1 hover:gap-x-3 lg:hover:gap-x-4 transition-all">
                {features.feature3.btnLink}
                <img src = {features.feature3.btnIcon} alt = "features_img"/>
              </button>
            </div>
            <div className = "flex-1"
                 data-aos = "fade-down-left" data-aos-offset = "250">
              <img src = {features.feature3.image} alt = "features_img"/>
            </div>
          </div>
        </div>
      </section>
  );
};
export default Feature3;
