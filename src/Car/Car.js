import React from "react";
// import Radium from 'radium';
import './Car.css';

class Car extends React.Component {

    inputClassName() {
        const inputClasses = ['input'];

        if (this.props.name !== '') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold');
        }

        return inputClasses.join(' ');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps);
    }

    // Если true, то компонент нужно перерисовать, если false то ничего не делаем
    // True - если есть изменения в стейте
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState);

        return nextProps.name.trim() !== this.props.name.trim();
    }

    componentWillUpdate(nextProps, nextState) {
        //this.setState() - не безопасно!! Нельзя!!!
        console.log('Car componentWillUpdate', nextProps, nextState);
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState)
    //
    //     return prevState;
    // }

    componentDidUpdate() {
        console.log('Car componentDidUpdate');
    }

    // Позволяет получить неизмененное ДОМ дерево (до обновления)
    // Сохранить позицию скролла (к примеру)
    // getSnapshotBeforeUpdate() {
    //     console.log('Car getSnapshotBeforeUpdate')
    // }

    // Вызывается, когда идет разрушение и он удаляется из ДОМ дерева
    // Можно очистить память от всяких таймеров, подписок
    componentWillUnmount() {
        console.log('Car componentWillUnmount');
    }

    render() {
        console.log('Car render');

        // if (Math.random() > 0.7) {
        //     throw new Error('Car random failed');
        // }

        return (<div className="Car">
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    className={this.inputClassName()}
                    type="text"
                    onChange={this.props.onChangeName} value={this.props.name}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        );
    }
}

export default Car;

//Вывод динамических данных
// export default () => (
//     <div>
//         <p>This is car component</p>
//         <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
//     </div>
// )

// Способы создания компонента
// function car() {
//     return (
//         <div>This is car component</div>
//     );
// }

// const car = () => {
//     return (
//         <div>This is car component</div>
//     );
// };

// const car = () => <div>This is car component</div>

// const car = () => (
//     <div>
//         This is car component
//         <strong>test</strong>
//     </div>
// );

// export default car;