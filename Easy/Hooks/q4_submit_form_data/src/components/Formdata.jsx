import React, { useState } from "react";

const Formdata = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    age: 0,
  });

  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setList({ ...formData, list: formData});
  }

  return (
    <div>
      <h1>Submit Form Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="username">Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter Your Full Name"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div>
          <label for="fullname">Fullname: </label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            placeholder="Enter Your Fullname"
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
          />
        </div>

        <div>
          <label for="age">Age : </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Enter Your Age"
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>

        <button type="submit" >
          Submit
        </button>
      </form>

      {/* Show Submitted Data */}
      <div>
        <h2>Request Sent to DB with below request Data</h2>
            <p>Username : {list.username}</p>
            <p>Fullname : {list.fullname}</p>
            <p>Age : {list.age}</p>
      </div>
    </div>
  );
};

export default Formdata;
