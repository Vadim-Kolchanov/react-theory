import React from "react";
import Radium from 'radium';
import './Car.css';

function inputClassName(props) {
    const inputClasses = ['input'];

    if (props.name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if (props.name.length > 4) {
        inputClasses.push('bold');
    }

    return inputClasses.join(' ');
}

const Car = props => {
    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 14px 0 rgba(0, 0, 0, .25)',
            cursor: 'pointer'
        }
    };

    return (<div className="Car" style={style}>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <input
                className={inputClassName(props)}
                type="text"
                onChange={props.onChangeName} value={props.name}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
};

export default Radium(Car);

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