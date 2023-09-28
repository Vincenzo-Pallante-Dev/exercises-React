import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./components/ClickCounter";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClickCounter />} />
      </Routes>
    </div>
  );
}
