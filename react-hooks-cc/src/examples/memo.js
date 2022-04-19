import React, {useState, useMemo, useEffect} from 'react';

function complexCompute(num) {
    let i = 0;
    while (i < 1000000000) i++;

    return num * 2;
}

function App() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    /**
     * При рендере создается НОВЫЙ объект с НОВОЙ ссылкой.
     * Значит состояние поменяется и отработает useEffect, что также губительно для производительности
     */
    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored]);

    /**
     * useMemo - используется, чтобы закешировать данные.
     * Тогда при повторном рендере, если стейт указанный в deps не изменился,
     * то вернется кеш
     */
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number]);

    useEffect(() => {
        console.log('styles change')
    }, [styles])

    return (
        <div>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
        </div>
    );
}

export default App;