import React, {Component, useReducer, useEffect, useRef} from 'react';
import {
    Alert, 
    Button, 
    Image, 
    StyleSheet,
    TextInput, 
    View} from 'react-native';
import {authenticationReducer} from '../../reducers/user'
import {FgButton} from "../../components/FgButton";
import {FgLink} from '../../components/FgLink';
import FgText from '../../components/FgText';
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import { DataManager,  SIGNED_IN_MEMBER} from '../DataManager'
import { userService }  from '../services/user.services'
import {useNavigation} from 'react-navigation-hooks'
import {Font} from 'expo'
import {SafeAreaView} from 'react-navigation'

export function Login() {
    var usernameRef = useRef();
    var passwordRef = useRef();
    const {navigate} = useNavigation();

    useEffect(() => {
        console.log(usernameRef.current.value);
          
    }, [])

    var handleSignIn = async () => {
        console.log(usernameRef.current._lastNativeText)
        try {
            var user = await userService.login(usernameRef.current._lastNativeText, passwordRef.current._lastNativeText)
            navigate('Loading')
            console.log("successful login")
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <SafeAreaView>
            <View>
            <View>
                    <FgText size={'lg'}>Welcome to Fearlessly Girl!</FgText>
                    {/* <Text>Login, or create an account below</Text> */}
                </View>
                <View>
                    <TextInput
                    placeholder={'Username'}
                    ref={usernameRef}
                    />
                    <TextInput
                    placeholder={'Password'}
                    ref={passwordRef}
                    />
                </View>
                <View >
                
                        <FgLink onPress={() => {
                            navigate('SignUp')
                            }} title={"Create New Profile"}/>
                        <FgButton onPress={() => {
                            handleSignIn()
                            }} title={"Sign In"}/>
                </View>
            </View>
        </SafeAreaView>
    )



}

export default class SignIn extends Component {
    static path = 'signin'

    static navigationOptions = {
        title: 'Sign In'
    }

    async componentDidMount(){
        await Font.loadAsync({
            'montserrat-light': require('./../../assets/fonts/Montserrat-Light.otf'),
            'open-sans-regular': require('./../../assets/fonts/OpenSans-Regular.ttf'),
            'montserrat-regular': require('./../../assets/fonts/Montserrat-Regular.otf'),
            'montserrat-bold': require('./../../assets/fonts/Montserrat-Bold.otf'),
            'open-sans-bold': require('./../../assets/fonts/OpenSans-Bold.ttf'),
            'Ionicons' : require("@expo/vector-icons/fonts/Ionicons.ttf")});

    }

    render () {
        return (
            <Login />
        )
    }
}