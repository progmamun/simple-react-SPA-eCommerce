import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate;

  const [createUserWithEmailAndPassword, hookError, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };

  const handleconfirmPasswordBlur = event => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate('/shop');
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleCreateUser = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError(`Your two passwords didn't match`);
    }
    if (password.length < 6) {
      setError('Password must be 6 characters of longer');
      return;
    }

    createUserWithEmailAndPassword(email, password).then(result => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleconfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: 'red' }}>{error || hookError}</p>
          <input className="form-submit" type="submit" value="sign Up" />
        </form>
        <p>
          Already have an account?{' '}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <div className="hr-container">
          <hr className="hr-1" />
          <span>or</span>
          <hr className="hr-2" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
