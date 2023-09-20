import { useEffect, useState } from "react";

export function Counter({ initValue = 0 }) {
  const [count, setCount] = useState(initValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
      console.log(count);
    }, 1000);

    return () => {
      clearInterval(interval, 5000);
    };
  }, []);

  useEffect(() => {
    if (count === 6) {
      setCount(initValue);
    }
  }, [count]);

  return <h1>Count: {count}</h1>;
}
