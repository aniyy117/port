import React from "react";
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
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer to="home">
          <NavLogo>Http.DittoSays</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {/* 1st */}
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            {/*2nd */}
            <NavItem>
              <NavLinks to="service">Service</NavLinks>
            </NavItem>
            {/*3rd */}
            <NavItem>
              <NavLinks to="Skills">Skills</NavLinks>
            </NavItem>
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
