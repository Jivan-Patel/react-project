import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './product.css'

function Products() {
    const [productsData, setProductsData] = useState(null);
    const [filter, setFilter] = useState("all");
    const [res, setRes] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((resp) => resp.json())
            .then((product) => {
                setProductsData(product)
                setRes(product)
            })
            .catch((error) => setProductsData(error))
    }, []);

    function applyFilter(value) {
        setFilter(value);
        if(value == "all") setRes(productsData)
        setRes(
            productsData.filter((prod)=> prod.category == value)
        )
    }

    if (!productsData) return <section> <p>Loading...</p> </section>

    return (
        <section>
            <h1>Products</h1>
            <div className="filterSort">
                <div className="filter">
                    <select name="filter" id="filter" value={filter} onChange={(e) => applyFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="men's clothing">Men's Clothing</option>
                    </select>
                </div>
            </div>
            <div className="cardContainer">
                {res.map((product, id) => <ProductCard data={product} key={id} />)}
            </div>
        </section>
    )
}

export default Products
