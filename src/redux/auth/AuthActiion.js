import { auth } from '../../firebase/auth/auth';
import { AuthType } from './AuthType';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth';

export const loginRequest = () => {
    return {
        type: AuthType.LOGIN_REQUEST,
    };
};

export const loginSuccess = (user) => {
    return {
        type: AuthType.LOGIN_SUCCESS,
        payload: user,
    };
};

export const loginFailure = (err) => {
    return {
        type: AuthType.LOGIN_FAILURE,
        payload: err,
    };
};

export const logout = (err) => {
    return {
        type: AuthType.LOGOUT,
        payload: err,
    };
};

export const registerRequest = () => {
    return {
        type: AuthType.REGISTER_REQUEST,
    };
};

export const registerSuccess = (user) => {
    return {
        type: AuthType.REGISTER_SUCCESS,
        payload: user,
    };
};

export const registerFailure = (err) => {
    return {
        type: AuthType.REGISTER_FAILURE,
        payload: err,
    };
};

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(loginRequest());
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                dispatch(loginSuccess(user));
            } else {
                dispatch(logout());
            }
        });
    };
};

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequest());
        const user = auth.currentUser;
        if (user) {
            dispatch(loginSuccess(user));
        } else {
            console.log('not logged in');
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // accessToken
                    if (user.accessToken) {
                        localStorage.setItem(
                            'token',
                            JSON.stringify(user.accessToken)
                        );
                    }
                    dispatch(loginSuccess(user));
                })
                .catch((err) => {
                    console.log(err);
                    const msg = err.message;
                    dispatch(loginFailure(err));
                });
        }
    };
};

export const register = (email, password) => {
    return (dispatch) => {
        dispatch(registerRequest());
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                const user = userCred.user;
                dispatch(registerSuccess(user));
            })
            .catch((err) => {
                const msg = err.message;
                dispatch(registerFailure(msg));
            });
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        auth.signOut(auth)
            .then((msg) => {
                localStorage.removeItem('token');
                dispatch(logout(msg))
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
