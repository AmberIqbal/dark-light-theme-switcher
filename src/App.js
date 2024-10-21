import logo from "./logo.svg";
import "./App.css";
import UserContext from "./userContext";
import React, { createContext, useState } from "react";

export const MyContext = createContext("dark");
function App() {
  const [theme, setTheme] = useState("light");
  function handleChange() {
    setTheme((preValue) => (preValue === "light" ? "dark" : "light"));
  }
  return (
    <>
      <MyContext.Provider value={{ theme, setTheme }}>
        <UserContext handleChange={handleChange} />
      </MyContext.Provider>
    </>
  );
}

export default App;
