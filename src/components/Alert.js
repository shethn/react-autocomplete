import React from 'react';

const Alert = ( {level, message} ) => {
    return (
        <div className={`alert alert-${level}`}>
            {message}
        </div>
    )
}

export default Alert;