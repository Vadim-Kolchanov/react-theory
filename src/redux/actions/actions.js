import ActionType from "./action-type";

export function add() {
    return {
        type: ActionType.ADD
    }
}

export function sub() {
    return {
        type: ActionType.SUB
    }
}

export function addNumber(number) {
    return {
        type: ActionType.ADD_NUMBER,
        payload: number
    }
}

export function addNumberRedux(number) {
    return {
        type: ActionType.ADD_NUMBER_REDUX,
        payload: number
    }
}