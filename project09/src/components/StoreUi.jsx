import React, { useEffect } from 'react';
import { fetchStore } from '../feature/storeProd/StoreProdSlice.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card.jsx';
import './card.css'

function StoreUi() {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.store);

    useEffect(() => {
        dispatch(fetchStore());
    }, [dispatch]);

    return (
        <div className='cardHolder'>
            {store.loading && <p>Loading...</p>}
            {store.error && <p>Error: {store.error}</p>}
            {!(store.loading || store.error) && store.data.map((item) => (
                <Card key={item.id} title={item.title} img={item.image} other={item.category}/>
            ))}
        </div>
    );
}

export default StoreUi;
