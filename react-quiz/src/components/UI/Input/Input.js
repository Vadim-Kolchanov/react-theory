import React from 'react';
import classes from './Input.module.css';

// деструкторизация массива props
function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
}

function errorMessage(props) {
    return isInvalid(props) ? <span>{props.errorMessage || 'Введите верное значение'}</span> : null;
}

const Input = props => {
    const inputType = props.type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`;

    if (isInvalid(props)) {
        cls.push(classes.invalid);
    }


    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {errorMessage(props)}
        </div>
    );

};

export default Input;