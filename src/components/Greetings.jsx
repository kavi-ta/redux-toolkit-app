import React from "react";
export const Greetings = ({ name }) => {
  return <h1>Hello, {name ? name : "World"}</h1>;
};
