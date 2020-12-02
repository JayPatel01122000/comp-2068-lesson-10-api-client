import React, { useEffect } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Header = ({ title, children }) => {
  useEffect(() => {
    document.title = title || 'Welcome to MOFO Gaming';
  });

  return (
    <Container>
      <Jumbotron>
        <header>
          <h1>{ title || "Welcome to MOFO Gaming" }</h1>
          { children ? (
            <>
              <hr/>
              { children }
            </>
          ) : null }
        </header>
      </Jumbotron>
    </Container>
  );
}
 
export default Header;