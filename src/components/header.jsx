import React from 'react';

const Header = () =>{
    return <header>
        <div className="header_left">
          <svg
          className="menu_svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
            >
            <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
            />
            </svg>  
        </div>
        <div className="header_nav">
        <span className="logo">W O O D</span>
            <a href="#">About</a>
            <a href="#">Furniture</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
        </div>
        </header>;
}

export default Header;