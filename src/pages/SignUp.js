import React, {Component, useReducer, useEffect, useRef} from 'react';
import {Alert, Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {authenticationReducer} from '../../reducers/user'
import {FgButton} from "../../components/FgButton";
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import { DataManager,  SIGNED_IN_MEMBER} from '../DataManager'
import { userService }  from '../services/user.services'
import {useNavigation} from 'react-navigation-hooks'
import {SafeAreaView} from 'react-navigation'

export function SignUpHandler() {
    var usernameRef = useRef();
    var emailRef = useRef()
    var passwordRef = useRef();
    var {navigate} = useNavigation();
    const [state, dispatch] = useReducer(authenticationReducer, {'username': '', 'password': ''})

    useEffect(() => {
        console.log(usernameRef.current.value)
    })

    var handleSignUp = async () => {
        /*
            Need to add validation for each Ref
        */
        // e.preventDefault();
        console.log(usernameRef.current._lastNativeText)
        try {
            var user = await userService.register(usernameRef.current._lastNativeText, emailRef.current._lastNativeText, passwordRef.current._lastNativeText)
            console.log("successful login")
            navigate('App')
        } catch(e) {
            console.log(e)
        }
            // dispatch({
        //     type: 'add',
        //     name: e
        // });
    }

    return (
        <SafeAreaView>
            <View>
                <TextInput
                placeholder={'Username'}
                ref={usernameRef}
                />
                <TextInput
                placeholder={'Email'}
                ref={emailRef}
                />
                <TextInput
                placeholder={'Password'}
                ref={passwordRef}
                />
                <View style={{width: SCREEN_WIDTH / 2, marginTop: 25, marginBottom: 15}}>
                    <FgButton onPress={() => handleSignUp()} title={"Sign In"}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default class SignUp extends Component {
    static path = "signup"

    static navigationOptions = {
        title: 'Sign Up'
    }

    render() {
        return (
            <SignUpHandler />
        )
    }
}