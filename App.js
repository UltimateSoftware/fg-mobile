import React from 'react';

import {AppLoading, Font} from 'expo';
import {createRootNavigator} from "./src/Router";
import {isSignedIn} from "./src/Auth";

import {MOCKED_CHAPTER_with_BANNER_and_AVATAR} from "./src/test/MockedTypes"

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
            signedIn: false,
            userId: null,
            chapterId: null
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

const mapChapterStateParamsToProps = (Chapter) => {
    return class extends React.Component {
        render () {
            return (
                <View style={{flex: 1}}>
                    <Chapter info={ MOCKED_CHAPTER_with_BANNER_and_AVATAR } />
                </View>
            )
        }
    }
}
