import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Nav extends Component {
  


  render() {
    console.log(this.props)
    return (
      <div>
        <img className='profilePic' alt='' src={this.props.profile_pic}/>
    <p>Username: {this.props.username}</p>
        <Link to='/dashboard'>Home</Link>
        <Link to='/new'>New Post</Link>
        <Link to='/'>Logout</Link>

      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Nav)