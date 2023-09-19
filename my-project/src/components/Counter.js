import { useEffect, useState } from "react";

export function Counter({ initValue = 0 }) {
  const [count, setCount] = useState(initValue);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => count + 1);
      console.log(count);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }, []);

  return <h1>Count: {count}</h1>;
}
