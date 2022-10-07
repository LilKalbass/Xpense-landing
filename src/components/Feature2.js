import React from 'react';
import {features} from '../data';

const Feature2 = () => {
  return (
      <section id = "_features" className = "section">
        <div className = "container mx-auto">
          <div className = "flex flex-col lg:flex-row lg:items-center lg:gap-x-20 gap-y-12">
            <div className = "flex-1 order-2 lg:order-1"
                 data-aos = "fade-down-right" data-aos-offset = "250">
              <img src = {features.feature2.image} alt = "features_img"/>
            </div>
            <div className = "flex-1 order-1 lg:order-2"
                 data-aos = "fade-down-left" data-aos-offset = "300">
              <div className = "preTitle">{features.feature2.preTitle}</div>
              <h2 className = "title">{features.feature2.title}</h2>
              <p className = "lead">{features.feature2.subtitle}</p>
              <button className = "btn-link flex items-center gap-x-1 hover:gap-x-3 lg:hover:gap-x-4 transition-all">
                {features.feature2.btnLink}
                <img src = {features.feature2.btnIcon} alt = "features_img"/>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Feature2;
