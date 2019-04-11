import React from "react";
import { Link } from "react-router-dom";
import { withContext } from "./AppContext.js";

function Navbar(props) {
    return (
        <nav>
        {
            !props.token ?
                <React.Fragment>
                <div className="linkContainer">
                    <div className="signupLink">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <div className="loginLink"> 
                        <Link to="/login">Login </Link>
                    </div>
                </div>
                </React.Fragment>
            :
                <React.Fragment>
                <div className="logoutBtnContainer">
                    <button className="logoutBtn" onClick={() => props.logout()}>LOGOUT</button>
                </div>
            </React.Fragment>
        }
        </nav>
    )
}

export default withContext(Navbar);