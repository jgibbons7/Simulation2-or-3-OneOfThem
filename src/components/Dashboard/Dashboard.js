import React, {Component} from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'



class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      posts: [],
      search: '',
      userposts: true
    }
  }

  getPosts(req, res) {
    const userid = this.props.userId
    Axios.get(`/api/posts/${userid}`)
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
  }
  
  togglePosts() {
    this.setState({...this.state,
      userposts: !this.state.userposts
    })
  }

  changeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {posts, search, userposts} = this.state
    const postMap = this.state.posts.map(element => (
      <div id='postMap' key={element.id}>
        <img className='postPic' src={element.img}/>
        <h2>{element.title}</h2>
        <h3>{element.username}</h3>
        <span>{element.content}</span>
      </div>
    ))
    return (
      <div>This is Dashboard
        <input 
          placeholder='search...'
          type='text'
          value={search}
          name='search'
          onChange={e => this.changeHandler(e)}/>
        <button onClick={() => this.getPosts()}>Search</button>
        <button>Reset</button>
        <input 
          type='checkbox'
          checked={userposts}
          onChange={() => this.togglePosts()}/>
        {postMap}
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState
console.log(mapStateToProps)

export default connect(mapStateToProps)(Dashboard)