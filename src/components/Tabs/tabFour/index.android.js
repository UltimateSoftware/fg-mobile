import React, { Component } from 'react';
import { Container, Header, Content, Text, Tabs } from 'native-base';

export default class Tabs extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Content>
          <Text>
            "Im Tab 4"
          </Text>
        </Content>
      </Container>
    );
  }
}