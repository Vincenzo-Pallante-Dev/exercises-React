import { useState } from "react";

export function useForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setData((data) => {
      console.log(data);
      return {
        ...data,
        [name]: value,
      };
    });
  }
  return {
    data: data,
    inputChange: handleInputChange,
  };
}
