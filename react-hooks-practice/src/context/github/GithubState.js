import React, {useReducer} from "react";
import axios from 'axios';
import {GithubContext} from "./GithubContext";
import {GithubReducer} from "./GithubReducer";
import ActionType from "../action-type";

const CLIENT_ID = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

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

        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )

        dispatch({
            type: ActionType.SEARCH_USERS,
            payload: response.data.items
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