import { useState } from 'react'

function Task01() {
    let [list, setList] = useState(["Apple", "Mango", "Gauva"]);
    function deleteFurit(fruit) {
        setList(list.filter((f) => f != fruit));
    }
    return (
        <div>            
            <h3>Fruit Array</h3>
            <ol>
                {list.map((fruit,i) => (
                    <li key={i}> {fruit} <button onClick={() => deleteFurit(fruit)}>Delete</button> </li>
                ))}
            </ol>
        </div>
    )
}

export default Task01;
