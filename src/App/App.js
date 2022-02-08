import './App.css';
import React, {Component} from "react";
import Car from '../Car/Car';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Counter from "../Counter/Counter";

export const ClickedContext = React.createContext(false)

class App extends Component {

    // Вызывается первым
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            cars: [
                {name: 'BMW', year: 2019},
                {name: 'Audi', year: 2016},
                {name: 'Mazda', year: 2010}
            ],
            pageTitle: 'Hello World, motherfuckers!',
            showCars: false
        };
    }

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
                <ErrorBoundary key={index}>
                    <Car
                        name={car.name}
                        year={car.year}
                        index={index}
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                        onDelete={() => this.onDelete(index)}
                    />
                </ErrorBoundary>
            );
        });
    }

    // Жизненный цикл 1
    // Когда произошел инит реакт компонента. Редко используется
    // устаревший
    componentWillMount() {
        console.log('App componentWillMount');
    }

    // Жизненный цикл 3
    // весь html реакта готов и мы можем его преобразовывать
    componentDidMount() {
        console.log('App componentDidMount');
    }

    // Жизненный цикл 2
    render() {
        console.log('App render');
        const divStyle = {
            // 'text-align' не предпочтительно использовать. Лучше в стиле верблюда textAlign
            textAlign: 'center'
        };

        return (
            <div className="App" style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>


                {/*<input type="text" onChange={this.handleInput}/>*/}

                <hr/>
                <button
                    onClick={this.toggleCarsHandler}
                    style={{marginTop: '20px'}}
                >
                    Toggle Cars
                </button>

                <button onClick={() => this.setState({clicked: true})}>Change clicked</button>

                <div className="Cars">
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
