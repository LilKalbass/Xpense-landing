import React from 'react';
import {Link} from 'react-scroll'
import {nav} from "../data";

const Nav = () => {
  return (
      <nav>
        <ul className = "flex gap-x-10">
          {nav.map((item, index) => {
            return (
                <li key = {index}>
                  <Link to = {item.idTO} className = "transition hover:text-accent" href = {item.href}>
                      {item.name}
                  </Link>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};

export default Nav;
