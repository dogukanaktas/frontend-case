import { useState, useEffect } from 'react'
import {httpGet} from '../../utils/index'

import './Home.scss'
    
const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        httpGet('users',setTodos)
    }, [todos])

    return (
        <div></div>
    )
}

export default Home
