const redux = require('redux');

const initialState = {
    counter: 0
};

// Reducer - обычная js функция, которая делает преобразования. Всегда должны возвращать state
const reducer = (state = initialState, action) => {

    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'SUB') {
        return {
            counter: state.counter - 1
        };
    }

    if (action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        };
    }

    return state;

};

// Store - То место, где у нас хранятся все данные. Весь стейт приложения
const store = redux.createStore(reducer);

// Подписка на изменение store
store.subscribe(() => {
    console.log('Subscribe', store.getState())
})

// Actions
const addCounter = {
    type: 'ADD'
};

store.dispatch(addCounter);

store.dispatch({type: 'SUB'})

store.dispatch({type: 'ADD_NUMBER', value: 10})
