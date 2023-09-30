import { useGithubUser } from "./useGithubUser";

export function GithubUser(username) {
  const { data, error } = useGithubUser((username = "takeo"));

  return (
    <div>
      {error && <h3>An error has occured</h3>}
      {data && (
        <div>
          <h1>Login: {data.login}</h1>
          <p>ID: {data.id}</p>
          <p>Node_id: {data.node_id}</p>
        </div>
      )}
    </div>
  );
}
