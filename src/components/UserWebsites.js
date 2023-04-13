import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner, Alert } from 'react-bootstrap';

function UserWebsites({ user, handleEdit }) {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // New state variable for success message
  const navigate = useNavigate();

  useEffect(() => {
    refreshWebsites();
  }, []);

  function refreshWebsites() {
    setLoading(true);
    axios.post('/website/user', { user })
      .then(response => {
        setWebsites(response.data);
        setError(null);
      })
      .catch(error => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }


  const handleDelete = (id) => {
    axios.post('/website/delete', { id })
      .then(response => {
        console.log(response);
        refreshWebsites();
        setSuccessMessage(`Website with ID ${id} has been deleted successfully.`);
      })
      .catch(error => {
        console.error(error);
        setError(error);
      });
  };

  const handleCreate = () => {
    navigate('/create');
  };

  return (

    <div className="container">
      <h1>My Websites <span class="text-muted fs-6">({websites.length})</span></h1>
      <button className="btn btn-success mb-3" onClick={handleCreate}>
        <i className="fas fa-plus"></i>{' '}
        Create Website
      </button>
      {error && <Alert variant="danger">{error.message}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>} {/* Conditionally render the success message */}
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Domain</th>
              <th>Description</th>
              <th>Link</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {websites.map(website => (
              <tr key={website._id}>
                <td>{website.name}</td>
                <td>{website.domain}</td>
                <td>{website.description}</td>
                <td>
                  <Link to={`/website/${website.domain}/`} target="_blank">
                    <i className='fas fa-link'></i>{' '}
                    Link
                  </Link>
                </td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleEdit(website)}>
                    <i className="fas fa-edit"></i>{' '}
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(website._id)}>
                    <i className="fas fa-trash"></i>{' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
}

export default UserWebsites;
