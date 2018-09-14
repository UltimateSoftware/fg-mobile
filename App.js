import React from 'react';
import { View } from 'react-native';
import { Header } from "./components/Header";

export default class App extends React.Component {

  render() {
    return (
      <View>
          <Header
              avatarSource={require('./assets/girl-image.jpg')}
              bannerSource={require('./assets/sky-background.jpg')}/>
      </View>
    );
  }
}

