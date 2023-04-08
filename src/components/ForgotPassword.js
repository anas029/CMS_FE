import React, { useState } from 'react';
import {auth} from '../firebase';
import {
    sendPasswordResetEmail
} from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage(`A password reset email has been sent to ${email}.`);
        setError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
        setError(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <h1 className="mb-4">Forgot Password</h1>
      {message && (
        <div className={`alert ${error ? 'alert-danger' : 'alert-success'}`}>{message}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="mb-2">Email Address</label>
          <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit" className="btn btn-primary">
            {isLoading ? ( // Conditionally render the loading indicator
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              'Send Password Reset Email'
            )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;