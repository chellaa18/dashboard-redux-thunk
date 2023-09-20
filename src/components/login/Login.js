import React, { useState } from "react";


const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const addForm = (e) => {
    e.preventDefault()
    alert(`Logging in... ${mail}`)
    setMail('')
    setPassword('')
  
  
  };

  //setting email value
  const addMail = (e) => {
    setMail(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <div className="container">
        {" "}
        <div className="row vh-100 d-flex justify-content-center align-items-center">
          {" "}
          <div className="col-lg-4">
            {" "}
            <form
              onSubmit={addForm}
              className="p-5 rounded"
              style={{ backgroundColor: 'rgba(255, 0, 174, 0.12'}}
            >
              <h4 style={{ color: "#d51c9a" }}>Login Form</h4>
              <div className="form-outline mb-4">
                {" "}
                <label className="form-label text-white" htmlFor="form2Example1">
                  Email address:
                </label>
                <input
                  type="email"
                  id="form2Example1"
                  value={mail}
                  className="form-control"
                  placeholder="Email"
                  onChange={addMail}
                  autoFocus
                  required
                />
              </div>

              <div className="form-outline mb-4">
              <label className="form-label text-white" htmlFor="form2Example2">
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
              <input
                type="submit"
                className="form-btn"
                value={"Submit"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
