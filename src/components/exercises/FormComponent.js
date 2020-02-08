import React from "react";

function FormComponent(props) {
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <h3>Personal info:</h3>
                <label>First name: <input
                type="text"
                name="firstName"
                required
                minLength="2"
                placeholder="Type in your given name"
                value={props.firstName}
                onChange={props.handleChange}/></label>
                <br />

                <label>Last name:<input
                type="text"
                name="lastName"
                required
                minLength="2"
                placeholder="Type in your family name"
                value={props.lastName}
                onChange={props.handleChange}/></label>
                <br />

                <label>Age:<input
                type="text"
                name="age"
                required
                minLength="2"
                placeholder="Type in your age"
                onChange={props.handleChange}/></label>
                <br />

                <label>
                    <input name="gender"
                    value="female"
                    checked={props.gender === "female"}
                    type="radio"
                    onChange={props.handleChange} />Female
                </label>
                <label>
                    <input name="gender"
                    value="male"
                    checked={props.gender === "male"}
                    type="radio"
                    onChange={props.handleChange} />Male
                </label>
                <label>
                    <input name="gender"
                    value="nonbinary"
                    checked={props.gender === "nonbinary"}
                    type="radio"
                    onChange={props.handleChange} />Non-Binary
                </label>
                <br />

                <h3>My location:</h3>
                <select value={props.location} name="location" onChange={props.handleChange}>
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
                checked={props.diet}
                onChange={props.handleChange} />Required
                </label>
                <label><input
                name="diet"
                type="radio"
                value="vegan"
                onChange={props.handleChange} />Vegan
                </label>
                <label><input
                name="diet"
                type="radio"
                value="kosher"
                onChange={props.handleChange} />Kosher
                </label>
                <label><input
                name="diet"
                type="radio"
                value="halal"
                onChange={props.handleChange} />Halal
                </label>
                <br /><br/>

                <button type="submit" onClick={props.handleSubmit}>SAVE</button>
            </form>
        </main>
    )
}

export default FormComponent;