import React from 'react';
import '../Styles/Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
        <button>Click me</button>
        <a href="/something">Home</a>
        <a href="/something">About</a>
        <a href="/something">Profile</a>
        <a href="/something">Contact</a>
    </div>
  )
}

export default Navbar