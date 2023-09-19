import { useEffect, useState } from "react";

export function ClickCounter({ initialValue = 0 }, onCounterChange) {
  const [count, setCount] = useState(initialValue);

  onCounterChange = useEffect(() => {
    console.log("The current value is: ", { count });
  }, [count]);

  function handleCounterIncrement() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}
