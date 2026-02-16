import React, { useEffect } from 'react';
import { fetchFood } from '../feature/food/foodSlice.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card.jsx';
import './card.css'

function FoodUi() {
    const dispatch = useDispatch();
    const food = useSelector((state) => state.food);

    useEffect(() => {
        dispatch(fetchFood());
    }, [dispatch]);

    return (
        <div className='cardHolder'>
            {food.loading && <p>Loading...</p>}
            {food.error && <p>Error: {food.error}</p>}
            {!(food.loading || food.error) && Array.isArray(food.data) && food.data.map((item) => (
                <Card key={item.idCategory} title={item.strCategory} img={item.strCategoryThumb} other={item.strCategoryDescription} />
            ))}
        </div>
    )
}

export default FoodUi
