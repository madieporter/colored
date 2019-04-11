import React, { Component } from "react";
import { withContext } from "../AppContext";

class LoginForm extends Component {
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
        this.setState({
            username: "",
            password: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
        .then(() => this.clearInputs())
        .catch(err => {
            this.setState({errorMessage: err.response.data.message})
        })
        .then(() => this.props.history.push("/colored"))
    }

    render() {
        return (
            <div className="formContainer">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h3 className="title">LOGIN</h3>
                    <input className="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username" /><br></br>
                    <input className="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password" /><br></br>
                    <div className="btnContainer">
                        <button className="btn" type="submit">COLOR</button>
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

export default withContext(LoginForm);