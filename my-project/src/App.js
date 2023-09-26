import { FilteredList } from "./components/FilteredList";

const items = [
  { id: 1, nome: "Vincenzo", età: "28" },
  { id: 2, nome: "Antonio", età: "10" },
  { id: 3, nome: "Alessandro", età: "28" },
  { id: 3, nome: "Gianmarco", età: "17" },
];

export function App() {
  return <FilteredList items={items} />;
}
