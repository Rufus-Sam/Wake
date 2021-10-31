import React from 'react'
import ActiveUsersListItem from './ActiveUsersListItem'
const ActiveUsersList = () => {
    const activeUsers = [
        {
            socketId: 321,
            username: 'Paul'
        },
        {
            socketId: 333,
            username: 'John'
        },
        {
            socketId: 432,
            username: 'Kate'
        },
        {
            socketId: 345,
            username: 'Adam'
        }
    ];
    return (
        <div className='active_user_list_container'>
            {activeUsers.map((activeUser) =>
                <ActiveUsersListItem
                    key={activeUser.socketId}
                    activeUser={activeUser}
                />)}
        </div>
    )
}

export default ActiveUsersList
