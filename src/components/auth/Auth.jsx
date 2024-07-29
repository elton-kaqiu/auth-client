import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/features/users/userActions";
import {
  selectUsersError,
  selectUsersLoading,
} from "../../redux/features/users/userSelectors";
import "./Auth.scss";

export const Auth = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectUsersError);
  const loading = useSelector(selectUsersLoading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email, password }));
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
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
    </div>
  );
};
