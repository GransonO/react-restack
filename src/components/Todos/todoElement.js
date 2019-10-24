import React from 'react';
import './index.css'

export function TodoElement({todo}){
    const {id, title} = todo
    return (
        <div className="center">
            <h3>{ id }</h3>
            <p>{ title }</p>
        </div>
    )
} 