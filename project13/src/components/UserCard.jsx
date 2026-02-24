import React from 'react'

function UserCard({ user }) {
    return (
        <div className='card'>
            <h3>{user.name}</h3>
            <h4>{user.username}</h4>
        </div>
    )
}

export default UserCard
