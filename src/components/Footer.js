import React from 'react';
import Copyright from '../components/Copyright';
import {Link} from 'react-scroll'
import {footer} from '../data';

const Footer = () => {
  return (
      <footer className = "py-32">
        <div className = "container mx-auto pb-4">
          <div className = "flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
            <a href = "" data-aos = "fade-up" data-aos-offset = "200" data-aos-delay = "300" className = "my-auto -mt-[2%]">
              <img src ={footer.logo} />
            </a>
            <div data-aos = "fade-up" data-aos-offset = "200" data-aos-delay = "500">
              <div className = "text-2xl uppercase font-medium mb-6">Links</div>
              <ul className = "flex flex-col gap-y-3">
                {footer.links.map((item, index) => {
                  return (
                      <li key = {index}>
                        <Link to = {item.idTO} href = {item.href} className = "font-medium hover:text-accent transition">{item.name}</Link>
                      </li>
                  );
                })}
              </ul>
            </div>
            <div data-aos= "fade-up" data-aos-offset = "200" data-aos-delay = "700">
              <div className= "text-2xl uppercase font-medium mb-6">Legal</div>
              <ul className="flex flex-col gap-y-3">
                {footer.legal.map((item, index) => {
                  return (
                      <li key = {index}>
                        <a className = "font-medium hover:text-accent transition" href = {item.href}>{item.name}</a>
                      </li>
                  );
                })}
              </ul>
            </div>
            <div data-aos = "fade-up" data-aos-offset = "200" data-aos-delay = "900">
              <div className = "text-2xl uppercase font-medium mb-6">
                {footer.newsletter.title}
              </div>
              <div className = "text-xl text-light mb-[18px]">
                {footer.newsletter.subtitle}
              </div>
              <form className = "max-w-[349px] mb-[10px]">
                <div className = "h-[62px] p-[7px] flex border border-dark rounded-lg">
                  <input className = "w-full h-full pl-6 border-none outline-none placeholder:text-dark" type = "text" placeholder={footer.form.placeholder}/>
                  <button className = "btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white">{footer.form.btnText}</button>
                </div>
              </form>
              <span className = "text-sm text-light">{footer.form.smallText}</span>
            </div>
          </div>
        </div>
        <div className = "pt-6 border-t-2 border-black mx-[10%]">
          <div className = "container mx-auto">
            <Copyright/>
          </div>
        </div>
      </footer>
  );
};

export default Footer;