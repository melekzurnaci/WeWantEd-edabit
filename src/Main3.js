import React from 'react';
import { Container, Grid, Image, Header } from 'semantic-ui-react';

import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

const Main3 = () => (
  <Container>
    <Grid columns={2} centered>
      <Grid.Row verticalAlign="middle">
        <Grid.Column>
          <Image
            src="https://s3.amazonaws.com/edabit-images/monster001.png"
            size="large"
            fluid
            centered
          />
        </Grid.Column>
        <Grid.Column>
          <Header size="huge" color="grey" as="h3">
            The Fastest Way To Learn
            <HeaderSubHeader>
              Everyone knows the fastest way to learn a spoken language is by
              having conversations with native speakers. Likewise, the fastest
              way to learn to code is by actually coding. Edabit offers an
              almost limitless supply of bite-sized challenges, so you can
              rapidly advance your abilities. It's the absolute fastest way to
              learn.
            </HeaderSubHeader>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        verticalAlign="middle"
        style={{ marginTop: '-45px', marginBottom: '-45px' }}
      >
        <Grid.Column>
          <Header size="huge" color="grey" as="h3">
            The Easiest Way To Learn
            <HeaderSubHeader>
              Do you feel like you’re stuck between learning material that’s too
              easy and material that’s too hard? Once the basics are learned,
              you realize everything is made for either total beginner or an
              advanced coder. Edabit bridges this gap. You start on easy and
              progress at your own pace until you're able to master the toughest
              challenges.
            </HeaderSubHeader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Image
            src="https://s3.amazonaws.com/edabit-images/monster002.png"
            centered
            size="large"
            fluid
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row verticalAlign="middle" style={{ marginBottom: '25px' }}>
        <Grid.Column>
          <Image
            src="https://s3.amazonaws.com/edabit-images/monster003.png"
            centered
            fluid
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Header size="huge" color="grey" as="h3">
            The Most Addictive Way To Learn
            <HeaderSubHeader>
              Edabit simulates what programming is like in the real world while
              removing any tedious, non-educational aspects. We add simple game
              mechanics to make the learning process fun and addictive. Gain XP,
              unlock achievements and level up. You’ll spend hours completing
              challenges and it won't even feel like work.
            </HeaderSubHeader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);
export default Main3;
