import { useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUser() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      if (response.ok) {
        setData(json);
      } else {
        setError(new Error());
        setData({});
      }
    } catch (error) {
      setError(error);
      setData({});
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, fetchGithubUser };
}
