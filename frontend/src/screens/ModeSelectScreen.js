import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ModeSelectScreen = () => {


    return (
        <Container className='justify-content-center align-items-center '>
            <h1>Select Mode</h1>
            <ListGroup>
                <ListGroup.Item>
                    <Link type='btn btn-success' to='/private'>Private Meet</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link type='btn btn-success' to='/group'>Group Meet</Link>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default ModeSelectScreen
