import './style.css';
import React, { useState } from 'react';

export const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [passwordValidation, setPasswordValidation] = useState('');

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const blurHandle = () => {
    const trimmedUsername = user.username.trim();
    const trimmedEmail = user.email.replace(/\s/g, '');

    if (trimmedUsername === '' && trimmedEmail.includes('@')) {
      const emailValid = trimmedEmail.split('@');
      setUser({ ...user, username: emailValid[0] });
    }
  };
  const validatePassword = () => {
    if (user.password === '' || user.passwordConfirm === '') {
      const validationMessage = 'Hesla nesmí být prázdná';
      setPasswordValidation(validationMessage);
      console.log(validationMessage);
    } else if (user.password !== user.passwordConfirm) {
      const validationMessage = 'Hesla se neshodují';
      setPasswordValidation(validationMessage);
      console.log(validationMessage);
    } else {
      setPasswordValidation('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();

    if (passwordValidation === '') {
      console.log('Stavový objekt:', user);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          onBlur={blurHandle}
          placeholder="Email Address"
        ></input>
        <input
          id="username"
          type="text"
          name="username"
          value={user.username}
          onBlur={blurHandle}
          onChange={handleChange}
          placeholder="User Name"
        ></input>
        <input
          id="password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        ></input>
        <input
          id="confirmPassword"
          type="password"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={handleChange}
          placeholder="Confirm Password"
        ></input>
        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};
