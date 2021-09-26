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
  );
};

export default Navbar;
