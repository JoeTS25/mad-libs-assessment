import React from "react";

const Story = ({ noun, noun2, adjective, color }) => {
    return (
        <p>One time, I had this dream where I was a {noun}, and my best friend
        was a {noun2}. We went to a {adjective} park, and all of the leaves on
        the trees were {color}</p>
    )
}

export default Story;