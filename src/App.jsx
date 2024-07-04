import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./celebrities.json"

const App = () => {
  const [users, setUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setUsers(data);
  }, []);

  const calculateAge = (dob) => {
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleEdit = (index) => {
    if (users[index].age < 18) {
      alert('User must be an adult to edit');
      return;
    }
    setEditIndex(index);
    setEditUser(users[index]);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editUser;
    setUsers(updatedUsers);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditUser({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (index) => {
    if (window.confirm('Do you really want to delete this user?')) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.first} ${user.last}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="user-list">
        {filteredUsers.map((user, index) => (
          <div
            key={user.id}
            className={`user-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="user-header">
              <img src={user.picture} alt={`${user.first} ${user.last}`} />
              <div>
                <h2>{`${user.first} ${user.last}`}</h2>
                <p>{user.email}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Country: {user.country}</p>
              </div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="user-details">
                {editIndex === index ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      name="first"
                      value={editUser.first}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="last"
                      value={editUser.last}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={editUser.email}
                      onChange={handleChange}
                      required
                    />
                    <select
                      name="gender"
                      value={editUser.gender}
                      onChange={handleChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transgender">Transgender</option>
                      <option value="Rather not say">Rather not say</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      type="text"
                      name="country"
                      value={editUser.country}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="description"
                      value={editUser.description}
                      onChange={handleChange}
                      required
                    />
                    <button
                      onClick={handleSave}
                      disabled={
                        !editUser.first ||
                        !editUser.last ||
                        !editUser.email ||
                        !editUser.country ||
                        !editUser.description
                      }
                    >
                      Save
                    </button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <p>{user.description}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
