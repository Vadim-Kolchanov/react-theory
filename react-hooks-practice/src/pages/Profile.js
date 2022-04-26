import React, {useContext, useEffect, Fragment} from 'react';
import {Link, useParams} from "react-router-dom";
import {GithubContext} from "../context/github/GithubContext";
import {Repos} from "../components/Repos";

export const Profile = () => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const params = useParams();

    /**
     * Пустым массивом в deps мы эмулируем componentDidMount
     */
    useEffect(() => {
        getUser(params.name)
        getRepos(params.name)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following, public_repos,
        public_gists
    } = user

    return (
        <Fragment>
            <Link to="/" className="btn btn-link">На главную</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{width: '150px'}}
                            />
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {login}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-dark"
                            >Открыть профиль</a>
                            <ul>
                                {login && <li>
                                    <strong>Username: </strong> {login}
                                </li>}

                                {company && <li>
                                    <strong>Company: </strong> {company}
                                </li>}

                                {blog && <li>
                                    <strong>Website: </strong> {blog}
                                </li>}
                            </ul>

                            <div className="badge alert-primary">Followers: {followers}</div>
                            <div className="badge alert-success">Following: {following}</div>
                            <div className="badge alert-info">Repositories: {public_repos}</div>
                            <div className="badge alert-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Repos repos={repos} />
        </Fragment>
    )
};