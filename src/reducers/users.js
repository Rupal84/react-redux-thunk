const initialState = {
    users: []
}
const users = (state=initialState, action) => {
   switch (action.type) {
       case 'UPDATE_USERS':
         return {...state, users: action.payload}
       default:
         return state
     }
 }
export default users;