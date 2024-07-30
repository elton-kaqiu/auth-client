import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./components/auth/Auth";
import { UserDetails } from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/user-details/:userId" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
