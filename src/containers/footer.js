import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { MAIN_PAGE } from "../constants/paths";

export default function StickyFooter() {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link to={MAIN_PAGE} color="inherit">
          Task Master
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2 }}
        maxWidth="sm"
      ></Container>
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 3,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#15cdfc" : "#15cdfc",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">Task Master</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
