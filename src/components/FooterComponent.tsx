import {
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Row, Col, Container, Nav } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <React.Fragment>
      <div className='footerBackgroundStyle footerPositionStyle'>
        <Container>
          <Row>
            <Col sm='4'>
              <Container className='p-0 m-0 colContainerStyle'>
                <img
                  alt=''
                  src='https://storage.googleapis.com/receiptably-public-website/icon.png'
                  width='45'
                  height='45'
                  className='d-inline-block align-top'
                  style={{ borderRadius: '15%' }}
                />{' '}
                <strong
                  style={{
                    fontSize: '1.25rem',
                    color: 'white',
                    paddingTop: '0.5rem',
                  }}>
                  Receiptably
                </strong>
                <p style={{ color: 'rgb(166, 170, 191)' }}>
                  © Copyright 2022 Receiptably
                </p>
                <div style={{ display: 'flex' }}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size='2x'
                    color='white'
                    style={{ paddingRight: '0.8rem', fontSize: '30px' }}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size='2x'
                    color='white'
                    style={{ paddingRight: '0.8rem', fontSize: '30px' }}
                  />
                  <a href='https://github.com/Receiptably'>
                    <FontAwesomeIcon
                      icon={faGithub}
                      size='2x'
                      color='white'
                      style={{ paddingRight: '0.8rem', fontSize: '30px' }}
                    />
                  </a>
                  <a href='https://www.buymeacoffee.com/corbyn'>
                    <FontAwesomeIcon
                      icon={faBeerMugEmpty}
                      size='2x'
                      color='white'
                      style={{ paddingRight: '0.8rem', fontSize: '30px' }}
                    />
                  </a>
                </div>
              </Container>
            </Col>
            <Col sm='2'>
              <Container className='p-0 m-0 colContainerStyle'>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    marginBottom: '0.3rem',
                  }}>
                  <strong>ABOUT</strong>
                </p>
                <Nav.Link href='/FAQ' className='p-0 m-0 linkStyle'>
                  FAQ
                </Nav.Link>
                <Nav.Link href='/Roadmap' className='p-0 m-0 linkStyle'>
                  Roadmap
                </Nav.Link>
                <Nav.Link href='/Changelog' className='p-0 m-0 linkStyle'>
                  Changelog
                </Nav.Link>
                <Nav.Link href='/Team' className='p-0 m-0 linkStyle' disabled>
                  Team
                </Nav.Link>
                <Nav.Link href='/Blog' className='p-0 m-0 linkStyle' disabled>
                  Blog
                </Nav.Link>
              </Container>
            </Col>
            <Col sm='2'>
              <Container className='p-0 m-0 colContainerStyle'>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    marginBottom: '0.3rem',
                  }}>
                  <strong>DOWNLOADS</strong>
                </p>
                <Nav.Link
                  href='/AppleDownload'
                  className='p-0 m-0 linkStyle'
                  disabled>
                  Apple
                </Nav.Link>
                <Nav.Link
                  href='/AndroidDownload'
                  className='p-0 m-0 linkStyle'
                  disabled>
                  Android
                </Nav.Link>
              </Container>
            </Col>
            <Col sm='2'>
              <Container className='p-0 m-0 colContainerStyle'>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    marginBottom: '0.3rem',
                  }}>
                  <strong>DEVELOPERS</strong>
                </p>
                <Nav.Link
                  href='/Documentation'
                  className='p-0 m-0 linkStyle'
                  disabled>
                  Documentation
                </Nav.Link>
                <Nav.Link
                  href='/Contribute'
                  className='p-0 m-0 linkStyle'
                  disabled>
                  Contribute
                </Nav.Link>
                <Nav.Link
                  href='/Hosting'
                  className='p-0 m-0 linkStyle'
                  disabled>
                  Self Host
                </Nav.Link>
              </Container>
            </Col>
            <Col sm='2'>
              <Container className='p-0 m-0 colContainerStyle'>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    marginBottom: '0.3rem',
                  }}>
                  <strong>ORG</strong>
                </p>
                <Nav.Link href='/License' className='p-0 m-0 linkStyle'>
                  License
                </Nav.Link>
                <Nav.Link href='/Terms' className='p-0 m-0 linkStyle' disabled>
                  Terms
                </Nav.Link>
                <Nav.Link
                  href='/Privacy'
                  className='p-0 m-0 linkStyle'
                  disabled>
                  Privacy
                </Nav.Link>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FooterComponent;
