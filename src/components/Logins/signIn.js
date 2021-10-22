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
import { Link as RouterLink, Redirect } from "react-router-dom";
import { MAIN_PAGE, SIGN_UP } from "../../constants/paths";
import signIn from "../auth/login";
import { useDispatch, useSelector } from "react-redux"

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
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userSignInData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    signIn(userSignInData, dispatch)
  };

  let classes = useStyles();
  return (
    <>
      {
        loggedInUser !== null && <Redirect to={MAIN_PAGE}/>
      }
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
              <Avatar sx={{ m: 1, bgcolor: "#15cdfc" }}>
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
                    <Link
                      href="#"
                      variant="body2"
                      color="#15cdfc"
                      margin-left="inherit"
                    >
                      Forgot password?
                    </Link>
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
