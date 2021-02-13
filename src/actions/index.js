export const fetchPosts = (name)=> {
    return dispatch => {
        console.log('name in thunk', name);
        dispatch({type: 'UPDATE_NAME', payload: name})
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            dispatch({type: 'UPDATE_USERS', payload: json})
        })
    }
    
}