import React from 'react';
import { Grid, Image, Header, Container } from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

const Main4 = () => (
  <Container textAlign="center">
    <Grid
      douling
      stackable
      style={{ marginTop: '20px', minHeight: '300px' }}
      columns={3}
      verticalAlign="middle"
      inverted
    >
      <Grid.Column>
        <Image
          size="tiny"
          circular
          centered
          src="https://s3.amazonaws.com/edabit-images/testimonial002.jpg"
        />
        <Header as="h2">
          Anjali
          <HeaderSubHeader>
            "Extremely well done and an excellent example of learning by doing.
            Perfect execution."
          </HeaderSubHeader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Image
          centered
          size="tiny"
          circular
          src="https://s3.amazonaws.com/edabit-images/testimonial001.jpg"
        />
        <Header as="h2">
          Martin
          <HeaderSubHeader>
            "I swear, Edabit has been more useful than the last coding bootcamp
            I attended. Well done sir."
          </HeaderSubHeader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Image
          centered
          size="tiny"
          circular
          src="https://s3.amazonaws.com/edabit-images/testimonial003.jpg"
        />
        <Header as="h2">
          Simon
          <HeaderSubHeader>
            "I just spent the past five hours on Edabit and I don't even feel
            bad about it. This is addictive stuff!"
          </HeaderSubHeader>
        </Header>
      </Grid.Column>
    </Grid>
  </Container>
);
export default Main4;
