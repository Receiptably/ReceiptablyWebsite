import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const NavBarComponent = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsAtTop(window.scrollY <= 2);
    })
    setIsAtTop(window.scrollY <= 2);
  }, []);

  return (
    <>
      <Navbar variant="dark" sticky="top" className={`m-auto ${isAtTop ? "navNoBackground" : "navSemiBackground"}`}>
        <Container style={{paddingTop: "0.3rem", paddingBottom: "0.3rem"}}>
          <Container className="p-0 m-0">
            <Row style={{display: "flex", alignItems: "center"}}>
              <Col md="2">
                <Navbar.Brand href="/Home" style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
                  <img
                    alt=""
                    src="/icon.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    style={{borderRadius: "15%"}}
                  />{' '}
                  <strong style={{marginLeft: "1rem"}}>Vinta</strong>
                </Navbar.Brand>
              </Col>
              <Col md="8">
                <Nav style={{justifyContent: "center"}}>
                  <Nav.Link href="/Roadmap">Roadmap</Nav.Link>
                  <Nav.Link href="/FAQ">FAQ</Nav.Link>
                </Nav>
              </Col>
              <Col md="2">
                  <div style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
                    <a href="https://github.com/VintaNZ"><FontAwesomeIcon icon={faGithub} size="2x" color="white" style={{paddingRight: "0.8rem"}} /></a>
                    <a href="https://www.buymeacoffee.com/corbyn"><FontAwesomeIcon icon={faBeerMugEmpty} size="2x" color="white" /></a>
                  </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;