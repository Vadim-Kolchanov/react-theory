import ActionType from "../action-type";

const handlers = {
    [ActionType.SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    [ActionType.GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
    [ActionType.GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
    [ActionType.SET_LOADING]: state => ({...state, loading: true}),
    [ActionType.CLEAR_USERS]: state => ({...state, users:[]}),

    DEFAULT: state => state
};

export const GithubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;

    return handler(state, action);
};