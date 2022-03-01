import React, {Component} from 'react';
import classes from './QuizList.module.css';
import {NavLink} from "react-router-dom";

class QuizList extends Component {

    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink to={`/quiz/${quiz}`}>
                        Тест {quiz}
                    </NavLink>
                </li>
            );
        });
    }

    render() {
        return (
            //TODO разобраться почему названия не друг под другом
            <div className={classes.QuizList}>
                <h1>Список тестов</h1>

                <ul>
                    {this.renderQuizes()}
                </ul>
            </div>
        );
    }
}

export default QuizList;