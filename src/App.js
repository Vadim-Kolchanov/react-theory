import './App.css';
import React, {Component} from "react";

class App extends Component {
    render() {
        const divStyle = {
            // 'text-align' не предпочтительно использовать. Лучше в стиле верблюда textAlign
            textAlign: 'center'
        };

        return (
            <div className="App" style={divStyle}>
                <h1 style={{color: 'blue', fontSize: '20px'}}>Hello World, motherfuckers!</h1>
            </div>
        );
    }
}

export default App;
