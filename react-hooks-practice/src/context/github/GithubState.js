import React, {useReducer} from "react";
import {GithubContext} from "./GithubContext";
import {GithubReducer} from "./GithubReducer";
import ActionType from "../action-type";

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const search = async value => {
        setLoading();

        // ...

        dispatch({
            type: ActionType.SEARCH_USERS,
            payload: []
        });
    };

    const getUser = async name => {
        setLoading();

        // ...

        dispatch({
            type: ActionType.GET_USER,
            payload: {}
        });
    };

    const getRepos = async name => {
        setLoading();

        // ...

        dispatch({
            type: ActionType.GET_REPOS,
            payload: []
        });
    };

    const clearUsers = () => dispatch({type: ActionType.CLEAR_USERS});

    const setLoading = () => dispatch({type: ActionType.SET_LOADING});

    const {user, users, repos, loading} = state;

    return (
        <GithubContext.Provider value={{
            setLoading, search, getUser, getRepos, clearUsers,
            user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    );
};