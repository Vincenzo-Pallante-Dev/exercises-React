import { useGithubUser } from "./UseGithubUser";

export function GithubUser(username) {
  const { data } = useGithubUser((username = "takeo"));

  return (
    <div>
      <h1>Login: {data.login}</h1>
      <p>ID: {data.id}</p>
      <p>Node_id: {data.node_id}</p>
    </div>
  );
}
