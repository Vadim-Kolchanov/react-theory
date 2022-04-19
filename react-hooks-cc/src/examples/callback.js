import React, {useState, useCallback} from 'react';
import ItemList from "./ItemsList";

function App() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'darkred' : 'black'
    };

    /**
     * useCallback - работает как и useMemo, но отличие в том,
     * что возвращается не значение функции, а сам колбэк
     * (чтобы ссылка на функцию оставалась прежней)
     *
     * @type {function(number): string[]}
     */
    const generateItemsFromAPI = useCallback((indexItem) => {
        return new Array(count)
            .fill('')
            // "_" placeholder
            .map((_, i) => `Элемент ${i + indexItem}`);
    }, [count]);

    return (
        <div>
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>

            <ItemList getItems={generateItemsFromAPI}></ItemList>
        </div>
    );
}

export default App;