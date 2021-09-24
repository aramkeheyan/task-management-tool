// import React from "react";
//import Footer from "../components/footer";

// export function FooterContainer() {
//   return (
//     <Footer>
//       <Footer.Wrapper>
//         <Footer.Row>
//           <Footer.Column>
//             <Footer.Title>About Us</Footer.Title>
//             {/* <Footer.Link href="#">Story</Footer.Link>
//             <Footer.Link href="#">Clients</Footer.Link>
//             <Footer.Link href="#">Testimonials</Footer.Link> */}
//           </Footer.Column>

//           <Footer.Column>
//             <Footer.Title>Contact Us</Footer.Title>
//             <Footer.Link href="#">Armenia</Footer.Link>
//             <Footer.Link href="#">Adress</Footer.Link>
//             <Footer.Link href="#">Phone number</Footer.Link>
//             <Footer.Link href="#">Support</Footer.Link>
//           </Footer.Column>
//         </Footer.Row>
//       </Footer.Wrapper>
//     </Footer>
//   );
// }

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export default function StickyFooter() {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link
          color="inherit"
          href="http://localhost:3000/%20Assingned%20to%20me" //to
        >
          Website name
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
          <Typography variant="body1">Company name</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
