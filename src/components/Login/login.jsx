import React from "react";

const login = () => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full Name" />
        <input type="password" placeholder="Password" />
        <p>error message</p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default login;
