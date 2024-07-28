import React, { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="pass"
        value={pass}
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};

export default Form;
