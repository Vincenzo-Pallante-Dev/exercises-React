import { useState } from "react";

export function LoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // console.log(data);
  }

  function handleSubmit() {
    console.log(data);
  }

  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      ></input>
      <input
        name="password"
        type="passowrd"
        value={data.password}
        onChange={handleInputChange}
      ></input>
      <input
        name="remember"
        type="checkbox"
        value={data.remember}
        onChange={handleInputChange}
      ></input>
      <button
        type="submit"
        disabled={
          data.username === "" ||
          data.password === "" ||
          data.remember === false
            ? true
            : false
        }
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
}
