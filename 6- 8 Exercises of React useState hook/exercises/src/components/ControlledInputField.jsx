import React, { useState } from 'react';

function ControlledInput() {
    const [text, setText] = useState('');

    function handleInputChange(event) {
        setText(event.target.value);
    }

    return (
        <div className='container'>
            <input type="text" value={text} onChange={handleInputChange} />
            <p>Text: {text}</p>
        </div>
    );
}

export default ControlledInput
