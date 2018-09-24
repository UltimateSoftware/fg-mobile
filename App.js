import React from 'react';
import { View } from 'react-native';
import { FgProfile } from "./src/pages/FgProfile";
import { AppLoading, Font } from 'expo'

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
                <FgProfile
                    bannerSource={'https://pics.freeartbackgrounds.com/midle/Autumn_Rural_Landscape_Background-637.jpg'}
                    avatarSource={'https://www.goodfreephotos.com/cache/people/female-face-woman-portrait_800.jpg'}
                    name={'Daria Quinn'}
                    schoolName={'Cypress Bay High School'}
                    gradYear={2020}
                    inspiration={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                    'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
                    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
                    'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                />
            </View>
        );
    }

}

