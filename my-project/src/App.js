import React from "react";
import { LanguageContext } from "./components/LanguageContext";
import { DisplayLanguage } from "./components/DisplayLanguage";

export class App extends React.Component {
  state = {
    language: "it",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="it">Italiano</option>
          <option value="en">Inglese</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
