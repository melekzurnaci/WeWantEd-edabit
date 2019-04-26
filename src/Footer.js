import React from 'react';
import { List, Divider, Container } from 'semantic-ui-react';

const Footer = () => (
  <Container>
    <Divider fitted />
    <List horizontal>
      <List.Item disabled href="#">
        © 2019 Edabit
      </List.Item>
      <List.Item href="#">Terms</List.Item>
      <List.Item href="#">Privacy</List.Item>
      <List.Item href="#">Roadmap</List.Item>
      <List.Item href="#">Affiliates</List.Item>
    </List>

    <List floated="right" horizontal>
      <List.Item href="#">Contact</List.Item>
      <List.Item href="#">Blog</List.Item>
      <List.Item href="#">About</List.Item>
    </List>
  </Container>
);

export default Footer;
