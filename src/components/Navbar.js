import React from 'react';


const NavBar = () => {
    return (
        <div className="cont">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">User Management</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add">Add User</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;
