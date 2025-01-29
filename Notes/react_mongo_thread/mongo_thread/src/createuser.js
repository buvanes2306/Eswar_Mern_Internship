import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", { name, email, age })
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;