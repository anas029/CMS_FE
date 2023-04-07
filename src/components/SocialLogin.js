import React, { useEffect, useState } from 'react';
import auth from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firebaseError, setFirebaseError] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((response) => {
      response.user.getIdToken().then((idToken) => {
        const data = {
          idToken
        };
        axios.post('auth/signin', data).then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      });

    }).catch((error) => {
      setFirebaseError(error.message);
    });
  };

  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider).then((response) => {
      response.user.getIdToken().then((idToken) => {
        const data = {
          idToken
        };
        axios.post('auth/signin', data).then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      });

    }).catch((error) => {
      setFirebaseError(error.message);
    });
  };

  const signInWithGitHub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider).then((response) => {
      response.user.getIdToken().then((idToken) => {
        const data = {
          idToken
        };
        axios.post('auth/signin', data).then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      });

    }).catch((error) => {
      setFirebaseError(error.message);
    });
  };

  const signOut = () => {
    auth.signOut()
    .then((response) => {
      axios.get('auth/signout').then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      setFirebaseError(error.message);
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user.getIdToken().then((idToken) => {
          const data = {
            idToken
          };
          axios.post('auth/signin', data)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        setFirebaseError(error.message);
      });
  };

  return (
    <div className="container">
      {user ? (
        <div>
          <img referrerPolicy="no-referrer" src={user.photoURL} alt=""/>
          <p>Signed in as {user.displayName}</p>
          <button className="btn btn-danger" onClick={signOut}>
            <i className="fas fa-sign-out-alt"></i> Sign out
          </button>
        </div>
      ) : (
        <div>
          <h1 className="mb-4">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="mb-2">Email Address</label>
              <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2">Password</label>
              <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <div className="text-left mt-3">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
            {firebaseError && (
              <div className="alert alert-danger p-3" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
                  {firebaseError}
              </div>
            )}
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
      )}
    </div>
  );
};

export default SocialLogin;