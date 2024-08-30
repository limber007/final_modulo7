import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const formData = useSelector((state) => state.form.formData);

  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Forms</li>
      </ul>
      <div className="user-info">
        {formData.username && formData.email ? (
          <span>Bienvenido {formData.username}: {formData.email}</span>
        ) : (
          <span>Bienvenido :</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
