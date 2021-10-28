import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HomeScreen = () => {
    return (
        <Container className='justify-content-center align-items-center '>
            <Row >
                <Col md={3}>W</Col>
                <Col md={3}>A</Col>
                <Col md={3}>K</Col>
                <Col md={3}>E</Col>
            </Row>
            <Row>
                <Link className='btn btn-success btn-block' to='/mode'>Meet</Link>
            </Row>
        </Container>
    )
}

export default HomeScreen
