import React, { useState } from "react";
import LogoDesktop from "../assets/letterboxd-logo.svg";
import LogoMobile from "../assets/letterboxd-dots.png";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo-mobile" src={LogoMobile} alt="Home" />
      </Link>
      <Link to="/">
        <img className="logo-desktop" src={LogoDesktop} alt="Home" />
      </Link>

      <div className="nav-container">
        <div className="nav">
          <div className="menu-icons">
            {sidebar ? (
              <MdClose
                className="icon"
                alt="close menu"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <FaBars
                className="icon"
                alt="open menu"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={() => setSidebar(!sidebar)}>
              <li className="item">
                <Link to="/">HOME</Link>
              </li>
              <li className="item">
                <Link to="/search">SEARCH</Link>
              </li>
              <li className="item">
                <Link>ACCOUNT</Link>
              </li>
              <li className="item">
                <Link>SIGN OUT</Link>
              </li>
            </ul>
          </nav>
          <Link to="/search">
            <AiOutlineSearch className="icon " />
          </Link>
        </div>
      </div>
      <div className="nav-item-container">
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link to="#" className="nav-item">
          ACCOUNT
        </Link>
        <Link to="/search">
          <AiOutlineSearch className="icon nav-item" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
