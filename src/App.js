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

                <Car />
            </div>
        );
    }
}

export default App;
