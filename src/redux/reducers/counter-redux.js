import ActionType from "../action-type";

const initialState = {
    counterRedux: 200
}

export default function counterRedux(state = initialState, action) {

    switch (action.type) {
        case ActionType.ADD_NUMBER_REDUX: return {
            counterRedux: state.counterRedux + action.payload
        }

        default:
            return state
    }
}