import React from 'react'

const Error = ({ error }) => {
    return (
        <div>
            <p>Something went wrong!!!</p>
            <pre>{error.message}</pre>
        </div>
    )
}

export default Error;
