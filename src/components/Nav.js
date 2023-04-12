import { Link } from 'react-router-dom';
import React from 'react';

export default function Nav (props) {

    const currentUser = props.currentUser;
    const isAdmin = props.isAdmin;

    const signOutHandle = () => {
        props.signOut(currentUser)
    }

  return (

  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
      <img src='/logo.png' height={30} width={30} alt=''></img> CMS App
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
            <>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle d-flex align-items-center" href="/#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <img referrerPolicy='no-referrer' src={currentUser.avatarURL || "/guest.jpeg"} alt="Profile" className="rounded-circle me-2" style={{ width: 24, height: 24, objectFit: 'cover' }} />
                  {currentUser.firstName}
                </a>
                <ul className="dropdown-menu" aria-labelledby="userDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={ signOutHandle }>
                      Sign Out
                    </button>
                  </li>

                </ul>
              </li>
              { isAdmin? ( 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center" href="/#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Admin Portal
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="userDropdown">
                          <li>
                            <Link className="dropdown-item" to="/users">
                              Manage Users
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/websites">
                              Manage Websites
                            </Link>
                          </li>
                        </ul>
                    </li>
                  ): null}
                
            </>
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
        </ul>
      </div>
    </div>
  </nav>
  )
}
