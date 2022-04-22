import ActionType from "../action-type";

const handlers = {
    [ActionType.SHOW_ALERT]: (state, action) => action.payload,
    [ActionType.HIDE_ALERT]: () => null,
    DEFAULT: state => state
};

export const AlertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;

    return handler(state, action);
};