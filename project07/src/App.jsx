import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [debounce, setDebounce] = useState("");
  const cars = ["Audi", "BMW", "Porshce", "Mini cooper", "Range rover", "Mercedice", "Farari", "Bugati"];
  const [filterCar, setfilterCar] = useState(cars);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(value)
    }, 1000);

    return () => clearTimeout(id);
  }, [value]);

  useEffect(() => {
    const filteredCar = cars.filter((car) => car.toLowerCase().includes(debounce.toLowerCase().trim()))
    setfilterCar(filteredCar);
  }, [debounce]);

  return (
    <>
      <h1>Cars</h1>
      <input type="text" placeholder='Search Car' value={value} onChange={(e) => setValue(e.target.value)} />
      <ul>
        {
          filterCar.map((car, i) => (
            <li key={i}>{car}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App;