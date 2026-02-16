import { useEffect, useState } from 'react'
import './Cars.css'
const cars = ["Audi", "Porshce", "Mini cooper", "Range rover", "Mercedice", "BMW", "Farari", "Bugati"];
function Cars() {
    const [sort, setSort] = useState("asc");

    const sortedItems = [...cars].sort((a, b) => {
        if (sort === "asc") {
            return a.localeCompare(b)
        }
        else {
            return b.localeCompare(a)
        }
    })


    return (
        <section>
            <h1>Cars</h1>
            <label htmlFor="sort">Sort by</label>
            <select name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="asc">A-Z</option>
                <option value="des">Z-A</option>
            </select>
            <ul>
                {
                    sortedItems.map((car, i) => (
                        <li key={i}>{car}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Cars;