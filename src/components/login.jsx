import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import '../App.css';

class Login extends Component {

    constructor() {

        super();

        this.state = {

            email: '',
            password: ''

        };
    }

    handleChange = (e) => {
        //Prevent Default behavior of Button
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    doSubmit = (e) => {

        //Login validation
        if (this.state.email === "abc@gmail.com" && this.state.password === "123") {
            e.preventDefault();

            Swal.fire({
                type: 'success',
                title: 'Welcome',
                text: 'Login success',
            });

        } else {
            e.preventDefault();

            Swal.fire({
                type: 'error',
                title: 'User not found',
                text: 'Please register',
            });

        }

    }



    render() {
        return (
            <React.Fragment>
                <div className="login-BG">

                    <h2> LOGIN </h2>

                    <img src="user.png" className="User-Avatar img-fluid" alt="User" />

                    <form onSubmit={this.doSubmit}>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control Custom-input"
                                name="email"
                                id="email"
                                placeholder="E-Mail"
                                value={this.state.email}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange} />
                        </div>

                        <button className="btn btn-primary">Login</button>

                    </form>

                    <p className="Register">If you not registered yet, hit&nbsp;
                        <Link to="/register">Register</Link>
                    </p>

                </div>
            </React.Fragment>
        );
    }
}

export default Login;