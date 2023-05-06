import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>Oups ! Il y a une erreur !</p>
        <span>
          Tu n'as pas de compte ?<br />
          <Link to="/register"> Créer un compte</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
