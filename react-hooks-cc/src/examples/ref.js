import React, {useState, useEffect, useRef} from 'react';

function App() {

    // const [renderCount, setRenderCount] = useState(1);
    const [value, setValue] = useState('initial');

    /**
     * Сохраняет стейт, но не перерисовывает компонент
     *
     * Получаем лишь переменную. Объект.
     * @type {React.MutableRefObject<number>}
     */
    const renderCount = useRef(1);

    const inputRef = useRef(null);
    const prevValue = useRef('');


    // Зацикленность
    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // })

    useEffect(() => {
        renderCount.current++;
        console.log(inputRef.current.value);
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    const focus = () => inputRef.current.focus();

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <h1>Прошлое состояние: {prevValue.current}</h1>

            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;