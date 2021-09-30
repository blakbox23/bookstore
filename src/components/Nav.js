import React from 'react';
import { NavLink } from 'react-router-dom';
import '../books.css';

function Nav() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <div className="panel-bg flex">
      <div className="bookstore-CMS Text-Style-5">Bookstore CMS</div>
      <ul className="links flex">
        {links.map((link) => (
          <li key={link.id} className="link-item">
            <NavLink to={link.path} className="act-link" activeClassName="active-link" exact>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
