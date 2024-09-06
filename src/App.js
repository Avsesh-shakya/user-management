import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={UserList} />
        <Route path="/user/:i" Component={UserDetail} />
        <Route path="/add" Component={UserForm} />
      </Routes>
    </Router>
  );
};

export default App;
