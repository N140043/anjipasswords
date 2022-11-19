import './index.css'
import {v4 as uuid} from 'uuid'
import {Component} from 'react'

import PasswordItem from '../PasswordItem'

const initialPasswords = [
  {
    id: uuid(),
    website: 'Email',
    username: 'Anji@Thanu',
    password: 'PottiMissYou',
  },
  {
    id: uuid(),
    website: 'LinkedIn',
    username: 'Anji_me',
    password: 'anji143$2i',
  },
  {
    id: uuid(),
    website: 'Facbook',
    username: 'anji_143',
    password: 'anji143@fb',
  },
  {
    id: uuid(),
    website: 'GitHub',
    username: 'N140043',
    password: 'anji@potti',
  },
]
class PasswordManager extends Component {
  state = {
    passwordsList: initialPasswords,
    showPasswords: false,
    website: '',
    username: '',
    password: '',
    search: '',
  }

  passwordsContainer = () => (
    <div className="passwords-container-bottom">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="no-passwords">No Passwords</p>
    </div>
  )

  addPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPass = {
      id: uuid(),
      website,
      username,
      password,
    }
    if (
      website.length !== 0 &&
      username.length !== 0 &&
      password.length !== 0
    ) {
      this.setState(prev => ({
        passwordsList: [...prev.passwordsList, newPass],
        website: '',
        password: '',
        username: '',
      }))
    }
  }

  showPasswordsChange = () => {
    this.setState(prev => ({
      showPasswords: !prev.showPasswords,
    }))
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const updatePasswordsList = passwordsList.filter(each => each.id !== id)
    this.setState({
      passwordsList: updatePasswordsList,
    })
  }

  onChangeSearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    const {
      passwordsList,
      showPasswords,
      website,
      username,
      password,
      search,
    } = this.state
    console.log(search)
    const updatedPasswordsList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="top-container">
          <div className="img-container-sm">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image-smaller"
            />
          </div>
          <form className="form-container" onSubmit={this.addPassword}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          )
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image-large"
          />
        </div>
        <div className="bottom-container">
          <div className="header-section">
            <h1 className="password-heading">
              Your Passwords
              <p className="password-count">{passwordsList.length}</p>
            </h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.onChangeSearch}
                value={search}
              />
            </div>
          </div>
          <div className="show-password-container">
            <div className="show-pass-box">
              <input
                type="checkbox"
                id="show-password"
                onChange={this.showPasswordsChange}
              />
              <label htmlFor="show-password" className="show-password-para">
                Show Passwords
              </label>
            </div>
          </div>
          {updatedPasswordsList.length === 0 ? (
            this.passwordsContainer()
          ) : (
            <ul className="passwords-saved-container">
              {updatedPasswordsList.map(each => (
                <PasswordItem
                  passwordDetails={each}
                  key={each.id}
                  showPasswords={showPasswords}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
