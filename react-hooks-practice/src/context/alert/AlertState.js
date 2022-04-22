import React, {useReducer} from 'react';
import {AlertContext} from "./AlertContext";
import {AlertReducer} from "./AlertReducer";
import ActionType from "../action-type";

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, null);

    const hide = () => dispatch({type: ActionType.HIDE_ALERT});

    const show = (text, type = 'secondary') => dispatch({
        type: ActionType.SHOW_ALERT,
        payload: {type, text}
    });


    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    );
};

