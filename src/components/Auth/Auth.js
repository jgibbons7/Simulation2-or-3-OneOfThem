import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {loginUser} from '../../redux/reducer'

class Auth extends Component {
  
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  changeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  register = () => {
    const {username, password} = this.state
    axios.post('/api/auth/register', {username, password})
    .then( res => {
      this.props.loginUser(res.data)
      this.props.history.push('/dashboard')
    })
    .catch(err => {
      alert(err.response.data)
    })
  }

  login = () => {
    const {username, password} = this.state
    axios.post('/api/auth/login', {username, password})
    .then( res => {
      this.props.loginUser(res.data)
      this.props.history.push('/dashboard')
    })
    .catch(err => alert(err.response.data))
  }

  render() {
    const {username, password} = this.state
    console.log(this.state)
    return (
      <div>This is Auth
        <input 
          placeholder='username' 
          type='text'
          name='username' 
          value={username}
          onChange={e => this.changeHandler(e)}/>
        <input 
          placeholder='password'
          type='password'
          value={password}
          name='password'
          onChange={e => this.changeHandler(e)}/>
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.register()}>Register</button>
      </div>
    )
  }
}
// const mapStateToProps = reduxState => reduxState
export default connect(null, {loginUser})(Auth)