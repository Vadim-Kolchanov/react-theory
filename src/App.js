import './App.css';
import React, {Component} from "react";
import Car from './Car/Car';

class App extends Component {

    state = {
        cars: [
            {name: 'BMW', year: 2019},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ],
        pageTitle: 'Hello World, motherfuckers!'
    };

    changeTitleHandler = (title) => this.setState({
        pageTitle: title
    });

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        });
    };

    render() {
        const divStyle = {
            // 'text-align' не предпочтительно использовать. Лучше в стиле верблюда textAlign
            textAlign: 'center'
        };

        const cars = this.state.cars;

        return (
            <div className="App" style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <input type="text" onChange={this.handleInput}/>

                <button
                    onClick={this.changeTitleHandler.bind(this, 'Changed!')}
                >Change title
                </button>

                <Car
                    name={cars[0].name}
                    year={cars[0].year}
                    // Рекомендуется использовать bind, потому что он более производительный, чем стрелочная функция.
                    // Т.к при каждом render "() =>" будет формировать новую функцию
                    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
                />
                <Car
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
                />
                <Car
                    name={cars[2].name}
                    year={cars[2].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
                />
            </div>
        );
    }
}

export default App;
