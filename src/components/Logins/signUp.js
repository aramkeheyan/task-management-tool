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
import { MAIN_PAGE, SIGN_IN } from "../../constants/paths";
import { Redirect, Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import register from "../auth/register";
import { useDispatch, useSelector } from "react-redux";

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
      padding: 90,
    },
  },
});

const theme = createTheme();

export default function SignUp() {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userRegistrationData = {
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    register(userRegistrationData, dispatch);
  };

  let classes = useStyles();
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
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#15cdfc" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={100}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  bgcolor="#15cdfc"
                  margin="500px"
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item margin-block="inherit">
                    <RouterLink to={SIGN_IN}>
                      <Link variant="body2" color="#15cdfc" align="center">
                        Already have an account? Sign in
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
