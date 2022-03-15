import axios from "axios";
import ActionTypes from "./actionTypes";

const localStorageName = {
    TOKEN: 'token',
    USER_ID: 'userId',
    EXPIRATION_DATE: 'expirationDate'
}

export function authSuccess(token) {
    return {
        type: ActionTypes.AUTH_SUCCESS,
        token
    };
}

export function authError(error) {
    return {
        type: ActionTypes.AUTH_ERROR,
        error
    };
}

export function logout() {
    localStorage.removeItem(localStorageName.TOKEN)
    localStorage.removeItem(localStorageName.USER_ID)
    localStorage.removeItem(localStorageName.EXPIRATION_DATE)

    return {
        type: ActionTypes.AUTH_LOGOUT
    };
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem(localStorageName.TOKEN)
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem(localStorageName.EXPIRATION_DATE))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(authLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

export function authLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    };
}

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authType = isLogin ? 'signInWithPassword' : 'signUp';
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:${authType}?key=AIzaSyBH0oMVOpD-A0YxFJPBuOryKineNEncUqY`;

        try {
            const data = (await axios.post(
                url,
                {email, password, returnSecureToken: true}
            )).data;

            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

            localStorage.setItem(localStorageName.TOKEN, data.idToken)
            localStorage.setItem(localStorageName.USER_ID, data.localId)
            localStorage.setItem(localStorageName.EXPIRATION_DATE, expirationDate)

            dispatch(authSuccess(data.idToken))
            dispatch(authLogout(data.expiresIn))
        } catch (e) {
            dispatch(authError(e))
        }
    };
}