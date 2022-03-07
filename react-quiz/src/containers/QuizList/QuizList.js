import React, {Component} from 'react';
import classes from './QuizList.module.css';
import {NavLink} from "react-router-dom";
import axios from 'axios';

class QuizList extends Component {

    state = {
        quizes: []
    };

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={`/quiz/${quiz.id}`}>
                        {quiz.name}
                    </NavLink>
                </li>
            );
        });
    }

    // Жизненный цикл. Когда уже зарендился дом дерево
    async componentDidMount() {
        const quizes = [];

        try {
            const response = await axios.get('https://react-quiz-c7732-default-rtdb.europe-west1.firebasedatabase.app/quizes.json');

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                });
            });
        } catch (e) {
            console.log(e);
        }

        this.setState({
            quizes
        });
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;