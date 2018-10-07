import React from 'react';
import { View } from 'react-native';
import { FgProfile } from "./src/pages/FgProfile/FgProfile";
import { FgProfileService } from "./src/pages/FgProfile/FgProfile-Service";
import { AppLoading, Font } from 'expo'
import {
    MOCKED_MEMBER_DARIA_with_AVATAR_no_BANNER, MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR,
    MOCKED_MEMBER_DARIA_with_BANNER_no_AVATAR
} from "./src/test/MockedTypes";
import {FgMember} from "./src/types/FgMember";

const MOCKED_MEMBER_ID = '77bac705-1ce2-4a7b-8247-cf4bdfd451a9';

export default class App extends React.Component {

    service = new FgProfileService();
    member : FgMember = this.service.getMemberWithId(MOCKED_MEMBER_ID);

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
                <FgProfile member={ MOCKED_MEMBER_DARIA_with_BANNER_no_AVATAR }/>
            </View>
        );
    }

}

