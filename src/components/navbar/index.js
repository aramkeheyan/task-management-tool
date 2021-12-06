import { Avatar, Button } from "material-ui";
import React, { useState, useEffect } from "react";
import { ASSIGNED_TO_ME, CREATE, MAIN_PAGE, PROFILE, REPORTED_BY_ME } from "../../constants/paths";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "../navbarComponents";
import Logo from "../pics/image2vector.svg";
import { styled, alpha } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import FaceRetouchingNaturalSharpIcon from "@mui/icons-material/FaceRetouchingNaturalSharp";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch } from "react-redux"
import logOut from "../auth/signOut";
import { Link } from "react-router-dom";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";




const StyledMenu = styled((props) => (
  
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    marginTop: theme.spacing(3),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));


const Navbar = () => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [users, setUsers] = useState([]);
  useEffect(
  () => 
  onSnapshot(collection(db, "users"), (snapshot)=> 
    setUsers(snapshot.docs.map(doc => doc.data()))
  ),
  []
)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOutClick = () => {
    logOut(dispatch)
    handleClose()
  }

  return (
    <>
      <Nav>
        <img src={Logo} alt="" /> {/* Logo should redirect to main page when clicked} */}
        <Bars />
        <NavMenu>
          <NavLink to={MAIN_PAGE} activeStyle> Main page </NavLink>
          <NavLink to={REPORTED_BY_ME} activeStyle>
            Reported by me
          </NavLink>
          <NavLink to={ASSIGNED_TO_ME} activeStyle>
            Assigned to me
          </NavLink>

          <NavBtnLink to={CREATE} activeStyle>
            Create
          </NavBtnLink>
          <div>
            <Button
              style={{
                left: "450%",
              }}
              id="demo-customized-button"
              aria-controls="demo-customized-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
            >
              <Stack direction="column" spacing={1}>
                <Avatar
                  style={{
                    left: "50%",
                    margin: "10",
                  }}
                >
                  <FaceRetouchingNaturalSharpIcon />
                  {/* {<img src="./pics/girl.png" alt="./pics/girl.png" />} */}
                </Avatar>
                {users.map((user) => <div>{user.firstName} {"_"} {user.lastName}</div>)}
              </Stack>
            </Button>

            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <Link to={PROFILE}>
                  <EditIcon />
                  Settings
                </Link>
              </MenuItem>

              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={handleSignOutClick} disableRipple>
                <ExitToAppIcon />
                Sign out
              </MenuItem>
            </StyledMenu>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
