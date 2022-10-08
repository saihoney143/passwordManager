import './index.css'

const PasswordItem = props => {
  const {Details, deletePassword, isChecked} = props
  const {Website, Username, Password, PasswordDup, id} = Details

  const DeletePassword = () => {
    deletePassword(id)
  }

  const Surname = Website.charAt(0).toUpperCase()
  return (
    <li className="list-container">
      <h1 className="list-logo">{Surname}</h1>
      <div className="para-container">
        <p className="para">{Website}</p>
        <p className="para">{Username}</p>
        {isChecked ? (
          <p className="para">{Password}</p>
        ) : (
          <img src={PasswordDup} alt="stars" className="star" />
        )}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={DeletePassword}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default PasswordItem
