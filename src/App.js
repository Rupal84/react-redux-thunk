import {useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {fetchPosts} from './actions'

function App(props) {
  const [name, setName] = useState('');
  const handleInputChange = (e) => {
    setName(e.target.value)
  }
  const getUsers = (users) => {
    return users.map((user)=> {
      return <li key={user.id}>{user.name}</li>
    })
  }
  const handleSubmit = () => {
    props.updateName(name)
  }
  return (
    <div className="App">
      <input type="text" value={name} onChange={(e)=> handleInputChange(e)}/>
      <button type="button" onClick={()=> handleSubmit()}>Submit</button>
      <p>{props.name}</p>
      <ul>{getUsers(props.users)}</ul>
    </div>
  );
}

const mapStateToProps = ({personalDetails, users}) => {
  return {
    name: personalDetails.name,
    users: users.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (value)=> dispatch(fetchPosts(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
