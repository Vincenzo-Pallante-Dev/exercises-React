import { useState } from "react";
import { DisplayLanguage } from "./components/DisplayLanguage";
import { LanguageContext } from "./components/LanguageContext";

export function App() {
  const [language, setLanguage] = useState("it");

  function handleChangeLinguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleChangeLinguage}>
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}
