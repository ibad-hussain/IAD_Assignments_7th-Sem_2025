import React, { useState } from 'react';

function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(false);

    function handleToggleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div className='container'>
            <button onClick={handleToggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Text
            </button>
            {isVisible && <p>This is the text to show or hide.</p>}
        </div>
    );
}

export default ToggleVisibility
