import { Link } from "react-router-dom";
import useSWR from "swr";

export function ComuniList() {
  const { data, error } = useSWR(
    `https://comuni-istat-api.belicedigital.com/api/comuni`
  );

  if (error) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(data)) {
    return <p>Data is not an array</p>;
  }

  return (
    <div>
      <Link to="/">Go Home</Link>
      {data.map((d, i) => {
        return <li key={i}>{d}</li>;
      })}
    </div>
  );
}
