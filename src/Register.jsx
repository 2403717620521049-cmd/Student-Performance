import { useState } from "react";

function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const registerUser = async () => {

    const response = await fetch(
      "http://localhost:3000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );

    const data = await response.json();

    alert(data.username + " Registered");
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={registerUser}>
        Register
      </button>
    </div>
  );
}

export default Register;
