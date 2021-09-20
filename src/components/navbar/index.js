import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../navbarComponents";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo here</h1>
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
    </>
  );
};

export default Navbar;
