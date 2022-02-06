import React, {Component} from "react";
import Auxiliary from "../hoc/Auxiliary";

export default class Counter extends Component {
    state = {
        counter: 0
    };

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // });

        // Защита от асинхронного вмешательства из вне. Более правильный и защищенный
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    };


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
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )
    }
}