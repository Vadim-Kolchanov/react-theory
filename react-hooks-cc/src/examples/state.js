import React, {useState} from 'react';

function computeInitialCounter() {
    console.log('Some calculations...');
    return Math.trunc(Math.random() * 20);
}

function App() {

    /**
     * Возвращает кортеж (предопределенное состояние) - всегда 2 элемента
     * Первый элемент - наш стейт
     * Второй элемент - фун-ция позволяющая изменять стейт (чтобы вызвать рендер)
     *
     * Нельзя вызывать внутри условий
     *
     * Применяем деструктуризацию []
     * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
     */
        // const [counter, setCounter] = useState(computeInitialCounter());

        // Если производится вычисление начального состояние, то её нужно передавать через коллбэк
        // Чтобы она постоянно не вызывалась
    const [counter, setCounter] = useState(() => computeInitialCounter());


    /**
     * Если мы используем состояние с объектом, то нельзя просто передать новое состояние в setState
     * Надо обратиться к предыдущему состоянию, развернуть его через "..." и добавить свои изменения
     *
     * Но обычно создают несколько состояний, чтобы не было возни с объектом
     */
    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    });


    // Т.к. функция изменения стейта асинхронная
    // То изменения состояния лучше производить через коллбэк функцию
    // где параметром будет предыдущие состояние
    function increment() {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter(prevCounter => {
            return prevCounter + 1;
        });
        setCounter(prevCounter => prevCounter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'New Title'
            };
        });
    }

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Добавить</button>
            <button onClick={decrement} className="btn btn-danger">Убрать</button>

            <button onClick={updateTitle} className="btn btn-default">Изменить название</button>


            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
