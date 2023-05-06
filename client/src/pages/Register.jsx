import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>Oups ! Il y a une erreur !</p>
        <span>
          Tu as déjà un compte ?<br />
          <Link to="/login"> Se connecter</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
