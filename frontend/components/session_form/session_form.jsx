import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    // props = {
    //   errors: 
    //   formType:
    //   processForm:
    // }
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {

    const errorList = this.props.errors.map((err, i) => <li key={`error-${i}`}>err</li>)

    const loginForm = () => (
      <div className="login-form-container">
        <h2>{this.props.formType}</h2>
        {this.props.navLink}
        <ul className="errors">
          {errorList}
        </ul>
      </div>
    );


    return formType === 'signup' ? signupForm() : loginForm();
  }
};

export default SessionForm;