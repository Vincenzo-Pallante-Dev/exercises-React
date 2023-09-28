import { Link } from "react-router-dom";

export function Links() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/1">Link 1</Link>
        </li>
        <li>
          <Link to="/2">Link 2</Link>
        </li>
        <li>
          <Link to="/3">Link 3</Link>
        </li>
      </ul>
    </div>
  );
}
