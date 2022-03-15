import ActionTypes from "../actions/actionTypes";

const initialState = {
    quiz: []
};

export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CREATE_QUIZ_QUESTION:
            return {
                ...state,
                // Чтобы не мутировать массив!!!
                quiz: [...state.quiz, action.item]
            };
        case ActionTypes.RESET_QUIZ_CREATION:
            return {
                ...state, quiz: []
            };

        default:
            return state;
    }
}