import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { ShowGithubUser } from "./components/ShowGithubUser";

export function App() {
  return (
    <div>
      <Link to="/users">Go ShowGithubUser Component</Link>
      <hr />
      <Link to="/">Go Home</Link>
      <Routes>
        <Route path="/users" element={<ShowGithubUser />}>
          <Route index element={<Outlet />} />
        </Route>
      </Routes>
    </div>
  );
}
