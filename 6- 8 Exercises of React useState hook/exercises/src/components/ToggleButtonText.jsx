import React, { useState } from 'react';

function ToggleButtonText() {
    const [isOn, setIsOn] = useState(false);

    function handleToggle() {
        setIsOn(!isOn);
    }

    return (
        <div className='container'>
            <button onClick={handleToggle}>{isOn ? 'ON' : 'OFF'}</button>
        </div>
    );
}

export default ToggleButtonText
