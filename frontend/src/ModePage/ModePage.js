import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setUsername } from '../actions/modeActions'
import UsernameInput from '../components/UsernameInput'
import { connectWithWebSocket, registerNewUser } from '../utils/wssConnection/wssConnection'

const ModePage = ({ history, saveUsername }) => {
    const [username, setUsername] = useState('')

    useEffect(() => {
        connectWithWebSocket()
    }, [])

    const groupSubmit = () => {
        registerNewUser(username)
        saveUsername(username)
        history.push('/group')
    }
    const privateSubmit = () => {
        registerNewUser(username)
        saveUsername(username)
        history.push('/private')
    }
    return (
        <div>
            <h1>Mode</h1>
            <UsernameInput username={username} setUsername={setUsername} />
            <button onClick={groupSubmit}>Group chat</button>
            <br></br>
            <button onClick={privateSubmit}>Private chat</button>
        </div>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        saveUsername: username => { dispatch(setUsername(username)) }
    }
}
export default connect(null, mapActionsToProps)(ModePage)
