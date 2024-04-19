import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const SignIn = ({history}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignIn = event => {
    event.preventDefault()

    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')
    console.log('Stored username:', storedUsername)
    console.log('Stored username:', storedPassword)

    if (username === storedUsername && password === storedPassword) {
      history.push('/')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <>
      <div className="signin-main-container">
        <div className="sign-in-image-container-top">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="signin"
            className="sign-image"
          />
          <h1 className="signin-heading">We are The Lotus Team</h1>
        </div>

        <div className="signin-container">
          <p className="sign-paragraph">Please login to your account</p>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="username" className="sign-user-name">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="sign-user-name-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="sign-user-name">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="sign-user-name-input"
              />
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <p className="sign-bottom-paragraph">
            Do not have an account?
            <Link to="/signup"> Sign up</Link>
          </p>
        </div>
        <div className="sign-footer-container">
          <h1 className="sign-footer-heading">
            We are more than just a company
          </h1>
          <p className="sign-footer-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  )
}

export default withRouter(SignIn)
