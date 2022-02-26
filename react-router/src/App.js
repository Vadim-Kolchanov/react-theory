import React, {Component} from 'react';
import './App.scss';
import About from './About/About';
import Cars from './Cars/Cars';
import {Route, Routes} from 'react-router-dom';

class App extends Component {
    render() {

        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>

                <hr/>

                {/*localhost:3000*/}
                <Routes>
                    <Route
                        path="/"
                        element={<h1>Home Page</h1>}
                    />
                </Routes>

                <About/>

                <Cars/>
            </div>
        );
    }
}

export default App;
