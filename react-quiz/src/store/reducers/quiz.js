import ActionTypes from "../actions/actionTypes";

const initialState = {
    quizes: [],
    loading: false,
    error: null,
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: null
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }
        case ActionTypes.FETCH_QUIZES_SUCCESS:
            return {
                ...state, loading: false, quizes: action.quizes
            }
        case ActionTypes.FETCH_QUIZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }

        case ActionTypes.FETCH_QUIZ_SUCCESS: {
            return {
                ...state, loading: false, quiz: action.quiz
            }
        }

        default:
            return state
    }
}