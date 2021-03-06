import React from 'react';

const Notification = ({ message, type='notify-success' }) => {
    if (message === null) {
        return null
    };

    return (
        <div className='notification-container'>
        <div className={`notification ${type}`}>
            <p><strong>{message}</strong></p>
        </div>
        </div>
    );
};

export default Notification;