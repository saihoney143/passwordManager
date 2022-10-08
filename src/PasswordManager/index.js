import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    Website: '',
    Username: '',
    Password: '',
    SearchInput: '',
    isChecked: false,
  }

  onWebsiteChange = event => {
    this.setState({Website: event.target.value})
  }

  onUsernameChange = event => {
    this.setState({Username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({Password: event.target.value})
  }

  onSearchChange = event => {
    this.setState({SearchInput: event.target.value})
  }

  onIsChecked = () => {
    const {isChecked} = this.state
    this.setState({isChecked: !isChecked})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {Website, Username, Password} = this.state
    const newPassword = {
      id: v4(),
      Website,
      Username,
      Password,
      PasswordDup:
        'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png',
    }
    this.setState(prevstate => ({
      passwordsList: [...prevstate.passwordsList, newPassword],
      Website: '',
      Username: '',
      Password: '',
    }))
  }

  deletePassword = id => {
    const {passwordsList} = this.state

    const deletedPasswords = passwordsList.filter(x => x.id !== id)

    this.setState({passwordsList: deletedPasswords})
  }

  render() {
    const {
      Website,
      Username,
      Password,
      SearchInput,
      passwordsList,
      isChecked,
    } = this.state

    const SearchResults = passwordsList.filter(x =>
      x.Website.toLowerCase().includes(SearchInput.toLowerCase()),
    )
    const listLength = SearchResults.length
    return (
      <div className="main-container">
        <div className="main-container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="container1">
            <form className="form-container" onSubmit={this.onAddPassword}>
              <h1 className="form-head">Add New Password</h1>
              <div className="input-container">
                <label htmlFor="website" className="labelE">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo"
                  />
                </label>
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="inputE"
                  id="website"
                  value={Website}
                  onChange={this.onWebsiteChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="username" className="labelE">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-logo"
                  />
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="inputE"
                  id="username"
                  value={Username}
                  onChange={this.onUsernameChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password" className="labelE">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-logo"
                  />
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="inputE"
                  id="password"
                  value={Password}
                  onChange={this.onPasswordChange}
                />
              </div>
              <button type="submit" className="buttonE">
                Add
              </button>
            </form>
            <div className="container1b">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="imgE"
              />
            </div>
          </div>
          <div className="container2">
            <div className="container2a">
              <h1 className="head2">Your Passwords</h1>
              <p className="spanE">{listLength}</p>
              <div className="input-container">
                <label htmlFor="search" className="labelE">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="input-logo"
                  />
                </label>
                <input
                  type="search"
                  placeholder="Search"
                  className="inputE"
                  id="search"
                  value={SearchInput}
                  onChange={this.onSearchChange}
                />
              </div>
            </div>
            <hr className="lineE" />
            <div className="input-container2">
              <input
                type="checkbox"
                className="inputE2"
                id="checkbox"
                onClick={this.onIsChecked}
              />
              <label htmlFor="checkbox" className="labelE2">
                Show Passwords
              </label>
            </div>
            <ul className="ul-container">
              {listLength !== 0 ? (
                SearchResults.map(x => (
                  <PasswordItem
                    Details={x}
                    key={x.id}
                    deletePassword={this.deletePassword}
                    isChecked={isChecked}
                  />
                ))
              ) : (
                <div className="nopassword-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="nopassowrd-img"
                  />
                  <p className="para">No Passwords</p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
