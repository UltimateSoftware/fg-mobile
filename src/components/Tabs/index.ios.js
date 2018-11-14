import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, StyleProvider } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';

import getTheme from '../../../native-base-theme/components'; 
import material from '../../../native-base-theme/variables/platform';

export class TabProp extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
      </StyleProvider>
    );
  }
}