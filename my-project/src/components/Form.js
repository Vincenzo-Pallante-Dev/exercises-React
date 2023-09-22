import { useForm } from "./UseForm";

export function Form() {
  const { data, inputChange } = useForm({
    username: "",
    password: "",
  });

  return (
    <div>
      <input name="username" onChange={inputChange} value={data.username} />
      <input
        name="password"
        type="password"
        onChange={inputChange}
        value={data.password}
      />
    </div>
  );
}
