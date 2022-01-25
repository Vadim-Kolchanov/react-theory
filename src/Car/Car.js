import React from "react";

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
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