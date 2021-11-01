const express = require('express')
const socket = require('socket.io')
const PORT = 5000
const app = express()

const server = app.listen(PORT, () => {
    console.log(`server started in port ${5000}`)
})

const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})
let peers = []
const broadcastEvents = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL: 'GROUP_CALL'
}
io.on('connection', (socket) => {
    socket.emit('connection', null)
    console.log('new user connected')
    console.log(socket.id)

    socket.on('register-new-user', (data) => {
        peers.push({
            username: data.username,
            socketId: data.socketId
        })
        console.log("new user added")
        console.log(peers)

        io.sockets.emit('broadcast', {
            type: broadcastEvents.ACTIVE_USERS,
            activeUsers: peers
        })
    })

    socket.on('disconnect', () => {
        console.log("User disconnected")
        peers = peers.filter((peer) => peer.socketId !== socket.id)
        io.sockets.emit('broadcast', {
            type: broadcastEvents.ACTIVE_USERS,
            activeUsers: peers
        })
    })
})