import React, { Component } from "react";

import FormComponent from "./FormComponent.js";

class FormContainer extends Component {
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
                <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
                />
        )
    }
}

export default FormContainer;