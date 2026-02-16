import React from 'react'

function ProductCard(props) {
    return (
        <div className='card'>
            <img src={props.data.image} className='img' alt="" />
            <h3 className='title'>{props.data.title}</h3>
            <h4 className='price'>Price ₹ {props.data.price}</h4>
            <p className='cat'>{props.data.category}</p>
            <p className='desc'>{props.data.description}</p>
        </div>
    )
}
export default ProductCard
