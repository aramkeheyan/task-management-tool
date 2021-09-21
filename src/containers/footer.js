import React from "react";
import Footer from "../components/footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            {/* <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link> */}
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Armenia</Footer.Link>
            <Footer.Link href="#">Adress</Footer.Link>
            <Footer.Link href="#">Phone number</Footer.Link>
            <Footer.Link href="#">Support</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
