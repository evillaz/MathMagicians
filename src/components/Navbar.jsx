import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => (
  <>
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Math Magicians</h1>
      <ul className={styles.menuNav}>
        {links.map((link) => (
          <React.Fragment key={link.text}>
            <li>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  </>
);

export default Navbar;
