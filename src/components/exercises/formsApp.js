import React, { Component } from "react";

class formsApp extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            diet: "",
        };
    };
    handleChange = (e) => {
        const {name, value, checked, type} = e.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        window.alert(`
        You entered the following data:
        Name: ${this.state.firstName} ${this.state.lastName}
        Age: ${this.state.age}
        Gender: ${this.state.gender}
        Location: ${this.state.location}
        Dietary preferences: ${this.state.diet ? this.state.diet : `none`}`)
    };
    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <h3>Personal info:</h3>
                    <label>First name: <input
                    type="text"
                    name="firstName"
                    required
                    minLength="2"
                    placeholder="Type in your given name"
                    value={this.state.firstName}
                    onChange={this.handleChange}/></label>
                    <br />

                    <label>Last name:<input
                    type="text"
                    name="lastName"
                    required
                    minLength="2"
                    placeholder="Type in your family name"
                    value={this.state.lastName}
                    onChange={this.handleChange}/></label>
                    <br />

                    <label>Age:<input
                    type="text"
                    name="age"
                    required
                    minLength="2"
                    placeholder="Type in your age"
                    onChange={this.handleChange}/></label>
                    <br />

                    <label>
                        <input name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        type="radio"
                        onChange={this.handleChange} />Female
                    </label>
                    <label>
                        <input name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        type="radio"
                        onChange={this.handleChange} />Male
                    </label>
                    <label>
                        <input name="gender"
                        value="nonbinary"
                        checked={this.state.gender === "nonbinary"}
                        type="radio"
                        onChange={this.handleChange} />Non-Binary
                    </label>
                    <br />

                    <h3>My location:</h3>
                    <select value={this.state.location} name="location" onChange={this.handleChange}>
                        <option value="" defaultValue>Choose</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Warsaw">Warsaw</option>
                        <option value="Milan">Milan</option>
                    </select>
                    <br />

                    <h3>Special diet:</h3>
                    <label><input
                    name="diet"
                    type="checkbox"
                    value="required"
                    checked={this.state.diet}
                    onChange={this.handleChange} />Required
                    </label>
                    <label><input
                    name="diet"
                    type="radio"
                    value="vegan"
                    onChange={this.handleChange} />Vegan
                    </label>
                    <label><input
                    name="diet"
                    type="radio"
                    value="kosher"
                    onChange={this.handleChange} />Kosher
                    </label>
                    <label><input
                    name="diet"
                    type="radio"
                    value="halal"
                    onChange={this.handleChange} />Halal
                    </label>
                    <br /><br/>

                    <button type="submit" onClick={this.handleSubmit}>SAVE</button>
                </form>
            </main>
        )
    }
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