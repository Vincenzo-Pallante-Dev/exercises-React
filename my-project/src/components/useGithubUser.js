import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error } = useSWR(
    data !== null && `https://api.github.com/users/${username}`
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}
