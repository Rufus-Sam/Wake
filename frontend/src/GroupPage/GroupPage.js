import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { connectWithWebSocket } from '../utils/wssConnection/wssConnection'

const GroupPage = ({ history }) => {

    const rooms = useSelector((state) => state.rooms)
    const [roomId, setRoomId] = useState('')

    useEffect(() => {
        connectWithWebSocket()
    }, [])
    const createRoomSubmit = () => {

    }
    const joinRoomSubmit = () => {
        const roomExists = rooms.includes(roomId)
        if (roomExists) {
            history.push(`/group/${roomId}`)
        } else {
            alert('Room doesn\'t exist')
            history.push('/group')
        }
    }
    return (
        <div>
            Group
            <button onClick={createRoomSubmit}>Create Room</button>
            <Form onSubmit={joinRoomSubmit}>
                <Form.Group controlId='name'>
                    <Form.Label>Join Room</Form.Label>
                    <Form.Control type='text' placeholder='Enter Room Id' value={roomId} required onChange={
                        (e) => setRoomId(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'></Button>
            </Form>
        </div>
    )
}

export default GroupPage
