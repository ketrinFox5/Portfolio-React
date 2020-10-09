import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
       <header className="header">
               <NavLink exact to='/' className="header__logo">
                    <img src="https://res.cloudinary.com/dupuljvit/image/upload/v1602246494/portfolio/logo_jpeecv.png" alt="Logo" title="Назад на главную"/>
               </NavLink>
               <ul className="header__menu">
                    <li>
                        <NavLink exact to='/' className="header__link" activeClassName={'header__link_active'}>Главная</NavLink>
                   </li>
                   <li>
                       <NavLink to='/about' className="header__link" activeClassName={'header__link_active'}>Обо мне</NavLink>
                   </li>
                   <li>
                        <NavLink to='/works' className="header__link" activeClassName={'header__link_active'}>Работы</NavLink>
                   </li>
               </ul>
       </header>
    )
}

export default Header;