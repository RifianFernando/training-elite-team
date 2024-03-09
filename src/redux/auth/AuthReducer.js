import { AuthType } from './AuthType';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthType.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case AuthType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case AuthType.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case AuthType.LOGOUT:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
            };
        case AuthType.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case AuthType.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default AuthReducer;
