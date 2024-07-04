import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const data=[
    {
      "id": 1,
      "first": "Aidan",
      "last": "Wang",
      "dob": "1973-10-16",
      "gender": "male",
      "email": "aidan.wang@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/93.jpg",
      "country": "New Zealand",
      "description": "This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang."
    },
    {
      "id": 2,
      "first": "Anna",
      "last": "Horten",
      "dob": "1972-03-15",
      "gender": "female",
      "email": "anna.horten@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/48.jpg",
      "country": "Norway",
      "description": "This character description generator will generate a fairly random description of a belonging to Anna Horten. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Anna Horten."
    },
    {
      "id": 3,
      "first": "Max",
      "last": "Arnold",
      "dob": "1954-04-22",
      "gender": "male",
      "email": "max.arnold@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/27.jpg",
      "country": "Ireland",
      "description": "This character description generator will generate a fairly random description of a belonging to Max Arnold. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Max Arnold."
    },
    {
      "id": 4,
      "first": "محمدپارسا",
      "last": "صدر",
      "dob": "1953-06-01",
      "gender": "male",
      "email": "mhmdprs.sdr@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/34.jpg",
      "country": "Iran",
      "description": "This character description generator will generate a fairly random description of a belonging to محمدپارسا صدر. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of محمدپارسا صدر."
    },
    {
      "id": 5,
      "first": "Emilia",
      "last": "Gonzalez",
      "dob": "1949-10-07",
      "gender": "female",
      "email": "emilia.gonzalez@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/90.jpg",
      "country": "Spain",
      "description": "This character description generator will generate a fairly random description of a belonging to Emilia Gonzalez. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emilia Gonzalez."
    },
    {
      "id": 6,
      "first": "Alicia",
      "last": "Ma",
      "dob": "1995-11-23",
      "gender": "female",
      "email": "alicia.ma@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/91.jpg",
      "country": "Canada",
      "description": "This character description generator will generate a fairly random description of a belonging to Alicia Ma. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Alicia Ma."
    },
    {
      "id": 7,
      "first": "یاسمن",
      "last": "كامياران",
      "dob": "1985-06-24",
      "gender": "female",
      "email": "ysmn.kmyrn@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/64.jpg",
      "country": "Iran",
      "description": "This character description generator will generate a fairly random description of a belonging to یاسمن كامياران. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of یاسمن كامياران."
    },
    {
      "id": 8,
      "first": "Reingard",
      "last": "Barz",
      "dob": "1985-03-24",
      "gender": "female",
      "email": "reingard.barz@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/95.jpg",
      "country": "Germany",
      "description": "This character description generator will generate a fairly random description of a belonging to Reingard Barz. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Reingard Barz."
    },
    {
      "id": 9,
      "first": "Felix",
      "last": "Douglas",
      "dob": "1984-07-05",
      "gender": "male",
      "email": "felix.douglas@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/53.jpg",
      "country": "United Kingdom",
      "description": "This character description generator will generate a fairly random description of a belonging to Felix Douglas. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Felix Douglas."
    },
    {
      "id": 10,
      "first": "Claire",
      "last": "Robertson",
      "dob": "2006-04-16",
      "gender": "female",
      "email": "claire.robertson@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/75.jpg",
      "country": "United States",
      "description": "This character description generator will generate a fairly random description of a belonging to Claire Robertson. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Claire Robertson."
    },
    {
      "id": 11,
      "first": "Ümit",
      "last": "Taşlı",
      "dob": "2004-10-17",
      "gender": "male",
      "email": "umit.tasli@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/80.jpg",
      "country": "Turkey",
      "description": "This character description generator will generate a fairly random description of a belonging to Ümit Taşlı. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Ümit Taşlı."
    },
    {
      "id": 12,
      "first": "Tiemo",
      "last": "Monshouwer",
      "dob": "1956-09-11",
      "gender": "male",
      "email": "tiemo.monshouwer@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/16.jpg",
      "country": "Netherlands",
      "description": "This character description generator will generate a fairly random description of a belonging to Tiemo Monshouwer. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Tiemo Monshouwer."
    },
    {
      "id": 13,
      "first": "Dorian",
      "last": "Carpentier",
      "dob": "1963-10-06",
      "gender": "male",
      "email": "dorian.carpentier@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/77.jpg",
      "country": "France",
      "description": "This character description generator will generate a fairly random description of a belonging to Dorian Carpentier. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Dorian Carpentier."
    },
    {
      "id": 14,
      "first": "آرمیتا",
      "last": "موسوی",
      "dob": "1968-07-19",
      "gender": "female",
      "email": "armyt.mwswy@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/59.jpg",
      "country": "Iran",
      "description": "This character description generator will generate a fairly random description of a belonging to آرمیتا موسوی. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of آرمیتا موسوی."
    },
    {
      "id": 15,
      "first": "Lias",
      "last": "Korsvik",
      "dob": "1969-12-09",
      "gender": "male",
      "email": "lias.korsvik@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/69.jpg",
      "country": "Norway",
      "description": "This character description generator will generate a fairly random description of a belonging to Lias Korsvik. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Lias Korsvik."
    },
    {
      "id": 16,
      "first": "Florence",
      "last": "Cooper",
      "dob": "1989-08-31",
      "gender": "female",
      "email": "florence.cooper@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/19.jpg",
      "country": "Ireland",
      "description": "This character description generator will generate a fairly random description of a belonging to Florence Cooper. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Florence Cooper."
    },
    {
      "id": 17,
      "first": "Donald",
      "last": "Harrison",
      "dob": "1947-12-20",
      "gender": "male",
      "email": "donald.harrison@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/34.jpg",
      "country": "United Kingdom",
      "description": "This character description generator will generate a fairly random description of a belonging to Donald Harrison. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Donald Harrison."
    },
    {
      "id": 18,
      "first": "Michael",
      "last": "Nichols",
      "dob": "1963-06-26",
      "gender": "male",
      "email": "michael.nichols@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/76.jpg",
      "country": "United Kingdom",
      "description": "This character description generator will generate a fairly random description of a belonging to Michael Nichols. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Michael Nichols."
    },
    {
      "id": 19,
      "first": "Emile",
      "last": "Miller",
      "dob": "2009-02-03",
      "gender": "male",
      "email": "emile.miller@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/24.jpg",
      "country": "Canada",
      "description": "This character description generator will generate a fairly random description of a belonging to Emile Miller. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emile Miller."
    },
    {
      "id": 20,
      "first": "Marjella",
      "last": "Stuijt",
      "dob": "2014-11-11",
      "gender": "female",
      "email": "marjella.stuijt@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/31.jpg",
      "country": "Netherlands",
      "description": "This character description generator will generate a fairly random description of a belonging to Marjella Stuijt. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Marjella Stuijt."
    }
  ]
  ;
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