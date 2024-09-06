import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/ ${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>User Details</h2>
      <ul className="list-group">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
      <Link className="btn btn-primary mt-3" to="/">Back</Link>
    </div>
  );
};

export default UserDetail;
