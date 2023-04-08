import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import axios from 'axios';
import auth from './firebase';

import Website from './website/Website'
import SignUp from './components/SignUp';
import SocialLogin from './components/SocialLogin';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const signOut = () => {
    auth.signOut()
      .then((response) => {
        axios.get('auth/signout').then((response) => {
          console.log(response);
        })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CMS App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {currentUser ? (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={signOut}
                  >
                    Sign Out
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/website/WebDevGuru/index">
                  Website WebDevGuru
                </Link>
                <Link className="nav-link" to="/website/WebDevGuru/about">
                  about
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SocialLogin />} />
          <Route path="/" element={<h1>Welcome to my app!</h1>} />
          <Route path="/website/:websiteDomain/:path" element={<Website />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;