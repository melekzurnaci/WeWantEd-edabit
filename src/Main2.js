import React from 'react';

import {
  Container,
  Grid,
  Header,
  Button,
  Input,
  Form,
  Segment
} from 'semantic-ui-react';

const Main2 = () => (
  <div style={{ backgroundColor: '#2db84b', padding: '20px' }}>
    <Container fluid doubling stackable>
      <Grid doubling stackable columns={2} verticalAlign="middle">
        <Grid.Column inverted style={{ marginLeft: '80px' }}>
          <Header
            inverted
            size="Huge"
            as="h1"
            style={{
              fontSize: '3.8rem',
              fontWeight: 'bolder',
              lineHeight: '55px',
              wordSpacing: '8px'
            }}
          >
            Learn to code with interactive challenges
          </Header>
          <Header
            style={{
              fontSize: '1.7rem',
              fontWeight: 'bold',
              lineHeight: '28px',
              marginTop: '10px'
            }}
            inverted
            as="h2"
          >
            <i>It's the fastest, easiest, most addictive way to learn.</i>
          </Header>

          <Button style={{ marginRight: '10px' }} inverted size="huge">
            Watch Demo
          </Button>
          <Button inverted size="huge">
            Explore challenges
          </Button>
        </Grid.Column>

        <Grid.Column inverted width={6} verticalAlign="middle">
          <Segment>
            <Form>
              <Form.Field>
                <Form.Group widths="equal">
                  <Button fluid size="large" color="facebook">
                    Sing in with Facebook
                  </Button>
                  <Button fluid size="large" color="google plus">
                    Sing in with Google
                  </Button>
                </Form.Group>
              </Form.Field>
              <Form.Field>
                <Input
                  size="large"
                  icon="user"
                  iconPosition="left"
                  placeholder="Pick a username"
                />
              </Form.Field>
              <Form.Field>
                <Input
                  icon="mail"
                  size="large"
                  iconPosition="left"
                  placeholder="Your email address"
                />
              </Form.Field>
              <Form.Field>
                <Input
                  size="large"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Create a password"
                />
              </Form.Field>
              <Form.Field>
                <Button size="large" fluid color="green">
                  Create My Free Account
                </Button>
              </Form.Field>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);
export default Main2;
