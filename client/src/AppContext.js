import React, { Component } from "react";
import axios from "axios";

const coloredAxios = axios.create();

coloredAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }


    signUp = (userInfo) => {
        return axios.post("/auth/signup", userInfo)
        .then(response => {
            const { user, token } = response.data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            this.setState({
                user,
                token
            });
            return response;
        })
    }

    login = (credentials) => {
        return axios.post("/auth/login", credentials)
        .then(response => {
            console.log(response)
            const { token, user } = response.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                user,
                token
            });
            return response;
        })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            user: {},
            token: ""
        })
    }

    render() {
        return (
            <AppContext.Provider
            value={{
                signUp: this.signUp,
                login: this.login,
                logout: this.logout,
                ...this.state
            }} >

                {this.props.children}

            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component 
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )

    }
}