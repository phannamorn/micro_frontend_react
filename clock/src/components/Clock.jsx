import React from 'react';

export const Clock = () => {
    const dt = new Date().toISOString();
    return (
        <div>
            <h1>Clock App</h1>
            <div>
                <p>Current Time is : {dt}</p>
            </div>
        </div>
    )
}