import React from 'react';
import { NavLink } from 'react-router-dom';
import '../books.css';


function Nav() {
    const links = [
        {
            id: 1,
            path: '/',
            text: 'Books'
        },
        {
            id: 2,
            path: '/categories',
            text: 'Categories'
        }
    ]
    return (
        <div class="panel-bg">
      <div class="Bookstore-CMS Text-Style-5">Bookstore CMS</div>
      <ul class='links'>
        {links.map((link) => (
          <li key={link.id} class="link-item">
            <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default Nav
