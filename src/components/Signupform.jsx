import { useState } from "react";
import axios from "axios";
import "./form.css";

const Signupform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [roleNames, setRoleNames] = useState([]);

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setRoleNames((prev) => [...prev, value]);
    } else {
      setRoleNames((prev) => prev.filter((role) => role !== value));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://springboot-ems-backend-3.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
          userName,
          roleNames,
        }
      );
      console.log("Signup Success", response.data);
      alert("Signup Successful");
    } catch (error) {
      console.error("Signup Failed", error);
      alert("Signup Failed. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="name">Employee Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="userName">Username</label>
        <input id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <fieldset>
          <legend>Select Roles</legend>
          <div className="role-checkbox-group">
            <label className="role-checkbox">
              <input type="checkbox" value="ROLE_ADMIN" onChange={handleRoleChange} />
              Admin
            </label>
            <label className="role-checkbox">
              <input type="checkbox" value="ROLE_USER" onChange={handleRoleChange} />
              User
            </label>
          </div>
        </fieldset>


        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signupform;
