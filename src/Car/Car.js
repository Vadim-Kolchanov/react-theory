import React from "react";

export default props => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        borderRadius: '5px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onDelete}>Delete</button>
    </div>
)

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