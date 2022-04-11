import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
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
          <p style={{ color: 'red' }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="form-submit" type="submit" value="login" />
        </form>
        <p>
          New to Ema-John?{' '}
          <Link className="form-link" to="/signup">
            Create an account
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

export default Login;
