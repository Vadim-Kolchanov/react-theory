import React, {Component} from "react";
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";
import {connect} from 'react-redux'
import ActionType from "../redux/action-type";

class Counter extends Component {
    // addCounter = () => {
    //     // this.setState({
    //     //     counter: this.state.counter + 1
    //     // });
    //
    //     // Защита от асинхронного вмешательства из вне. Более правильный и защищенный
    //     this.setState((prevState) => {
    //         return {
    //             counter: prevState.counter + 1
    //         }
    //     })
    // };


    render() {
        // return (
        //     <div>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </div>
        // )

        // Вывод без корневого элемента, нужен key, нужно обернуть в массив
        // return [
        //     <h2 key={'1'}>Counter {this.state.counter}</h2>,
        //     <button key={'2'} onClick={this.addCounter}>+</button>,
        //     <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        // ]

        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </React.Fragment>
        // )

        return (
            <Auxiliary>
                <h2>Counter {this.props.counter}</h2>
                <Counter2 />
                <button onClick={this.props.onAdd}>+</button>
                <button onClick={this.props.onAddNumber}>+ 10</button>
                <button onClick={this.props.onSub}>-</button>
            </Auxiliary>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: ActionType.ADD}),
        onAddNumber: () => dispatch({type: ActionType.ADD_NUMBER, value: 10}),
        onSub: () => dispatch({type: ActionType.SUB})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)