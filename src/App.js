import './App.css';
import React, {Component} from "react";
import Car from './Car/Car';

class App extends Component {
    render() {
        const divStyle = {
            // 'text-align' не предпочтительно использовать. Лучше в стиле верблюда textAlign
            textAlign: 'center'
        };

        return (
            <div className="App" style={divStyle}>
                <h1>Hello World, motherfuckers!</h1>

                <Car name={'BMW'} year={2018} />
                <Car name="Audi" year={2016} />
                <Car name={'Mazda'} year={2010} />
            </div>
        );
    }
}

export default App;
