import React from "react";

import navDatabase from "../navDatabase.js";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            navbar: navDatabase,
        };
    };
    render() {
        const navbar = this.state.navbar.map(nav => <div key={nav.id}><a href={`#${nav.id}`}>{nav.name}</a></div>);
        return (
            <nav>{navbar}</nav>
        );
    }
};

export default Navbar;