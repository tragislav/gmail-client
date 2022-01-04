import React from 'react';

export default function Message({ message }) {
    return (
        <div className="card">
            <h5 className="card-title">{message.id}</h5>
        </div>
    );
}
