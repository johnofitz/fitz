import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCodeMerge,
  faFile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./MainNav.module.css";

const MainNav = () => {

return(
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`bg-body-tertiary ${classes.backColor}`}
    >
      
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className={classes.imageIcon}
            src={require("../../Assets/profile.png")}
            alt="profile-img"
          />{" "}
          JF
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className={`navbar-nav ms-auto mb-2 mb-lg-0 ${classes.wrapper}`}>
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHouse} className={classes.homeIcon} />{" "}
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              <FontAwesomeIcon
                icon={faCodeMerge}
                className={classes.homeIcon}
              />{" "}
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              <FontAwesomeIcon icon={faFile} className={classes.homeIcon} />{" "}
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <FontAwesomeIcon icon={faUser} className={classes.homeIcon} />{" "}
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default MainNav;
