import React from 'react'

const ActiveUsersListItem = ({ activeUser }) => {


    const handleListItemPressed = () => {

    }
    return (
        <div onClick={handleListItemPressed}>
            <span>{activeUser.username}</span>
            <span>{activeUser.socketId}</span>
        </div>
    )
}

export default ActiveUsersListItem
