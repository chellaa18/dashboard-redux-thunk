import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  // useEffect(() => {

  //   const storedData = JSON.parse(localStorage.getItem("userData")) || [];
  //   setUsers(storedData);
  // }, [setUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //getting all input values into object
    const userData = {
      username,
      email,
      password,
    };

    const storedData = JSON.parse(localStorage.getItem("userData")) || [];

    storedData.push(userData);

    //pushing data to local storage
    localStorage.setItem("userData", JSON.stringify(storedData));
    alert(`Hi ${username} , Form is Submitted`);

    setUsername("");
    setEmail("");
    setPassword("");

    setUsers(storedData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //delete functionality
  const handleDelete = (index) => {
    const updatedUsers = [...users];

    updatedUsers.splice(index, 1);

    setUsers(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-5">
            <form
              className="p-5 rounded"
              onSubmit={handleSubmit}
              style={{ backgroundColor: "rgba(255, 0, 174, 0.12" }}
            >
              <h4 style={{ color: "#d51c9a" }}>Register Form</h4>
              <div className="form-outline mb-4">
                <label
                  className="form-label text-white"
                  htmlFor="form2Example2"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="form1Example"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="User Name"
                  autoFocus
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label
                  className="form-label text-white"
                  htmlFor="form2Example2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="form1Example1"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <label
                  className="form-label text-white"
                  htmlFor="form2Example2"
                >
                  Password:
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="form1Example2"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash-fill"></i>
                    ) : (
                      <i className="bi bi-eye-fill"></i>
                    )}
                  </button>
                </div>
              </div>
              <button type="submit" className="form-btn btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        {users.length > 0 && (
          <div className="row d-flex justify-content-center align-items-center text-white mt-4">
            <h2 style={{ color: "#d51c9a" }}>User Details</h2>
            <ul>
              {users.map((user, index) => {
                return (
                  <div class="card">
                    <div class="card-body">
                      <h4> UserName:{user.username}</h4>
                      <strong>Email:</strong> {user.email}
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-danger m-3"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
