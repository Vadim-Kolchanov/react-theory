import React, {Component} from "react";
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import AnswerState from "./enums/answer-state";
import withRouter from "../../hoc/WrappedComponent/WrappedComponent";
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizById} from "../../store/actions/quiz";

class Quiz extends Component {

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
        this.props.fetchQuizById(this.props.params.id);
    }

    quizRender() {
        return this.props.isFinished
            ? <FinishedQuiz
                results={this.props.results}
                quiz={this.props.quiz}
                onRetry={this.retryHandler}
            />
            : <ActiveQuiz
                answers={this.props.quiz[this.props.activeQuestion].answers}
                question={this.props.quiz[this.props.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.props.quiz.length}
                answerNumber={this.props.activeQuestion + 1}
                state={this.props.answerState}
            />;
    }

    isQuizFinished() {
        return this.props.activeQuestion + 1 === this.props.quiz.length;
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.props.loading || !this.props.quiz
                            ? <Loader/>
                            : this.quizRender()
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Quiz));