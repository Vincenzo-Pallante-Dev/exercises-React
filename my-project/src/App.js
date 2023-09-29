import { Link, Route, Routes } from "react-router-dom";
import { Links } from "./components/Links";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="links" element={<Links />} />
        <Route path="*" element={<div>
          <p>Not found</p>
          <Link to="links">Go page link</Link>
        </div>}/>
      </Routes>
    </div>
  );
}
