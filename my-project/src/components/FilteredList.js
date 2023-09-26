import React, { useMemo } from "react";

export function FilteredList({ items }) {
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.età > 18);
  }, [items]);

  return (
    <div>
      <h2>Età maggiore di 18:</h2>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            Nome: {item.nome}, Età: {item.età}
          </li>
        ))}
      </ul>
    </div>
  );
}
