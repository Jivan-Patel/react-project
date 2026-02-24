import { useEffect, useState } from 'react';
import { useGetUserByIdQuery } from '../features/apiThunk/RTKUserApi';
import UserCard from './UserCard';

function GetUserById() {
    const [id, setId] = useState(null);
    const { data: user, error, isLoading } = useGetUserByIdQuery(id);
    function handleChange(value) {
        setId(value);
    }

    return (
        <div>
            <h2>User</h2>
            <input type="number" value={id} onChange={e => handleChange(e.target.value)} />
            {isLoading && <p>Loading...</p>}
            {user && id && (<UserCard user={user} />)}
        </div>
    )
}


export default GetUserById

