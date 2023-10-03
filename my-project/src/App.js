import { Link, Route, Routes } from "react-router-dom";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";

export function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Pagina 1</Link>
          </li>
          <li>
            <Link to="/page2">Pagina 2</Link>
          </li>
          <li>
            <Link to="/page3">Pagina 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}
