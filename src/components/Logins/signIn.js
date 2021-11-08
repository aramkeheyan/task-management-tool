import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/styles";
import { Route, Switch, Link as RouterLink, Redirect } from "react-router-dom";
import { SIGN_IN, SIGN_UP, MAIN_PAGE } from "../../constants/paths";
import signIn from "../auth/login";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Dialog } from "material-ui";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { DialogContentText } from "material-ui";

const useStyles = makeStyles({
  root: {
    "& .MuiButtonBase-root": {
      margin: 5,
      background: "#15cdfc",
    },
    "& .MuiInputBase-root": {
      margin: 10,
    },

    "& .css-13i4rnv-MuiGrid-root": {
      padding: 80,
    },

    "& .MuiTypography-body2": {
      textalign: "center",
      margin: 10,
    },

    "&.css-1sja1nh-MuiTypography-root-MuiLink-root": {
      padding: 12,
    },
  },
});

const theme = createTheme();

export default function SignIn() {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userSignInData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    signIn(userSignInData, dispatch);
  };

  let classes = useStyles();

  const FormDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseSave = (evt) => {
      setOpen(false);
    };
    const handleCloseCancel = () => {
      setOpen(false);
    };
    return (
      <div>
        <Link variant="body2" onClick={handleClickOpen} color="#15cdfc">
          Forgot password ?
        </Link>
        <Dialog open={open} onClose={handleClose} color="#15cdfc">
          <DialogTitle>Reset Your Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Lost your password? Please enter your email address.
              <br /> You will receive a link to create a new password via email.
            </DialogContentText>
            <TextField autoFocus margin="dense" fullWidth variant="standard" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSave}>Save</Button>
            <Button onClick={handleCloseCancel}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <>
      {loggedInUser !== null && <Redirect to={MAIN_PAGE} />}
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginblock: "inherit",
              }}
            >
              <Typography component="h1" variant="h4" left="10%">
                Welcome to TaskMaster
              </Typography>

              <Typography component="h1" variant="h5">
                <br /> Please sign in{" "}
              </Typography>

              <Avatar sx={{ m: 1, bgcolor: "#15cdfc" }}>
                {" "}
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  bgcolor="#15cdfc"
                  margin="inherit"
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <FormDialog />
                  </Grid>
                  <Grid item>
                    <RouterLink to={SIGN_UP}>
                      <Link href="#" variant="body2" color="#15cdfc">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </RouterLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}
