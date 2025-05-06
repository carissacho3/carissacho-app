import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/styles/MainNav.module.css";

const MainNav = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Carissa Cho</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className={styles.textColor} href="/aboutme">
              About
            </Nav.Link>
            <Nav.Link className={styles.textColor} href="/experiences">
              Experience{" "}
            </Nav.Link>
            <Nav.Link className={styles.textColor} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
