import React from 'react';
import {Alert, Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {FgButton} from "../components/FgButton";
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import {dummySignInAuthorization, onSignIn} from "../Auth";
import {DataManager, SIGNED_IN_MEMBER} from "../DataManager";
import {MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR} from "../test/MockedTypes";
import {FgProfileService} from "../services/FgProfileService";

export class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleSignUp.bind(this);
        this.handleSignIn.bind(this);
    }
    service = new FgProfileService();
    render() {
        return (
            <View style={styles.mainViewStyle}>

                <View style={[styles.subViewStyle, {paddingTop: 87}]}>
                    // FG Logo
                    <Image style={{width: SCREEN_WIDTH * 0.38, height: 35}} source={require('../../assets/images/fearlesslyGirl_logo.jpg')}/>
                    // Page Title
                    <Text style={{
                        fontFamily: 'montserrat-light',
                        fontSize: 22,
                        color: '#818282',
                        textAlign: 'center',
                        marginTop: 5
                    }}>Sign in.</Text>

                    // Login section
                    <View style={{marginTop: 30}}>
                        //Username
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder={'Username'}
                            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                            onChangeText={(text) => this.setState({username: text})}
                            value={this.state.username}/>

                        //Password
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder={'Password'}
                            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}/>
                    </View>

                    <View style={{width: SCREEN_WIDTH / 2, marginTop: 25, marginBottom: 15}}>
                        <FgButton onPress={() => this.handleSignIn()} title={"Sign In"}/>
                    </View>

                    <Button title={"Sign up"} onPress={() => this.handleSignUp()}/>

                </View>



            </View>
        );
    }
    async handleSignIn() {
        if(dummySignInAuthorization(this.state.username, this.state.password)) {
            const { navigation } = this.props;
            console.log("before getting member");
            var member = await this.service.getMemberById('11fabf1e-b502-4b24-bf37-4b79a4f89a98');
            console.log("after getting member");
            console.log(member);
            await DataManager.setItemForKey(SIGNED_IN_MEMBER, member)
                .then(() => onSignIn())
                // .then(() => navigation.navigate("SignedIn"))
                .then(() => navigation.navigate("SelectChapter"))
                .catch( (error) => console.log("[ERROR - Login > handleSignIn()]:", error.message));

        }else {
            Alert.alert(
                'Oops!',
                'Invalid username and/or password.',
                [{text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}],
                { cancelable: false }
            );
        }
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

