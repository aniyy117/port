import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavSpan,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            Http<NavSpan>.</NavSpan>DittoSays
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            {/* 1st */}
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            {/*2nd */}
            <NavItem>
              <NavLinks to="service">Service</NavLinks>
            </NavItem>
            {/*3rd 
            <NavItem>
              <NavLinks to="Skills">Skills</NavLinks>
            </NavItem>*/}
          </NavMenu>
          {/*button */}
          <NavBtn>
            <NavBtnLink to="/hireme">Hire Me !</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
