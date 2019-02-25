import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TextInput, Picker, Alert, Button} from 'react-native';
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import {FgButton} from "../components/FgButton";
import {FgMember} from "../types/FgMember";
import {FgProfileService} from "../services/FgProfileService";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {onSignIn, isSignedIn} from "../Auth";

export class ProfileForm extends Component {

    CURRENT_YEAR = new Date().getFullYear();
    service = new FgProfileService();

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            confirmPassword: '',
            inspirationText: '',
            schoolName: '',
            gradYear: this.CURRENT_YEAR,
            hasError: false,
            error: '',
        };
        // this.handleSubmit.bind(this);
        this.handleSignIn.bind(this);
    }

    render() {
        
        const { title, onPressFunction, state } = this.props;
        
        return (

            <KeyboardAwareScrollView
                style={styles.scrollViewStyle}
                resetScrollToCoords={{x: 0, y: 0}}
                scrollEnabled={true}
                bounces={false}>

                // FearlesslyGirl Logo
                <View style={[styles.subViewStyle, {paddingTop: 87}]}>
                    <Image style={{width: SCREEN_WIDTH * 0.38, height: 35}} source={require('../../assets/images/fearlesslyGirl_logo.jpg')}/>
                </View>

                // Page title
                <View style={styles.subViewStyle}>
                    <Text style={{
                        fontFamily: 'montserrat-light',
                        fontSize: 22,
                        color: '#818282',
                        textAlign: 'center'
                    }}>{title}</Text>
                </View>

                // First name input
                <View style={[styles.subViewStyle, {marginTop: 25}]}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'First Name'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                        onChangeText={(text) => this.setState({firstName: text})}
                        value={this.state.firstName}/>
                </View>

                // Last name input
                <View style={styles.subViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'Last Name'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                        onChangeText={(text) => this.setState({lastName: text})}
                        value={this.state.lastName}/>
                </View>

                // School name input
                <View style={styles.subViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'School Name'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                        onChangeText={(text) => this.setState({schoolName: text})}
                        value={this.state.schoolName}/>
                </View>

                // Inspiration text input
                <View style={[styles.subViewStyle, {marginTop: 15}]}>
                    <Text style={styles.inputLabelStyle}>What inspires you?</Text>
                    <TextInput style={[styles.textInputStyle, styles.inspirationInputStyle]}
                               multiline={true}
                               onChangeText={(text) => this.setState({inspirationText: text})}
                               value={this.state.inspirationText}/>
                </View>

                // Graduation year picker
                <View style={[styles.subViewStyle, { marginVertical: 15 }]}>
                    <Text style={styles.inputLabelStyle}>When are you graduating?</Text>
                    <Picker
                        mode="dropdown"
                        selectedValue={this.state.gradYear}
                        style={styles.pickerStyle}
                        itemStyle={styles.pickerItemStyle}
                        onValueChange={(itemValue) => this.setState({gradYear: itemValue})}>
                        <Picker.Item label={(this.CURRENT_YEAR).toString()} value={this.CURRENT_YEAR}/>
                        <Picker.Item label={(this.CURRENT_YEAR + 1).toString()} value={this.CURRENT_YEAR + 1}/>
                        <Picker.Item label={(this.CURRENT_YEAR + 2).toString()} value={this.CURRENT_YEAR + 2}/>
                        <Picker.Item label={(this.CURRENT_YEAR + 3).toString()} value={this.CURRENT_YEAR + 3}/>
                        <Picker.Item label={(this.CURRENT_YEAR + 4).toString()} value={this.CURRENT_YEAR + 4}/>
                    </Picker>
                </View>

                // Submit button
                <View style={styles.subViewStyle}>
                    <View style={styles.submitButtonStyle}>
                        <FgButton onPress={() => this.handleSubmit()} title={"Submit"}/>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Button title={"Back to Sign in"} onPress={() => this.handleSignIn()}/>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        );
    }

    async handleSubmit() {
        // Grab the navigator
        const { navigate } = this.props.navigation;
        // Create member object from form field values
        const fgMember = new FgMember(this.state.firstName, this.state.lastName,
            this.state.schoolName, this.state.gradYear, null, null, this.state.inspirationText);
        // Create member through backend service, store member to local storage, and proceed to SignedIn navigator
        if(isSignedIn) {
            this.service.updateMember(fgMember);
        } else {
            this.service.createMember(fgMember)
            .then( (id) => {
                console.log("CreateProfile Id: ", id);

                if(id) {
                    DataManager.setItemForKey(SIGNED_IN_MEMBER_ID, id)
                        .then( () => DataManager.setItemForKey(SIGNED_IN_MEMBER, fgMember)
                            .then(() => onSignIn())
                            .then(() => navigate("SignedIn")))
                        .catch( (error) => console.log(error.message));
                } else {
                    Alert.alert(
                        'Server Error',
                        'Oops! Something went wrong with creating your profile. Please try again.',
                        [{text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}],
                        { cancelable: false }
                    );
                }
            }).catch((error) => console.log("[ERROR - CreateProfile > handleSubmit()]: ", error.message));
        }
    }

    handleSignIn() {
        const { navigate } = this.props.navigation;
        navigate("SignIn");
    }


}

const styles = StyleSheet.create({
    scrollViewStyle: {
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
    inspirationInputStyle: {
        height: 140,
        borderWidth: 1,
        textAlign: 'left'
    },
    inputLabelStyle: {
        fontFamily: 'open-sans-regular',
        fontSize: 18,
        color: '#3A6A75',
        textAlign: 'left',
        width: SCREEN_WIDTH * 0.78
    },
    pickerStyle: {
        width: SCREEN_WIDTH * 0.78,
        padding: 15,
        borderWidth: 0,
        borderColor: '#BDCDD1'
    },
    pickerItemStyle: {
        fontSize: 26
    },
    submitButtonStyle: {
        width: '50%',
        marginTop: 20,
        marginBottom: 20
    }
});
