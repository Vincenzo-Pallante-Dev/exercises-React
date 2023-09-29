import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function ShowGithubUser({
  initialNames = ["Marco", "Giovanni", "Luca"],
}) {
  const [usernames, SetUsernames] = useState(initialNames);

  function handleAddName(event) {
    const input = event.target.parentElement.querySelector("[name='listName']");
    const value = input.value;

    if (value) {
      const newUsernames = [...usernames, value];
      SetUsernames(newUsernames);
      input.value = "";
    }
  }

  return (
    <div>
      <hr />
      <Outlet />
      <hr />
      <ul>
        {usernames.map((username, index) => (
          <li key={username + index}>
            <Link to={`/users/${username}`}>Link of: {username}</Link>
          </li>
        ))}
      </ul>
      <input name="listName" type="text" />
      <button onClick={handleAddName}>Add name</button>
    </div>
  );
}
