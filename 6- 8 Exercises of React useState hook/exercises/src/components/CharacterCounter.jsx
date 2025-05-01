import React, { useState } from 'react';

function CharacterCounter() {
    const [text, setText] = useState('');

    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <div className='container'>
            <textarea value={text} onChange={handleTextChange} />
            <p>Character count: {text.length}</p>
        </div>
    );
}

export default CharacterCounter
