import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditUserForm({ user, onClose, refreshUsers }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [type, setType] = useState('customer');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setFirstName(user.firstName || '');
    setLastName(user.lastName || '');
    setType(user.type || 'customer');
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    axios.put('/user/update', { id: user._id, firstName, lastName, type })
      .then(response => {
        console.log(response);
        refreshUsers();
        setSuccessMessage('User updated successfully');
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Error updating user. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div>
      <h2>Edit User</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
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
          <button type="submit" className="btn btn-primary mr-2" disabled={isLoading}>
            {isLoading && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>}
            Save
          </button>{' '}
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;