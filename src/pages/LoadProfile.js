import config from '../../constants/config'
import jwtDecoder from 'jwt-decode';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import {GlobalContext} from '../services/GlobalProvider'

export class LoadProfile extends React.Component {

  constructor(props) {
    super(props);
    this._bootstrapProfile();
    this.state = {
        session: null
    }
  }
  
  _bootstrapProfile = async () => {
    console.log('====== LOADING PROFILE ======')
    var decoded = {
      nickname: 'some name'
    } // dummy state

    try {
      const access_token = await AsyncStorage.getItem('token');
      const id_token = await AsyncStorage.getItem('id_token');
      decoded = jwtDecoder(id_token);
    } catch (e) {
      console.log('couldn"t access stuff')
    }
    
    
    try {
      var profiles = await fetch(`${config.apiUrl}/profiles/${decoded.sub}`,{
        'async': true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token,
               }
            })
        var res = await profiles.json();
        this.setState({session: newSession})
    } catch(e) {
      console.log('we have an error matey ')
      this.setState({session: {
        id : 'abcd'
      }})
    }
    

    //this is a temporary solution before we use context API for managing session info
    console.log(decoded);
    if(this.state.session){
        console.log(`logging in with ${decoded.nickname}: ${this.state.session.id}`);
        this.storeItem('profile', JSON.stringify(this.state.session));
        this.props.navigation.navigate('App'); 
    }
    else{
        console.log('new account... creating profile');
        this.props.navigation.navigate('SignUp');
    }
}

async storeItem(key, item) {
  try {
      var jsonOfItem = await AsyncStorage.setItem(key, item);
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
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