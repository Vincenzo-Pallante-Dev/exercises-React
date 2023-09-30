import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
  );

  function handleRefreshUser() {
    mutate();
  }

  return {
    data,
    error,
    isLoading: !data && !error,
    onRefresh: handleRefreshUser,
  };
}
