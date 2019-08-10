import React, {useEffect, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import { UserContext, UserContextConsumer, UserContextProvider } from '../context/UserContext';
import { AUTH_TOKEN } from '../SharedConstants';


export default function AuthLoading() {
    const navigate = useNavigation();
    let {state, dispatch} = useContext(UserContext);

    let setUserId = () => {dispatch({type: "setUserId", payload: "The User"})}
    let setChapterId = () => {dispatch({type: "setChapterId", payload: "99999999-cccc-4a96-b827-fa80954d9cff"})}
    let setAuthToken = () => {dispatch({type: "setAuthToken", payload: AUTH_TOKEN})}

    

    useEffect(() => {
        this.timeoutHandle = setTimeout(()=>{
            console.log("navigating to drawer")
            setUserId();
            setChapterId();
            setAuthToken();
            navigate.navigate('Drawer');
        }, 2500);

        return () => { 
            console.log("Component unmounted")
            clearTimeout(this.timeoutHandle); 
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{state.userId}</Text>
            <Text style={styles.title}>{state.chapterId}</Text>
            <Text style={styles.title}>{state.authToken}</Text>
        </View>
    );
}

// export default class AuthLoading extends Component {

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.title}>Blue Screen</Text>
//             </View>
//         );
//     }
//  }
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
 });