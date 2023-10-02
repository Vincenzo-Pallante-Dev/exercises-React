import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GithubUser } from "./components/GithubUser";
import { ComuniList } from "./components/ComuniList";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GithubUser />} />
        <Route path="/:user" element={<ComuniList />} />
      </Routes>
      <Link to="/:user">Go Comuni Component</Link>
    </div>
  );
}
