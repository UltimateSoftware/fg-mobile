import { DataManager,  SIGNED_IN_MEMBER} from '../DataManager'

/* function signiture to be replaced by a type */
const login = async (username, password) => {
    /*
    TODO: Hook up service with FG-profile
    */
    return new Promise(async (resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };
        try {
            var request = await fetch(`http://localhost:5000/users/authenticate`, requestOptions);
            var response = await handleResponse(request)
            DataManager.setItemForKey(SIGNED_IN_MEMBER, response)
            resolve(response)
        } catch(e) {
            // Returning true for now
            // DataManager.setItemForKey(SIGNED_IN_MEMBER, response) Model needs to be defined
            console.log('user not in system? maybe?')
            // Normally you would reject but until implemented will always resolve
            var response = { username, password }
            DataManager.setItemForKey(SIGNED_IN_MEMBER, response)
            resolve(response)
            // reject(e)
        }
    })
    
}

function logout() {
    // remove user from local storage to log user out
    DataManager.removeItemWithKey(SIGNED_IN_MEMBER);
}

const handleResponse = async(response) => {
    return new Promise(async (resolve, reject) => {
        const text = await response.text();
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = (data && data.message) || response.statusText;
            reject(error);
        }
        resolve(data)
    });
}

/* function signiture to be replaced by a type */
const register = async (username, email, password) => {
    /*
    TODO: Hook up service with FG-profile
    */
   return new Promise(async (resolve, reject) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    };
    try {
        var request = await fetch(`http://localhost:5000/users/register`, requestOptions);
        var response = await handleResponse(request)
        DataManager.setItemForKey(SIGNED_IN_MEMBER, response)
        resolve(response)
    } catch(e) {
        // Returning true for now
        // DataManager.setItemForKey(SIGNED_IN_MEMBER, response) Model needs to be defined
        console.log('user not in system? maybe?')
        // Normally you would reject but until implemented will always resolve
        var response = { username, email, password }
        DataManager.setItemForKey(SIGNED_IN_MEMBER, response)
        resolve(response)
        // reject(e)
    }
})
}

export const userService = {
    login,
    logout,
    register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};