import { Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./components/ShowGithubUser";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
