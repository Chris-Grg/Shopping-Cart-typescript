import {
  Navbar as NavbarBs,
  Nav,
  Container,
  NavbarBrand,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarBs
      sticky="top"
      className="shadow-sm mb-3"
      style={{ backgroundColor: "#F85606" }}
    >
      <Container>
        <Nav className="me-auto align-items-center">
          <NavbarBrand to="/" as={NavLink}>
            <img
              src="https://icms-image.slatic.net/images/ims-web/e6ac6883-1158-4663-bda4-df5a1aa066e5.png"
              className="h-100 w-50"
            />
          </NavbarBrand>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="border-0"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-spm-anchor-id="a2a0e.11779170.dcart.i0.287d2d2b1mjWdG"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
              fill="white"
            ></path>
            <path
              d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
              fill="white"
            ></path>
            <path
              d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
              fill="white"
            ></path>
          </svg>
          <div
            className="rounded-circle bg-light d-flex justify-content-center align-items-center"
            style={{
              color: "red",
              width: "1rem",
              height: "1rem",
              position: "absolute",
              padding: 1,
              bottom: 0,
              right: 0,
              border: "solid",
              borderWidth: 3,
              borderColor: "#f85606",
              fontSize: 10,
              fontWeight: 400,
              //   transform: "translate(10%, -168%)",
              top: 0,
              transform: "translate(-10%, 60%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
