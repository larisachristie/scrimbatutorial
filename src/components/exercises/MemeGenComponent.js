import React from "react";

function MemeGenComponent(props) {
    return (
        <div className="todo" style={{ textAlign: "center" }}>
            <form onSubmit={props.handleClick} style={{ padding: "1% 1% 2% 1%"}}>
                <label>Top text:<input
                name="top"
                type="text"
                value={props.top}
                onChange={props.handleChange} /></label>
                <br/>
                <label>Bottom text:<input
                name="bottom"
                type="text"
                value={props.bottom}
                onChange={props.handleChange} /></label>
                <br/>
                <button type="submit">Generate new pic</button>
            </form>
            <div style={{ position: "relative", width: "90%", margin: "auto", border: "1px dotted lightgray" }}>
                <h2>{props.top}</h2>
                <img
                src={props.image}
                alt=""
                style={{ textAlign: "center",
                width: "50%" }}/>
                <h2>{props.bottom}</h2>
            </div>
        </div>
    )
}

export default MemeGenComponent;