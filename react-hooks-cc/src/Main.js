import React from "react";
import {useAlert} from "./Alert/AlertContext";

export default function Main() {

    const {show} = useAlert();

    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button className="btn btn-success" onClick={() => show('Текст из main.js')}>Показать alert</button>
        </>
    );
}