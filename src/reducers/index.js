import { combineReducers } from 'redux'
import personalDetails from './personalDetails'
import users from './users'

export default combineReducers({
  personalDetails,
  users
})