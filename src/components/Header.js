import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import {header} from '../data';

import {HiMenuAlt4, HiOutlineX} from 'react-icons/hi';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
    });
  });

  const {logo, btnText} = header;
  return (
      <header className = {`${isActive ? 'lg:top-0 bg-white shadow-md lg:shadow-2xl' : 'lg:top-[40px]'} 
      py-4 lg:py-3.5 fixed w-full rounded-b-full z-10 transition-all`}>
        <div className = "container mx-auto flex justify-between items-center">
          <a href= "#"
             data-aos = "fade-down-right" data-aos-delay = "1000">
            <img src = {logo} alt = "logo_img"/>
          </a>
          <div className = "hidden lg:flex"
               data-aos = "fade-down" data-aos-delay = "1200">
            <Nav/>
          </div>
          <button className = "btn btn-sm btn-outline hidden lg:flex"
                  data-aos = "fade-down-left" data-aos-delay = "1000">{btnText}
          </button>
          <div className = {`${mobileNav ? "left-0" : "-left-full"}
             fixed top-0 bottom-0 w-[100%] sm:hidden transition-all`} >
            <NavMobile/>
          </div>

          <button className = "lg:hidden" onClick={() => setMobileNav(!mobileNav)}
                  data-aos = "fade-down-left" data-aos-delay = "1000">
            {mobileNav ? (<HiOutlineX className = "text-3xl text-black"/>) :
                (<HiMenuAlt4 className = "text-3xl text-accent"/>)}
          </button>
        </div>
      </header>
  );
};

export default Header;
