import React, { useState } from "react";

const LibForm = ({ makeStory }) => {
    const INITIAL_STATE = { noun: "", noun2: "", adjective: "", color:""}
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        makeStory({ ...formData });
        setFormData(INITIAL_STATE)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="noun">Noun</label>
            <input
                id="noun"
                name="noun"
                value={formData.noun}
                onChange={handleChange} />
            <br />
            <label htmlFor="noun2">Noun 2</label>
            <input
                id="noun2"
                name="noun2"
                value={formData.noun2}
                onChange={handleChange} />
            <br />
            <label htmlFor="adjective">Adjective</label>
            <input
                id="adjective"
                name="adjective"
                value={formData.adjective}
                onChange={handleChange} />
            <br />
            <label htmlFor="color">Color</label>
            <input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange} />
            
            <button>Submit words</button>

        </form>
    )
}

export default LibForm;