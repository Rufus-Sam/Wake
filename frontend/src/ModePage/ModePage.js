import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUsername } from '../actions/modeActions'
import UsernameInput from '../components/UsernameInput'

const ModePage = ({ history, saveUsername }) => {
    const [username, setUsername] = useState('')

    const groupSubmit = () => {
        history.push('/group')
        saveUsername(username)
    }
    const privateSubmit = () => {
        history.push('/private')
        saveUsername(username)
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
