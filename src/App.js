import React, { useState, useEffect } from 'react'
import Admin from './admin/Admin'
import Signup from './user/Signup'
import Signin from './user/Signin'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import Website from './website/Website'

export default function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token != null) {
      let user = jwt_decode(token)

      if (user) {
        setIsAuth(true)
        setUser(user)
      }
      else if (!user) {
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }
  }, [])


  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
      .then(res => {
        console.log(res.data.token)
        // Save the token into Local Storage
        let token = res.data.token
        if (token != null) {
          localStorage.setItem("token", token)
          let user = jwt_decode(token);
          setIsAuth(true)
          setUser(user)
        }
      })
      .catch(err => {
        console.log(err)
        setIsAuth(false)
      })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }

  return (
    <div>
      <Router>
        <div>
          <nav>
            <div>
              <Link to="/">Home</Link> &nbsp;
              <Link to="/signup">Signup</Link> &nbsp;
              <Link to="/signin">Signin</Link> &nbsp;
              <Link to="/logout" onClick={onLogoutHandler}>Logout</Link>  &nbsp;
              <Link to="/admin">Admin</Link>  &nbsp;
              <Link to="/website/WebDevGuru">Website</Link>
              {/* <a href="" target="_blank" rel="noopener noreferrer">website</a> */}
            </div>
          </nav>
        </div>

        <div>
          <Routes>

            <Route path="/" element={
              isAuth ?
                <Admin />
                :
                <Signin login={loginHandler}></Signin>}>
            </Route>

            <Route path="/signup" element={<Signup register={registerHandler} />}></Route>

            <Route path="/signin" element={
              isAuth ?
                <Admin />
                :
                <Signin login={loginHandler}></Signin>}>
            </Route>
            <Route path='/admin' element={<Admin />} />
            <Route path="/website/:websiteDomain" element={<Website />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
