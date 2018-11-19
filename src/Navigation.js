import React, {} from 'react';
import { connect } from 'react-redux';
import { 
    createBottomTabNavigator, 
    createStackNavigator, 
    addNavigationHelpers 
} from 'react-navigation';
import Immutable from 'immutable';

import { 
    ListOfHangouts, 
    IceBreakers, 
    CreateProfile 
} from "./pages";

const MOCKED_MEMBER_ID = '77bac705-1ce2-4a7b-8247-cf4bdfd451a9';
const mapNavigationStateParamsToProps = (FgProfile) => {
    return class extends React.Component {
        render() {
            return (
                <View style={{flex: 1}}>
                    <FgProfile member={ MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR } />
                </View>
            );
        };
    }
}

const HangoutsNav =  createStackNavigator(
    {
      Land: ListOfHangouts,
      Ice: IceBreakers
    },
    {
        mode: "modal",
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    }
  );
  

const MainNavigator =  createBottomTabNavigator(
    {
    //   Menu: null,
    //   MyChapter: null,
        Hangouts: HangoutsNav,
    // Hangouts: ListOfHangouts,
    //   Events: null,
        Profile: mapNavigationStateParamsToProps(FgProfile)
    },
    {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Profile') {
                iconName = 'https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-user-profile-blue-icon-by-vexels.png'; // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Soiw3Gaif4qBI8kxi5f3YDkPA2EIxH-OOSe-1BmBUFQbRJE'; `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Hangouts') {
                iconName = 'https://cdn4.iconfinder.com/data/icons/let-s-party/756/dance_party_drunk_disco_birthday_celebrate_pub-512.png'; // `ios-options${focused ? '' : '-outline'}`;
            } 
            return <Image source={{ uri: iconName}} style={{height: 30, width: 30}} />; // size={horizontal ? 20 : 25} color={tintColor} 
        },
        }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );

  const InitialNavigator = createStackNavigator({
  
    ScreenNotOnTabbar: { screen: CreateProfile },
    Tab: { screen: MainNavigator },
    
  },{
      mode: "modal",
      navigationOptions: {
          header: null
      }
  });

  const initialState = Immutable.fromJS({
    index: 0,
    routes: [{ routeName: 'init', key: 'init' }]
  });
  
  const reducer = ( state = initialState, action ) => {
    return state.merge(InitialNavigator.router.getStateForAction(action, state.toJS()));
  }
  
  const selectors = {
    currentRoute: state => {
      let nav = state.get('nav').toJS();
      return nav.routes[nav.index].routeName;
    }
  }
  
  export { reducer, selectors }
  
  const NavigatorWithState = ({dispatch, nav}) => {
    return (
      <InitialNavigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav,
      })}
      />
    );
  }
  
  export default connect(
    state => ({ nav: state.get('nav').toJS() })
  )(NavigatorWithState);