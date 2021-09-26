import React from "react";
import { ASSIGNED_TO_ME, CREATE, REPORTED_BY_ME } from "../../constants/paths";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../navbarComponents";
<<<<<<< HEAD
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
=======
import Logo from "../pics/image2vector.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <img src={Logo} alt="" />
        <Bars />
        <NavMenu>
          <NavLink to={REPORTED_BY_ME} activeStyle>
            Reported by me
          </NavLink>
          <NavLink to={ASSIGNED_TO_ME} activeStyle>
            Assingned to me
          </NavLink>
          <NavLink to={CREATE} activeStyle>
            Create
          </NavLink>
        </NavMenu>
      </Nav>
    </>
>>>>>>> c8a2b11114f9cc5f4db300026d7829311f44411c
  );
};

export default Navbar;
