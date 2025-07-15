import { useState } from "react";
import axios from "axios";
import "./form.css";

const Loginform = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://springboot-ems-backend-1.onrender.com/api/auth/login", {
        username: userName,
        password: password,
      });
      console.log("Token:", res.data.token);
      alert("Login Successful");
    } catch (e) {
      console.error("Login Error", e);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Loginform;
