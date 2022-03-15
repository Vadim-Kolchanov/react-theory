import ActionTypes from "../actions/actionTypes";

const initialState = {
    token: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.AUTH_SUCCESS:
            return {
                ...state, token: action.token
            }
        case ActionTypes.AUTH_LOGOUT:
            return {
                ...state, token: null
            }
        default:
            return state;
    }
}