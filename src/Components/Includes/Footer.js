import classes from './Footer.module.css';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer =()=> {
    
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className={classes.footer}>
        <Row>
          <Col md="4" className={classes.footer_copywright}>
            <h6>John Fitzgerald</h6>
          </Col>
          <Col md="4" className={classes.footer_copywright}>
            <h6>Copyright © {year}</h6>
          </Col>
          <Col md="4">
            <ul className={classes.footer_icons}>
              <li className={classes.social_icons}>
                <a
                  href="https://github.com/johnofitz"
                  className={classes.icon_color}
                >
                  <FontAwesomeIcon icon={faGithub}/> 
                </a>
              </li>

              <li className={classes.social_icons}>
                <a
                  href="https://linkedin.com/in/john-fitzgerald90"
                  className={classes.icon_color}
                >
                  <FontAwesomeIcon icon={faLinkedin}/> 
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Footer;