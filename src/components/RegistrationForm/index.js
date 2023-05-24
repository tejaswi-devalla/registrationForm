// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    onSubmitSuccess: false,
    isFirstNameBlur: false,
    isLastNameBlur: false,
    firstName: '',
    lastName: '',
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurInput = () => {
    const {firstName} = this.state
    if (firstName !== '') {
      this.setState({isFirstNameBlur: false})
    } else {
      this.setState({isFirstNameBlur: true})
    }
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurInputLastName = () => {
    const {lastName} = this.state
    if (lastName !== '') {
      this.setState({isLastNameBlur: false})
    } else {
      this.setState({isLastNameBlur: true})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({onSubmitSuccess: true})
    } else {
      this.onBlurInput()
      this.onBlurInputLastName()
    }
  }

  setAnotherResponse = () => {
    this.setState({
      onSubmitSuccess: false,
      isFirstNameBlur: false,
      isLastNameBlur: false,
      firstName: '',
      lastName: '',
    })
  }

  render() {
    const {isFirstNameBlur, isLastNameBlur, onSubmitSuccess} = this.state
    const error = isFirstNameBlur ? 'input-error' : 'input-name'
    const errorLastName = isLastNameBlur ? 'input-error' : 'input-name'
    const firstNameErrorMsg = isFirstNameBlur && 'Required'
    const lastNameErrorMsg = isLastNameBlur && 'Required'
    return (
      <div className="Background-container">
        <h1 className="heading">Registration</h1>
        <form className="Registration-cont" onSubmit={this.onSubmitForm}>
          {onSubmitSuccess ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-icon"
              />
              <p className="submitted-text">Submitted Successfully</p>
              <button
                type="button"
                className="submit-btn"
                onClick={this.setAnotherResponse}
              >
                Submit Another Response
              </button>
            </>
          ) : (
            <>
              {' '}
              <div className="input-cont">
                <label htmlFor="firstName" className="name">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className={error}
                  onChange={this.onChangeFirstName}
                  onBlur={this.onBlurInput}
                />
                <p className="errorMsg">{firstNameErrorMsg}</p>
              </div>
              <div className="input-cont">
                <label htmlFor="lastName" className="name">
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className={errorLastName}
                  onChange={this.onChangeLastName}
                  onBlur={this.onBlurInputLastName}
                />
                <p className="errorMsg">{lastNameErrorMsg}</p>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>{' '}
            </>
          )}
        </form>
      </div>
    )
  }
}
export default RegistrationForm
