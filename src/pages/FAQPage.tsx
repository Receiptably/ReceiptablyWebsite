import React from 'react';
import { Container } from 'react-bootstrap';

export default function FAQPage() {
  // Build UI
  return (
    <React.Fragment>
      <div className='containerStyle'>
        <Container>
          <p style={{ color: 'white' }}>
            This will be some frequently asked questions when I make it
          </p>
        </Container>
      </div>
    </React.Fragment>
  );
}
