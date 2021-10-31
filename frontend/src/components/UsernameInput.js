import React from 'react'

const UsernameInput = ({ username, setUsername }) => {
    return (
        <div>
            <input placeholder='Enter your name' type='text' value={username} onChange={
                (e) => { setUsername(e.target.value) }} />
        </div>
    )
}

export default UsernameInput
