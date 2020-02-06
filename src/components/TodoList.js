import React from "react";

import todoDatabase from "../todoDatabase.js";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            tasks: todoDatabase,
        };
    };
    onChange = e => {
        this.setState({
            input: e.target.value,
        })
    };
    addItem = e => {
        e.preventDefault();
        const updatedTasks = [...this.state.tasks];
        if (this.state.input !== "") {
            // Didn't work before because I didn't specify the key 🤦‍♀️
            updatedTasks.push({text: this.state.input});
            this.setState({
                tasks: updatedTasks,
                input: "",
            })
        }
    };
    deleteItem = (index) => {
        const updatedTasks = [...this.state.tasks];
        updatedTasks.splice(index, 1);
        this.setState({
            tasks: updatedTasks
        })
    };
    handleTick = (id) => {
        this.setState(prevState => {
            // MAP
            const updatedTasks = prevState.tasks.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                return task
            })
            // SET STATE
            return {
                todos: updatedTasks
            }
        });
    };
    render() {
        const checked = {
            textDecoration: "line-through",
        };
        const taskItems = this.state.tasks.map((item, index) => {
            return (
                <div key={index} style={item.completed ? checked : null}>
                    <input type="checkbox" checked={item.completed} onChange={() => this.handleTick(item.id)} />
                    <label>{item.text}</label>
                    {/* // Didn't work before because I had onChange instead of onClick 🤦‍♀️🤦‍♀️ */}
                    <button type="button" onClick={() => this.deleteItem(index)}>x</button><br />
                </div>
            )
        });
        return (
            <div className="todo">
                <h2>My to-do list</h2>
                <form className="todo">
                    <input type="text" placeholder="type something in" value={this.state.input} onChange={this.onChange} onSubmit={(e) => e.preventDefault()}/>
                    {/* // Didn't work before because I had onSubmit instead of onClick 🤦‍♀️🤦‍♀️🤦‍♀️ */}
                    <button type="button" onChange={this.onChange} onClick={this.addItem}>+</button>
                    {taskItems}
                </form>
            </div>
        )
    };
};

export default TodoList;