import React from 'react';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import '../slider.css'

const ClientSlider = ({clients}) => {
  return (
      <Swiper

          slidesPerView={1}
          spaceBetween={30}
          navigation
          modules={[Navigation]}
          grabCursor={true}
          loop={true}
          breakpoints={{
              640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
              },
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
              },
              1170: {
                  slidesPerView: 3,
                  spaceBetween: 30,
              },
          }}
      >
        {clients.map((client, index) => {
          return (
              <SwiperSlide key = {index} className = "md:border-t-[100px] ph:border-t-[50px] md:rounded-full ph:rounded-tr-[75%] border-accent" style={{borderColor: client.borderColor}}>
                  <div className = "mx-auto w-full h-[250px] lg:max-w-[380px] py-10 px-12 ph:mr">
                      <div className = "pb-3 text-center">{client.message}</div>
                      <div className = "flex gap-x-2 justify-center items-center ">
                          <img style={{borderColor: client.borderColor}} className = "border-[3px] rounded-full " src = {client.image} alt = "clientSlider_img"/>
                          <div style={{textDecorationColor: client.borderColor}} className = "font-bold underline">{client.name}</div>
                          <div className = "text-black font-light ">{client.position}</div>
                      </div>
                  </div>
              </SwiperSlide>
          );
        })}
      </Swiper>
  );
};

export default ClientSlider;
