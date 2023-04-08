import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import axios from 'axios';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firebaseError, setFirebaseError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    if (!event.target.value) {
      setFirstNameError('First name is required');
    } else {
      setFirstNameError('');
    }
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    if (!event.target.value) {
      setLastNameError('Last name is required');
    } else {
      setLastNameError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!event.target.value) {
      setEmailError('Email address is required');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (!event.target.value) {
      setPasswordError('Password is required');
    } else if (event.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleSignUp = () => {
    if (firstName && lastName && email && password && confirmPassword === password && !passwordError) {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log(response);
          response.user.getIdToken().then((idToken) => {
            const data = {
              idToken,
              firstName,
              lastName,
            };
            axios.post('http://localhost:4000/auth/signup', data).then(async (response) => {
              console.log(response);
              await auth.currentUser.getIdToken(true);
              console.log(auth.currentUser);
              navigate('/profile');
              setIsLoading(false);
            })
              .catch((error) => {
                console.log(error);
                setIsLoading(false);
              });
          });
        })
        .catch((error) => {
          setFirebaseError(error.message);
          setIsLoading(false);
        });
    } else {
      if (!firstName) {
        setFirstNameError('First name is required');
      }
      if (!lastName) {
        setLastNameError('Last name is required');
      }
      if (!email) {
        setEmailError('Email address is required');
      }
      if (!password) {
        setPasswordError('Password is required');
      }
      if (confirmPassword !== password) {
        setPasswordError('Passwords do not match');
      }
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4">Sign Up</h1>
      {firebaseError && (
        <div className="alert alert-danger">
          {firebaseError}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input type="text" className={`form-control ${firstNameError ? 'is-invalid' : ''}`} id="firstName" value={firstName} onChange={handleFirstNameChange} />
        {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input type="text" className={`form-control ${lastNameError ? 'is-invalid' : ''}`} id="lastName" value={lastName} onChange={handleLastNameChange} />
        {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input type="email" className={`form-control ${emailError ? 'is-invalid' : ''}`} id="email" value={email} onChange={handleEmailChange} />
        {emailError && <div className="invalid-feedback">{emailError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className={`form-control ${passwordError ? 'is-invalid' : ''}`} id="password" value={password} onChange={handlePasswordChange} />
        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="confirm-password" className="form-label">
          Confirm Password
        </label>
        <input type="password" className={`form-control ${passwordError ? 'is invalid' : ''}`} id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
      </div>
      <button className="btn btn-primary" onClick={handleSignUp}>
        {isLoading ? ( // Conditionally render the loading indicator
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          'Sign up'
        )}
      </button>
      <div className="mt-3">
        Already have an account? <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};

export default SignUp;