import React from "react";
import classes from './FinishedQuiz.module.css';
import AnswerState from "../../containers/Quiz/enums/answer-state";

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
                            {quizItem.questions}
                            <i className={cls.join(' ')}/>
                        </li>
                    );
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    );
};

export default FinishedQuiz;