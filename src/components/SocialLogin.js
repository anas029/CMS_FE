import React, { useState } from 'react';
import { auth } from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firebaseError, setFirebaseError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signInWithProvider = (provider) => {
    setIsLoading(true); // Set isLoading to true when the request is made
    signInWithPopup(auth, provider).then((response) => {
      const user = response.user;
      user.getIdToken().then((idToken) => {
        const names = user.displayName ? user.displayName.split(' ') : ['-', '-'];
        const firstName = names[0];
        const lastName = names[1] ?? '-';
        const avatarURL = user.photoURL;
        const data = {
          idToken,
          firstName,
          lastName,
          avatarURL
        };
        axios.post('http://localhost:4000/auth/signin', data).then(async (response) => {
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
    }).catch((error) => {
      setFirebaseError(error.message);
      setIsLoading(false);
    });
  }

  const signInWithGoogle = () => signInWithProvider(new GoogleAuthProvider());
  const signInWithTwitter = () => signInWithProvider(new TwitterAuthProvider());
  const signInWithGitHub = () => signInWithProvider(new GithubAuthProvider());

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const signInWithEmail = (event) => {
    setIsLoading(true);
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        user.getIdToken().then((idToken) => {
          const names = user.displayName ? user.displayName.split(' ') : ['-', '-'];
          const firstName = names[0];
          const lastName = names[1] ?? '-';
          const avatarURL = user.photoURL;
          const data = {
            idToken,
            firstName,
            lastName,
            avatarURL
          };
          axios.post('http://localhost:4000/auth/signin', data).then(async (response) => {
            console.log(response);
            await auth.currentUser.getIdToken(true);
            console.log("Navigating to profile...");
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
  };

  return (
    <div className="container">
      <div>
        <h1 className="mb-4">Sign In</h1>
        {firebaseError && (
          <div className="alert alert-danger">
            {firebaseError}
          </div>
        )}
        <form>
          <div className="form-group mb-3">
            <label className="mb-2">Email Address</label>
            <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group mb-3">
            <label className="mb-2">Password</label>
            <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={signInWithEmail}>
            {isLoading ? ( // Conditionally render the loading indicator
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              'Sign in'
            )}
          </button>
          <div className="text-left mt-3">
            <p> <Link to="/forgotpassword">Forgot your password?</Link></p>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </form>
        <div className="d-flex justify-content-center align-items-center my-4">
          <hr className="w-100 mx-3" />
          <span className="px-2">or</span>
          <hr className="w-100 mx-3" />
        </div>
        <button className="btn btn-outline-danger btn-lg w-50 mb-3" onClick={signInWithGoogle}>
          <i className="fab fa-google fa-lg mr-2"></i> Sign in with Google
        </button>

        <button className="btn btn-outline-info btn-lg w-50 mb-3" onClick={signInWithTwitter}>
          <i className="fab fa-twitter fa-lg mr-2"></i> Sign in with Twitter
        </button>

        <button className="btn btn-outline-secondary btn-lg w-50 mb-3" onClick={signInWithGitHub}>
          <i className="fab fa-github fa-lg mr-2"></i> Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;