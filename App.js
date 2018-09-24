import React from 'react';
import { View } from 'react-native';
import { FgProfile } from "./src/pages/FgProfile";
import { AppLoading, Font } from 'expo'
import { MOCKED_MEMBER_DARIA } from "./src/test/MockedTypes";

export default class App extends React.Component {

    state = {
        isReady: false
    };

    async componentWillMount() {
        await Font.loadAsync({
            'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
            'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
            'montserrat-bold': require('./assets/fonts/Montserrat-Bold.otf')})
        this.setState({ isReady: true })
    }

    render() {
        if (!this.state.isReady) {
            return (
              <AppLoading/>
            );
        }

        return (
            <View>
                <FgProfile member={MOCKED_MEMBER_DARIA}/>
            </View>
        );
    }

}

