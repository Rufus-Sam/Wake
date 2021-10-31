import React, { useEffect } from 'react'
import { connectWithWebSocket } from '../utils/wssConnection/wssConnection'

const GroupPage = () => {
    useEffect(() => {
        connectWithWebSocket()
    }, [])
    return (
        <div>
            Group
        </div>
    )
}

export default GroupPage
