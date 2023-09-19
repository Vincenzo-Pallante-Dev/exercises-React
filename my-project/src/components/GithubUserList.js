import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList({
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
      <ul>
        {usernames.map((username, index) => (
          <GithubUser key={username + index} username={username} />
        ))}
      </ul>
      <input name="listName" type="text" />
      <button onClick={handleAddName}>Add name</button>
    </div>
  );
}
