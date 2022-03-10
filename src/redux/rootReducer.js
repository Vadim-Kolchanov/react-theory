import ActionType from "./action-type";

const initialState = {
    counter: 0
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ActionType.ADD: return {
            counter: state.counter + 1
        }
        case ActionType.ADD_NUMBER: return {
            counter: state.counter + action.value
        }
        case ActionType.SUB: return {
            counter: state.counter - 1
        }
    }

    return state;
}