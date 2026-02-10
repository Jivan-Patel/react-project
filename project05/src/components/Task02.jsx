import { useState } from 'react'

function Task02() {
    let [list, setList] = useState({Apple: 5, Mango: 2, Gauva : 5});
    function deleteFurit(fruit) {
        // setList(list.filter((f) => f != fruit))
    }
    return (
        <div>
            <h3>Fruit Object</h3>
            <ol>
                {Object.keys(list).map((fruit) => (
                    <li> {fruit} <button onClick={() => deleteFurit(fruit)}>Delete</button> </li>
                ))}
            </ol>
        </div>
    )
}

export default Task02;
