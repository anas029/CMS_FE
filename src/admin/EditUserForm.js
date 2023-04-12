import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditUserForm({ user, onClose, refreshUsers }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [type, setType] = useState('customer');

  useEffect(() => {
    setFirstName(user.firstName || '');
    setLastName(user.lastName || '');
    setType(user.type || 'customer');
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send PUT request to update user with new details
    axios.put('/user/update', { id: user._id, firstName, lastName, type })
      .then(response => {
        console.log(response);
        refreshUsers();
        onClose();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div>
      <h2>Edit User</h2>
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
          <label htmlFor="type">Type:</label>
          <select className="form-control" id="type" value={type} onChange={(event) => setType(event.target.value)}>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <button type="submit" className="btn btn-primary mr-2">Save</button>{' '}
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;