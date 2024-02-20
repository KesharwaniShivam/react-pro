import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Welcome_userDetails() {

    const {user} = useContext(UserContext)

    if(user) return <h1>welcome {user.username}</h1>

    return <h1>Please login</h1>
}

export default Welcome_userDetails