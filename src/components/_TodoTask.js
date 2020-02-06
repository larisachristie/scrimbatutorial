import React from "react";


function TodoTask(props) {
    const checked = {
        textDecoration: "line-through",
    }
    return (
        <form style={props.completed ? checked : null}>
            <input type="checkbox" checked={props.completed} onChange={() => props.handleTick(props.taskID)} />
            <label>{props.text}</label><button type="button" onChange={() => props.deleteItem(props.taskID)}>x</button><br />
        </form>
    );
}

// class TodoTask extends Component {
//     constructor() {
//         super();
//         this.state = {};
//     };
//     render() {
//         return (
//             <form>
//             <input type="checkbox" checked={this.props.completed} onChange={() => this.props.handleTick(this.props.taskID)} />
//             <label>{this.props.text}</label><br />
//         </form>
//         )
//     };
// };

export default TodoTask;