import React from 'react';
import ClientSlider from './ClientSlider';
import {feedbacks} from '../data';

const Feedback = () => {
  return (
      <section id = "_feedback" className = "section">
        <div className = "container mx-auto">
          <h2 className = "title text-center mb-10 lg:mb-20 max-w-[800px] mx-auto" data-aos = "fade-up-right" data-aos-delay = "200">{feedbacks.title}</h2>
          <div data-aos = "zoom-out-right" data-aos-delay = "300">
              <ClientSlider clients = {feedbacks.clients}/>
          </div>
        </div>
      </section>
  );
};

export default Feedback;
