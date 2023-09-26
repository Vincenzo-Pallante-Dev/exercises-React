import { useEffect, useRef } from "react";

export function CarDetails({ initialData }) {
  const detailsRef = useRef(null);

  useEffect(() => {
    if (initialData) {
      detailsRef.current.model.value = initialData.model;
      detailsRef.current.year.value = initialData.year;
      detailsRef.current.color.value = initialData.color;
    }
  }, [initialData]);

  function handleSubmit(event) {
    event.preventDefault();
    let formData = {
      model: detailsRef.current.model.value,
      year: detailsRef.current.year.value,
      color: detailsRef.current.color.value,
    };
    console.log(formData);

    if (initialData) {
      detailsRef.current.model.value = initialData.model;
      detailsRef.current.year.value = initialData.year;
      detailsRef.current.color.value = initialData.color;
    }
  }
  return (
    <div>
      <h1>Dettagli dell'auto</h1>
      <form onSubmit={handleSubmit} ref={detailsRef}>
        <div>
          <label htmlFor="model">Modello:</label>
          <input name="model" />
        </div>
        <div>
          <label htmlFor="year">Anno:</label>
          <input name="year" />
        </div>
        <div>
          <label htmlFor="color">Colore:</label>
          <input name="color" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
