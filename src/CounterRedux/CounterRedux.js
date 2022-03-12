import React, {Component} from 'react';
import classes from './CounterRedux.module.css'
import {connect} from "react-redux";
import ActionType from "../redux/actions/action-type";
import {addNumberRedux} from "../redux/actions/actions";

class CounterRedux extends Component {
    render() {
        return (
            <div className={classes.CounterRedux}>
                <h1>Counter Redux: {this.props.counterRedux}</h1>
                <div>
                    <button onClick={() => this.props.onChange(1)}>Add</button>
                    <button onClick={() => this.props.onChange(-1)}>Sub</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counterRedux: state.counterRedux.counterRedux
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: number => dispatch(addNumberRedux(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);