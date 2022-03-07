import React, {Component} from "react";
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import AnswerState from "./enums/answer-state";
import withRouter from "../../hoc/WrappedComponent/WrappedComponent";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends Component {
    state = {
        results: {}, // {[id]: success error}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        quiz: [],
        loading: true
    };

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === AnswerState.SUCCESS) {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = AnswerState.SUCCESS;
            }

            this.setState({
                answerState: {[answerId]: AnswerState.SUCCESS},
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.nextQuestion();
                }
                // Чтобы не было утечки памяти
                window.clearTimeout();
            }, 1000);

        } else {
            results[question.id] = AnswerState.ERROR;
            this.setState({
                answerState: {[answerId]: AnswerState.ERROR},
                results
            });
        }

    };

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        });
    };

    nextQuestion() {
        this.setState(prevState => {
            return {
                activeQuestion: prevState.activeQuestion + 1,
                answerState: null
            };
        });
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`/quizes/${this.props.params.id}.json`);
            const quiz = response.data;

            this.setState({
                quiz,
                loading: false
            });
        } catch (e) {
            console.log(e);
        }
    }

    quizRender() {
        return this.state.isFinished
            ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
            />
            : <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
            />;
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.state.loading
                            ? <Loader/>
                            : this.quizRender()
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Quiz);