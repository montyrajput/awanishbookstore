import {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import './index.css'

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    mobile: '',
  })

  const history = useHistory()

  const handleChange = event => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = formData

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    console.log('Stored username:', username)
    console.log('Stored password:', password)

    history.push('/')
  }

  return (
    <>
      <div className="sing-up-main-container">
        <form onSubmit={handleSubmit} className="sign-up-form-text">
          <h2 className="sign-up-heading">CREATE AN ACCOUNT</h2>
          <label htmlFor="name" className="sing-up-label">
            Name <span className="sign-up-star">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="sign-up-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <label htmlFor="username" className="sing-up-label">
            UserName <span className="sign-up-star">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="sign-up-input"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <label htmlFor="email" className="sing-up-label">
            Email <span className="sign-up-star">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="sign-up-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <label htmlFor="password" className="sing-up-label">
            Password <span className="sign-up-star">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="sign-up-input"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <label htmlFor="mobile" className="sing-up-label">
            Mobile No <span className="sign-up-star">*</span>
          </label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            className="sign-up-input"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile No"
            required
          />

          <button type="submit" className="sign-up-button">
            Signup
          </button>
          <p className="sign-up-footer-paragraph">
            Already have an account?{' '}
            <Link to="/Signin" className="sing-up-link-lelement">
              SingIn
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default SignUp
