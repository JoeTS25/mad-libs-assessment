import React, { useState } from "react";
import LibForm from "./LibForm";
import Story from "./Story";

function MadLib() {
    const [story, setStory] = useState([]);
    const makeStory = (newStory) => {
        setStory(stories => [...stories, {...newStory}])
    }

    return (
        <div>
            <h3>Your Story</h3>
            <LibForm makeStory={makeStory} />
            <p>
                {story.map(({ noun, noun2, adjective, color }) => 
                <Story noun={noun} noun2={noun2} adjective={adjective} color={color} />)}
            </p>
        </div>
    )
   
}

export default MadLib; 