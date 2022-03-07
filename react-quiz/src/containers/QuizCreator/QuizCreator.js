import React, {Component} from 'react';
import classes from './QuizCreator.module.css';
import Button from "../../components/UI/Button/Button";
import ButtonType from "../../components/UI/Button/button-type";

class QuizCreator extends Component {

    submitHandler = event => {
        event.preventDefault();
    };

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                        <input/>
                        <hr/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>

                        <select></select>

                        <Button
                            type={ButtonType.PRIMARY}
                            onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>

                        <Button
                            type={ButtonType.SUCCESS}
                            onClick={this.createQuizHandler}
                        >
                            Создать текст
                        </Button>
                    </form>

                </div>
            </div>
        );
    }
}

export default QuizCreator;