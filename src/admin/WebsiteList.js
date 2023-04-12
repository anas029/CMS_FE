import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function WebList() {
  const [websites, setWebsites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshWebsites();
  }, []);

  function refreshWebsites(){
    axios.get('/website/all')
      .then(response => {
        setWebsites(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleEdit = (website) => {
  
  };

  const handleDelete = (id) => {
    // Send DELETE request to delete user with given id
    axios.post('/website/delete', {id})
      .then(response => {
        console.log(response);
        refreshWebsites();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCreate = () => {
    navigate('/create');
  };


  return (
    <div className="container">
      <h1>Website List</h1>
      <button className="btn btn-success mb-3" onClick={handleCreate}>
        <i className="fas fa-plus"></i>{' '}
        Create Website
      </button>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Domain</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {websites.map(website => (
            <tr key={website._id}>
              <td>{website.id}</td>
              <td>{website.name}</td>
              <td>{website.domain}</td>
              <td>{website.description}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit()}>
                  <i className="fas fa-edit"></i>{' '}
                  Edit
                </button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(website.id)}>
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

export default WebList;