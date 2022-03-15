import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import {Route, Routes, Navigate} from 'react-router-dom';
import React, {Component} from "react";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";
import {autoLogin} from "./store/actions/auth";


class App extends Component {

    redirect = () => <Route path="*" element={<Navigate to="/"/>}/>;

    routes() {
        return this.props.isAuthenticated
            ? <Routes>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/quiz-creator" element={<QuizCreator/>}/>
                <Route path="/quiz/:id" element={<Quiz/>}/>
                <Route path="/" element={<QuizList/>}/>
                {this.redirect()}
            </Routes>
            : <Routes>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/quiz/:id" element={<Quiz/>}/>
                <Route path="/" element={<QuizList/>}/>
                {this.redirect()}
            </Routes>;
    }

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        return (
            <Layout>
                {this.routes()}
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
