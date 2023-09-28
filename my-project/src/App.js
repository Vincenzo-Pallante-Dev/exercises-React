import { Route, Routes } from "react-router-dom";
import { Links } from "./components/Links";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Links />} />
      </Routes>
    </div>
  );
}
