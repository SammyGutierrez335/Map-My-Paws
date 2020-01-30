import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //our state is tracking the input.

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  //field is interpolated and set as a key and the value is set to what is being typed.

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => { this.props.history.push("/welcome") })
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }


  //onSubmit={handleSubmit} is a convention 
  render() {
    let emailInput
    if (this.props.formType === "signup") {
      emailInput =
        (<label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </label>
        )
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p>Welcome to Map my Paws!</p>
          <br />
          {/* {this.renderErrors()} */}
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            {emailInput}
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;