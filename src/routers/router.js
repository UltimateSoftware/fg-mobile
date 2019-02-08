import {createNavigator, createBottomTabNavigator, SwitchRouter, getActiveChildNavigationOptions
} from '@react-navigation/core'

import SignIn from '../pages/Login'
import SignUp from '../pages/SignUp'
import AppView from '../views/AppView'
import FgProfile from '../pages/FgProfile'

export const SignedOut = createNavigator(
    AppView,
    SwitchRouter({
        SignIn,
        SignUp
    }), 
    {
        navigationOptions : ({ navigation, screenProps }) => {
            const options = getActiveChildNavigationOptions(navigation, screenProps)
            return {title: options.title}
        }
    }
)

export const SignedIn = createNavigator(
    AppView,
    SwitchRouter({
        FgProfile
    }), 
    {
        navigationOptions : ({ navigation, screenProps }) => {
            const options = getActiveChildNavigationOptions(navigation, screenProps)
            return {title: options.title}
        }
    }
)