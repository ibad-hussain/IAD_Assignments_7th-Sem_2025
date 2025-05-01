import React, { useState } from 'react';

function ShowHidePassword() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleToggleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div className='container'>
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
            />
            <button onClick={handleToggleShowPassword}>
                {showPassword ? 'Hide' : 'Show'} Password
            </button>
        </div>
    );
}

export default ShowHidePassword
