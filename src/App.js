import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { UserList } from './UserList';

function App() {

  const [listOFUsers, setlistOFUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      setlistOFUsers(response.data)
    })

    .catch(function (error) {
      setError(error)
    })

  }, [])

  return (
    <div className="App">
      <div className='header'>
        <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/users5.png" alt="users" />
        <h2>The Users are :</h2>
      </div>
      <UserList users={listOFUsers}/>
    </div>
  );
}

export default App;
