import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import Tab4 from './tabFour';
export default class TabProp extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
        <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Tab3 />
          </Tab>
          <Tab heading="Tab4">
            <Tab4 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}