import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from './useForm'; // Asegúrate de importar el hook personalizado aquí
import './LoginForm.css';

const LoginForm = () => {
  const [values, handleChange, resetForm] = useForm({
    username: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password === 'mod7ReactUSIP') {
      dispatch({
        type: 'SET_CREDENTIALS',
        payload: values,
      });
      setError('');
    } else {
      setError('Password incorrecto');
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    dispatch({ type: 'CLEAR_CREDENTIALS' });
    resetForm();  // Resetear el formulario cuando se confirme el logout
    setShowLogoutModal(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={handleShowPassword}
                className="show-password-button"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button type="submit">Submit</button>
          <a href="#" onClick={handleLogout} className="logout-link">Logout</a>
        </form>
        {error && (
          <div className="error-message">
            {error}
            <button className="close" onClick={() => setError('')}>
              X
            </button>
          </div>
        )}
        {showLogoutModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span>¿Estás seguro de que quieres cerrar sesión?</span>
              <button onClick={handleConfirmLogout}>Presionar para salir!!!</button>
              <button className="close" onClick={() => setShowLogoutModal(false)}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
