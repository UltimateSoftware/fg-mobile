import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {FgButton} from "../components/FgButton";
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";

export class Login extends React.Component {

    constructor() {
        super();
        this.handleSignUp.bind(this);
        this.handleSignIn.bind(this);
    }

    render() {
        return (
            <View style={styles.mainViewStyle}>

                <View style={[styles.subViewStyle, {marginTop: 25}]}>
                    <Text>Sign In</Text>
                </View>

                // Username
                <View style={styles.subViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'Username'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}/>
                </View>

                // Password
                <View style={[styles.subViewStyle, {marginTop: 25}]}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'Password'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                        secureTextEntry={true}/>
                </View>

                // Sign in button
                <View style={styles.subViewStyle}>
                    <View style={styles.submitButtonStyle}>
                        <FgButton onPress={() => this.handleSignIn()} title={"Sign In"}/>
                    </View>
                </View>

                // Sign up button
                <View style={styles.subViewStyle}>
                    <Button title={"Sign up"} onPress={() => this.handleSignUp()}/>
                </View>

            </View>
        );
    }
    handleSignIn() {
        console.log('User clicked sign in.');
    }
    handleSignUp() {
        const { navigate } = this.props.navigation;
        navigate("SignUp");
    }
}

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

