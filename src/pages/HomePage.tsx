import React from 'react';
import { Container } from 'react-bootstrap';

export default function HomePage() {
  // Build UI
  return (
    <React.Fragment>
      <div className='containerStyle'>
        <Container>
          <p style={{ color: 'white' }}>
            This will eventually be the home page once I do some config
          </p>
        </Container>
      </div>
    </React.Fragment>
  );
}
