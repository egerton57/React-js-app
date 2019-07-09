import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import '../App.css';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            email: '',
            password: '',
            password2: '',
            errorMessage: '',
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    clear = () => {
        this.setState({
            fullName: '',
            email: '',
            password: '',
            password2: '',
            errorMessage: '',
        })
    }

    doSubmit = (e) => {
        e.preventDefault();


        //Form Validation
        if (this.state.fullName === '' || this.state.email === '' || this.state.password === '') {
            this.setState({
                errorMessage: "All fields must be filled"
            });

        } else if (this.state.password !== this.state.password2) {
            this.setState({
                errorMessage: "Password does not matched"
            });
        } else {

            Swal.fire({
                type: 'success',
                title: 'Welcome ' + (this.state.fullName),
                text: 'Registered Successfully ',
            });

            this.clear();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="login-BG">
                    <h2>REGISTER</h2>
                    <br />

                    <div>
                        {this.state.errorMessage}
                    </div>

                    <form onSubmit={this.doSubmit}>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                name="fullName"
                                placeholder="Fullname"
                                onChange={this.handleChange}
                                value={this.state.fullName} />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="E-Mail"
                                onChange={this.handleChange}
                                value={this.state.email} />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.state.password} />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="password2"
                                name="password2"
                                placeholder="Confirm Password"
                                onChange={this.handleChange}
                                value={this.state.password2} />
                        </div>

                        <button className="btn btn-primary">Sign up</button>

                    </form>

                    <p className="Register">If you already registered, hit&nbsp;
                        <Link to="/">Sign in</Link>
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;