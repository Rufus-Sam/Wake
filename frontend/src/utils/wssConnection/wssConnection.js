import socketClient from 'socket.io-client'
import { setActiveUsers } from '../../actions/modeActions'
import store from '../../store'
const SERVER = 'http://localhost:5000'

let socket
const broadcastEvents = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL: 'GROUP_CALL'
}
export const connectWithWebSocket = () => {
    socket = socketClient(SERVER)

    socket.on('connection', () => {
        console.log('Successfully connected with socket.io server')
        console.log(socket.id)
    })

    socket.on('broadcast', (data) => {
        handleBroadcastEvents(data)
    })
}

export const registerNewUser = (username) => {
    socket.emit('register-new-user', {
        username,
        socketId: socket.id
    })
}

const handleBroadcastEvents = (data) => {
    switch (data.type) {
        case broadcastEvents.ACTIVE_USERS:
            const activeUsers = data.activeUsers.filter((activeUser) => activeUser.socketId !== socket.id)
            store.dispatch(setActiveUsers(activeUsers))
            break
        default:
            break
    }
}