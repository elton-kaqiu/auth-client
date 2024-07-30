import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userLogin } from "../../redux/features/users/userActions";
import {
  selectUsersError,
  selectUsersLoading,
} from "../../redux/features/users/userSelectors";
import "./Auth.scss";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectUsersError);
  const loading = useSelector(selectUsersLoading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(true); // State to toggle form visibility

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email, password }));
  };

  const handleSubmitLogin = async (e) => {
    try {
      const action = dispatch(userLogin({ email, password }));
      console.log(action);
      if (userLogin.fulfilled.match(action)) {
        console.log(`test test`);
        const id = action.payload.user.id;
        console.log(id);
        navigate(`user-details/${id}`);
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const handleToggle = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="auth-container">
      <button onClick={handleToggle} className="btn btn-primary me-5">
        {showRegister ? "Switch to Login" : "Switch to Register"}
      </button>

      {showRegister ? (
        <form onSubmit={handleSubmitRegister} className="auth-form">
          <h2 className="text-center">Register</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmitLogin} className="auth-form">
          <h2 className="text-center">Login</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}
    </div>
  );
};
