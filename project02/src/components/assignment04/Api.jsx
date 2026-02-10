import React, { useEffect, useState } from 'react'
import ApiCard from './ApiCard';
import './api.css'

function Api() {
    const [apiData, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then((data) => {
                setData(data);
            })
            .catch(() => console.log("Somethings wents wrong..."))
    }, [])
    if (!apiData) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div className='apiContainer'>
            {apiData.map((user, i) => (

                <ApiCard index={i} details={user} />
            ))}
        </div>
    )
}

export default Api
