import React, { useState, useEffect } from 'react';
import "./style.css";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fonction pour obtenir la liste des utilisateurs
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Appeler la fonction pour récupérer les utilisateurs
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {listOfUsers.map(user => (
          <div className="col-md-4 mb-3" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Username: {user.username}</p>
                <p className="card-text">Email: {user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
