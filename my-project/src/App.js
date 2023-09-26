import { CarDetails } from "./components/CarDetails";

const initialData = {
  model: "Clio",
  year: "2000",
  color: "Green",
};

export function App() {
  return <CarDetails initialData={initialData} />;
}
