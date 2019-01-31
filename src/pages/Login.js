import React, {Component, useReducer, useEffect, useRef} from 'react';
import {Alert, Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {authenticationReducer} from '../../reducers/user'
import {FgButton} from "../../components/FgButton";
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import { DataManager,  SIGNED_IN_MEMBER} from '../DataManager'
import { userService }  from '../services/user.services'
import {useNavigation} from 'react-navigation-hooks'

export function Login() {
    var usernameRef = useRef();
    var passwordRef = useRef();
    const {navigate} = useNavigation();
    const [state, dispatch] = useReducer(authenticationReducer, {'username': '', 'password': ''})

    useEffect(() => {
        console.log(usernameRef.current.value)
    })

    var handleSignIn = async () => {
        // e.preventDefault();
        console.log(usernameRef.current._lastNativeText)
        try {
            var user = await userService.login(usernameRef.current._lastNativeText, passwordRef.current._lastNativeText)
            navigate('SignedOut')
            console.log("successful login")
        } catch(e) {
            console.log(e)
        }
            // dispatch({
        //     type: 'add',
        //     name: e
        // });
    }

    return (
        <View>
            <TextInput
            placeholder={'Username'}
            ref={usernameRef}
            />
            <TextInput
            placeholder={'Password'}
            ref={passwordRef}
            />
            <View style={{width: SCREEN_WIDTH / 2, marginTop: 25, marginBottom: 15}}>
                <FgButton onPress={() => {
                    handleSignIn()
                    }} title={"Sign In"}/>
            </View>
        </View>
    )



}

export default class SignIn extends Component {
    static path = 'signin'
    
    static navigationOptions = {
        title: 'Sign In'
    }

    render () {
        return (
            <Login />
        )
    }
}