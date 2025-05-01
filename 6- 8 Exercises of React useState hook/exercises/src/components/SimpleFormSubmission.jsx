import React, { useState } from 'react';

function SimpleForm() {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmittedName(name);
        setName('');
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} />
                <button type="submit">Submit</button>
            </form>
            {submittedName && <p>Submitted Name: {submittedName}</p>}
        </div>
    );
}

export default SimpleForm
