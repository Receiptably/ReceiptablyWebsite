import React from 'react';
import { Container } from 'react-bootstrap';

export default function RoadmapPage() {
  // Build UI
  return (
    <React.Fragment>
      <div className='containerStyle'>
        <Container>
          <p style={{ color: 'white' }}>
            This will be a basic roadmap of what's to come
          </p>
        </Container>
      </div>
    </React.Fragment>
  );
}
