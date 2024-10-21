import React, { useContext } from "react";
import { MyContext } from "./App";

function UserContext(props) {
  const { theme } = useContext(MyContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh", // Stretch the container to see the full background change
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={props.handleChange}
        style={{
          borderRadius: "10px",
          width: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        {" "}
        Toggle Theme
      </button>
    </div>
  );
}
export default UserContext;
