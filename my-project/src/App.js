import React from "react";
import { Routes, Route } from "react-router-dom";
import { GithubUser } from "./components/GithubUser";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GithubUser />} />
      </Routes>
    </div>
  );
}

// commento prova
// commento prova2
