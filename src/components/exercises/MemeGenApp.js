import React from "react";

import MemeGenHeader from "./MemeGenHeader.js";
import MemeGenContainer from "./MemeGenContainer";

function MemeGenApp() {
    return (
        <div className="mainContent">
            <MemeGenHeader />
            <br/>
            <MemeGenContainer />
        </div>
    )
}

export default MemeGenApp;