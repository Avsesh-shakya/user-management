import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { name, email, phone, website };

    // Simulating a post request (JSONPlaceholder won't actually save)
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container mt-5">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            className="form-control"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
  
    </div>
  );
};

export default UserForm;
