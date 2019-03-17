import React from 'react';
import {Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {FgButton} from "../components/FgButton";
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import {dummySignInAuthorization, onSignIn} from "../Auth";
import {DataManager, SIGNED_IN_MEMBER} from "../DataManager";
import {MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR} from "../test/MockedTypes";
import {AuthSession} from 'expo'
import jwtDecoder from 'jwt-decode';
import {AsyncStorage} from 'react-native';
import config from '../../constants/config'




export class Login extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
          }
        }

    _loginWithInstagram= async () => {
        
        const redirectUrl = AuthSession.getRedirectUrl();
        let authUrl = `${config.auth0Domain}/authorize` + toQueryString({
            connection: 'instagram',
            client_id: config.auth0ClientId,
            response_type: 'token id_token',
            scope: 'openid profile email',
            audience: 'https://quickstarts/api',
            redirect_uri: redirectUrl,
            nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        });
        console.log(`WHEN THIS APP GETS PUBLISHED CHANGE THIS: ${redirectUrl}`);
        console.log(`AuthURL is:  ${authUrl}`);
        const result = await AuthSession.startAsync({
            authUrl: authUrl
        });
    
        if (result.type === 'success') {
            this.handleParams(result.params);
            this.props.navigation.navigate('LoadingProfile');
        }

        if (result.type === 'error') console.log('problem with AuthSession: ' + result.errorCode);
        else console.log('session was dismissed or cancelled before starting');  

    };

    _loginWithTwitter = async () => {

        const redirectUrl = AuthSession.getRedirectUrl();
        let authUrl = `${config.auth0Domain}/authorize` + toQueryString({
            connection: 'twitter',
            client_id: config.auth0ClientId,
            response_type: 'token id_token',
            scope: 'openid profile email',
            audience: 'https://quickstarts/api',
            redirect_uri: redirectUrl,
            nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        });
        console.log(`WHEN THIS APP GETS PUBLISHED CHANGE THIS: ${redirectUrl}`);
        console.log(`AuthURL is:  ${authUrl}`);
        const result = await AuthSession.startAsync({
            authUrl: authUrl
        });
    
        if (result.type === 'success') {
            this.handleParams(result.params);
            this.props.navigation.navigate('LoadingProfile');
        }

        if (result.type === 'error') console.log('problem with AuthSession: ' + result.errorCode);
        else console.log('session was dismissed or cancelled before starting');
    };

    handleParams = res => {
        if (res.error) {
          Alert.alert('Error', res.error_description
            || 'something went wrong while logging in');
          return;
        }
        storeItem('id_token', res.id_token);
        storeItem('token', res.access_token);
      }
    
    render() {
        return (
            <View style={styles.mainViewStyle}>

                <View style={[styles.subViewStyle, {paddingTop: 87}]}>
                    {/* FG Logo */}
                    <Image style={{width: SCREEN_WIDTH * 0.38, height: 35}} source={require('../../assets/images/fearlesslyGirl_logo.jpg')}/>
                    {/* Page Title */}
                    <Text style={{
                        fontFamily: 'montserrat-light',
                        fontSize: 22,
                        color: '#818282',
                        textAlign: 'center',
                        marginTop: 5
                    }}>Sign in.</Text>

                    {/* Login section */}
                    <View style={{width: SCREEN_WIDTH / 2, marginTop: 25, marginBottom: 15}}>
                    <FgButton 
                       onPress={this._loginWithInstagram} 
                       title={"instagram"}/>
                    </View>

                    <View style={{width: SCREEN_WIDTH / 2, marginTop: 25, marginBottom: 15}}>
                    <FgButton 
                       onPress={this._loginWithTwitter} 
                       title={"twitter"}/>
                    </View>

                </View>

            </View>
        );
    }
}

//Helper Functions
async function storeItem(key, item) {
    try {
        var jsonOfItem = await AsyncStorage.setItem(key, item);
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }

function toQueryString(params) {
    return '?' + Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }

//Styles
const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        opacity: 1,
        backgroundColor: 'white'
    },
    subViewStyle: {
        flex: 1,
        alignItems: 'center',
        margin: 5
    },
    textInputStyle: {
        fontFamily: 'open-sans-regular',
        fontSize: 18,
        borderColor: '#BDCDD1',
        borderBottomWidth: 1,
        width: SCREEN_WIDTH * 0.78,
        height: 35,
        lineHeight: 20,
        margin: 20
    },
    submitButtonStyle: {
        width: '50%',
        marginTop: 20,
        marginBottom: 40
    }
});