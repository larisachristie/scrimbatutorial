import React from "react";

import FormContainer from "./FormContainer.js";

function formsApp() {
    return (
        <FormContainer />
    )
}

// class formsApp extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             age: "",
//             location: "",
//             isFriendly: true,
//             color: "",
//         };
//     };
//     handleChange = (e) => {
//         const {name, value, type, checked} = e.target;
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     };
//     render() {
//         return(
//             <main>
//                 <form>
//                     <input value={this.state.name} type="text" name="name" placeholder="name" onChange={this.handleChange} />
//                     <input value={this.state.age} type="text" name="age" placeholder="age" onChange={this.handleChange} />
//                     <h3>{this.state.name}, {this.state.age}</h3>
//                     <textarea placeholder="write your thoughts" onChange={this.handleChange} />
//                     <label>
//                         <input
//                         type="checkbox"
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange} />Is friendly?
//                     </label>
//                     <label>
//                         <input
//                         type="radio"
//                         checked={this.state.location === "North"}
//                         onChange={this.handleChange}
//                         name="location"
//                         value="North" />North
//                     </label>
//                     <label>
//                         <input
//                         type="radio"
//                         checked={this.state.location === "South"}
//                         onChange={this.handleChange}
//                         name="location"
//                         value="South" />South
//                     </label>
//                     <br/>
//                     <label>Fave color:</label>
//                     <select
//                     value={this.state.color}
//                     onChange={this.handleChange}
//                     name="color">
//                         <option value="red">Red</option>
//                         <option value="green">Green</option>
//                         <option value="blue">Blue</option>
//                     </select>
//                     <h3>{this.state.color}</h3>
//                     <button>Submit</button>
//                 </form>
//             </main>
//         )
//     }
// }

export default formsApp;