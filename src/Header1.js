import React from 'react';
import { Container, Button } from 'semantic-ui-react';

const Header1 = () => (
  <div style={{ backgroundColor: '#2db84b', padding: '5px' }}>
    <Container className="subHeader">
      <a href="../../" className="active link item" id="Edabit">
        edabit
      </a>

      <Button inverted floated="right">
        Register
      </Button>
      <Button style={{ marginRight: '8px' }} inverted floated="right">
        Sing in
      </Button>
    </Container>
  </div>
);

export default Header1;
