import { useGetUsersQuery } from '../features/apiThunk/RTKUserApi';
import React from 'react'
import UserCard from './UserCard';

function Users() {
    const { data: users, error, isLoading } = useGetUsersQuery();

    return (
        <div>
            <h2>Users</h2>
            {isLoading && <p>Loading...</p>}
            {(error) && <p>Error loading users!</p>}
            {users && (<div className='cardContainer'>
                {
                    users.map(user => <UserCard user={user} key={user.id} />)
                }
            </div>)
            }
        </div>
    )
}

export default Users
