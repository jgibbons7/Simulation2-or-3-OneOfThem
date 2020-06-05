import React from 'react';
import './App.css';
import routes from './routes'
import {connect} from 'react-redux'
import Nav from './components/Nav/Nav'


function App(props) {
  console.log(props.location)
  return (
    <div className="App">
      {/* conditional render */}
      {/* {props.isLoggedIn ? <Header/> : <AuthHeader/>} */}
      <Nav /> 
      {routes}
    </div>
  );
}
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(App);
