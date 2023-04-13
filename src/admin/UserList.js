import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditUserForm from './EditUserForm';
import CreateUserForm from './CreateUserForm';
import { Spinner, Alert } from 'react-bootstrap';

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    refreshUsers();
  }, []);

  function refreshUsers() {
    setLoading(true);
    axios.get('/user')
      .then(response => {
        setUsers(response.data.users);
        setError(null);
      })
      .catch(error => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditForm(true);
  };

  const handleEditFormClose = () => {
    setShowEditForm(false);
  };

  const handleDelete = (id) => {
    setLoading(true);
    axios.delete('/user/delete', { data: { id } })
      .then(response => {
        console.log(response);
        setSuccessMessage("User deleted successfully.");
        setError(null);
        refreshUsers();
      })
      .catch(error => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCreate = () => {
    setShowCreateForm(true);
  };

  const handleCreateFormClose = () => {
    setShowCreateForm(false);
  };

  return (
    <div className="container-fluid" style={{ paddingTop: "50px" }}>
      <div className="container py-4">
        {showEditForm && <EditUserForm user={selectedUser} onClose={handleEditFormClose} refreshUsers={refreshUsers} />}
        {showCreateForm && <CreateUserForm onClose={handleCreateFormClose} refreshUsers={refreshUsers} />}
        <h1>User List <span className="text-muted fs-6">({users.length})</span></h1>
        <button className="btn btn-success mb-3" onClick={handleCreate}>
          <i className="fas fa-plus"></i>{' '}
          Create User
        </button>{' '}
        {loading && <Spinner animation="border" variant="primary" />}
        {error && <Alert variant="danger">{error.message}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>} {/* Conditionally render the success message */}
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Provider</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Type</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.id}</td>
                <td>{user.firebaseUser.providerData[0].providerId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.type}</td>
                <td>{user.firebaseUser.email}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleEdit(user)}>
                    <i className="fas fa-edit"></i>{' '}
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
                    <i className="fas fa-trash-alt"></i>{' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;