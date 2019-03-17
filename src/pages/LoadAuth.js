import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import {AuthSession} from 'expo'
import jwtDecoder from 'jwt-decode';

export class LoadAuth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valid: false
  };
    this._bootstrapSession();
  }

  _bootstrapSession = async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) this.validate(token);
    this.props.navigation.navigate(this.state.valid ? 'LoadingProfile' : 'Auth');
  };

  validate = async token => {
    let decoded = jwtDecoder(token);
    let expiry = decoded.exp;
    let time = Math.round(Date.now()/1000);

    if(time >= expiry){ 
      console.log('this token is expired');
      await AsyncStorage.clear();
      AuthSession.dismiss();
    }
    else this.setState({valid: true});
  }

  // add loading screen here?
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}