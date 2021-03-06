import React from "react";
import classes from './FinishedQuiz.module.css';
import AnswerState from "../../containers/Quiz/enums/answer-state";
import Button from "../UI/Button/Button";
import {Link} from 'react-router-dom';
import ButtonType from "../UI/Button/enums/button-type";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === AnswerState.SUCCESS) {
            total++;
        }

        return total;
    }, 0);

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === AnswerState.ERROR ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ];

                    // Для дебагинга. Останавливается в этом месте
                    //debugger

                    return (
                        <li
                            key={index}

                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    );
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button
                    onClick={props.onRetry}
                    type={ButtonType.PRIMARY}
                >Повторить</Button>
                <Link to={'/'}>
                    <Button
                        type={ButtonType.SUCCESS}
                    >Перейти в список тестов</Button>
                </Link>

            </div>
        </div>
    );
};

export default FinishedQuiz;