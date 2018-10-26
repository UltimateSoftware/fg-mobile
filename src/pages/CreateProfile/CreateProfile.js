import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TextInput, Picker} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/sharedConstants";
import {FgButton} from "../../components/FgButton";
import {INSPIRATION_TEXT} from "../../test/MockedTypes";
import {FgMember} from "../../types/FgMember";

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
            gradYear: '',
            hasError: false,
            error: '',
        };
        this.handleSubmit.bind(this);
    }

    render() {
        const placeHolderTextColor = '#3A6A75';
        return (

            //Wrap entire profile in a ScrollView
            <ScrollView style={styles.scrollViewStyle}
                        contentContainerStyle={styles.container}
                        bounces={false}>

                <Image style={styles.logo} source={require('../../../assets/images/fearlesslyGirl_logo.jpg')}/>
                <Text style={styles.profileLabel}>Create your profile.</Text>

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


                    // School name
                    <TextInput style={styles.userInput}
                               placeholder={'School Name'}
                               placeholderTextColor={placeHolderTextColor}
                               onChangeText={(text) => this.setState({school: text})}
                               value={this.state.school}/>


                    //TODO: Substitute with Picker component when ScrollView issue resolved
                    <TextInput style={styles.userInput}
                               placeholder={'Graduation Year'}
                               placeholderTextColor={placeHolderTextColor}
                               onChangeText={(text) => this.setState({gradYear: text})}
                               value={this.state.gradYear}/>



                    // Submit button
                    <View style={styles.submitButton}>
                        <FgButton onPress={() => this.handleSubmit()} title={"Submit"}/>
                    </View>

                </View>

            </ScrollView>
        );
    }

    handleSubmit() {
        const { navigate } = this.props.navigation;
        console.log(this.state.firstName, this.state.lastName, this.state.school, this.state.gradYear, INSPIRATION_TEXT);
        const fgMember = new FgMember(this.state.firstName, this.state.lastName, this.state.school, this.state.gradYear, null, null, INSPIRATION_TEXT);
        navigate('Profile', {member: fgMember});
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
        flexGrow: 1,
        backgroundColor: '#ffffff'
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
    gradYearPicker: {
        width: SCREEN_WIDTH * 0.78,
        height: 40,
        marginTop: 40,
        borderColor: '#BDCDD1',
        borderWidth: 1
    },
    submitButton: {
        marginTop: 40,
        width: '50%'
    }
});
