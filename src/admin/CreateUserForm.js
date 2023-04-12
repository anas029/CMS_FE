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

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      onClose();
      // Handle success
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error
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
          <button type="submit" className="btn btn-primary mr-2">Create User</button>{' '}
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUserForm;