'use client'

import {useState} from 'react';

export default () => { 
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    )
 }