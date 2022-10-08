import React from 'react';
import {copyright} from '../data';

const Copyright = () => {
  return (
      <div className = "flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between" data-aos = "fade-up" data-aos-delay = "200">
        <div className= "flex gap-x-6">
          <a className= "hover:text-accent transition" href={copyright.link1.href}>{copyright.link1.name}</a>
          <a className= "hover:text-accent transition" href={copyright.link2.href}>{copyright.link2.name}</a>
        </div>
        <div>{copyright.copyText}</div>
        <ul className = "flex gap-x-[12px]">
            {copyright.social.map((item, index) => {
            return (
                <li key={item.index}>
                  <a href={item.href}>
                    <img src={item.icon}/>
                  </a>
                </li>
            );
          })}
        </ul>
      </div>
  );
};

export default Copyright;