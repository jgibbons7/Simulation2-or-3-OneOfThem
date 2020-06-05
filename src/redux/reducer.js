import axios from 'axios'

const initialState = {
  username: '',
  profile_pic: '',
  userid: 0
}

const LOGIN_USER = 'LOGIN_USER'
// const LOGOUT_USER = 'LOGOUT_USER'
// const GET_USER = 'GET_USER'

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}




export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, ...action.payload}

      
    default: 
      return initialState
  }
}

// case LOGOUT_USER:
//   return {...state, ...action.payload}
// case GET_USER + '_PENDING':
//   return state
// case GET_USER + '_FULFILLED':
//   return {...state, ...action.payload}
// case GET_USER + '_REJECTED':
//   return initialState