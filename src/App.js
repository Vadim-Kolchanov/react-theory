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

                <Car name={'BMW'} year={2018}>
                    <p style={{color: 'blue'}}>COLOR</p>
                </Car>

                <Car name="Audi" year={2016}>
                    <p style={{color: 'red'}}>COLOR</p>
                </Car>

                <Car name={'Mazda'} year={2010} children={5} />
            </div>
        );
    }
}

export default App;
