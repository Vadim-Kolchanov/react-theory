import React, {useReducer} from "react";
import {GithubContext} from "./GithubContext";
import {GithubReducer} from "./GithubReducer";

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);


    return (
        <GithubContext.Provider>
            {children}
        </GithubContext.Provider>
    )
}