import React from 'react';
import {Link} from 'react-scroll'
import {nav,header} from '../data';

const NavMobile = () => {
  return (
      <div className = "bg-accent w-full h-full">
        <ul className = "h-full flex flex-col justify-center items-center gap-y-7">
            <a href = "" className = "w-[100%] ml-[50%]">
                <img src = {header.logo} alt = "logo_img" className = "mb-4 w-[50%] border-4 border-black rounded-full hover:border-white cursor-pointer"/>
            </a>
          {nav.map((item, index) => {
            return (
                <li key = {index}>
                  <Link to = {item.idTO} className = "link text-black text-xl hover:text-white" href = {item.href}>
                      {item.name}
                  </Link>
                </li>
            );
          })}
        </ul>
      </div>
  );
};

export default NavMobile;
