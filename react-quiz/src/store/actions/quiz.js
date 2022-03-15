import axios from "../../axios/axios-quiz";
import ActionTypes from "./actionTypes";
import AnswerState from "../../containers/Quiz/enums/answer-state";

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get('/quizes.json');

            const quizes = [];

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                });
            });

            dispatch(fetchQuizesSuccess(quizes));
        } catch (e) {
            dispatch(fetchQuizesError(e));
        }
    };
}

export function fetchQuizesStart() {
    return {
        type: ActionTypes.FETCH_QUIZES_START
    };
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: ActionTypes.FETCH_QUIZES_SUCCESS,
        quizes
    };
}

export function fetchQuizesError(e) {
    return {
        type: ActionTypes.FETCH_QUIZES_ERROR,
        error: e
    };
}

export function fetchQuizById(quizId) {
    return async dispatch => {
        dispatch(fetchQuizesStart());

        try {
            const response = await axios.get(`/quizes/${quizId}.json`);
            const quiz = response.data;

            dispatch(fetchQuizSuccess(quiz));
        } catch (e) {
            dispatch(fetchQuizesError(e));
        }
    };
}

export function fetchQuizSuccess(quiz) {
    return {
        type: ActionTypes.FETCH_QUIZ_SUCCESS,
        quiz
    };
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz;

        if (state.answerState) {
            const key = Object.keys(state.answerState)[0];
            if (state.answerState[key] === AnswerState.SUCCESS) {
                return;
            }
        }

        const question = state.quiz[state.activeQuestion];
        const results = state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = AnswerState.SUCCESS;
            }

            dispatch(quizSetState(
                {[answerId]: AnswerState.SUCCESS},
                results
            ));

            const timeout = window.setTimeout(() => {
                if (isQuizFinished(state)) {
                    dispatch(finishQuiz());
                } else {
                    dispatch(quizNextQuestion(state.activeQuestion + 1));
                }
                // Чтобы не было утечки памяти
                window.clearTimeout();
            }, 1000);

        } else {
            results[question.id] = AnswerState.ERROR;

            dispatch(quizSetState(
                {[answerId]: AnswerState.ERROR},
                results
            ));
        }

    };
}

export function quizSetState(answerState, results) {
    return {
        type: ActionTypes.QUIZ_SET_STATE,
        answerState, results
    };
}

export function finishQuiz() {
    return {
        type: ActionTypes.FINISH_QUIZ
    };
}

export function quizNextQuestion(number) {
    return {
        type: ActionTypes.QUIZ_NEXT_QUESTION,
        number
    };
}

export function isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length;
}

export function retryQuiz() {
    return {
        type: ActionTypes.QUIZ_RETRY
    }
}