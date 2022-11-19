import './index.css'

const PasswordItem = props => {
  const {
    passwordDetails: {id, website, password, username},
    showPasswords,
    deletePassword,
  } = props
  const bgColor = `bg-color${Math.ceil(Math.random() * 8)}`
  const deletePass = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <h1 className={`profile ${bgColor}`}>{website[0]}</h1>
      <div>
        <p className="para">{website}</p>
        <p className="para">{username}</p>
        {showPasswords ? (
          <p className="para">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <button type="button" className="delete-button" onClick={deletePass}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
