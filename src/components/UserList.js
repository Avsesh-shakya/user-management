import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);
 

  const handleDelete = (id) => {
    // Simulate delete action (API does not support real delete)
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>User List</h2>
      <table class="table">
      <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
      </table>
      <ul className="list-group">
    
        {users.map(user => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={user.id }>

         
            <span>
              {user.name}</span>
            <span>{user.email}</span>
            <div>
              <Link className="btn btn-primary btn-sm mr-2 " to={`/user/${user.id}`}>View</Link>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
