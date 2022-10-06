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
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  const {logo, btnText} = header;
  return (
      <header className = {`${isActive ? 'lg:top-0 bg-white shadow-xl' : 'lg:top-[40px]'} 
      py-6 lg:py-3.5 fixed w-full rounded-b-md z-10 transition-all`}>
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
          <button className = "lg:hidden" onClick={() => setMobileNav(!mobileNav)}
                  data-aos = "fade-down-left" data-aos-delay = "1000">
            {mobileNav ? (<HiOutlineX className = "text-3xl text-accent"/>) :
                (<HiMenuAlt4 className = "text-3xl text-accent"/>)}
          </button>
          <div className = {`${mobileNav ? "left-0" : "-left-full"}
             fixed top-0 bottom-0 w-[60%] sm:hidden transition-all`} >
            <NavMobile/>
          </div>
        </div>
      </header>
  );
};

export default Header;
