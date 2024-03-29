import { useState } from "react";

export function Button() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <button onClick={increment} className="border">
      {count}
    </button>
  );
}
