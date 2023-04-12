import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import SocialLogin from './components/SocialLogin';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';
import axios from 'axios';
import Website from './website/Website'
import WebsiteCreate from './website/WebsiteCreate';
import WebsiteCreateB from './buildWebsite/WebsiteCreate';
import UserList from './admin/UserList';
import Nav from './components/Nav';

function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  



  useEffect(() => {
    auth.onIdTokenChanged((user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          const data = {
            idToken,
          };
          setTimeout(() => {
            axios.post('/auth/user', data).then((response) => {
              const updatedUser = response.data.user;
              setCurrentUser(updatedUser);
              if(updatedUser.type === 'admin'){
                setIsAdmin(true)
              }
            })
              .catch((error) => {
                console.log(error);
              });
          })
        })
      } else {
        setCurrentUser(null);
        setIsAdmin(false);
      }
      console.log('token status changed, user =>', user);
    })
  }, []);

  const signOut = () => {
    auth.signOut()
      .then((response) => {
        axios.get('/auth/signout').then((response) => {
          console.log(response);
          setCurrentUser(null);
        })
          .catch((error) => {
            console.log(error);
          });
      });
  };



  return (
    <Router>
      <Nav currentUser={currentUser} signOut={signOut} isAdmin={isAdmin} />
      <div className="container-fluid" style={{ paddingTop: "50px" }}>
        <div className="container py-4">
          <Routes>
            <Route exact path="/" element={<h1>Welcome to our website!</h1>} />
            <Route path="/login" element={<SocialLogin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile currentUser={currentUser} />} />
            <Route path="/website/:websiteDomain/:path" element={<Website />} />
            <Route path="/website/:websiteDomain/*" element={<Website />} />
            <Route path="/create" element={<WebsiteCreate currentUser={currentUser} />} />
            <Route path="/createb" element={<WebsiteCreateB currentUser={currentUser} />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;