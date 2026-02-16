import React, { useEffect } from 'react';
import { fetchUsers } from '../feature/user/userSlice.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card.jsx';
import './card.css'

function UserUi() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className='cardHolder'>
            {users.loading && <p>Loading...</p>}
            {users.error && <p>Error: {users.error}</p>}
            {!(users.loading || users.error) && users.data.map((item) => (
                <Card key={item.id} title={item.name} img={item.image} other={item.username}/>
            ))}
        </div>
    );
}

export default UserUi;
