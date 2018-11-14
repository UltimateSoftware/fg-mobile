import React, { Component } from 'react';
import { Container, Header, Content, Text } from 'native-base';

export default class Tab4 extends Component {
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