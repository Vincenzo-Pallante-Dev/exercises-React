import { useGithubUser } from "./UseGithubUser";

export function GithubUser(username) {
  const { data, error, loading, fetchGithubUser } = useGithubUser(
    (username = "takeo")
  );

  if (error) {
    return <h1>There has been an error</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  function handleGetUserData() {
    fetchGithubUser(username);
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      <h1>Login: {data.login}</h1>
      <p>ID: {data.id}</p>
      <p>Node_id: {data.node_id}</p>
    </div>
  );
}
