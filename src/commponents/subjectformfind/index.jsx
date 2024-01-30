import React, { useState, useEffect } from 'react';
import Subject from '../subjectsList/subjects'; // Ensure this path is correct

const SubjectFormFind = () => {
    const [inputId, setInputId] = useState('');
    const [subjectId, setSubjectId] = useState(null);

    useEffect(() => {
        console.log("Updated subjectId=" + subjectId);
    }, [subjectId]); // This effect will run whenever subjectId changes

    const handleSubmit = (event) => {
        event.preventDefault();
        // Print inputId to console
        console.log("inputId=" + inputId);
        setSubjectId(Number(inputId)); // Convert inputId to a number
        console.log("subjectId=" + subjectId);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Subject ID:
                    <input
                        type="number"
                        value={inputId}
                        onChange={e => setInputId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {/* Render the Subject component if subjectId is not null */}
            {subjectId !== null && <Subject id={subjectId} />}
        </div>
    );
};

export default SubjectFormFind;
