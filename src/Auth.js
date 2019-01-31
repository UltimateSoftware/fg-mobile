import { AsyncStorage } from "react-native";

export const USER_AUTH_KEY = "user-auth-key";

export const onSignIn = () => {
    AsyncStorage.setItem(USER_AUTH_KEY, "true");
};

export const onSignOut = () => {
    AsyncStorage.removeItem(USER_AUTH_KEY);
};

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_AUTH_KEY, null)
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