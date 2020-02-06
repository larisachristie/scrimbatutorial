import React from "react";

import Navbar from "./components/Navbar.js";
import DateField from "./components/DateField.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    };
    render() {
        return (
            <div className="container">
                <Navbar />
                <DateField />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;