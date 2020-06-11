import React, { Component } from "react";
import auth from "../utils/auth";
import axios from "axios";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeRoute: false,
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        if (localStorage.checkbox && localStorage.email !== "") {
            this.setState({
                isChecked: true,
                email: localStorage.username,
                password: localStorage.password
            })
        }
    }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeCheckbox = event => {
        this.setState({
            isChecked: event.target.checked
        })
    }

    login() {
        auth.login(() => {
            this.props.history.push("/home");
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, isChecked } = this.state
        if (!isChecked) {
            alert("Please remember me")
        } else if (isChecked && email !== "") {
            localStorage.username = email
            localStorage.password = password
            localStorage.checkbox = isChecked

            var formdata = {
                email, password,
                rememberMe: isChecked
            }

            axios.post("https://sigviewauth.sigmoid.io/signIn", formdata)
                .then((response) => {
                    // console.log("---->",response)
                    sessionStorage.setItem("_t", response.data.token);
                })
                .catch((error) => {
                    // console.log("---error-->", error)
                });

                this.login();
        }
    }
    render() {
        const email = this.state.email || ''
        const password = this.state.password || ''
        const isChecked = this.state.isChecked || ''
        return (
            <div className="f1">

                <form onSubmit={this.handleSubmit} className="f1__form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={this.onChangeValue} />

                    <label htmlFor="pass">Password</label>
                    <input type="password" name="password" value={password} onChange={this.onChangeValue} />

                    <input type="checkbox" checked={isChecked} id="rememberMe" name="lsRememberMe" onChange={this.onChangeCheckbox} />
                    <label htmlFor="rememberMe">Remember me</label>

                    <input type="submit" value="Login" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default Main;
