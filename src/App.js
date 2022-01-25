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

    render() {
        const divStyle = {
            // 'text-align' не предпочтительно использовать. Лучше в стиле верблюда textAlign
            textAlign: 'center'
        };

        const cars = this.state.cars;

        return (
            <div className="App" style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <Car name={cars[0].name} year={cars[0].year}/>
                <Car name={cars[1].name} year={cars[1].year}/>
                <Car name={cars[2].name} year={cars[2].year}/>
            </div>
        );
    }
}

export default App;
