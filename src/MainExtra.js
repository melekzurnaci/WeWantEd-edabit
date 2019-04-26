import React from 'react';
import { Grid, Button, Container } from 'semantic-ui-react';
const MainExtra = () => (
  <Container fluid centered style={{ backgroundColor: ' #2db84b' }}>
    <Container>
      <Grid fluid columns={4} centered style={{ minHeight: '350px' }}>
        <Grid.Row verticalAlign="bottom">
          <Grid.Column>
            <Button inverted fluid size="massive">
              C#
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button inverted fluid size="massive">
              C++
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button inverted fluid size="massive">
              Java
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button inverted fluid size="massive">
              JavaScript
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign="top">
          <Grid.Column>
            <Button inverted fluid size="massive">
              PHP
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button inverted fluid size="massive">
              Python
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button inverted fluid size="massive">
              Ruby
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button inverted fluid size="massive">
              Swift
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Container>
);

export default MainExtra;
