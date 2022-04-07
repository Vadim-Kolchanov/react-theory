import React, {useState, useEffect} from 'react';

function App() {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0, y: 0
    });

    /**
     * Вызывается когда изменяется стейт
     */
    // useEffect(() => {
    //     console.log('render');
    // });

    /**
     * deps - зависимость. Вызывать только для определенных useState
     */
    useEffect(() => {
        console.log('Fetching...');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json));

        // При втором изменении стейта, вызывается этот коллбэк
        return () => {
            console.log('Clean type...');
        };
    }, [type]);

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    };

    useEffect(() => {
        console.log('ComponentDidMount');

        // все слушатели надо удалять
        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };

    }, []);

    return (
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Посты</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}

            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );

}

export default App;