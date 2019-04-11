import React, { Component } from "react";
import { withContext } from "../AppContext";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState ({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
        .then(() => this.props.history.push("/colored"))
        .catch(err => {
            this.setState({errorMessage: err.response.data.message})
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="formContainer">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h3 className="title">SIGN UP</h3>
                    <input className="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username" />
                    <input className="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password" />
                    <div className="btnContainer">
                        <button className="btn" type="submit">SIGN UP</button>
                    </div>
                </form>
                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }
            </div>
        )
    }
}

export default withContext(Signup);