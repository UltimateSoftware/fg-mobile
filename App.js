import React from 'react';
import {AppLoading, Font} from 'expo';
import {AppController} from "./src/Router";
import {createAppContainer} from "react-navigation";
import {GlobalProvider} from './src/services/GlobalProvider'

const AppContainer = createAppContainer(AppController);

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
        }

    }

    async componentWillMount() {
        await Font.loadAsync({
            'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
            'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
            'montserrat-bold': require('./assets/fonts/Montserrat-Bold.otf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            'Ionicons' : require("@expo/vector-icons/fonts/Ionicons.ttf")});

        //put everything we need to preload here

        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) 
            return <AppLoading/>
              
            return (
                <GlobalProvider>
                    <AppContainer/>
                </GlobalProvider>
            );    

            }      
        }