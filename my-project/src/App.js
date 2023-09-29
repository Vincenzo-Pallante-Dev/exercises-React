import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./components/ShowGithubUser";


export function App() {
  return (
    <div>
      <Link to="/users">Go ShowGithubUser Component</Link>
      <hr/>
      <Link to="/">Go Home</Link>
      <Routes>
        <Route path="/users" element={<ShowGithubUser />} >
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
        </Route>
      </Routes>
    </div>
  );
}

