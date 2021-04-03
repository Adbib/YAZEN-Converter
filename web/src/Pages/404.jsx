import React from 'react'
import {useLocation} from 'react-router-dom'
export default function Error404() {
    let location = useLocation();

    return (
        <div>
            <h1>
            No match for <code>{location.pathname}</code>
            </h1>
        </div>
    )
}
