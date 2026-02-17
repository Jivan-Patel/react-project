import { useEffect, useReducer, useState } from 'react'
import reducer from "../functions/CountReducer.js";

const initialState = {
    count: 0,
    name: "New User",
};

function Counter2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const temp1 = Number(localStorage.getItem("count"));
        if (temp1) dispatch({ type: "getCount", value: temp1 });
    }, []);
    useEffect(() => {
        localStorage.setItem("count", state.count);
    }, [state.count]);
    return (
        <>
            <p>Count: {state.count}</p>
            <p>Name: {state.name}</p>
            <button onClick={() => dispatch({ type: "inc" })}>+</button>
            <button onClick={() => dispatch({ type: "dec" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "setName" })}>Set Name</button>
        </>
    )
}

export default Counter2;
