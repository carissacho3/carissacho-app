import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/styles/MainNav.module.css";

const MainNav = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Carissa Cho</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className={styles.textColor} href="#home">
              About
            </Nav.Link>
            <Nav.Link className={styles.textColor} href="#features">
              Experience{" "}
            </Nav.Link>
            <Nav.Link className={styles.textColor} href="#pricing">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
