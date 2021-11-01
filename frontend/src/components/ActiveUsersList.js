import React from 'react'
import { connect } from 'react-redux'
import ActiveUsersListItem from './ActiveUsersListItem'


const ActiveUsersList = ({ activeUsers }) => {

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

const mapStateToProps = ({ mode }) => ({ ...mode })

export default connect(mapStateToProps)(ActiveUsersList)
