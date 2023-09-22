import { useState } from "react";
import { useEffect } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.error(err);
      });
  }, [username]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return { data };
}
