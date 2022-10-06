import React from 'react';
import {nav} from '../data';

const NavMobile = () => {
  return (
      <div className = "bg-accent w-full h-full">
        <ul className = "h-full flex flex-col justify-center items-center gap-y-8">
          {nav.map((item, index) => {
            return (
                <li key = {index}>
                  <a className = "link text-black text-xl hover:text-white" href = {item.href}>{item.name}</a>
                </li>
            );
          })}
        </ul>
      </div>
  );
};

export default NavMobile;
