import React from "react";

function JokeUnit (props) {
    let ifQuestion = props.question ? `Question: ${props.question}` : null;
    return (
        <div className="joke-unit">
            <p style={{fontWeight: "bold"}}>{ifQuestion}</p>
            <p>{props.punchLine}</p>
        </div>
    )
}

export default JokeUnit;