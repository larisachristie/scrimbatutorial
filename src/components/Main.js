import React, { Component } from "react";

import TodoList from "./TodoList.js";
import Contacts from "./Contacts.js";
import Jokes from "./Jokes.js";

class Main extends Component {
    constructor() {
        super();
        this.state = {};
    };
    render() {
        return (
            <main>
                <TodoList />
                <Contacts />
                <Jokes />
            </main>
        )
    }
}

export default Main;