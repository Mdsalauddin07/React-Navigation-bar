import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function Layout() {
    return (
        <>
            <nav className="navbar">
                <h2 className="navbar-logo">MyWebsite</h2>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
