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
      className={`${classes.backColor}`}
    >
      
      <Container>
        <Navbar.Brand as={Link} to="/" className={classes.link}>
          <img
            className={classes.imageIcon}
            src={require("../../Assets/profile.png")}
            alt="profile-img"
          />{" "}
          <span className={classes.title}>JF</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className={`navbar-nav ms-auto mb-2 mb-lg-0 ${classes.list}`}>
            <Nav.Link as={Link} to="/" className={classes.link}>
              <FontAwesomeIcon icon={faHouse} className={classes.homeIcon} />{" "}
              <span className={classes.title}>Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={classes.link}>
              <FontAwesomeIcon
                icon={faCodeMerge}
                className={classes.homeIcon}
              />{" "}
             <span className={classes.title}>Projects</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className={classes.link}>
              <FontAwesomeIcon icon={faFile} className={classes.homeIcon} />{" "}
              <span className={classes.title}>Resume</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={classes.link}>
              <FontAwesomeIcon icon={faUser} className={classes.homeIcon} />{" "}
              <span className={classes.title}>About</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
};

export default MainNav;

{/* <ul className={classes.list}>
  
<li><a href="#" className={classes.link}>
<FontAwesomeIcon icon={faHouse} className={classes.homeIcon} />{" "}Home</a></li>
<li><a href="#" className={classes.link}>
<FontAwesomeIcon icon={faUser} className={classes.homeIcon} />{" "}Blogs</a></li>
<li><a href="#" className={classes.link}>
<FontAwesomeIcon icon={faFile} className={classes.homeIcon} />{" "}Services</a></li>
<li><a href="#" className={classes.link}>
<FontAwesomeIcon icon={faCodeMerge} className={classes.homeIcon} />{" "}Contact</a></li>
<li><a href="#" className={classes.link}>
    About</a></li>
</ul> */}