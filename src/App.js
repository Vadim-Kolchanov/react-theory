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
        pageTitle: 'Hello World, motherfuckers!',
        showCars: false
    };

    toggleCarsHandler = () => this.setState({
        showCars: !this.state.showCars
    });

    onChangeName(name, index) {
        /* Мой первый вариант
        const cars = this.state.cars;
        cars[index] = {name: name, year: cars[index].year};

        this.setState({
            cars
        });
         */

        // Обязательно создавать клоны
        const car = this.state.cars[index];
        car.name = name;

        const cars = [...this.state.cars];
        cars[index] = car;

        // Если ключ совпадает со значением, то можно не писать cars: cars
        this.setState({cars});
    }

    handleInput = event => {
        this.setState({
            pageTitle: event.target.value
        });
    };

    // При определении функции, как стрелочной, у неё не создается свой контекст this
    onDelete = index => {
        const cars = [...this.state.cars];
        cars.splice(index, 1);

        this.setState({cars});
    };

    _cars() {
        if (!this.state.showCars) {
            return null;
        }

        return this.state.cars.map((car, index) => {
            return (
                <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangeName={event => this.onChangeName(event.target.value, index)}
                    onDelete={() => this.onDelete(index)}
                />
            );
        });
    }

    render() {
        const divStyle = {
            // 'text-align' не предпочтительно использовать. Лучше в стиле верблюда textAlign
            textAlign: 'center'
        };

        return (
            <div className="App" style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                {/*<input type="text" onChange={this.handleInput}/>*/}

                <button onClick={this.toggleCarsHandler}>
                    Toggle Cars
                </button>

                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {this._cars()}
                </div>
            </div>
        );
    }
}

export default App;

/*
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
 */
