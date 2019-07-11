import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, UIManager} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { authorize, refresh, revoke } from 'react-native-app-auth';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type State = {
  hasLoggedInOnce: boolean,
  accessToken: ?string,
  accessTokenExpirationDate: ?string,
  refreshToken: ?string
};

const config = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{clientId}',
  redirectUrl: '{yourOktaScheme}:/callback',
  additionalParameters: {},
  scopes: ['openid', 'profile', 'email', 'offline_access']
};


export default class LoginScreen extends Component {

        state = {
                hasLoggedInOnce: false,
                accessToken: '',
                accessTokenExpirationDate: '',
                refreshToken: ''
        };
            

        animateState(nextState: $Shape<State>, delay: number = 0) {
        setTimeout(() => {
                this.setState(() => {
                LayoutAnimation.easeInEaseOut();
                return nextState;
                });
        }, delay);
        }
        
        authorize = async () => {
        try {
                const authState = await authorize(config);
                this.animateState(
                {
                hasLoggedInOnce: true,
                accessToken: authState.accessToken,
                accessTokenExpirationDate: authState.accessTokenExpirationDate,
                refreshToken: authState.refreshToken
                },
                500
                );
        } catch (error) {
                Alert.alert('Failed to log in', error.message);
        }
        };
        
        refresh = async () => {
        try {
                const authState = await refresh(config, {
                refreshToken: this.state.refreshToken
                });
        
                this.animateState({
                accessToken: authState.accessToken || this.state.accessToken,
                accessTokenExpirationDate:
                authState.accessTokenExpirationDate || this.state.accessTokenExpirationDate,
                refreshToken: authState.refreshToken || this.state.refreshToken
                });
        } catch (error) {
                Alert.alert('Failed to refresh token', error.message);
        }
        };
        
        revoke = async () => {
        try {
                await revoke(config, {
                tokenToRevoke: this.state.accessToken,
                sendClientId: true
                });
                this.animateState({
                accessToken: '',
                accessTokenExpirationDate: '',
                refreshToken: ''
                });
        } catch (error) {
                Alert.alert('Failed to revoke token', error.message);
        }
        };



    render() {
        const {state} = this;
    return (
        // <View style={styles.container}>
        // <Text style={styles.title}>Login Screen</Text>
        // <Button title="Login with Instagram"
        //         onPress = {() => {console.log("button to login with INSTA pressed")}}
        // ></Button>
        // <Button title = "Login with Twitter" 
        //         onPress = {() => {console.log("button to login with TWIT pressed")}}
        // ></Button>
        // </View>

        <View>
        {!!state.accessToken ? (
                <div><Text>accessToken</Text> 
            <Text>{state.accessToken}</Text>
            <Text>accessTokenExpirationDate</Text>
            <Text>{state.accessTokenExpirationDate}</Text>
            <Text>refreshToken</Text>
            <Text>{state.refreshToken}</Text></div>
         ) : (
          <Text>{state.hasLoggedInOnce ? 'Goodbye.' : 'Hello, stranger.'}</Text>
        )}

        
        <div>!state.accessToken && (
            <Button onPress={this.authorize} title="Authorize" color="#017CC0"/>
          )}
          {!!state.refreshToken && <Button onPress={this.refresh} title="Refresh" color="#24C2CB"/>}
          {!!state.accessToken && <Button onPress={this.revoke} title="Revoke" color="#EF525B"/>}</div>
          
      </View>
    );
    }
 }
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
    
 });