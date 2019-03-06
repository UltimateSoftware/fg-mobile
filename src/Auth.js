import { AsyncStorage } from "react-native";
import {SIGNED_IN_MEMBER_ID} from "./DataManager";

export const USER_AUTH_KEY = "user-auth-key";

export const onSignIn = () => {
    AsyncStorage.setItem(SIGNED_IN_MEMBER_ID, '{"id": "919f174b-b6bb-4300-b897-d65bc1ae5dc9"}');
};

export const onSignOut = () => {
    AsyncStorage.removeItem(SIGNED_IN_MEMBER_ID);
};

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(SIGNED_IN_MEMBER_ID, null)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};

export const dummySignInAuthorization = (username, password) => {
    return (username.toLowerCase() === 'test' && password.toLowerCase() === 'test')
};
