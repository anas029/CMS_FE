import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditUserForm from './EditUserForm';
import CreateUserForm from './CreateUserForm';

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    refereshUsers();
  }, []);

  function refereshUsers(){
    axios.get('/user')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error(error);
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
    // Send DELETE request to delete user with given id
    axios.delete('/user/delete', { data: { id } })
      .then(response => {
        console.log(response);
        refereshUsers();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCreate = () => {
    setShowCreateForm(true);
  };

  const handleCreateFormClose = () => {
    setShowCreateForm(false);
  };

  return (
    <div className="container">
      {showEditForm && <EditUserForm user={selectedUser} onClose={handleEditFormClose} refreshUsers={refereshUsers} />}
      {showCreateForm && <CreateUserForm onClose={handleCreateFormClose} refreshUsers={refereshUsers} />}
      <h1>User List</h1>
      <button className="btn btn-success mb-3" onClick={handleCreate}>
        <i className="fas fa-plus"></i>{' '}
        Create User
      </button>
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
  );
}

export default UserList;