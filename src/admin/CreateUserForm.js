import { uploadFileAndGetURL } from '../firebase';
import React, { useState } from 'react';
import axios from 'axios';

function CreateUserForm({ onClose, refreshUsers }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [type, setType] = useState('customer');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const avatarURL = await uploadFileAndGetURL(avatar, Date.now() + '_' + avatar?.name);
      const response = await axios.post('/user/create', {
        firstName,
        lastName,
        email,
        password,
        avatarURL,
        type,
      });
      console.log('User created:', response.data.user);
      refreshUsers();
      setSuccessMessage('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage('Error creating user. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleImageChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  return (
    <div>
      <h2>Create User</h2>
      {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" className="form-control" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" className="form-control" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="avatar">Avatar:</label>
          <input type="file" className="form-control-file" id="avatar" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="type">Type:</label>
          <select className="form-control" id="type" value={type} onChange={(event) => setType(event.target.value)}>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <button type="submit" className="btn btn-primary mr-2" disabled={isLoading}>
            {isLoading && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>}
            Create
          </button>{' '}
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUserForm;