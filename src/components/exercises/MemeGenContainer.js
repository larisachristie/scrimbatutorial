import React, { Component } from "react";
import MemeGenComponent from "./MemeGenComponent.js";

class MemeGenContainer extends Component {
    constructor() {
        super();
        this.state = {
            top: "",
            bottom: "",
            image: "",
            allImages: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data;
            this.setState({ allImages: memes });
        })
    };
    handleChange(e) {
        const {name, value} = e.target;
        this.setState({ [name]: value });
        console.log(name, value);
    };
    handleClick(e) {
        e.preventDefault();
        if (this.state.allImages.length !== 0) {
        const index = Math.round(Math.random() * this.state.allImages.length);
        const pic = this.state.allImages[index].url;
        this.setState({ image: pic });
        }
    };
    render() {
        return (
            <MemeGenComponent
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            {...this.state} />
        )
    }
}

export default MemeGenContainer;