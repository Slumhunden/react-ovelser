import HomePage from "../pages/HomePage";
import { Route, Routes, NavLink } from "react-router-dom";
import CreateUserPage from "../pages/CreateUserPage";
import UserDataPage from "../pages/UserDataPage";

export default function App() {
  return (
    <div>
      <nav style={{ display: "inline-flex", gap: "1em" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/createuser">Create User</NavLink>
        <NavLink to="/userdata">User Data</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createuser" element={<CreateUserPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/userdata" element={<UserDataPage />} />
      </Routes>

    </div>
  );
}
