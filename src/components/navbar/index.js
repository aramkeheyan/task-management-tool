import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../navbarComponents";
import logo from "../pics/logo.svg";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <image src={logo} alt="" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Reported by me" activeStyle>
            Reported by me
          </NavLink>
          <NavLink to="/ Assingned to me" activeStyle>
            Assingned to me
          </NavLink>
          <NavLink to="/Create" activeStyle>
            Create
          </NavLink>
        </NavMenu>
        {
          //   <NavBtn>
          //     <NavBtnLink to="/create">Create</NavBtnLink>
          //   </NavBtn>
        }
      </Nav>
    </div>
  );
};

export default Navbar;
