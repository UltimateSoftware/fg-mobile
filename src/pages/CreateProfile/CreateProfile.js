import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/sharedConstants";
import {FgButton} from "../../components/FgButton";
import {Banner} from "../../components/Banner";

export class CreateProfile extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            confirmPassword: '',
            inspiration: '',
            school: '',
            gradYear: new Date().getFullYear(),
            hasError: false,
            error: '',
        };
        this.handleSubmit.bind(this);
    }

    render() {
        const placeHolderTextColor = '#3A6A75';
        return (

            //Wrap entire profile in a ScrollView
            <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.container} >
                <Banner source={require('assets/images/fearlesslyGirl_logo.jpg')}/>
                <Image style={styles.logo} source={require('../../../assets/images/fearlesslyGirl_logo.jpg')}/>
                <Text style={styles.profileLabel}>Create your account.</Text>

                <View style={styles.inputContainer}>
                    // First name
                    <TextInput style={styles.userInput}
                               placeholder={'First Name'}
                               placeholderTextColor={placeHolderTextColor}
                               onChangeText={ (text) => this.setState({firstName:text}) }
                               value={this.state.firstName}/>

                    // Last name
                    <TextInput style={styles.userInput}
                               placeholder={'Last Name'}
                               placeholderTextColor={placeHolderTextColor}
                               onChangeText={(text) => this.setState({lastName: text})}
                               value={this.state.lastName}/>

                    // Inspiration
                    <TextInput style={styles.userInput}
                               multiline={true}
                               placeholder={'Inspiration'}
                               placeholderTextColor={placeHolderTextColor}
                               onChangeText={(text) => this.setState({inspiration: text})}
                               value={this.state.inspiration}/>


                    // Username
                    <TextInput style={styles.userInput}
                               placeholder={'Username'}
                               placeholderTextColor={placeHolderTextColor}
                               onChangeText={(text) => this.setState({userName: text})}
                               value={this.state.userName}/>

                    // Password
                    <TextInput style={styles.userInput}
                               placeholder={'Password'}
                               placeholderTextColor={placeHolderTextColor}
                               secureTextEntry={true}
                               onChangeText={(text) => this.setState({password: text})}
                               value={this.state.password}/>

                    // Confirm Password
                    <TextInput style={styles.userInput}
                               placeholder={'Re-enter Password'}
                               placeholderTextColor={placeHolderTextColor}
                               secureTextEntry={true}
                               onChangeText={(text) => this.setState({confirmPassword: text})}
                               value={this.state.confirmPassword}/>

                    // Submit button
                    <View style={styles.submitButton}>
                        <FgButton onPress={() => this.handleSubmit()} title={"Submit"}/>
                    </View>

                </View>

            </ScrollView>
        );
    }

    handleSubmit() {
        console.log(this.state);
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1
    },
    container: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    inputContainer: {
        top: 165,
        position: 'absolute',
        alignItems: 'center'
    },
    logo: {
        top: 87,
        width: SCREEN_WIDTH * 0.38,
        height: 36,
        position: 'absolute'
    },
    profileLabel: {
        top: 131,
        width: SCREEN_WIDTH * 0.60,
        fontFamily: 'montserrat-light',
        fontSize: 22,
        color: '#818282',
        position: 'absolute',
    },
    userInput: {
        width: SCREEN_WIDTH * 0.78,
        height: 35,
        fontFamily: 'open-sans-regular',
        fontSize: 18,
        marginTop: 40,
        borderColor: '#BDCDD1',
        borderBottomWidth: 1,
        lineHeight: 20
    },
    submitButton: {
        marginTop: 40,
        width: '50%'
    }
});
