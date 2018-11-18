import React from 'react';
import {AppLoading, Font} from 'expo';
import {createRootNavigator} from "./src/Router";
import {isSignedIn, onSignOut} from "./src/Auth";


export default class App extends React.Component {

    state = {
        isReady: false,
        signedIn: false
    };

    async componentWillMount() {
        await Font.loadAsync({
            'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
            'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
            'montserrat-bold': require('./assets/fonts/Montserrat-Bold.otf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            'Ionicons' : require("@expo/vector-icons/fonts/Ionicons.ttf")});

        await onSignOut();

        await isSignedIn()
            .then(res => this.setState({ signedIn: res }))
            .catch(err => {
                alert("Oops, an error occurred.");
                console.log("App.js > isSignedIn() > ERROR: ", err);
            });

        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return (
              <AppLoading/>
            );
        }

        const RootNavigator = createRootNavigator(this.state.signedIn);
        return <RootNavigator />;
    }
}