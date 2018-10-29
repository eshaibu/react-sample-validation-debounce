import React, {Component} from 'react';
import debounce from 'lodash.debounce'
import TextField from "./TextField";
import {singleFieldValidation, allFieldsValidation} from "./utils/validation";

const waitTime = 500;

class App extends Component {
  state = {
    formCredentials: {
      fullName: '',
      email: '',
      userNumber: '',
      dob: '',
    },
    formErrors: {}
  };

  onChange = (event) => {
    const {name, value} = event.target;
    const formCredentials = {...this.state.formCredentials, [name] : value};
    // formCredentials[name] = value;
    this.setState({formCredentials});
    this.debounceSingleFieldValidation({name, value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {isValid, errors} = allFieldsValidation(this.state.formCredentials);
    if (!isValid) {
      this.setState({formErrors: errors});
    } else {
      alert('No error, form can now submit....');
      this.setState({formErrors: {}});
    }
  };

  debounceSingleFieldValidation = debounce(({name, value}) => {
    const {formErrors} = this.state;
    const {isValid, errors} = singleFieldValidation({key: name, value});
    if (!isValid) {
      this.setState({formErrors: {...formErrors, [name]: errors[name]}});
    } else {
      this.setState({formErrors: {...formErrors, [name]: null}});
    }
  }, waitTime);

  render() {
    const {formCredentials, formErrors} = this.state;
    const {fullName, email, dob, userNumber} = formCredentials;
    return (
      <div className="vertical-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form className="col-md-8 col-xs-10 mx-auto" noValidate onSubmit={this.handleSubmit}>
                <TextField
                  error={formErrors['fullName']}
                  onChange={this.onChange}
                  value={fullName}
                  name="fullName"
                  title="Full Name"
                />
                <TextField
                  error={formErrors['email']}
                  onChange={this.onChange}
                  value={email}
                  name="email"
                  title="Email"
                />
                <TextField
                  error={formErrors['userNumber']}
                  onChange={this.onChange}
                  value={userNumber}
                  name="userNumber"
                  title="User Number"
                />
                <TextField
                  error={formErrors['dob']}
                  onChange={this.onChange}
                  value={dob}
                  name="dob"
                  placeholder="YYYY-MM-DD"
                  title="Date of Birth"
                />
                <button className="btn btn-primary" type="submit">Submit form</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
