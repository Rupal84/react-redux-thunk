 const initialState = {
     name: ''
 }
 const personalDetails = (state=initialState, action) => {
     console.log(state, action);
    switch (action.type) {
        case 'UPDATE_NAME':
          return {...state, name: action.payload}
        default:
          return state
      }
  }
 export default personalDetails;