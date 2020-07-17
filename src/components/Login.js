import React from 'react';

import '../css/login.scss';

import { checkAlphaNumeric, isFormValid, setCookie, isLoggedIn, checkValidEmail, checkValidPassword } from '../core/util';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      errors: {
        userName: null,
        email: null,
        password: null
      }
    };
  }

  componentDidMount() {
    if (isLoggedIn()) {
      this.props.history.replace('home');
    }
  }

  render() {
    if (isLoggedIn()) {
      return null;
    }

    const { userName, password, email, errors } = this.state;
    const formValid = isFormValid(errors);

    return (
      <div className="login-main">
        <h3 className="login-heading">Login</h3>
        <form onSubmit={this.handleSubmit} className="form login-form">
          <div className="form-element-wrapper">
            <label className="form-label">User Name</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleValidation}
              className={`form-element ${errors.userName ? 'error' : ''}`}
            />
            {errors.userName && (
              <div className="error-message">{errors.userName}</div>
            )}
          </div>
          <div className="form-element-wrapper">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleValidation}
              className={`form-element ${errors.email ? 'error' : ''}`}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          <div className="form-element-wrapper">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleValidation}
              className={`form-element ${errors.password ? 'error' : ''}`}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            disabled={!formValid}
            className={`btn btn-blue login-btn ${formValid ? '' : 'disabled'}`}>Login</button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleFocus = (event) => {
    const name = event.target.name;
    if (this.state.errors[name]) {
      this.setErrorState(name, '');
    }
  }

  handleValidation = (event) => {
    const { name, value } = event.target;
    let errMsg = '';
    switch (name) {
      case 'userName': {
        errMsg = this.validateUserName(value);
        break;
      }
      case 'email': {
        errMsg = this.validateEmail(value);
        break;
      }
      case 'password': {
        errMsg = this.validatePassword(value);
        break;
      }
      default: { }
    }
    this.setErrorState(name, errMsg);
  }

  validateUserName = (value) => {
    let error = '';
    if (value === '') {
      error = 'User Name cannot be blank';
    } else if (value.length < 8) {
      error = 'User Name should be greater then 8 characters'
    } else if (value.length > 50) {
      error = 'User Name should be less than 50 characters'
    } else if (!checkAlphaNumeric(value)) {
      error = 'Username should only contain alphabets and numbers'
    }

    return error;
  }

  validateEmail = (value) => {
    let error = '';
    if (value === '') {
      error = 'Email cannot be blank';
    } else if (!checkValidEmail(value)) {
      error = 'Please enter a valid email id';
      // ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$
    }

    return error;
  }

  validatePassword = (value) => {
    let error = '';
    if (value === '') {
      error = 'Password cannot be blank'
    } else if (value.length < 8) {
      error = 'Password should be greater then 8 characters'
    } else if (value.length > 50) {
      error = 'Password should be less than 50 characters'
    } else if (!checkValidPassword(value)) {
      error = 'Password should contain at least one letter, a special character and a number'
    }

    return error;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // check user credentials not in scope!
    if (!isFormValid()) {
      return;
    }
    const { userName, email, password } = this.state;
    localStorage.setItem('isLoggedIn', true);
    setCookie('USER_NAME', userName, 1);
    setCookie('EMAIL', email, 1);
    setCookie('PASSWORD', password, 1);
    this.props.history.replace('home');
  }

  setErrorState = (name, errMsg) => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        [name]: errMsg
      }
    }));
  }
}

export default Login;
