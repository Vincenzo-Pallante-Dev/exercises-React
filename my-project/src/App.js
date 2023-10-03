import { Link, Route, Routes } from "react-router-dom";
import { ClickCounter } from "./components/ClickCounter";

export function App() {
  return (
    <div>
      <Link to="/counter">Go ClickCounter component</Link>
      <Routes>
        <Route path="/counter" element={<ClickCounter />} />
      </Routes>
    </div>
  );
}
