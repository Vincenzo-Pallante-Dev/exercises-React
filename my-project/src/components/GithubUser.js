import React, { useState, useEffect } from "react";

export function GithubUser({ username = "takeo" }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((err) => {
        console.error(err);
      });
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.login}</h1>
      <p>{user.id}</p>
      <p>{user.node_id}</p>
    </div>
  );
}
