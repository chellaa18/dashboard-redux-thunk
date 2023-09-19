import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required("Last name is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
  })
  .required();

function Registration() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [users, setUsers] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const userData = {
  //     username,
  //     email,
  //     password,
  //   };

  //   const storedData = JSON.parse(localStorage.getItem("userData")) || [];

  //   storedData.push(userData);

  //   localStorage.setItem("userData", JSON.stringify(storedData));

  //   setUsername("");
  //   setEmail("");
  //   setPassword("");

  //   setUsers(storedData);
  // };

  // const handleDelete = (index) => {
  //   const updatedUsers = [...users];

  //   updatedUsers.splice(index, 1);

  //   setUsers(updatedUsers);
  //   localStorage.setItem("userData", JSON.stringify(updatedUsers));
  // };

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("userData")) || [];
  //   setUsers(storedData);
  // }, [setUsers]);

  //React Hook form

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const notify = () => toast.success('Successfully registerd!')
 
  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("usersData")) || [];
    storedData.push(data);
    localStorage.setItem("usersData", JSON.stringify(storedData));
    notify();
    
    resetField("firstName");
    resetField("lastName");
    resetField("password");
    resetField("confirmPassword");
    resetField("email");
  };

  return (
    <div className="App p-5">
      <div className="container p-5">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-5">
            {/* <form  className="bg-light border border-secondary p-5 rounded" onSubmit={handleSubmit}>
            <h4 style={{ color: "#d51c9a" }}>Register Form</h4>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="User Name"
                  autoFocus
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example1"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
            </form> */}
             <div className="toast-container"><ToastContainer limit={2}/></div>
            <form 
          className="border border-secondary p-5 rounded h-100 mb-5"
              onSubmit={handleSubmit(onSubmit)}
              style={{ backgroundColor: "rgba(255, 0, 174, 0.12" }}
            >
              <h3 style={{ color: "#d51c9a" }}>Reg Form</h3>
              <div className="form-group">
                <label className="text-white">First Name: </label> <br />
                <input className="form-control" {...register("firstName")} />
                <p className="text-danger">{errors.firstName?.message}</p>
              </div>
              <div className="form-group">
                <label className="text-white">Last Name: </label>
                <br />
                <input className="form-control" {...register("lastName")} />
                <p className="text-danger">{errors.lastName?.message}</p>
              </div>
              <div className="form-group">
                <label className="text-white">Email: </label>
                <br />
                <input
                  className="form-control"
                  {...register("email")}
                  name="email"
                  type="email"
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>

              <div className="form-group">
                <label className="text-white">Password: </label>
                <br />

                <input
                  className="form-control"
                  {...register("password")}
                  name="password"
                  type="password"
                />
                <p className="text-danger">{errors.password?.message}</p>
              </div>
              <div className="form-group">
                <label className="text-white">confirmPassword: </label>
                <br />

                <input
                  className="form-control"
                  {...register("confirmPassword")}
                  name="confirmPassword"
                  type="password"
                />
                <p className="text-danger">{errors.confirmPassword?.message}</p>
              </div>
            
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
      {/* <div className="container">
        {users.length > 0 && (
          <div className="row text-white mt-4">
            <h2>User Details</h2>
            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  <strong>Username:</strong> {user.username}
                  <br />
                  <strong>Email:</strong> {user.email}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm ml-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Registration;