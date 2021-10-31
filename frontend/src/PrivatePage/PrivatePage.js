import React, { useEffect } from 'react'
import { connectWithWebSocket } from '../utils/wssConnection/wssConnection'

const PrivatePage = () => {
    useEffect(() => {
        connectWithWebSocket()
    }, [])
    return (
        <div>
            Private
        </div>
    )
}

export default PrivatePage
