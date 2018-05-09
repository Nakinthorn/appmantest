import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Login.css';
import axios from 'axios'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      errorInfo: "",
      display: "none",
      logo:"Login-logo"
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleLogin(event) {
    event.preventDefault();
    this.setState({ 
      display: "none",
      logo:"Login-logo-process"
    });
    axios.post(`http://localhost:3000/api/login`, {
      email: this.state.email,
      password: this.state.password,
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({ 
            logo:"Login-logo"
          });
          alert("Login Successed");
        }
      })
      .catch(error => {
        console.log(error.response.data.msg)
        this.setState({ 
          errorInfo: error.response.data.msg,
          display: "",
          logo:"Login-logo"
        });
    });
  }
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <div className="centered"> <img src={logo} className={this.state.logo} alt='logo' /></div>
          <form className="login-form">
            <label htmlFor="email">E-mail address</label>
            <input id="email" type="text" placeholder="examplae@appman.co.th" onChange={this.handleEmailChange} />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="your password..." onChange={this.handlePasswordChange} />
            <p className="error" style={{display: this.state.display}}>{this.state.errorInfo}</p>
            <div className="centered"> <button onClick={this.handleLogin}>SIGN IN</button></div>
            <p className="register"><a href="#">Create a new account</a></p>
            <p className="forgot"><a href="#">Forgot password ?</a></p>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
