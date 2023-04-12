import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadFileAndGetURL, auth } from '../firebase';
import { 
  updatePassword, 
  reauthenticateWithCredential, 
  EmailAuthProvider,
} from 'firebase/auth';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import Axios from "axios"

function Profile({ currentUser }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    if (!currentUser) {
      //NEED FIXING THIS
      navigate('/');
    }else{
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const avatarURL = await uploadFileAndGetURL(file, 'avatar');
    if(avatarURL){
        const data = {
          id : currentUser.id,
          avatarURL
        };
        Axios.put(`/auth/user/update`, data)
        .then((response) => {
          console.log(response);
          auth.currentUser.reload();
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };

  const handleOpenNameModal = () => {
    setShowNameModal(true);
  };
  
  const handleCloseNameModal = () => {
    setShowNameModal(false);
    setError(false);
    setMessage(false);
    setIsLoading(false);
    setFirstName(currentUser.firstName);
    setLastName(currentUser.lastName);
  };

  const handleSubmitNameChange = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = {
        id: currentUser.id,
        firstName,
        lastName
      };
      await Axios.put(`/auth/user/update`, data);
      setMessage('Name updated successfully!');
      setError(false);
      auth.currentUser.reload();
    } catch (error) {
      console.error(error);
      setMessage('Failed to update name. Please try again.');
      setError(true);
    }
    setIsLoading(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError(false);
    setMessage(false);
    setConfirmPassword('');
    setCurrentPassword('');
    setNewPassword('');
  };

  const handleSubmitPasswordChange = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (newPassword !== confirmPassword) {
      alert('New password and confirmation password do not match.');
      return;
    }
    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      // Reauthenticate the user with the credential
      await reauthenticateWithCredential(user, credential);
      // Update the user's password
      await updatePassword(user, newPassword);
      // Show a success message
      setMessage('Password updated successfully!');
      setError(false)
    } catch (error) {
      console.error(error);
      setMessage('Failed to update password. Please try again.');
      setError(true)
    }
    setIsLoading(false);
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">

              <div className="position-relative d-inline-block">
                <img referrerPolicy='no-referrer' src={currentUser.avatarURL || "/guest.jpeg"} alt="Profile" className="rounded-circle" style={{ width: 100, height: 100, objectFit:'cover' }} />
                <div className="position-absolute bottom-0 end-0 mb-1">
                  <label htmlFor="profileImageInput" className="btn btn-primary rounded-circle position-relative" style={{ width: "2rem", height: "2rem" }}>
                    <i className="fas fa-arrow-up-from-bracket position-absolute top-50 start-50 translate-middle" style={{ fontSize: "1rem" }}></i>
                  </label>
                  <input type="file" id="profileImageInput" accept="image/*" onChange={handleImageChange} className="visually-hidden" hidden />
                </div>
              </div>
              </div>
              <div className="col">
                <h2 className="mb-0">{currentUser.firstName} {currentUser.lastName}</h2>
                <p className="text-muted mb-0">{currentUser.type}</p>
              </div>
              <div className="col-auto mt-2">
              { auth.currentUser.providerData[0].providerId === 'password' ? (
                <>
                <Button variant="primary" onClick={handleOpenModal}>Change Password</Button>
                {' '}
                </>
                
                
              ) : null }
                <Button variant="primary" onClick={handleOpenNameModal}>Change Name</Button>          
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message && (
            <div className={`alert ${error ? 'alert-danger' : 'alert-success'}`}>{message}</div>
          )}
          <Form onSubmit={handleSubmitPasswordChange}>
            <Form.Group controlId="currentPassword" className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" placeholder="Enter current password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} required />
            </Form.Group>
            <Form.Group controlId="newPassword" className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter new password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required />
            </Form.Group>
            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm new password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isLoading ? <Spinner animation="border" size="sm" /> : 'Submit'} 
            </Button>{' '}
            <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showNameModal} onHide={handleCloseNameModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message && (
            <div className={`alert ${error ? 'alert-danger' : 'alert-success'}`}>{message}</div>
          )}
          <Form onSubmit={handleSubmitNameChange}>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
            </Form.Group>
            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isLoading ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>{' '}
            <Button variant="secondary" onClick={handleCloseNameModal}>Cancel</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Profile;